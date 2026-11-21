import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CartDrawer } from './components/CartDrawer';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MobileMenuDrawer } from './components/MobileMenuDrawer';
import { NewsletterPopup } from './components/NewsletterPopup';
import { SearchModal } from './components/SearchModal';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { CartPage } from './pages/CartPage';
import { CollectionPage } from './pages/CollectionPage';
import { HomePage } from './pages/HomePage';
import {
  AccountPage,
  CareGuidePage,
  ContactPage,
  FaqPage,
  InstagramPage,
  NewsPage,
  OurStoryPage,
  PolicyPage,
  ReviewsPage,
  SalonPoliciesPage,
  ServicesPage,
  ThanksPage,
} from './pages/InfoPages';
import { ProductPage } from './pages/ProductPage';
import { SearchPage } from './pages/SearchPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <LanguageProvider>
      <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <SearchModal />
        <CartDrawer />
        <MobileMenuDrawer />
        <NewsletterPopup />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections/:handle" element={<CollectionPage />} />
          <Route path="/collections/:collection/products/:handle" element={<ProductPage />} />
          <Route path="/products/:handle" element={<ProductPage />} />
          <Route path="/pages/our-story" element={<OurStoryPage />} />
          <Route path="/pages/services" element={<ServicesPage />} />
          <Route path="/pages/faq" element={<FaqPage />} />
          <Route path="/pages/reviews" element={<ReviewsPage />} />
          <Route path="/pages/contact" element={<ContactPage />} />
          <Route path="/pages/get-the-most-from-your-hair" element={<CareGuidePage />} />
          <Route path="/pages/instagram" element={<InstagramPage />} />
          <Route path="/pages/thanks" element={<ThanksPage />} />
          <Route path="/blogs/news" element={<NewsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/policies/shipping-policy"
            element={
              <PolicyPage
                title="Shipping Policy"
                body={[
                  'Shipping charges may vary. All shipping costs must be paid in full at the time of the order.',
                  'All orders require 2-3 business days to process before shipment. Once your package is shipped, you will receive a tracking number by email.',
                  'Standard shipping: 5-10 business days after your order is placed. All orders within the US are shipped via FedEx with receipt confirmation and insurance. Packages shipped to a PO BOX will be shipped via USPS only.',
                  'Shipping Delays: If you have a deadline or hair appointment, please order far enough in advance to allow for unanticipated carrier or holiday delays.',
                  'Failed Deliveries / Incorrect Address: Please verify all address details including apartment numbers before placing your order.',
                ]}
              />
            }
          />
          <Route
            path="/policies/refund-policy"
            element={
              <PolicyPage
                title="Refund Policy"
                body={[
                  'All sales are final policy: Please carefully review your order before confirming your purchase. All sales are considered final.',
                  'We do not offer refunds or exchanges.',
                  'You can always contact us for any questions at info@giordanahaircompany.com.',
                ]}
              />
            }
          />
          <Route
            path="/policies/privacy-policy"
            element={
              <PolicyPage
                title="Privacy Policy"
                body={[
                  'Giordanahaircompany respects your privacy and is committed to protecting your personal information.',
                  'Information collected during checkout or newsletter signup is used strictly to fulfill your orders and share brand updates.',
                ]}
              />
            }
          />
          <Route path="/pages/cancellation-policy" element={<SalonPoliciesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <Footer />
        <ChatWidget />
      </BrowserRouter>
    </CartProvider>
    </LanguageProvider>
  );
}

export default App;
