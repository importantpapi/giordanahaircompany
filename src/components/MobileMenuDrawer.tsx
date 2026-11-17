import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import type { Lang } from '../i18n/translations';

export function MobileMenuDrawer() {
  const { isMobileMenuOpen, closeMobileMenu } = useCart();
  const { lang, setLang, t } = useLanguage();
  const [shopExpanded, setShopExpanded] = useState(true);

  if (!isMobileMenuOpen) return null;

  const COLLECTIONS_NAV = [
    { label: t.nav.allExtensions, to: '/collections/all' },
    { label: t.nav.bundles, to: '/collections/hair-extension-bundles' },
    { label: t.nav.tapeIn, to: '/collections/tape-in-extensions' },
    { label: t.nav.uTip, to: '/collections/u-tip-extensions' },
    { label: t.nav.iTip, to: '/collections/i-tip-extensions' },
    { label: t.nav.clipIn, to: '/collections/clip-in-extensions' },
    { label: t.nav.closure, to: '/collections/lace-closure' },
    { label: t.nav.ponytails, to: '/collections/ponytails' },
  ];

  return (
    <>
      <div className="drawer-backdrop" onClick={closeMobileMenu} />
      <aside className="drawer-panel drawer-panel--left" aria-label="Mobile navigation">
        <div className="drawer__header">
          <span className="brand-monogram__main" style={{ fontSize: '16px', color: '#ffffff' }}>
            GIORDANAHAIRCOMPANY
          </span>
          <button
            type="button"
            className="icon-btn"
            aria-label="Close menu"
            onClick={closeMobileMenu}
            style={{ color: '#ffffff' }}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="drawer__body" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', gap: '8px', paddingBottom: '14px', borderBottom: '1px solid #262626' }}>
            {(['en', 'fr', 'nl'] as Lang[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                style={{
                  background: lang === code ? '#ffffff' : 'transparent',
                  color: lang === code ? '#000000' : '#ffffff',
                  border: '1px solid #444444',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShopExpanded((s) => !s)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: '1px solid #262626',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 0',
              fontSize: '15px',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            <span>{t.nav.shop}</span>
            {shopExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {shopExpanded && (
            <div style={{ paddingLeft: '14px', display: 'flex', flexDirection: 'column', borderBottom: '1px solid #262626', paddingBottom: '10px' }}>
              {COLLECTIONS_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  style={{ padding: '9px 0', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {[
            { label: t.nav.services, to: '/pages/services' },
            { label: t.nav.ourStory, to: '/pages/our-story' },
            { label: t.nav.instagram, to: '/pages/instagram' },
            { label: t.nav.reviews, to: '/pages/reviews' },
            { label: t.nav.faq, to: '/pages/faq' },
            { label: t.nav.contact, to: '/pages/contact' },
            { label: t.nav.login, to: '/account' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu}
              style={{
                padding: '14px 0',
                borderBottom: '1px solid #262626',
                fontSize: '15px',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
