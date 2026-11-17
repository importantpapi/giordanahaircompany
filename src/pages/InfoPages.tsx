import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { COLLECTIONS, CUSTOM_SHADE_GALLERY, FAQS, REVIEWS, SERVICES } from '../data/catalog';

const SERVICES_HERO_IMG =
  'https://laextensionsshop.com/cdn/shop/files/blowdrying-hair-on-round-brush.jpg?v=1671557276&width=2400';
const STORY_IMG =
  'https://laextensionsshop.com/cdn/shop/files/los-angeles-palms-by-boardwalk_1000x.jpg?v=1676471771';

export function OurStoryPage() {
  const { t } = useLanguage();
  return (
    <main className="index-section">
      <div className="page-width--narrow">
        <header style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h1>{t.pages.ourStoryTitle}</h1>
          <p style={{ color: '#555555' }}>{t.pages.ourStorySubtitle}</p>
        </header>

        <img
          src={STORY_IMG}
          alt={t.pages.ourStoryTitle}
          style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', marginBottom: '36px' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', lineHeight: 1.85 }}>
          <p>{t.pages.ourStoryP1}</p>
          <p>{t.pages.ourStoryP2}</p>
          <p>{t.pages.ourStoryP3}</p>
          <h2 style={{ marginTop: '24px' }}>{t.pages.meetFounder}</h2>
          <p>{t.pages.founderBio}</p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link to="/collections/all" className="btn">
            {t.cart.shopExtensions}
          </Link>
        </div>
      </div>
    </main>
  );
}

