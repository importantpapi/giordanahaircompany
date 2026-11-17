import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export function SearchModal() {
  const { isSearchOpen, closeSearch, products } = useCart();
  const { t } = useLanguage();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const q = query.trim().toLowerCase();
  const matches = q
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.collectionTitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    : products.slice(0, 4);

  return (
    <>
      <div className="drawer-backdrop" onClick={closeSearch} />
      <div
        role="dialog"
        aria-label={t.pages.searchTitle}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: '#ffffff',
          zIndex: 110,
          padding: '28px 0 36px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.16)',
        }}
      >
        <div className="page-width">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid #000000', paddingBottom: '10px' }}>
            <Search size={20} strokeWidth={1.5} />
            <input
              type="search"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.pages.searchPlaceholder}
              style={{ flex: 1, border: 'none', outline: 'none', fontSize: '16px', background: 'transparent' }}
            />
            <button type="button" className="icon-btn" aria-label="Close search" onClick={closeSearch}>
              <X size={22} />
            </button>
          </div>

          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em', color: '#666666', marginBottom: '16px' }}>
              {q ? `"${query}" (${matches.length})` : t.pages.popularExtensions}
            </p>
            <div className="product-grid">
              {matches.slice(0, 4).map((p) => (
                <Link
                  key={p.id}
                  to={`/collections/${p.collection}/products/${p.handle}`}
                  onClick={closeSearch}
                  style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '8px', border: '1px solid #ededed' }}
                >
                  <img src={p.images[0]} alt={p.title} style={{ width: '64px', height: '64px', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '4px' }}>{p.title}</div>
                    <div style={{ fontSize: '12px', color: '#555555' }}>{t.product.from} ${p.priceFrom}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
