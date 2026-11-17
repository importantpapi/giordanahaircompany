import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import type { Product } from '../types/shop';

export function ProductCard({ product }: { product: Product }) {
  const { t } = useLanguage();
  const primaryImg = product.images[0];
  const secondaryImg = product.images[1] || product.images[0];

  return (
    <div className="grid-product__content">
      <Link
        to={`/collections/${product.collection}/products/${product.handle}`}
        className="grid-product__link"
      >
        <div className="grid-product__image-mask" style={{ backgroundColor: '#ffffff' }}>
          <img src={primaryImg} alt={product.title} loading="lazy" style={{ objectFit: 'contain' }} />
          {secondaryImg && (
            <div className="grid-product__secondary-image" style={{ backgroundColor: '#ffffff' }}>
              <img src={secondaryImg} alt={product.title} loading="lazy" style={{ objectFit: 'cover' }} />
            </div>
          )}
        </div>

        <div className="grid-product__meta">
          <div className="grid-product__title">{product.title}</div>
          <div className="grid-product__price">
            <span>{t.product.from} ${product.priceFrom}</span>
          </div>
        </div>
      </Link>

      {product.colors.length > 0 && (
        <div className="grid-product__colors">
          {product.colors.map((c) => (
            <Link
              key={c.name}
              to={`/collections/${product.collection}/products/${product.handle}`}
              className="color-swatch--small"
              aria-label={`${product.title} - ${c.label}`}
              title={c.label}
              style={{
                backgroundColor: c.hex,
                backgroundImage: c.swatchImage ? `url(${c.swatchImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 0,
                width: '14px',
                height: '14px',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
