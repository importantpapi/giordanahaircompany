import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PAYMENT_METHODS = [
  'American Express',
  'Apple Pay',
  'Diners Club',
  'Discover',
  'Google Pay',
  'Mastercard',
  'Shop Pay',
  'Visa',
];

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {
      // ignore offline
    }
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer__grid">
          {/* Brand Column */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <div className="brand-monogram" style={{ alignItems: 'flex-start' }}>
                <span className="brand-monogram__main" style={{ color: '#ffffff', fontSize: '22px' }}>
                  AIMEE
                </span>
                <span className="brand-monogram__sub" style={{ color: '#ffffff' }}>
                  HAIR COMPANY
                </span>
              </div>
            </Link>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, marginBottom: '18px' }}>
              {t.footer.tagline}
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Link to="/pages/instagram" aria-label="Instagram" style={{ color: '#ffffff' }}>
                <Instagram size={18} strokeWidth={1.6} />
              </Link>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                style={{ color: '#ffffff' }}
              >
                <Facebook size={18} strokeWidth={1.6} />
              </a>
            </div>
          </div>

          {/* About Column */}
          <div>
            <p className="footer__title">{t.footer.about}</p>
            <ul className="site-footer__linklist">
              <li><Link to="/pages/our-story">{t.footer.ourStory}</Link></li>
              <li><Link to="/pages/services">{t.footer.services}</Link></li>
              <li><Link to="/pages/reviews">{t.footer.reviews}</Link></li>
              <li><Link to="/pages/instagram">{t.footer.instagram}</Link></li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <p className="footer__title">{t.footer.customerService}</p>
            <ul className="site-footer__linklist">
              <li><Link to="/pages/contact">{t.footer.contactUs}</Link></li>
              <li><Link to="/pages/faq">{t.footer.faq}</Link></li>
              <li><Link to="/pages/get-the-most-from-your-hair">{t.footer.careGuide}</Link></li>
              <li><Link to="/policies/shipping-policy">{t.footer.shippingInfo}</Link></li>
              <li><Link to="/policies/refund-policy">{t.footer.returnPolicy}</Link></li>
              <li><Link to="/pages/cancellation-policy">{t.footer.salonPolicies}</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <p className="footer__title">{t.footer.joinList}</p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, marginBottom: '14px' }}>
              {t.footer.joinDesc}
            </p>
            {subscribed ? (
              <div
                style={{
                  border: '1px solid #363636',
                  padding: '12px 14px',
                  fontSize: '13px',
                  color: '#ffffff',
                }}
              >
                {t.footer.subscribeSuccess}
              </div>
            ) : (
              <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  aria-label={t.footer.emailPlaceholder}
                  className="footer__newsletter-input"
                />
                <button type="submit" className="footer__newsletter-btn" aria-label="Subscribe">
                  <ArrowRight size={18} strokeWidth={1.6} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="site-footer__bottom">
          <div>
            <span>{t.footer.rights}</span>
            <span style={{ margin: '0 10px' }}>|</span>
            <Link to="/policies/privacy-policy" style={{ marginRight: '14px' }}>{t.footer.privacy}</Link>
            <Link to="/pages/cancellation-policy" style={{ marginRight: '14px' }}>{t.footer.legal}</Link>
            <Link to="/pages/cancellation-policy">{t.footer.servicePolicies}</Link>
          </div>

          <div className="payment-badges">
            {PAYMENT_METHODS.map((pm) => (
              <span key={pm} className="payment-badge">
                {pm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
