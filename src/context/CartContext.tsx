import React, { createContext, useContext, useEffect, useState } from 'react';
import { PRODUCTS } from '../data/catalog';
import { createShopifyCheckoutUrl, fetchShopifyProducts, isShopifyConfigured } from '../lib/shopify';
import type { CartItem, Product } from '../types/shop';

interface CartContextValue {
  products: Product[];
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  discountCode: string;
  discountAmount: number;
  total: number;
  orderNote: string;
  setOrderNote: (note: string) => void;
  applyDiscount: (code: string) => boolean;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  addToCart: (item: CartItem) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeFromCart: (variantId: string) => void;
  clearCart: () => void;
  proceedToCheckout: () => Promise<void>;
  checkoutLoading: boolean;
  checkoutStatus: string | null;
  clearCheckoutStatus: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const CART_STORAGE_KEY = 'aimeehaircompany_cart_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [orderNote, setOrderNote] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutStatus, setCheckoutStatus] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  // Automatically sync with live Shopify Storefront API if .env is configured
  useEffect(() => {
    if (!isShopifyConfigured()) return;
    fetchShopifyProducts(50)
      .then((liveProducts) => {
        if (liveProducts.length > 0) {
          setProducts(liveProducts);
        }
      })
      .catch((err) => {
        console.warn('Using local Aimeehaircompany catalog:', err);
      });
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountRate =
    discountCode.toUpperCase() === 'AIMEE10' || discountCode.toUpperCase() === 'WELCOME10'
      ? 0.1
      : 0;
  const discountAmount = Math.round(subtotal * discountRate * 100) / 100;
  const total = Math.max(0, subtotal - discountAmount);

  const applyDiscount = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'AIMEE10' || clean === 'WELCOME10') {
      setDiscountCode(clean);
      return true;
    }
    return false;
  };

  const addToCart = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.variantId === newItem.variantId);
      if (existing) {
        return prev.map((i) =>
          i.variantId === newItem.variantId
            ? { ...i, quantity: i.quantity + newItem.quantity }
            : i
        );
      }
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(variantId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.variantId === variantId ? { ...i, quantity } : i))
    );
  };

  const removeFromCart = (variantId: string) => {
    setItems((prev) => prev.filter((i) => i.variantId !== variantId));
  };

  const clearCart = () => setItems([]);

  const proceedToCheckout = async () => {
    if (items.length === 0) return;
    setCheckoutLoading(true);
    setCheckoutStatus(null);
    try {
      if (isShopifyConfigured()) {
        const url = await createShopifyCheckoutUrl(items, orderNote);
        window.location.href = url;
      } else {
        const res = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items,
            subtotal,
            discountCode,
            discountAmount,
            total,
            orderNote,
          }),
        });
        if (!res.ok) throw new Error('Order creation failed');
        const data = await res.json();
        clearCart();
        setCheckoutStatus(
          `Order ${data.order.orderNumber} confirmed ($${data.order.total.toFixed(2)})! Connect Shopify in .env to process live payments.`
        );
      }
    } catch (err) {
      setCheckoutStatus(
        err instanceof Error ? err.message : 'Unable to initialize checkout.'
      );
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        items,
        itemCount,
        subtotal,
        discountCode,
        discountAmount,
        total,
        orderNote,
        setOrderNote,
        applyDiscount,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        isMobileMenuOpen,
        openMobileMenu: () => setIsMobileMenuOpen(true),
        closeMobileMenu: () => setIsMobileMenuOpen(false),
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        proceedToCheckout,
        checkoutLoading,
        checkoutStatus,
        clearCheckoutStatus: () => setCheckoutStatus(null),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
