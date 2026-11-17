import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, ChevronDown, HelpCircle } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { REVIEWS } from '../data/catalog';

export function ProductPage() {
  const { handle } = useParams();
  const { products, addToCart } = useCart();
  const { t } = useLanguage();

  const product = products.find((p) => p.handle === handle) || products[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '1b');
  const [selectedLength, setSelectedLength] = useState(product.lengths[0] || '18"');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [askSent, setAskSent] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedColor(product.colors[0]?.name || '1b');
    setSelectedLength(product.lengths[0] || '18"');
    setOpenAccordion(null);
    setAskSent(false);
    setShowReviewForm(false);
    setReviewSubmitted(false);
  }, [product]);

  const activeVariant =
    product.variants.find(
      (v) => v.color === selectedColor && v.length === selectedLength
    ) || product.variants[0];

  const currentPrice = activeVariant?.price || product.priceFrom;
  const shopPayMonthly = (currentPrice / 11).toFixed(2);
  const textureName = product.title.includes(' - ')
    ? product.title.split(' - ').slice(1).join(' - ')
    : 'Natural';

  const productReviews = REVIEWS.filter(
    (r) => r.productTitle.toLowerCase() === product.title.toLowerCase()
  );

  const handleAdd = () => {
    addToCart({
      variantId: activeVariant?.id || product.id,
      productId: product.id,
      handle: product.handle,
      title: product.title,
      variantTitle: activeVariant?.title || `${selectedLength} / ${selectedColor}`,
      price: currentPrice,
      quantity: 1,
      image: product.images[0],
    });
  };

  const related = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4);

  return (
    <main>
      <div className="page-width" style={{ maxWidth: '1240px' }}>
        <div className="product-single">
          {/* Left Column: Main Image + Square Thumbnails */}
          <div>
            <div className="product-gallery__main">
              <img src={product.images[selectedImage] || product.images[0]} alt={product.title} />
            </div>
            <div className="product-gallery__thumbs">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(idx)}
                  className={`product-gallery__thumb ${
                    selectedImage === idx ? 'product-gallery__thumb--active' : ''
                  }`}
                >
                  <img src={img} alt={`${product.title} view ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Buy Box */}
          <div>
            <h1 style={{ fontSize: '30px', lineHeight: 1.25, marginBottom: '12px' }}>
              {product.title}
            </h1>

            <div
              style={{
                fontSize: '18px',
                fontWeight: 400,
                paddingBottom: '18px',
                marginBottom: '20px',
                borderBottom: '1px solid #ededed',
              }}
            >
              ${currentPrice}
            </div>

            {/* Texture */}
            <div className="variant-group">
              <span style={{ display: 'block', fontFamily: 'var(--typeHeaderPrimary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                {t.product.texture}
              </span>
              <div className="variant-pills">
                <button
                  type="button"
                  style={{ padding: '8px 16px', border: '2px solid #000000', background: '#ffffff', color: '#000000', fontSize: '13px', cursor: 'default' }}
                >
                  {textureName}
                </button>
              </div>
            </div>

            {/* Hair Length */}
            <div className="variant-group">
              <span style={{ display: 'block', fontFamily: 'var(--typeHeaderPrimary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                {t.product.hairLength}
              </span>
              <div className="variant-pills">
                {product.lengths.map((len) => {
                  const active = selectedLength === len;
                  return (
                    <button
                      key={len}
                      type="button"
                      onClick={() => setSelectedLength(len)}
                      style={{
                        padding: '8px 14px',
                        border: active ? '2px solid #000000' : '1px solid #e0e0e0',
                        background: '#ffffff',
                        color: '#000000',
                        fontSize: '13px',
                        cursor: 'pointer',
                      }}
                    >
                      {len}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Swatches */}
            <div className="variant-group">
              <span style={{ display: 'block', fontFamily: 'var(--typeHeaderPrimary)', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                {t.product.color} — {selectedColor}
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {product.colors.map((c) => {
                  const active = selectedColor === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      title={c.label}
                      aria-label={c.label}
                      style={{
                        width: '40px',
                        height: '40px',
                        padding: '2px',
                        border: active ? '2px solid #000000' : '1px solid #d4d4d4',
                        background: '#ffffff',
                        cursor: 'pointer',
                      }}
                    >
                      <span
                        style={{
                          display: 'block',
                          width: '100%',
                          height: '100%',
                          background: `linear-gradient(135deg, ${c.hex} 0%, ${c.hex}dd 50%, ${c.hex} 100%)`,
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sales Point */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#222222', margin: '18px 0' }}>
              <CheckCircle2 size={16} strokeWidth={1.6} />
              <span>{t.product.salesPoint}</span>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="btn btn--full"
              style={{ textTransform: 'none', letterSpacing: '0.06em', fontSize: '14px', padding: '13px 22px', marginBottom: '12px' }}
            >
              {t.product.addToCart}
            </button>

            {/* Shop Pay Installments Line */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', color: '#444444', marginBottom: '26px', flexWrap: 'wrap' }}>
              <span style={{ background: '#ece8ff', color: '#5a31f4', padding: '2px 6px', borderRadius: '3px', fontSize: '10px', fontWeight: 600 }}>
                {t.product.zeroInterest}
              </span>
              <span>
                {t.product.installmentsPrefix} <strong>${shopPayMonthly}/mo</strong> {t.product.installmentsSuffix}{' '}
                <strong style={{ color: '#5a31f4', fontSize: '14px', letterSpacing: '-0.02em' }}>shop</strong>
              </span>
              <HelpCircle size={13} />
            </div>

            {/* Description */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{t.product.description}</h3>
              <ul style={{ margin: '0 0 14px', paddingLeft: '18px', fontSize: '13px', lineHeight: 1.9 }}>
                {product.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <p style={{ fontSize: '13px', lineHeight: 1.8, color: '#333333' }}>{product.description}</p>
            </div>

            {/* Accordions */}
            <div>
              <div className="accordion-item">
                <button
                  type="button"
                  className="accordion-trigger"
                  style={{ textTransform: 'none', letterSpacing: '0.04em', fontSize: '14px', fontFamily: 'var(--typeHeaderPrimary)', fontWeight: 600 }}
                  onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                >
                  <span>{t.product.careAccordion}</span>
                  <ChevronDown size={16} />
                </button>
                {openAccordion === 'care' && (
                  <p style={{ marginTop: '12px', fontSize: '13px', lineHeight: 1.8 }}>
                    {t.product.careBody}{' '}
                    <Link to="/pages/get-the-most-from-your-hair" style={{ textDecoration: 'underline' }}>
                      {t.product.readCareGuide}
                    </Link>
                    .
                  </p>
                )}
              </div>

              <div className="accordion-item">
                <button
                  type="button"
                  className="accordion-trigger"
                  style={{ textTransform: 'none', letterSpacing: '0.04em', fontSize: '14px', fontFamily: 'var(--typeHeaderPrimary)', fontWeight: 600 }}
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                >
                  <span>{t.product.shippingAccordion}</span>
                  <ChevronDown size={16} />
                </button>
                {openAccordion === 'shipping' && (
                  <p style={{ marginTop: '12px', fontSize: '13px', lineHeight: 1.8 }}>{t.product.shippingBody}</p>
                )}
              </div>

              <div className="accordion-item">
                <button
                  type="button"
                  className="accordion-trigger"
                  style={{ textTransform: 'none', letterSpacing: '0.04em', fontSize: '14px', fontFamily: 'var(--typeHeaderPrimary)', fontWeight: 600 }}
                  onClick={() => setOpenAccordion(openAccordion === 'ask' ? null : 'ask')}
                >
                  <span>{t.product.askAccordion}</span>
                  <ChevronDown size={16} />
                </button>
                {openAccordion === 'ask' && (
                  <div style={{ marginTop: '14px' }}>
                    {askSent ? (
                      <p style={{ fontSize: '13px', color: '#108474' }}>{t.product.askSuccess}</p>
                    ) : (
                      <form
                        onSubmit={(e: React.FormEvent) => {
                          e.preventDefault();
                          setAskSent(true);
                        }}
                        style={{ display: 'grid', gap: '10px' }}
                      >
                        <input required type="text" placeholder="Name" style={{ padding: '9px 12px', border: '1px solid #d4d4d4', fontSize: '13px' }} />
                        <input required type="email" placeholder="Email" style={{ padding: '9px 12px', border: '1px solid #d4d4d4', fontSize: '13px' }} />
                        <textarea required rows={3} placeholder="..." style={{ padding: '9px 12px', border: '1px solid #d4d4d4', fontSize: '13px' }} />
                        <button type="submit" className="btn" style={{ padding: '9px 18px' }}>
                          {t.product.sendQuestion}
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Social Share Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginTop: '24px', fontSize: '12px', color: '#222222' }}>
              <a href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer">
                f &nbsp;{t.product.share}
              </a>
              <a href={`https://twitter.com/share?text=${encodeURIComponent(product.title)}`} target="_blank" rel="noreferrer">
                𝕏 &nbsp;{t.product.tweet}
              </a>
              <a href={`https://pinterest.com/pin/create/button/?description=${encodeURIComponent(product.title)}`} target="_blank" rel="noreferrer">
                P &nbsp;{t.product.pinIt}
              </a>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <section style={{ borderTop: '1px solid #ededed', padding: '56px 0 68px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '26px', marginBottom: '26px' }}>{t.product.customerReviews}</h2>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', marginBottom: '28px' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: '#108474', fontSize: '18px', letterSpacing: '3px', marginBottom: '4px' }}>
                {productReviews.length > 0 ? '★★★★★' : '☆☆☆☆☆'}
              </div>
              <div style={{ fontSize: '13px', color: '#333333' }}>
                {productReviews.length > 0
                  ? t.product.basedOnReviews.replace('{n}', String(productReviews.length))
                  : t.product.beFirstReview}
              </div>
            </div>

            <div style={{ width: '1px', height: '48px', background: '#ededed' }} />

            <button
              type="button"
              onClick={() => setShowReviewForm((s) => !s)}
              style={{ background: '#108474', color: '#ffffff', border: 'none', padding: '12px 44px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
            >
              {showReviewForm ? t.product.cancelReview : t.product.writeReview}
            </button>
          </div>

          {showReviewForm && (
            <div style={{ maxWidth: '520px', margin: '0 auto 32px', textAlign: 'left', border: '1px solid #ededed', padding: '24px' }}>
              {reviewSubmitted ? (
                <p style={{ color: '#108474', fontSize: '14px' }}>{t.product.reviewThanks}</p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setReviewSubmitted(true);
                  }}
                  style={{ display: 'grid', gap: '12px' }}
                >
                  <input required type="text" placeholder="Name" style={{ padding: '10px', border: '1px solid #d4d4d4' }} />
                  <input required type="email" placeholder="Email" style={{ padding: '10px', border: '1px solid #d4d4d4' }} />
                  <input required type="text" placeholder="Title" style={{ padding: '10px', border: '1px solid #d4d4d4' }} />
                  <textarea required rows={4} placeholder="..." style={{ padding: '10px', border: '1px solid #d4d4d4' }} />
                  <button type="submit" style={{ background: '#108474', color: '#ffffff', border: 'none', padding: '11px 22px', fontWeight: 600, cursor: 'pointer' }}>
                    {t.product.submitReview}
                  </button>
                </form>
              )}
            </div>
          )}

          {productReviews.length > 0 && (
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'left', display: 'grid', gap: '16px' }}>
              {productReviews.map((r) => (
                <div key={r.id} style={{ borderTop: '1px solid #ededed', paddingTop: '18px' }}>
                  <div style={{ color: '#108474', fontSize: '13px', marginBottom: '4px' }}>★★★★★</div>
                  <strong style={{ display: 'block', marginBottom: '4px' }}>{r.title}</strong>
                  <p style={{ margin: '0 0 6px', fontSize: '13px', lineHeight: 1.7 }}>{r.body}</p>
                  <span style={{ fontSize: '12px', color: '#666666' }}>
                    {r.author} • {r.date}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="index-section" style={{ borderTop: '1px solid #ededed' }}>
            <div className="section-header section-header--center">
              <h2 className="section-header__title">{t.product.youMayAlsoLike}</h2>
            </div>
            <div className="product-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
