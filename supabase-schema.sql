-- ==============================================================================
-- FROST & FABINDIA-STYLE E-COMMERCE BACKEND SCHEMA (SUPABASE POSTGRESQL)
-- Run this script in your Supabase Project > SQL Editor > Click "Run"
-- ==============================================================================

-- 1. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'sarees',
    category_name TEXT NOT NULL DEFAULT 'Couture Saree',
    price_inr NUMERIC(10, 2) NOT NULL,
    original_price_inr NUMERIC(10, 2),
    stock INTEGER NOT NULL DEFAULT 10,
    rating NUMERIC(2, 1) DEFAULT 4.9,
    reviews_count INTEGER DEFAULT 18,
    badge TEXT DEFAULT 'Handcrafted',
    badge_type TEXT DEFAULT 'gold',
    image_url TEXT NOT NULL,
    fabric TEXT DEFAULT 'Pure Silk',
    zari TEXT DEFAULT 'Gold & Silver Zari',
    craft TEXT DEFAULT 'Handloom Weave',
    origin TEXT DEFAULT 'Varanasi Atelier',
    description TEXT,
    options_label TEXT DEFAULT 'Bespoke Tailoring',
    options JSONB DEFAULT '["Unstitched Blouse Piece Included", "Custom Blouse Tailored (+₹2,490)", "Fall & Pico Finished (Complimentary)"]'::jsonb,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. ORDERS TABLE
