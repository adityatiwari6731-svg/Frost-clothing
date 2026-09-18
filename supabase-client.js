/**
 * FROST | COUTURE & LIVING
 * High-Resilience Supabase Backend Client Engine
 * 
 * Provides dual-mode communication:
 * 1. Supabase JS SDK (if available)
 * 2. Native Browser fetch() REST API (zero dependencies, 100% reliable)
 */

const SUPABASE_CONFIG = {
  url: 'https://mnzuezyijznqjeqrnrmz.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uenVlenlpanpucWplcXJucm16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3NDgxMjcsImV4cCI6MjEwNTMyNDEyN30.gS6mcpuQqIGeB2ptRlhP0c2_9CvI6oBLotw8Hd-_eU4',
  storageBucket: 'product-images'
};

// Global state tracking
let supabaseClient = null;
let supabaseConnectionStatus = {
  tested: false,
  connected: false,
  latencyMs: 0,
  error: null
};

/**
 * Get or initialize the Supabase client
 */
function getSupabase() {
  if (supabaseClient) return supabaseClient;
  if (typeof supabase !== 'undefined' && typeof supabase.createClient === 'function') {
    try {
      supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      return supabaseClient;
    } catch (e) {
      console.warn('Supabase SDK initialization warning:', e.message);
    }
  }
  return null;
}

/**
 * Direct REST API fetcher — works in any browser without requiring external SDK
 */
async function supabaseRest(path, method = 'GET', body = null, headers = {}) {
  const url = `${SUPABASE_CONFIG.url}/rest/v1/${path}`;
  const reqHeaders = {
    'apikey': SUPABASE_CONFIG.anonKey,
    'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
    ...headers
  };

  const opts = {
    method,
    headers: reqHeaders
  };
  if (body) {
    opts.body = typeof body === 'string' ? body : JSON.stringify(body);
  }

  const res = await fetch(url, opts);
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Supabase REST error [${res.status}]: ${txt}`);
  }

  // Handle 204 No Content
  if (res.status === 204) return null;
  return await res.json();
}

/**
 * Health check to verify connection to Supabase
 */
async function apiCheckConnection() {
  const start = performance.now();
  try {
    const data = await supabaseRest('products?select=id&limit=1');
    const latency = Math.round(performance.now() - start);
    supabaseConnectionStatus = {
      tested: true,
      connected: true,
      latencyMs: latency,
      error: null
    };
    window.dispatchEvent(new CustomEvent('frost:supabase-status', { detail: supabaseConnectionStatus }));
    return supabaseConnectionStatus;
  } catch (err) {
    supabaseConnectionStatus = {
      tested: true,
      connected: false,
      latencyMs: 0,
      error: err.message
    };
    window.dispatchEvent(new CustomEvent('frost:supabase-status', { detail: supabaseConnectionStatus }));
    return supabaseConnectionStatus;
  }
}

// Auto-test connection on load
if (typeof window !== 'undefined') {
  setTimeout(apiCheckConnection, 300);
}

// ==============================================================================
// 1. PRODUCTS API
// ==============================================================================

/**
 * Fetch all active products from Supabase
 */
async function apiGetProducts() {
  try {
    const data = await supabaseRest('products?select=*&is_active=eq.true&order=created_at.desc');
    if (!Array.isArray(data)) return [];

    return data.map(p => ({
      id: p.id,
      title: p.title,
      category: p.category,
      categoryName: p.category_name || (p.category === 'sarees' ? 'Couture Saree' : 'Home Sanctuary'),
      priceINR: Number(p.price_inr),
      originalPriceINR: p.original_price_inr ? Number(p.original_price_inr) : null,
      stock: p.stock ?? 10,
      rating: Number(p.rating || 4.9),
      reviewsCount: p.reviews_count ?? 18,
      badge: p.badge || 'Handcrafted',
      badgeType: p.badge_type || 'gold',
      image: p.image_url,
      fabric: p.fabric || 'Pure Silk Mark',
      zari: p.zari || 'Antique Silver & Champagne Gold Zari',
      craft: p.craft || 'Handloom Master Weave',
      origin: p.origin || 'Varanasi Atelier',
      description: p.description || p.title,
      optionsLabel: p.options_label || 'Bespoke Tailoring',
      options: Array.isArray(p.options) ? p.options : ['Standard Edition'],
      active: p.is_active !== false,
      fromSupabase: true
    }));
  } catch (err) {
    console.warn('apiGetProducts REST fallback error:', err.message);
    return typeof FROST_PRODUCTS !== 'undefined' ? FROST_PRODUCTS : [];
  }
}

/**
 * Fetch ALL products (including inactive) for Admin Panel
 */
async function apiGetAdminProducts() {
  try {
    const data = await supabaseRest('products?select=*&order=created_at.desc');
    if (!Array.isArray(data)) return [];

    return data.map(p => ({
      id: p.id,
      title: p.title,
      category: p.category,
      categoryName: p.category_name,
      priceINR: Number(p.price_inr),
      originalPriceINR: p.original_price_inr ? Number(p.original_price_inr) : null,
      stock: p.stock ?? 10,
      rating: Number(p.rating || 4.9),
      reviewsCount: p.reviews_count ?? 18,
      badge: p.badge || 'Handcrafted',
      badgeType: p.badge_type || 'gold',
      image: p.image_url,
      fabric: p.fabric || 'Pure Silk Mark',
      description: p.description || p.title,
      active: p.is_active !== false,
      fromSupabase: true
    }));
  } catch (err) {
    console.warn('apiGetAdminProducts fallback error:', err.message);
    return [];
  }
}

/**
 * Upload an image file directly to Supabase Storage Bucket
 * Returns the public CDN URL
 */
async function apiUploadProductImage(file) {
  const fileExt = (file.name || 'image.jpg').split('.').pop();
  const cleanName = (file.name || 'product')
    .replace(/[^a-zA-Z0-9]/g, '_')
    .slice(0, 30);
  const fileName = `catalog/${Date.now()}_${cleanName}.${fileExt}`;

  const uploadUrl = `${SUPABASE_CONFIG.url}/storage/v1/object/${SUPABASE_CONFIG.storageBucket}/${fileName}`;

  const res = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_CONFIG.anonKey,
      'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
      'Content-Type': file.type || 'image/jpeg',
      'x-upsert': 'true'
    },
    body: file
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Storage upload failed [${res.status}]: ${txt}`);
  }

  // Generate public CDN URL
  const publicUrl = `${SUPABASE_CONFIG.url}/storage/v1/object/public/${SUPABASE_CONFIG.storageBucket}/${fileName}`;
  return publicUrl;
}

