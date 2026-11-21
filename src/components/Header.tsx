import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Search, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import type { Lang } from '../i18n/translations';

export function Header() {
  const { itemCount, openCart, openSearch, openMobileMenu } = useCart();
  const { lang, setLang, t } = useLanguage();
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  const isTransparent = isHome && !scrolled;

  const SHOP_LINKS = [
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
    <header className={`site-header-wrapper ${isTransparent ? 'site-header-wrapper--overlay' : ''}`}>
      <div className="site-header">
        <div className="page-width">
          <div className="header-layout">
            {/* Far Left: Search Icon (Desktop) / Menu + Search (Mobile) */}
            <div className="header-item--left" style={{ flex: '0 0 auto' }}>
              <button
                type="button"
                className="icon-btn mobile-only"
                aria-label="Open menu"
                onClick={openMobileMenu}
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                className="icon-btn desktop-only"
                aria-label="Search"
                onClick={openSearch}
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Center Group: Left Nav + Centered Logo + Right Nav */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: '1 1 auto',
                gap: '18px',
              }}
            >
              <ul className="site-nav desktop-only">
                <li
                  className="site-nav__item"
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                >
                  <button
                    type="button"
                    className="site-nav__link"
                    onClick={() => setShopOpen((o) => !o)}
                    aria-expanded={shopOpen}
                  >
                    <span>{t.nav.shop}</span>
                    <ChevronDown size={12} strokeWidth={1.6} />
                  </button>

                  {shopOpen && (
                    <ul className="site-nav__dropdown">
                      {SHOP_LINKS.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            className="site-nav__dropdown-link"
                            onClick={() => setShopOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className="site-nav__item">
                  <Link to="/pages/services" className="site-nav__link">
                    {t.nav.services}
                  </Link>
                </li>
              </ul>

              <div className="header-item--logo">
                <Link
                  to="/"
                  className="site-header__logo-link"
                  aria-label="Aimeehaircompany Home"
                >
                  <div className="brand-monogram">
                    <span className="brand-monogram__main">AIMEE</span>
                    <span className="brand-monogram__sub">Hair Company</span>
                  </div>
                </Link>
              </div>

              <ul className="site-nav desktop-only">
                <li className="site-nav__item">
                  <Link to="/pages/instagram" className="site-nav__link">
                    {t.nav.instagram}
                  </Link>
                </li>
                <li className="site-nav__item">
                  <Link to="/pages/reviews" className="site-nav__link">
                    {t.nav.reviews}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Far Right: Language Switcher + Account + Cart */}
            <div className="header-item--icons" style={{ flex: '0 0 auto', gap: '12px' }}>
              <div
                className="desktop-only"
                role="group"
                aria-label="Language"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', letterSpacing: '0.08em' }}
              >
                {(['en', 'fr', 'nl'] as Lang[]).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    style={{
                      background: lang === code ? (isTransparent ? '#ffffff' : '#000000') : 'transparent',
                      color: lang === code ? (isTransparent ? '#000000' : '#ffffff') : (isTransparent ? '#ffffff' : '#000000'),
                      border: `1px solid ${isTransparent ? 'rgba(255,255,255,0.45)' : '#e0e0e0'}`,
                      padding: '3px 6px',
                      fontSize: '10px',
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
                className="icon-btn mobile-only"
                aria-label="Search"
                onClick={openSearch}
              >
                <Search size={20} strokeWidth={1.5} />
              </button>

              <Link to="/account" className="icon-btn desktop-only" aria-label="Account">
                <User size={20} strokeWidth={1.5} />
              </Link>

              <button
                type="button"
                className="icon-btn"
                aria-label="Cart"
                onClick={openCart}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {itemCount > 0 && <span className="cart-link__bubble">{itemCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
