import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, 'data');
const DB_PATH = path.join(DATA_DIR, 'store.json');

fs.mkdirSync(DATA_DIR, { recursive: true });

function readDb() {
  if (!fs.existsSync(DB_PATH)) {
    const initial = {
      orders: [],
      reviews: [],
      appointments: [],
      contacts: [],
      subscribers: [],
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2));
    return initial;
  }
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
}

function writeDb(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    brand: 'Aimeehaircompany',
    shopifyConnected: Boolean(
      process.env.VITE_SHOPIFY_STORE_DOMAIN && process.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN
    ),
  });
});

// Reviews
app.get('/api/reviews', (req, res) => {
  const db = readDb();
  const { productTitle } = req.query;
  const reviews = productTitle
    ? db.reviews.filter((r) => r.productTitle?.toLowerCase() === String(productTitle).toLowerCase())
    : db.reviews;
  res.json({ reviews });
});

app.post('/api/reviews', (req, res) => {
  const { author, email, rating = 5, productTitle, title, body } = req.body || {};
  if (!author || !title || !body) {
    return res.status(400).json({ error: 'Author, title, and review body are required.' });
  }
  const db = readDb();
  const review = {
    id: `rev-${Date.now()}`,
    author,
    email: email || '',
    rating: Number(rating) || 5,
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    productTitle: productTitle || 'Aimeehaircompany Extensions',
    title,
    body,
    verified: true,
  };
  db.reviews.unshift(review);
  writeDb(db);
  res.status(201).json({ review });
});

// Appointments
app.post('/api/appointments', (req, res) => {
  const { service, name, email, date } = req.body || {};
  if (!service || !name || !email || !date) {
    return res.status(400).json({ error: 'Service, name, email, and date are required.' });
  }
  const db = readDb();
  const appointment = {
    id: `appt-${Date.now()}`,
    service,
    name,
    email,
    date,
    createdAt: new Date().toISOString(),
  };
  db.appointments.push(appointment);
  writeDb(db);
  res.status(201).json({ appointment });
});

// Contact & Product Questions
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message, productTitle } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  const db = readDb();
  const entry = {
    id: `msg-${Date.now()}`,
    name,
    email,
    phone: phone || '',
    productTitle: productTitle || '',
    message,
    createdAt: new Date().toISOString(),
  };
  db.contacts.push(entry);
  writeDb(db);
  res.status(201).json({ ok: true, id: entry.id });
});

// Newsletter
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body || {};
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }
  const db = readDb();
  if (!db.subscribers.some((s) => s.email.toLowerCase() === String(email).toLowerCase())) {
    db.subscribers.push({ email, createdAt: new Date().toISOString() });
    writeDb(db);
  }
  res.status(201).json({ ok: true, code: 'AIMEE10' });
});

// Orders (local checkout fallback before Shopify is connected)
app.post('/api/orders', (req, res) => {
  const { items, subtotal, discountCode, discountAmount, total, orderNote } = req.body || {};
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Cart is empty.' });
  }
  const db = readDb();
  const orderNumber = `AHC-${1000 + db.orders.length + 1}`;
  const order = {
    orderNumber,
    items,
    subtotal,
    discountCode: discountCode || '',
    discountAmount: discountAmount || 0,
    total,
    orderNote: orderNote || '',
    createdAt: new Date().toISOString(),
  };
  db.orders.push(order);
  writeDb(db);
  res.status(201).json({ order });
});

// Serve static production build if present
const DIST_DIR = path.join(__dirname, '..', 'dist');
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
  app.get('/{*splat}', (_req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Aimeehaircompany API server listening on http://localhost:${PORT}`);
});