export function ServicesPage() {
  const { products } = useCart();
  const { t } = useLanguage();
  const [bookingService, setBookingService] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  return (
    <main>
      <section className="hero hero--650">
        <div className="hero__media">
          <img src={SERVICES_HERO_IMG} alt={t.servicesPage.title} />
        </div>
        <div className="hero__text-wrap">
          <div className="page-width">
            <div className="hero__text-content">
              <h1 className="hero__title">{t.servicesPage.title}</h1>
              <p className="hero__subtitle">{t.servicesPage.subtitle}</p>
              <a href="#services-list" className="btn btn--inverse">
                {t.servicesPage.bookNow}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="index-section">
        <div className="page-width--narrow">
          <h2 style={{ textAlign: 'center', marginBottom: '44px' }}>{t.servicesPage.offeredTitle}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {SERVICES.map((svc) => (
              <div key={svc.id} style={{ borderBottom: '1px solid #ededed', paddingBottom: '32px' }}>
                <h3>{svc.title}</h3>
                <p style={{ lineHeight: 1.85, marginBottom: '14px' }}>{svc.description}</p>
                <div style={{ fontSize: '12px', color: '#555555', marginBottom: '16px', letterSpacing: '0.08em' }}>
                  {t.servicesPage.estTime}: {svc.duration} &nbsp;|&nbsp; {t.servicesPage.recommended}: {svc.recommended}
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    setBookingService(svc.title);
                    setBooked(false);
                  }}
                >
                  {t.servicesPage.bookNow}
                </button>
              </div>
            ))}
          </div>

          {bookingService && (
            <div style={{ marginTop: '40px', padding: '32px', border: '1px solid #000000', background: '#fafafa' }}>
              <h3 style={{ marginBottom: '12px' }}>
                {t.servicesPage.requestAppt}: {bookingService}
              </h3>
              {booked ? (
                <p>{t.servicesPage.requestConfirm}</p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBooked(true);
                  }}
                  style={{ display: 'grid', gap: '12px' }}
                >
                  <input required type="text" placeholder="Full Name" style={{ padding: '10px 14px', border: '1px solid #ccc' }} />
                  <input required type="email" placeholder="Email Address" style={{ padding: '10px 14px', border: '1px solid #ccc' }} />
                  <input required type="date" style={{ padding: '10px 14px', border: '1px solid #ccc' }} />
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="submit" className="btn">{t.servicesPage.submitRequest}</button>
                    <button type="button" className="btn btn--secondary" onClick={() => setBookingService(null)}>
                      {t.servicesPage.cancel}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="index-section" style={{ borderTop: '1px solid #ededed' }}>
        <div className="page-width">
          <div className="section-header">
            <h2 className="section-header__title">{t.servicesPage.shopExtensions}</h2>
            <Link to="/collections/all" className="section-header__link">{t.home.viewAll}</Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function FaqPage() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <main className="index-section">
      <div className="page-width--narrow">
        <header style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h1>{t.pages.faqTitle}</h1>
          <p style={{ color: '#555555' }}>{t.pages.faqSubtitle}</p>
        </header>

        <div>
          {FAQS.map((item, idx) => (
            <div key={idx} className="accordion-item">
              <button
                type="button"
                className="accordion-trigger"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span>{item.q}</span>
                <ChevronDown size={16} />
              </button>
              {openIdx === idx && (
                <p style={{ marginTop: '14px', fontSize: '14px', lineHeight: 1.8, color: '#333333' }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export function ReviewsPage() {
  const { t } = useLanguage();
  return (
    <main className="index-section">
      <div className="page-width--narrow">
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1>{t.pages.reviewsTitle}</h1>
          <div style={{ color: '#108474', fontSize: '20px', marginBottom: '6px' }}>★★★★★</div>
          <p style={{ color: '#555555', fontSize: '13px' }}>
            We love to hear from our customers how excited they are about how their new look
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {REVIEWS.map((r) => (
            <article key={r.id} style={{ border: '1px solid #ededed', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#108474', fontSize: '14px' }}>{'★'.repeat(r.rating)}</span>
                <span style={{ fontSize: '12px', color: '#777777' }}>{r.date}</span>
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{r.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.75, marginBottom: '12px' }}>{r.body}</p>
              <div style={{ fontSize: '12px', color: '#555555' }}>
                <strong>{r.author}</strong> — Verified Buyer ({r.productTitle})
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export function ContactPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  return (
    <main className="index-section">
      <div className="page-width">
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1>We would love to hear from you!</h1>
          <p style={{ color: '#555555', maxWidth: '580px', margin: '0 auto' }}>
            Reach out with any questions you have about ordering, sizing, install services and we will get back to you.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', lineHeight: 1.8 }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>Email us</h3>
              <p style={{ margin: 0 }}>info@giordanahaircompany.com</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>Call or text</h3>
              <p style={{ margin: 0 }}>323-905-0227</p>
              <p style={{ margin: 0, color: '#666666' }}>9-4 M-F PST</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>Mailing address</h3>
              <p style={{ margin: 0 }}>Giordanahaircompany</p>
              <p style={{ margin: 0 }}>PO Box 3563, Los Angeles, CA 90078</p>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Email us</h3>
            {sent ? (
              <div style={{ border: '1px solid #000000', padding: '28px', textAlign: 'center' }}>
                <h3>{t.pages.messageSent}</h3>
                <p>{t.pages.messageSentBody}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ display: 'grid', gap: '14px' }}
              >
                <input required type="text" placeholder="Name" style={{ padding: '12px 14px', border: '1px solid #d4d4d4' }} />
                <input required type="email" placeholder="Email" style={{ padding: '12px 14px', border: '1px solid #d4d4d4' }} />
                <input type="tel" placeholder="Phone number" style={{ padding: '12px 14px', border: '1px solid #d4d4d4' }} />
                <textarea required rows={5} placeholder="Message" style={{ padding: '12px 14px', border: '1px solid #d4d4d4' }} />
                <button type="submit" className="btn">{t.pages.send}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export function CareGuidePage() {
  const { t } = useLanguage();
  const tips = [
    'If you purchase lengths of 18 inches or more, 3 or more bundles are needed to achieve fullness.',
    'Take care to gently detangle your extensions before washing, starting from the bottom up to the root.',
    'When washing your extensions, lukewarm water and a sulfate-free moisturizing shampoo & conditioner always work best.',
    'Make sure to gently lather from root to tip, avoiding any rough scrubbing motion as you go.',
    'Excess water should be removed by gentle towel blotting before air drying and adding a leave-in conditioner/detangler on the mid-ends.',
    'Protection against repeated heat styling can be achieved by using a treatment oil on the ends to lock in moisture — for optimal results this should be done weekly.',
    'To promote enhanced color, shine, and longevity we strongly recommend always using a thermal protection spray and avoiding excess heat.',
    'Sleeping with wet hair extensions in is never advised. Matting during sleep can be greatly reduced by pulling them into a soft held ponytail, creating a loose braid or twisting with a silk scarf.',
    'At your next re-install appointment, make sure to ask your stylist to dust the ends exactly as you would your natural hair.',
  ];

  return (
    <main className="index-section">
      <div className="page-width--narrow">
        <header style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h1>{t.pages.careTitle}</h1>
          <p style={{ color: '#555555' }}>
            To ensure you get the very most from your next purchase, we’ve compiled a list of expert tips:
          </p>
        </header>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', lineHeight: 1.85, paddingLeft: '20px' }}>
          {tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export function SalonPoliciesPage() {
  return (
    <main className="index-section">
      <div className="page-width--narrow">
        <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Salon Policies</h1>
        <p style={{ lineHeight: 1.85, marginBottom: '28px' }}>
          We offer install services at Giordanahaircompany. If you would like to book your appointment please go{' '}
          <Link to="/pages/services" style={{ textDecoration: 'underline' }}>here</Link>. To ensure you enjoy every aspect of your experience, we want to provide an open and transparent guide to what you can expect.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: 1.85 }}>
          <section>
            <h3>Menu Service Policy</h3>
            <p>To enjoy the menu price, please arrive with your hair detangled, pre-washed and blow dried. Please note that if you need your hair washed an additional fee will be charged and to ensure we have the time we need, it will need to be booked alongside your appointment.</p>
            <p>The menu price for braided sew-in and beaded sew-in does not include the hair. You can add hair to your service but would need to prebook 10 business days in advance to ensure we have sufficient stock ready for you.</p>
            <p>For extension services that include the hair, please book 10 business days in advance for our custom ordered extensions. Braided Sew-In packages include full installation up to 3 bundles, and additional bundles can be added for an additional fee.</p>
          </section>

          <section>
            <h3>Booking Policy</h3>
            <p>All services require a minimum $50 deposit. It is payable at the time of your booking and it is non-refundable/non-transferable. For services that include the hair extensions, there is a 50% deposit. The remaining balance will then be due on the service date.</p>
            <p>Please note that 24 hours notice is required for the rescheduling of your appointment and another $50 deposit will be required to reschedule. Missed appointments, or instances where no notice is given within 24 hours of the appointment time, will result in automatic forfeiture of the deposit and a 25% service fee.</p>
          </section>

          <section>
            <h3>Late Fees &amp; Cancellation Fees</h3>
            <ul style={{ paddingLeft: '20px' }}>
              <li><strong>15 MINS LATE:</strong> $25 Late Fee</li>
              <li><strong>30 MINS LATE + NO COMMUNICATION:</strong> Appointment CANCELED and DEPOSIT FORFEITED</li>
              <li><strong>NO SHOW / SAME DAY CANCELLATION:</strong> Deposit forfeited &amp; 25% of scheduled service fee</li>
            </ul>
          </section>

          <section>
            <h3>Refund &amp; Hair Sales Policy</h3>
            <p>Please note that there are no refunds on services rendered. All hair sales are final and unfortunately there are no refunds or exchanges.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export function ThanksPage() {
  const { t } = useLanguage();
  return (
    <main className="index-section">
      <div className="page-width--narrow" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1>Thanks for Joining!</h1>
        <p style={{ fontSize: '16px', margin: '18px 0 28px' }}>
          Use the code <strong>GIORDANA10</strong> (or <strong>WELCOME10</strong>) to save 10% off your first order.
        </p>
        <Link to="/collections/all" className="btn">
          {t.home.shopNow}
        </Link>
      </div>
    </main>
  );
}

export function NewsPage() {
  const { products } = useCart();
  const { t } = useLanguage();
  return (
    <main className="index-section">
      <div className="page-width">
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1>News</h1>
          <p style={{ color: '#555555' }}>Latest updates and collections from Giordanahaircompany</p>
        </header>

        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '28px' }}>{t.product.youMayAlsoLike}</h2>
          <div className="product-grid">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section style={{ borderTop: '1px solid #ededed', paddingTop: '48px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '28px' }}>Collections</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {COLLECTIONS.filter((c) => c.handle !== 'all').slice(0, 4).map((c) => (
              <Link
                key={c.handle}
                to={`/collections/${c.handle}`}
                style={{ border: '1px solid #ededed', padding: '28px 20px', textAlign: 'center' }}
              >
                <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>{c.title}</h3>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {t.home.shopNow}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export function InstagramPage() {
  const { products } = useCart();
  const { t } = useLanguage();
  const gallery = products.slice(0, 8).map((p) => ({
    img: p.images[0],
    title: p.title,
    to: `/collections/${p.collection}/products/${p.handle}`,
  }));

  return (
    <main className="index-section">
      <div className="page-width">
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1>{t.home.igTitle}</h1>
          <p style={{ color: '#555555' }}>
            {t.home.igFollow} <strong>@giordanahaircompany</strong>
          </p>
        </header>
        <div className="instagram-grid">
          {gallery.map((g, i) => (
            <Link key={i} to={g.to} className="instagram-tile">
              <img src={g.img} alt={g.title} />
            </Link>
          ))}
        </div>

        <section style={{ marginTop: '64px', borderTop: '1px solid #ededed', paddingTop: '48px' }}>
          <header style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2>Signature Hair Shades</h2>
            <p style={{ color: '#555555' }}>Custom tones available across our virgin hair collections</p>
          </header>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {CUSTOM_SHADE_GALLERY.map((shade) => (
              <div key={shade.code} style={{ border: '1px solid #ededed', padding: '14px', textAlign: 'center' }}>
                <img
                  src={shade.images[0]}
                  alt={shade.label}
                  style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', marginBottom: '10px' }}
                />
                <div style={{ fontSize: '13px', fontWeight: 500 }}>{shade.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export function PolicyPage({ title, body }: { title: string; body: string[] }) {
  return (
    <main className="index-section">
      <div className="page-width--narrow">
        <h1 style={{ textAlign: 'center', marginBottom: '36px' }}>{title}</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', lineHeight: 1.85 }}>
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </main>
  );
}

export function AccountPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="index-section">
      <div className="page-width--narrow" style={{ maxWidth: '460px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '28px' }}>{t.nav.login}</h1>
        {submitted ? (
          <div style={{ border: '1px solid #000000', padding: '24px', textAlign: 'center' }}>
            <p>
              Customer accounts will automatically connect to your Shopify Customer Portal once
              your Shopify store domain is linked in <code>.env</code>.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            style={{ display: 'grid', gap: '14px' }}
          >
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{ padding: '12px 14px', border: '1px solid #d4d4d4' }} />
            <input required type="password" placeholder="Password" style={{ padding: '12px 14px', border: '1px solid #d4d4d4' }} />
            <button type="submit" className="btn btn--full">{t.nav.login}</button>
          </form>
        )}
      </div>
    </main>
  );
}
