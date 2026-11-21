import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { isShopifyConfigured } from '../lib/shopify';

export function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    items,
    subtotal,
    discountCode,
    discountAmount,
    total,
    orderNote,
    setOrderNote,
    applyDiscount,
    updateQuantity,
    removeFromCart,
    proceedToCheckout,
    checkoutLoading,
    checkoutStatus,
    clearCheckoutStatus,
  } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [promoInput, setPromoInput] = useState('');
  const [promoMsg, setPromoMsg] = useState('');

  if (!isCartOpen) return null;

  const handleCheckout = async () => {
    if (isShopifyConfigured()) {
      await proceedToCheckout();
    } else {
      closeCart();
      navigate('/checkout');
    }
  };

  const handlePromo = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = applyDiscount(promoInput);
    setPromoMsg(ok ? 'AIMEE10 (-10%)' : 'AIMEE10');
  };

  return (
    <>
      <div className="drawer-backdrop" onClick={closeCart} />
      <aside className="drawer-panel drawer-panel--right" aria-label={t.cart.title}>
        <div className="drawer__header">
          <h2 className="drawer__title">{t.cart.title}</h2>
          <button
            type="button"
            className="icon-btn"
            aria-label="Close cart"
            onClick={closeCart}
            style={{ color: '#ffffff' }}
          >
            <X size={22} />
          </button>
        </div>

        <div className="drawer__body">
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: '60px' }}>
              <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>
                {t.cart.empty}
              </p>
              <Link to="/collections/all" onClick={closeCart} className="btn btn--inverse">
                {t.cart.continueShopping}
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {items.map((item) => (
                <div
                  key={item.variantId}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '76px 1fr',
                    gap: '14px',
                    paddingBottom: '18px',
                    borderBottom: '1px solid #262626',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '76px', height: '76px', objectFit: 'cover' }}
                  />
                  <div>
                    <Link
                      to={`/products/${item.handle}`}
                      onClick={closeCart}
                      style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '4px' }}
                    >
                      {item.title}
                    </Link>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginBottom: '10px' }}>
                      {item.variantTitle}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid #363636' }}>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          style={{ background: 'none', border: 'none', color: '#ffffff', padding: '5px 9px', cursor: 'pointer' }}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ padding: '0 8px', fontSize: '12px' }}>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          style={{ background: 'none', border: 'none', color: '#ffffff', padding: '5px 9px', cursor: 'pointer' }}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 500 }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.variantId)}
                          style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.55)', cursor: 'pointer', padding: 0 }}
                          aria-label="Remove item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Promo Code */}
              <form onSubmit={handlePromo} style={{ marginTop: '6px' }}>
                <label
                  htmlFor="cart-promo"
                  style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '6px', color: 'rgba(255,255,255,0.75)' }}
                >
                  {t.cart.discountCode}
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    id="cart-promo"
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="AIMEE10"
                    style={{
                      flex: 1,
                      background: '#111111',
                      border: '1px solid #363636',
                      color: '#ffffff',
                      padding: '8px 12px',
                      fontSize: '12px',
                    }}
                  />
                  <button type="submit" className="btn btn--inverse" style={{ padding: '8px 14px', fontSize: '11px' }}>
                    {t.cart.apply}
                  </button>
                </div>
                {promoMsg && <p style={{ fontSize: '11px', marginTop: '6px', color: '#cccccc' }}>{promoMsg}</p>}
              </form>

              {/* Order Note */}
              <div>
                <label
                  htmlFor="cart-note"
                  style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '6px', color: 'rgba(255,255,255,0.75)' }}
                >
                  {t.cart.orderNote}
                </label>
                <textarea
                  id="cart-note"
                  rows={2}
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder={t.cart.orderNotePlaceholder}
                  style={{
                    width: '100%',
                    background: '#111111',
                    border: '1px solid #363636',
                    color: '#ffffff',
                    padding: '8px 12px',
                    fontSize: '12px',
                    resize: 'vertical',
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="drawer__footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
              <span>{t.cart.subtotal}</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {discountAmount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', color: '#a7f3d0' }}>
                <span>{t.cart.discount} ({discountCode})</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '15px', fontWeight: 600 }}>
              <span>{t.cart.total}</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginBottom: '14px' }}>
              {t.cart.taxesNote}
            </p>

            {checkoutStatus && (
              <div style={{ background: '#161616', border: '1px solid #444', padding: '10px 12px', fontSize: '12px', marginBottom: '12px', lineHeight: 1.5 }}>
                {checkoutStatus}
                <button
                  type="button"
                  onClick={clearCheckoutStatus}
                  style={{ display: 'block', marginTop: '6px', background: 'none', border: 'none', color: '#fff', textDecoration: 'underline', fontSize: '11px', cursor: 'pointer', padding: 0 }}
                >
                  Dismiss
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={handleCheckout}
              disabled={checkoutLoading}
              className="btn btn--full"
              style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff' }}
            >
              {checkoutLoading ? t.cart.connecting : t.cart.checkout}
            </button>

            <Link
              to="/cart"
              onClick={closeCart}
              style={{ display: 'block', textAlign: 'center', marginTop: '10px', fontSize: '12px', textDecoration: 'underline', color: 'rgba(255,255,255,0.8)' }}
            >
              View Cart Page
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
