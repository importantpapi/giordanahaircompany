import { useState } from 'react';
import { Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export function SearchPage() {
  const { products } = useCart();
  const { t } = useLanguage();
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const results = q
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.collectionTitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    : products;

  return (
    <main className="index-section">
      <div className="page-width">
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1>{t.pages.searchTitle}</h1>
          <div
            style={{
              maxWidth: '520px',
              margin: '20px auto 0',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #000000',
              padding: '0 14px',
            }}
          >
            <Search size={18} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.pages.searchPlaceholder}
              style={{ flex: 1, border: 'none', outline: 'none', padding: '12px', fontSize: '14px' }}
            />
          </div>
        </header>

        <div className="product-grid">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
