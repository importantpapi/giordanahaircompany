import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { COLLECTIONS, EXTENSION_METHODS, SHADE_SWATCHES } from '../data/catalog';

const ALL_SECTIONS = [
  { handle: 'hair-extension-bundles', title: 'Bundle Hair Extensions', cols: 4 },
  { handle: 'tape-in-extensions', title: 'Tape-In Extensions', cols: 3 },
  { handle: 'u-tip-extensions', title: 'U-Tip Extensions', cols: 4 },
  { handle: 'i-tip-extensions', title: 'I-Tip Extensions', cols: 4 },
  { handle: 'clip-in-extensions', title: 'Clip-In Extensions', cols: 3 },
  { handle: 'lace-closure', title: 'Lace Closure', cols: 4 },
  { handle: 'ponytails', title: 'Ponytails', cols: 4 },
];

export function CollectionPage() {
  const { handle = 'all' } = useParams();
  const { products } = useCart();
  const { t } = useLanguage();
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'title-asc'>('featured');

  const collection = COLLECTIONS.find((c) => c.handle === handle) || COLLECTIONS[0];
  const methodForCollection = EXTENSION_METHODS.find((m) => m.collection === handle);

  const items = useMemo(() => {
    const filtered =
      handle === 'all'
        ? [...products]
        : products.filter((p) => p.collection === handle);

    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.priceFrom - b.priceFrom);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.priceFrom - a.priceFrom);
    } else if (sortBy === 'title-asc') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    return filtered;
  }, [handle, products, sortBy]);

  if (handle === 'all') {
    return (
      <main className="index-section">
        <div className="page-width">
          <header style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h1 style={{ fontSize: '30px' }}>Shop All Extensions</h1>
          </header>

          {ALL_SECTIONS.map((sec) => {
            const secProducts = products.filter((p) => p.collection === sec.handle).slice(0, 4);
            if (secProducts.length === 0) return null;
            return (
              <section key={sec.handle} style={{ marginBottom: '68px' }}>
                <div className="section-header">
                  <h2 className="section-header__title" style={{ fontSize: '26px' }}>{sec.title}</h2>
                  <Link to={`/collections/${sec.handle}`} className="section-header__link" style={{ borderBottom: 'none' }}>
                    {t.home.viewAll}
                  </Link>
                </div>
                <div className={`product-grid ${sec.cols === 3 ? 'product-grid--3' : ''}`}>
                  {secProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    );
  }

  return (
    <main className="index-section">
      <div className="page-width">
        <header style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h1>{collection.title}</h1>
          <p className="collection-description" style={{ color: '#555555', maxWidth: '680px', margin: '0 auto' }}>
            {collection.description}
          </p>
        </header>

        {methodForCollection && (
          <div style={{ marginBottom: '36px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${SHADE_SWATCHES.length}, minmax(84px, 1fr))`,
                gap: '10px',
                overflowX: 'auto',
                paddingBottom: '6px',
              }}
            >
              {SHADE_SWATCHES.map((shade) => (
                <Link
                  key={shade.code}
                  to={`/collections/${methodForCollection.collection}/products/${methodForCollection.defaultProduct}?color=${encodeURIComponent(shade.code)}`}
                  style={{ display: 'block', textAlign: 'center' }}
                >
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '1 / 1',
                      overflow: 'hidden',
                      marginBottom: '6px',
                      border: '1px solid #ededed',
                    }}
                  >
                    <img
                      src={shade.textureImage}
                      alt={shade.label}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: shade.filter || undefined,
                      }}
                    />
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#000000' }}>
                    #{shade.code.toUpperCase()}
                  </div>
                  <div style={{ fontSize: '9px', color: '#555555', textTransform: 'uppercase' }}>
                    {shade.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #ededed',
            borderBottom: '1px solid #ededed',
            padding: '14px 0',
            marginBottom: '32px',
            fontSize: '13px',
          }}
        >
          <span>{items.length} {t.collection.productsCount}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label htmlFor="sort-select" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              {t.collection.sortBy}
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              style={{
                padding: '7px 12px',
                border: '1px solid #d4d4d4',
                background: '#ffffff',
                fontSize: '13px',
              }}
            >
              <option value="featured">{t.collection.featured}</option>
              <option value="price-asc">{t.collection.priceAsc}</option>
              <option value="price-desc">{t.collection.priceDesc}</option>
              <option value="title-asc">{t.collection.titleAsc}</option>
            </select>
          </div>
        </div>

        {items.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '48px 0' }}>{t.collection.noProducts}</p>
        ) : (
          <div className="product-grid">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
