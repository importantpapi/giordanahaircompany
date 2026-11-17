import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const POPUP_STORAGE_KEY = 'giordanahaircompany_popup_dismissed';

export function NewsletterPopup() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(POPUP_STORAGE_KEY);
      if (dismissed) return;
      const timer = setTimeout(() => setOpen(true), 4500);
      return () => clearTimeout(timer);
    } catch {
      // ignore
    }
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(POPUP_STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    try {
      localStorage.setItem(POPUP_STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  };

  if (!open) return null;

  return (
    <>
      <div className="drawer-backdrop" onClick={dismiss} />
      <div
        role="dialog"
        aria-label={t.pages.popupTitle}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '440px',
          maxWidth: '92vw',
          background: '#000000',
          color: '#ffffff',
          padding: '44px 36px',
          zIndex: 120,
          textAlign: 'center',
          border: '1px solid #363636',
        }}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          style={{ position: 'absolute', top: '14px', right: '14px', background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        <h2 style={{ color: '#ffffff', fontSize: '28px', marginBottom: '12px' }}>
          {t.pages.popupTitle}
        </h2>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.82)', marginBottom: '24px', lineHeight: 1.7 }}>
          {t.pages.popupBody}
        </p>

        {submitted ? (
          <div style={{ border: '1px solid #363636', padding: '14px', fontSize: '13px' }}>
            {t.footer.subscribeSuccess}
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.footer.emailPlaceholder}
              style={{ width: '100%', height: '44px', padding: '0 14px', border: 'none', background: '#ffffff', color: '#000000', fontSize: '13px' }}
            />
            <button
              type="submit"
              className="btn btn--full"
              style={{ background: '#ffffff', color: '#000000', borderColor: '#ffffff' }}
            >
              {t.pages.subscribe}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
