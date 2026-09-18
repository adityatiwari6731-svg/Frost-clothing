# FROST | Haute Couture & Sanctuary Living

> **Haute Couture Indian Sarees, Handcrafted Kurtas & Sanctuary Living Linens**
> An artisanal luxury e-commerce experience inspired by Fabindia, built with Vanilla HTML5, CSS3, JavaScript, and powered by Supabase Cloud PostgreSQL & Storage.

---

## ✨ Features & Architecture

### 1. Storefront & Customer Journeys
- **Maison Homepage (`index.html`)**: Dynamic luxury hero slider, dual couture spotlights, curated collection grid, room visualizer preview, and patron reviews.
- **Couture Sarees & Kurtas (`sarees.html`)**: Category filter pills (All, Banarasi, Organza, Kanjivaram, Kurtas), price & rating sorting, responsive multi-column catalog.
- **Home & Sanctuary Living (`home-living.html`)**: Filterable luxury bedsheets (800TC Egyptian cotton), artisan cushion covers, jacquard banquet linens, and pure mulberry silk pillows.
- **Interactive Product Detail Page (`product.html`)**:
  - Multi-angle gallery with lens zoom
  - Bespoke tailoring & size option selector
  - Live Indian 6-digit PIN code delivery estimator with express dispatch calculator
  - Craftsmanship & fabric care accordions
  - Sticky mobile actions and quick bag addition
- **Dedicated Shopping Bag (`cart.html`)**:
  - Dynamic free shipping threshold meter (₹20,000 pan-India)
  - Bespoke luxury gift packaging option with personalized gift note
  - Indian festive promo codes (`FABINDIA15`, `FROST10`)
- **Pan-India 3-Step Checkout (`checkout.html`)**:
  - Shipping address capture with state & PIN code autofill
  - Indian payment gateway interface: UPI (QR & VPA auto-suffix for `@okhdfcbank`, `@okicici`, `@okaxis`), Credit/Debit Cards, Net Banking, and Cash on Delivery
  - Tax invoice receipt generator with print support
- **Editorial Lookbook (`lookbook.html`)**: Interactive shoppable hotspot markers.
- **Artisan Heritage & Atelier (`heritage.html`)**: Celebrating master weaving sanctuaries.
- **Concierge Salon (`contact.html`)**: Private stylist appointment booking.

### 2. Private Administrative Suite (`admin.html`)
- **Direct Image Upload Dropzone**: Drag-and-drop or select images directly from your device, automatically uploaded to Supabase Storage (`product-images` bucket) via public CDN.
- **Cloud Product Management**: Live query, addition, editing, and deletion directly with Supabase PostgreSQL (`products` table).
- **Real-Time Order Tracking**: Review live incoming customer orders and update fulfillment statuses (*Confirmed & Packing* &rarr; *Processing* &rarr; *Shipped* &rarr; *Delivered*).
- **Storefront & KPI Analytics**: Real-time traffic, order count, and revenue metrics.
- **Live Status Diagnostics**: Live health check with latency measurement for Supabase database.

### 3. Backend & Cloud Infrastructure
- **PostgreSQL Database (`supabase-schema.sql`)**: Idempotent relational schema for `products`, `orders`, `order_items`, and `visitor_logs` with Row Level Security (RLS).
- **Cloud Storage**: Public bucket `product-images` for asset hosting.
- **Resilient Client Engine (`supabase-client.js`)**: Dual SDK + native browser `fetch()` REST API support for 100% offline-to-online durability.

---

## 🚀 Getting Started

### Local Viewing
Double-click `index.html` to launch the storefront or `admin.html` (Default: `admin` / `frost2024`) to launch the admin console.

### Supabase Setup (Optional for Custom Deployment)
1. Run `supabase-schema.sql` in your Supabase SQL Editor.
2. Update `SUPABASE_CONFIG` in `supabase-client.js` with your Project URL and Anon Public Key.

---

## 🛠️ Tech Stack
- **Frontend**: HTML5, Vanilla CSS3 (Custom Design System & HSL Color Palettes), Vanilla JavaScript (ES6+)
- **Typography**: Playfair Display, Cinzel, Montserrat, Cormorant Garamond
- **Database**: PostgreSQL via Supabase
- **Cloud Storage**: Supabase Storage CDN
- **Security**: 256-Bit SSL Mock Gateway & Row Level Security Policies