/**
 * Insert or Update Product in Supabase
 */
async function apiSaveProduct(productData) {
  const row = {
    id: productData.id || `custom-${Date.now()}`,
    title: productData.title,
    category: productData.category || 'sarees',
    category_name: productData.category === 'sarees' ? 'Couture Saree' : 'Home Sanctuary',
    price_inr: Number(productData.priceINR),
    original_price_inr: productData.originalPriceINR ? Number(productData.originalPriceINR) : null,
    stock: parseInt(productData.stock) || 10,
    badge: productData.badge || 'New Creation',
    badge_type: 'gold',
    image_url: productData.image,
    fabric: productData.fabric || 'Pure Handcrafted Weave',
    description: productData.description || productData.title,
    is_active: productData.active !== false
  };

  const result = await supabaseRest('products', 'POST', row, {
    'Prefer': 'resolution=merge-duplicates,return=representation'
  });

  return result;
}

/**
 * Delete a product from Supabase
 */
async function apiDeleteProduct(productId) {
  await supabaseRest(`products?id=eq.${productId}`, 'DELETE');
  return true;
}

// ==============================================================================
// 2. ORDERS & TRANSACTIONS API
// ==============================================================================

/**
 * Submit Order & Order Items to Supabase
 */
async function apiCreateOrder(orderData, items) {
  // 1. Insert Order
  const orderRow = {
    id: orderData.id,
    customer_name: orderData.customer,
    email: orderData.email,
    phone: orderData.phone,
    shipping_address: orderData.address,
    city: orderData.city || 'Mumbai',
    state: orderData.state || 'Maharashtra',
    pincode: orderData.pincode || '400001',
    subtotal: Number(orderData.totals.subtotal),
    discount: Number(orderData.totals.disc || 0),
    shipping_fee: Number(orderData.totals.ship || 0),
    total_amount: Number(orderData.totals.total),
    payment_method: orderData.paymentMethod || 'UPI (Google Pay / PhonePe)',
    payment_ref: orderData.paymentRef || `UPI-${Date.now()}`,
    payment_status: 'Completed',
    order_status: 'Confirmed & Packing',
    gift_wrapped: Boolean(orderData.giftWrapped),
    gift_note: orderData.giftNote || null
  };

  const insertedOrder = await supabaseRest('orders', 'POST', orderRow, {
    'Prefer': 'return=representation'
  });

  // 2. Insert Line Items
  if (items && items.length > 0) {
    const itemRows = items.map(item => ({
      order_id: orderData.id,
      product_id: item.id || null,
      title: item.title,
      category_name: item.categoryName || 'Couture Saree',
      selected_option: item.option || 'Standard Luxury Edition',
      unit_price: Number(item.priceINR || item.price || 0),
      quantity: parseInt(item.qty) || 1,
      image_url: item.image || null
    }));

    try {
      await supabaseRest('order_items', 'POST', itemRows, {
        'Prefer': 'return=representation'
      });
    } catch (itemErr) {
      console.warn('Order items insert notice:', itemErr.message);
    }
  }

  return Array.isArray(insertedOrder) ? insertedOrder[0] : orderRow;
}

/**
 * Fetch All Orders for Admin Dashboard
 */
async function apiGetAdminOrders() {
  try {
    const data = await supabaseRest('orders?select=*,order_items(*)&order=created_at.desc');
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.warn('apiGetAdminOrders fallback error:', err.message);
    return [];
  }
}

/**
 * Update Order Fulfillment Status in Supabase
 */
async function apiUpdateOrderStatus(orderId, newStatus) {
  try {
    await supabaseRest(`orders?id=eq.${orderId}`, 'PATCH', {
      order_status: newStatus
    });
    return true;
  } catch (err) {
    console.warn('apiUpdateOrderStatus error:', err.message);
    return false;
  }
}
