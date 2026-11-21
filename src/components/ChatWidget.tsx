import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function ChatWidget() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [sentMessages, setSentMessages] = useState<string[]>([]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSentMessages((prev) => [...prev, message.trim()]);
    setMessage('');
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 80 }}>
      {open && (
        <div
          style={{
            width: '320px',
            background: '#ffffff',
            border: '1px solid #e5e5e5',
            borderRadius: '16px',
            boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
            marginBottom: '12px',
            overflow: 'hidden',
          }}
        >
          <div style={{ background: '#000000', color: '#ffffff', padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <strong style={{ display: 'block', fontSize: '14px' }}>Aimeehaircompany</strong>
              <span style={{ fontSize: '11px', opacity: 0.8 }}>Online</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>

          <div style={{ padding: '16px', maxHeight: '240px', overflowY: 'auto', display: 'grid', gap: '10px' }}>
            <div style={{ background: '#f3f3f3', padding: '10px 12px', borderRadius: '10px', fontSize: '13px', lineHeight: 1.5 }}>
              {t.pages.chatGreeting}
            </div>
            {sentMessages.map((msg, i) => (
              <div key={i} style={{ background: '#000000', color: '#ffffff', padding: '9px 12px', borderRadius: '10px', fontSize: '13px', justifySelf: 'end' }}>
                {msg}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid #ededed', padding: '8px 12px', gap: '8px' }}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.pages.chatPlaceholder}
              style={{ flex: 1, border: 'none', outline: 'none', fontSize: '13px' }}
            />
            <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000000' }} aria-label="Send message">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with us"
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '14px',
          background: '#3d3d3d',
          color: '#ffffff',
          border: 'none',
          boxShadow: '0 6px 20px rgba(0,0,0,0.22)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto',
        }}
      >
        <MessageSquare size={20} />
      </button>
    </div>
  );
}
