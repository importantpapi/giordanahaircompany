import { Link } from 'react-router-dom';
import { Award, CheckCircle2, Globe2, Heart, Sparkles } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const HERO_VIDEO_URL =
  'https://cdn.shopify.com/videos/c/o/v/07609c40a7224d06806ecaf806b24864.mp4';
const SERVICES_HERO_IMG =
  'https://laextensionsshop.com/cdn/shop/files/blowdrying-hair-on-round-brush.jpg?v=1671557276&width=2400';
const STORY_IMG =
  'https://laextensionsshop.com/cdn/shop/files/los-angeles-palms-by-boardwalk_1000x.jpg?v=1676471771';

const IG_IMAGES = [
  'https://laextensionsshop.com/cdn/shop/files/BundleNaturalWave_800x.jpg?v=1685970999',
  'https://laextensionsshop.com/cdn/shop/files/IMG_2172_800x.jpg?v=1686721061',
  'https://laextensionsshop.com/cdn/shop/files/img_1679_800x.jpg?v=1687404402',
  'https://laextensionsshop.com/cdn/shop/files/img_9629_800x.jpg?v=1687404740',
];

export function HomePage() {
  const { products } = useCart();
  const { t } = useLanguage();

  const bundles = products.filter((p) => p.collection === 'hair-extension-bundles').slice(0, 4);
  const tapeIns = products.filter((p) => p.collection === 'tape-in-extensions').slice(0, 3);
  const clipIns = products.filter((p) => p.collection === 'clip-in-extensions').slice(0, 3);
  const closures = products.filter((p) => p.collection === 'lace-closure').slice(0, 4);
  const ponytails = products.filter((p) => p.collection === 'ponytails').slice(0, 4);

  return (
    <main>
      {/* 1. Hero Video */}
      <section className="hero hero--100vh">
        <div className="hero__media">
          <video
            src={HERO_VIDEO_URL}
            loop
            muted
            playsInline
            autoPlay
            aria-label="Giordanahaircompany luxury hair extensions showcase"
          />
        </div>
        <div className="hero__text-wrap">
          <div className="page-width">
            <div className="hero__text-content">
              <h1 className="h1 hero__title">{t.home.heroTitle}</h1>
              <p className="hero__subtitle">{t.home.heroSubtitle}</p>
              <Link to="/collections/all" className="btn btn--inverse">
                {t.home.shopNow}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Rich Text Black Band */}
      <section className="rich-text-black">
        <div className="page-width--narrow">
          <h2>{t.home.richTitle}</h2>
          <p>{t.home.richBody}</p>
        </div>
      </section>

      {/* 3. Hair Extension Bundles */}
      <section className="index-section">
        <div className="page-width">
          <div className="section-header">
            <h2 className="section-header__title">{t.nav.bundles}</h2>
            <Link to="/collections/hair-extension-bundles" className="section-header__link">
              {t.home.viewAll}
            </Link>
          </div>
          <div className="product-grid">
            {bundles.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tape-In Extensions */}
      <section className="index-section" style={{ paddingTop: '20px' }}>
        <div className="page-width">
          <div className="section-header">
            <h2 className="section-header__title">{t.nav.tapeIn}</h2>
            <Link to="/collections/tape-in-extensions" className="section-header__link">
              {t.home.viewAll}
            </Link>
          </div>
          <div className="product-grid product-grid--3">
            {tapeIns.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clip-In Extensions */}
      <section className="index-section" style={{ paddingTop: '20px' }}>
        <div className="page-width">
          <div className="section-header">
            <h2 className="section-header__title">{t.nav.clipIn}</h2>
            <Link to="/collections/clip-in-extensions" className="section-header__link">
              {t.home.viewAll}
            </Link>
          </div>
          <div className="product-grid product-grid--3">
            {clipIns.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Experience the Difference */}
      <section className="text-with-icons-black">
        <div className="page-width">
          <h2>{t.home.expTitle}</h2>
          <div className="text-with-icons__grid">
            <div className="text-with-icons__block">
              <div className="text-with-icons__icon"><Sparkles size={32} strokeWidth={1.3} /></div>
              <div className="text-with-icons__block-title">{t.home.exp1Title}</div>
              <p className="text-with-icons__block-text">{t.home.exp1Text}</p>
            </div>
            <div className="text-with-icons__block">
              <div className="text-with-icons__icon"><Globe2 size={32} strokeWidth={1.3} /></div>
              <div className="text-with-icons__block-title">{t.home.exp2Title}</div>
              <p className="text-with-icons__block-text">{t.home.exp2Text}</p>
            </div>
            <div className="text-with-icons__block">
              <div className="text-with-icons__icon"><Award size={32} strokeWidth={1.3} /></div>
              <div className="text-with-icons__block-title">{t.home.exp3Title}</div>
              <p className="text-with-icons__block-text">{t.home.exp3Text}</p>
            </div>
            <div className="text-with-icons__block">
              <div className="text-with-icons__icon"><CheckCircle2 size={32} strokeWidth={1.3} /></div>
              <div className="text-with-icons__block-title">{t.home.exp4Title}</div>
              <p className="text-with-icons__block-text">{t.home.exp4Text}</p>
            </div>
            <div className="text-with-icons__block">
              <div className="text-with-icons__icon"><Heart size={32} strokeWidth={1.3} /></div>
              <div className="text-with-icons__block-title">{t.home.exp5Title}</div>
              <p className="text-with-icons__block-text">{t.home.exp5Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Lace Closure */}
      <section className="index-section">
        <div className="page-width">
          <div className="section-header">
            <h2 className="section-header__title">{t.nav.closure}</h2>
            <Link to="/collections/lace-closure" className="section-header__link">
              {t.home.viewAll}
            </Link>
          </div>
          <div className="product-grid">
            {closures.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Ponytails */}
      <section className="index-section" style={{ paddingTop: '20px' }}>
        <div className="page-width">
          <div className="section-header">
            <h2 className="section-header__title">{t.nav.ponytails}</h2>
            <Link to="/collections/ponytails" className="section-header__link">
              {t.home.viewAll}
            </Link>
          </div>
          <div className="product-grid">
            {ponytails.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Install Services Hero */}
      <section className="hero hero--650">
        <div className="hero__media">
          <img src={SERVICES_HERO_IMG} alt={t.home.servicesTitle} />
        </div>
        <div className="hero__text-wrap">
          <div className="page-width">
            <div className="hero__text-content">
              <h2 className="hero__title">{t.home.servicesTitle}</h2>
              <p className="hero__subtitle">{t.home.servicesSubtitle}</p>
              <Link to="/pages/services" className="btn btn--inverse">
                {t.home.scheduleNow}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Our Story Split Feature Row */}
      <section className="index-section">
        <div className="page-width">
          <div className="feature-row">
            <div className="feature-row__image">
              <img src={STORY_IMG} alt={t.home.storyTitle} />
            </div>
            <div className="feature-row__text">
              <div className="feature-row__eyebrow">{t.home.storyEyebrow}</div>
              <h2>{t.home.storyTitle}</h2>
              <p>{t.home.storyBody}</p>
              <Link to="/pages/our-story" className="btn">
                {t.home.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Instagram Section */}
      <section className="instagram-section">
        <div className="page-width">
          <div className="section-header section-header--center">
            <h2 className="section-header__title">{t.home.igTitle}</h2>
            <p style={{ margin: '8px 0 0', fontSize: '14px', color: '#555555' }}>
              {t.home.igFollow}{' '}
              <strong style={{ color: '#000000' }}>@giordanahaircompany</strong>
            </p>
          </div>

          <div className="instagram-grid">
            {IG_IMAGES.map((src, idx) => (
              <Link key={idx} to="/pages/instagram" className="instagram-tile">
                <img src={src} alt={`Giordanahaircompany look ${idx + 1}`} loading="lazy" />
              </Link>
            ))}
          </div>

          <Link to="/pages/instagram" className="btn btn--secondary">
            {t.home.seeMore}
          </Link>
        </div>
      </section>
    </main>
  );
}