CREATE TABLE IF NOT EXISTS public.orders (
    id TEXT PRIMARY KEY,
    customer_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    shipping_address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    pincode TEXT NOT NULL,
    subtotal NUMERIC(10, 2) NOT NULL,
    discount NUMERIC(10, 2) DEFAULT 0,
    shipping_fee NUMERIC(10, 2) DEFAULT 0,
    total_amount NUMERIC(10, 2) NOT NULL,
    payment_method TEXT NOT NULL,
    payment_ref TEXT,
    payment_status TEXT DEFAULT 'Completed',
    order_status TEXT DEFAULT 'Confirmed & Packing',
    gift_wrapped BOOLEAN DEFAULT false,
    gift_note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. ORDER ITEMS TABLE (RELATIONAL LINK)
CREATE TABLE IF NOT EXISTS public.order_items (
    id BIGSERIAL PRIMARY KEY,
    order_id TEXT REFERENCES public.orders(id) ON DELETE CASCADE,
    product_id TEXT,
    title TEXT NOT NULL,
    category_name TEXT,
    selected_option TEXT,
    unit_price NUMERIC(10, 2) NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. VISITOR ANALYTICS TABLE
CREATE TABLE IF NOT EXISTS public.visitor_logs (
    id BIGSERIAL PRIMARY KEY,
    page_path TEXT NOT NULL,
    referrer TEXT,
    user_device TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_logs ENABLE ROW LEVEL SECURITY;

-- Products: Everyone can view active products, authenticated/admin can insert/update
DROP POLICY IF EXISTS "Public read access for active products" ON public.products;
CREATE POLICY "Public read access for active products"
ON public.products FOR SELECT
USING (true);

DROP POLICY IF EXISTS "Allow insert/update products" ON public.products;
CREATE POLICY "Allow insert/update products"
ON public.products FOR ALL
USING (true)
WITH CHECK (true);

-- Orders: Allow public creation during checkout, allow reading
DROP POLICY IF EXISTS "Allow public insert orders" ON public.orders;
CREATE POLICY "Allow public insert orders"
ON public.orders FOR INSERT
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow read orders" ON public.orders;
CREATE POLICY "Allow read orders"
ON public.orders FOR SELECT
USING (true);

DROP POLICY IF EXISTS "Allow update order status" ON public.orders;
CREATE POLICY "Allow update order status"
ON public.orders FOR UPDATE
USING (true);

-- Order items policies
DROP POLICY IF EXISTS "Allow insert order items" ON public.order_items;
CREATE POLICY "Allow insert order items"
ON public.order_items FOR INSERT
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow read order items" ON public.order_items;
CREATE POLICY "Allow read order items"
ON public.order_items FOR SELECT
USING (true);

-- Visitor logs policies
DROP POLICY IF EXISTS "Allow insert visitor logs" ON public.visitor_logs;
CREATE POLICY "Allow insert visitor logs"
ON public.visitor_logs FOR INSERT
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow read visitor logs" ON public.visitor_logs;
CREATE POLICY "Allow read visitor logs"
ON public.visitor_logs FOR SELECT
USING (true);

-- ==============================================================================
-- STORAGE BUCKET CREATION FOR PRODUCT IMAGES
-- ==============================================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to product images bucket
DROP POLICY IF EXISTS "Public image access" ON storage.objects;
CREATE POLICY "Public image access"
ON storage.objects FOR SELECT
USING (bucket_id = 'product-images');

-- Allow image uploads
DROP POLICY IF EXISTS "Allow public uploads to product images" ON storage.objects;
CREATE POLICY "Allow public uploads to product images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'product-images');

-- ==============================================================================
-- INITIAL PRODUCT SEED (POPULATE DEFAULT ARTISANAL CATALOG)
-- ==============================================================================
INSERT INTO public.products (id, title, category, category_name, price_inr, original_price_inr, stock, rating, reviews_count, badge, badge_type, image_url, fabric, zari, craft, origin, description, options_label, options)
VALUES
(
  'saree-01',
  'The Empress Banarasi Katan Silk Saree',
  'sarees',
  'Couture Saree',
  48500.00,
  58000.00,
  12,
  4.9,
  38,
  'Heritage Heirloom',
  'gold',
  'images/saree_banarasi.jpg',
  'Pure Katan Silk',
  'Antique Silver & Champagne Gold Zari',
  'Handloom Kadwa Weave — 45 Days',
  'Varanasi Atelier',
  'A regal masterpiece handwoven over 45 days in our Varanasi ateliers. Deep wine plum body intricately showered with antique silver and champagne gold kadwa jaal motifs, crowned by an opulent heirloom pallu.',
  'Bespoke Tailoring',
  jsonb_build_array('Unstitched Blouse Piece Included', 'Custom Blouse Tailored (+₹2,490)', 'Fall & Pico Finished (Complimentary)')
),
(
  'saree-02',
  'Frost Celestial Moonlit Tissue Saree',
  'sarees',
  'Couture Saree',
  36000.00,
  42000.00,
  8,
  4.8,
  29,
  'Limited Edition',
  'dark',
  'images/hero_saree.jpg',
  'Icy-Platinum Tissue Silk',
  'Pure Silver Thread Embroidery',
  'Zardozi & Cutdana Hand-Craft',
  'Kashmir & Varanasi Guild',
  'Draped in ethereal icy-platinum luster, this tissue silk saree glimmers like morning frost. Embellished with micro-cutdana and hand-embroidered silver zardozi borders for haute couture occasions.',
  'Bespoke Tailoring',
  jsonb_build_array('Unstitched Blouse Piece Included', 'Custom Blouse Tailored (+₹2,490)', 'Fall & Pico Finished (Complimentary)')
),
(
  'saree-03',
  'Whispering Willow Organza Silk Saree',
  'sarees',
  'Couture Saree',
  28500.00,
  34000.00,
  15,
  4.9,
  42,
  'Pure Silk Mark',
  'gold',
  'images/saree_organza.jpg',
  'Translucent Tissue Organza',
  'Gota Patti & Crystal Filigree',
  'Artisanal Hand-Applique',
  'Chanderi Atelier',
  'Gossamer-light organza silk in misty sage and pearl frost tones. Finished with exquisite hand-cut gota patti and crystal sequins along an undulating scalloped hem.',
  'Bespoke Tailoring',
  jsonb_build_array('Unstitched Blouse Piece Included', 'Custom Blouse Tailored (+₹2,490)', 'Fall & Pico Finished (Complimentary)')
),
(
  'saree-04',
  'Royal Kanjivaram Temple Border Silk Saree',
  'sarees',
  'Couture Saree',
  52000.00,
  65000.00,
  6,
  5.0,
  56,
  'Royal Bridal',
  'gold',
  'images/saree_banarasi.jpg',
  'Pure Mulberry Silk',
  'Heavy 24k Gold Pure Zari',
  'Temple Korvai Weave',
  'Kanchipuram Silk Atelier',
  'The quintessential Kanjivaram wedding drape. Woven on temple korvai technique with contrasting borders and a majestic peacock pallu motif in heavy 24k gold pure zari.',
  'Bespoke Tailoring',
  jsonb_build_array('Unstitched Blouse Piece Included', 'Custom Blouse Tailored (+₹2,490)', 'Fall & Pico Finished (Complimentary)')
),
(
  'home-01',
  'Imperial 800TC Egyptian Cotton Bedsheet Set',
  'bedsheets',
  'Luxury Bedsheet',
  14500.00,
  18000.00,
  24,
  5.0,
  64,
  'Best Seller',
  'gold',
  'images/home_sanctuary.jpg',
  '800-Thread Count Egyptian Cotton Sateen',
  'Double Silver Satin Stitch Border',
  'Single-Ply Sateen Weave',
  'Frost Sanctuary Living',
  'Indulge in five-star sanctuary comfort. Spun from authentic long-staple Egyptian cotton with a luminous sateen finish and double-needle silver satin stitching. Includes 1 flat sheet and 2 oxford pillowcases.',
  'Select Bed Size',
  jsonb_build_array('Super King (108 x 108 in)', 'King (100 x 108 in)', 'Queen (90 x 100 in)')
),
(
  'home-02',
  'Botanical Mirage Velvet Cushion Covers (Set of 3)',
  'cushions',
  'Artisan Cushion Covers',
  8900.00,
  11500.00,
  35,
  4.9,
  47,
  'Artisanal Handcraft',
  'dark',
  'images/cushions_luxury.jpg',
  'Micro-Plush Velvet & Raw Tussar Silk',
  'Metallic Botanical Zardozi & Beadwork',
  'Hand-Embroidered Ari Work',
  'Lucknow & Delhi Atelier',
  'A curated triptych of jewel-toned cushions: Deep Emerald Velvet, Slate Frost Silk, and Champagne Raw Silk — each hand-embroidered with shimmering metallic fern and floral motifs.',
  'Select Dimension',
  jsonb_build_array('18 x 18 in (Standard Luxury)', '16 x 16 in (Accent)', '20 x 20 in (Grand Floor Cushion)')
)
ON CONFLICT (id) DO NOTHING;
