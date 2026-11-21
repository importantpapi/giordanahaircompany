import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { isShopifyConfigured } from '../lib/shopify';

export function CartPage() {
  const {
    products,
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
  } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [promoInput, setPromoInput] = useState('');
  const [promoMsg, setPromoMsg] = useState('');
  const remainingForFreeShipping = Math.max(0, 200 - subtotal);

  const popularPicks = products.slice(0, 4);

  const handleCheckout = async () => {
    if (isShopifyConfigured()) {
      await proceedToCheckout();
    } else {
      navigate('/checkout');
    }
  };

  const handlePromo = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = applyDiscount(promoInput);
    setPromoMsg(ok ? 'AIMEE10 (-10%)' : 'Try AIMEE10');
  };

  return (
    <main className="index-section">
      <div className="page-width--narrow">
        <header style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h1>{t.cart.title}</h1>
          <Link to="/collections/all" style={{ fontSize: '13px', textDecoration: 'underline' }}>
            {t.cart.continueShopping}
          </Link>
        </header>

        {items.length === 0 ? (
          <div>
            <div style={{ textAlign: 'center', padding: '24px 0 56px' }}>
              <p style={{ marginBottom: '24px' }}>{t.cart.empty}</p>
            </div>

            <section style={{ borderTop: '1px solid #ededed', paddingTop: '48px' }}>
              <div className="section-header">
                <h2 className="section-header__title">Popular picks</h2>
                <Link to="/collections/all" className="section-header__link">
                  {t.home.viewAll}
                </Link>
              </div>
              <div className="product-grid">
                {popularPicks.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div>
            <div style={{ background: '#f7f7f7', padding: '12px 16px', textAlign: 'center', fontSize: '13px', marginBottom: '24px' }}>
              {remainingForFreeShipping === 0
                ? t.cart.freeShippingUnlocked
                : t.cart.freeShippingRemaining.replace('${amount}', `$${remainingForFreeShipping.toFixed(0)}`)}
            </div>

            {items.map((item) => (
              <div
                key={item.variantId}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '90px 1fr auto',
                  gap: '20px',
                  alignItems: 'center',
                  padding: '20px 0',
                  borderBottom: '1px solid #ededed',
                }}
              >
                <img src={item.image} alt={item.title} style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                <div>
                  <Link to={`/products/${item.handle}`} style={{ fontWeight: 500, display: 'block', marginBottom: '4px' }}>
                    {item.title}
                  </Link>
                  <div style={{ fontSize: '12px', color: '#666666', marginBottom: '10px' }}>{item.variantTitle}</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid #d4d4d4' }}>
                    <button type="button" onClick={() => updateQuantity(item.variantId, item.quantity - 1)} style={{ background: 'none', border: 'none', padding: '6px 10px', cursor: 'pointer' }} aria-label="Decrease quantity">
                      <Minus size={12} />
                    </button>
                    <span style={{ padding: '0 10px', fontSize: '13px' }}>{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.variantId, item.quantity + 1)} style={{ background: 'none', border: 'none', padding: '6px 10px', cursor: 'pointer' }} aria-label="Increase quantity">
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 500, marginBottom: '8px' }}>${(item.price * item.quantity).toFixed(2)}</div>
                  <button type="button" onClick={() => removeFromCart(item.variantId)} style={{ background: 'none', border: 'none', color: '#888888', cursor: 'pointer' }} aria-label="Remove item">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', marginTop: '36px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label htmlFor="cart-page-note" style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                    {t.cart.orderNote}
                  </label>
                  <textarea
                    id="cart-page-note"
                    rows={4}
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder={t.cart.orderNotePlaceholder}
                    style={{ width: '100%', padding: '12px', border: '1px solid #d4d4d4' }}
                  />
                </div>

                <form onSubmit={handlePromo}>
                  <label htmlFor="cart-page-promo" style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                    {t.cart.discountCode}
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      id="cart-page-promo"
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="AIMEE10"
                      style={{ flex: 1, padding: '10px 12px', border: '1px solid #d4d4d4' }}
                    />
                    <button type="submit" className="btn btn--secondary">{t.cart.apply}</button>
                  </div>
                  {promoMsg && <p style={{ fontSize: '12px', marginTop: '6px' }}>{promoMsg}</p>}
                </form>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>{t.cart.subtotal}</span>
                  <strong>${subtotal.toFixed(2)}</strong>
                </div>
                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#108474' }}>
                    <span>{t.cart.discount} ({discountCode})</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '16px' }}>
                  <span>{t.cart.total}</span>
                  <strong>${total.toFixed(2)}</strong>
                </div>
                <p style={{ fontSize: '12px', color: '#666666', marginBottom: '18px' }}>{t.cart.taxesNote}</p>
                <button type="button" onClick={handleCheckout} disabled={checkoutLoading} className="btn btn--full">
                  {checkoutLoading ? t.cart.connecting : t.cart.checkout}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
