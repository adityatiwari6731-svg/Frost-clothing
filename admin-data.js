/**
 * FROST ADMIN PANEL — DATA ENGINE
 * Stores and manages orders, products, visitors, analytics
 * All data persisted in localStorage (no server required)
 */

// ====================================================
// 1. AUTHENTICATION
// ====================================================
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'frost2024'  // Change this to your preferred password
};

function checkAdminAuth() {
  return sessionStorage.getItem('frost_admin_auth') === 'true';
}

function adminLogin(username, password) {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    sessionStorage.setItem('frost_admin_auth', 'true');
    return true;
  }
  return false;
}

function adminLogout() {
  sessionStorage.removeItem('frost_admin_auth');
  window.location.reload();
}

// ====================================================
// 2. VISITOR TRACKING
// ====================================================
function trackVisit() {
  const visits = JSON.parse(localStorage.getItem('frost_visits') || '[]');
  const today = new Date().toISOString().split('T')[0];
  const hour = new Date().getHours();
  
  visits.push({
    date: today,
    hour: hour,
    page: window.location.pathname,
    userAgent: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop',
    referrer: document.referrer || 'Direct',
    timestamp: new Date().toISOString()
  });

  // Keep last 5000 visits
  if (visits.length > 5000) visits.splice(0, visits.length - 5000);
  localStorage.setItem('frost_visits', JSON.stringify(visits));
}

// ====================================================
// 3. DATA PERSISTENCE & CLEANUP
// ====================================================
function seedDemoData() {
  // Do not inject fake demo data automatically to keep statistics 100% genuine and real
  // If no visits or orders exist, start clean with real store interactions
  if (!localStorage.getItem('frost_orders')) {
    localStorage.setItem('frost_orders', JSON.stringify([]));
  }
  if (!localStorage.getItem('frost_visits')) {
    localStorage.setItem('frost_visits', JSON.stringify([]));
  }
}

function clearFakeData() {
  // Purge legacy demo orders and fake visitors
  try {
    const raw = JSON.parse(localStorage.getItem('frost_orders') || '[]');
    const realOrders = raw.filter(o => 
      o.id !== 'FAB-TEST-9010' && 
      o.customer !== 'Simulated Patron' && 
      !String(o.id || '').startsWith('FR-10020') &&
      !String(o.customer || '').toLowerCase().includes('simulated')
    );
    saveOrders(realOrders);
    
    // Clear fake visits
    localStorage.removeItem('frost_data_seeded');
    return { success: true, realOrdersCount: realOrders.length };
  } catch(e) {
    return { success: false, error: e.message };
  }
}

// ====================================================
// 4. ORDER MANAGEMENT HELPERS
// ====================================================
function getAllOrders() {
  const raw = JSON.parse(localStorage.getItem('frost_orders') || '[]');
  return raw.filter(o => 
    o.id !== 'FAB-TEST-9010' && 
    o.customer !== 'Simulated Patron' && 
    !String(o.id || '').startsWith('FR-10020') &&
    !String(o.customer || '').toLowerCase().includes('simulated')
  );
}

function saveOrders(orders) {
  const cleaned = (orders || []).filter(o => 
    o.id !== 'FAB-TEST-9010' && 
    o.customer !== 'Simulated Patron' && 
    !String(o.id || '').startsWith('FR-10020') &&
    !String(o.customer || '').toLowerCase().includes('simulated')
  );
  localStorage.setItem('frost_orders', JSON.stringify(cleaned));
}

function updateOrderStatus(orderId, newStatus) {
  const orders = getAllOrders();
  const idx = orders.findIndex(o => o.id === orderId);
  if (idx > -1) {
    orders[idx].status = newStatus;
    saveOrders(orders);
  }
  // Sync to Supabase
  if (typeof apiUpdateOrderStatus === 'function') {
    apiUpdateOrderStatus(orderId, newStatus).catch(err => {
      console.warn('Supabase order status sync warning:', err.message);
    });
  }
}

async function syncAdminOrdersFromSupabase() {
  if (typeof apiGetAdminOrders === 'function') {
    try {
      const dbOrders = await apiGetAdminOrders();
      if (dbOrders && dbOrders.length > 0) {
        const local = getAllOrders();
        dbOrders.forEach(dbo => {
          const idx = local.findIndex(lo => lo.id === dbo.id);
          const mappedOrder = {
            id: dbo.id,
            date: dbo.created_at ? dbo.created_at.split('T')[0] : new Date().toISOString().split('T')[0],
            customer: dbo.customer_name,
            email: dbo.email,
            city: dbo.city || 'Mumbai',
            country: 'India',
            items: (dbo.order_items && dbo.order_items.length > 0) 
              ? dbo.order_items.map(it => ({ title: it.title, qty: it.quantity || 1, price: Number(it.unit_price || 0) }))
              : [{ title: 'Bespoke Couture Order', qty: 1, price: Number(dbo.total_amount) }],
            subtotal: Number(dbo.subtotal),
            discount: Number(dbo.discount || 0),
            shipping: Number(dbo.shipping_fee || 0),
            total: Number(dbo.total_amount),
            status: dbo.order_status,
            paymentMethod: dbo.payment_method,
            giftWrapped: dbo.gift_wrapped,
            promoCode: ''
          };
          if (idx > -1) {
            local[idx] = mappedOrder;
          } else {
            local.unshift(mappedOrder);
          }
        });
        saveOrders(local);
        if (typeof renderOrdersTable === 'function') renderOrdersTable();
        if (typeof renderDashboard === 'function') renderDashboard();
      }
    } catch(err) {
      console.warn('Admin orders sync from Supabase warning:', err.message);
    }
  }
}

// ====================================================
// 5. PRODUCTS CATALOG (Admin-Managed)
// ====================================================
const DEFAULT_PRODUCTS = [
  {
    id: 'sage-linen-dress',
    title: 'Textured Linen Midi Dress',
    category: 'women',
    priceINR: 1899,
    originalPriceINR: 2499,
    badge: 'Bestseller',
    image: 'images/sage_linen_dress.jpg',
    fabric: '100% Textured Organic Linen',
    description: 'The breathable Indian linen and relaxed fit soothe with naturally airy texture.',
    stock: 24,
    active: true
  },
  {
    id: 'bordeaux-coord',
    title: 'Bordeaux Silk Blend Co-ord Set',
    category: 'women',
    priceINR: 2499,
    originalPriceINR: 3200,
    badge: 'Trending',
    image: 'images/bordeaux_coord.jpg',
    fabric: 'Silk-Linen Blend',
    description: 'A modern two-piece ensemble combining fluid drape and crisp tailoring.',
    stock: 18,
    active: true
  },
  {
    id: 'rose-kurti',
    title: 'Rose Handloom Cotton Kurti',
    category: 'women',
    priceINR: 1299,
    originalPriceINR: 1800,
    badge: 'Artisanal',
    image: 'images/rose_kurti.jpg',
    fabric: '100% Handspun Slub Cotton',
    description: 'Crafted from handloom cotton dyed in muted antique rose with needlework yoke.',
    stock: 30,
    active: true
  },
  {
    id: 'blockprint-bedsheet',
    title: 'Ivory Block Print Bedsheet Set',
    category: 'home',
    priceINR: 1499,
    originalPriceINR: 2100,
    badge: 'Home Sanctuary',
    image: 'images/blockprint_bedsheet.jpg',
    fabric: '100% Crisp Long-Staple Cotton',
    description: 'Hand-carved wooden block printed botanical motifs on breathable natural ivory cotton.',
    stock: 22,
    active: true
  },
  {
    id: 'curtains-green',
    title: 'Eucalyptus Linen Semi-Sheer Curtains (Pair)',
    category: 'home',
    priceINR: 2199,
    originalPriceINR: 2899,
    badge: 'Serene Living',
    image: 'images/curtains_green.jpg',
    fabric: 'Filtered Light Textured Linen',
    description: 'Bespoke eucalyptus green linen drapes that filter natural sunlight into gentle warmth.',
    stock: 15,
    active: true
  },
  {
    id: 'table-runner',
    title: 'Minimalist Natural Linen Table Runner',
    category: 'home',
    priceINR: 699,
    originalPriceINR: 999,
    badge: 'Dining Classic',
    image: 'images/table_runner.jpg',
    fabric: 'Heavyweight Washed French Flax Linen',
    description: 'Understated organic flax linen with subtle mitred hemstitching for mindful gatherings.',
    stock: 40,
    active: true
  },
  {
    id: 'cushion-cream',
    title: 'Cream Embroidered Cushion Covers (Pair)',
    category: 'home',
    priceINR: 499,
    originalPriceINR: 799,
    badge: 'Bestseller',
    image: 'images/cushion_cream.jpg',
    fabric: 'Washed Pure Linen with Needlework',
    description: 'Set of two soft cream linen cushion covers accented with graceful botanical stem embroidery.',
    stock: 35,
    active: true
  },
  {
    id: 'charcoal-bottoms',
    title: 'Charcoal Linen Wide-Leg Bottoms',
    category: 'women',
    priceINR: 1599,
    originalPriceINR: 2200,
    badge: 'Wardrobe Staple',
    image: 'images/charcoal_bottoms.jpg',
    fabric: '100% Breathable Midweight Linen',
    description: 'Flattering high-waisted wide-leg trousers cut in breathable charcoal linen with front pleats.',
    stock: 20,
    active: true
  },
  {
    id: 'saree-01',
    title: 'The Empress Banarasi Katan Silk Saree',
    category: 'sarees',
    priceINR: 48500,
    originalPriceINR: 58000,
    badge: 'Heritage Heirloom',
    image: 'images/saree_banarasi.jpg',
    fabric: 'Pure Katan Silk',
    description: 'A regal masterpiece handwoven over 45 days in Varanasi with antique gold kadwa jaal.',
    stock: 5,
    active: true
  },
  {
    id: 'home-01',
    title: 'Imperial 800TC Egyptian Cotton Bedsheet Set',
    category: 'home',
    priceINR: 14500,
    originalPriceINR: 18000,
    badge: 'Best Seller',
    image: 'images/home_sanctuary.jpg',
    fabric: '800-Thread Count Egyptian Cotton',
    description: 'Five-star sanctuary comfort with luminous sateen finish and silver satin stitching.',
    stock: 12,
    active: true
  }
];

function getAdminProducts() {
  const deletedIds = JSON.parse(localStorage.getItem('frost_deleted_products') || '[]');
  const saved = localStorage.getItem('frost_admin_products');
  let prods = DEFAULT_PRODUCTS;
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) prods = parsed;
    } catch(e) {}
  }
  return prods.filter(p => !deletedIds.includes(p.id));
}

function saveAdminProducts(products) {
  localStorage.setItem('frost_admin_products', JSON.stringify(products));
  try {
    localStorage.setItem('frost_last_product_update', String(Date.now()));
    window.dispatchEvent(new CustomEvent('frost:products-updated'));
    if (typeof refreshProductsFromStorage === 'function') refreshProductsFromStorage();
  } catch(e) {}
}

function deleteAdminProduct(productId) {
  try {
    const deleted = JSON.parse(localStorage.getItem('frost_deleted_products') || '[]');
    if (!deleted.includes(productId)) {
      deleted.push(productId);
      localStorage.setItem('frost_deleted_products', JSON.stringify(deleted));
    }
  } catch(e) {}

  let products = getAdminProducts().filter(p => p.id !== productId);
  localStorage.setItem('frost_admin_products', JSON.stringify(products));

  try {
    localStorage.setItem('frost_last_product_update', String(Date.now()));
    window.dispatchEvent(new CustomEvent('frost:products-updated'));
    if (typeof refreshProductsFromStorage === 'function') refreshProductsFromStorage();
  } catch(e) {}

  if (typeof apiDeleteProduct === 'function') {
    apiDeleteProduct(productId).catch(err => {
      console.warn('Supabase delete error:', err.message);
    });
  }

  return products;
}

// ====================================================
// 6. ANALYTICS ENGINE
// ====================================================
function getAnalytics() {
  const visits = JSON.parse(localStorage.getItem('frost_visits') || '[]');
  const orders = getAllOrders();
  const now = new Date();

  // Today stats
  const today = now.toISOString().split('T')[0];
  const todayVisits = visits.filter(v => v.date === today);

  // Last 7 days
  const last7 = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const ds = d.toISOString().split('T')[0];
    const dayLabel = d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
    last7.push({
      date: ds,
      label: dayLabel,
      visits: visits.filter(v => v.date === ds).length,
      orders: orders.filter(o => o.date === ds).length
    });
  }

  // Filter active, non-cancelled orders for revenue & financial calculations
  const activeOrders = orders.filter(o => o.status !== 'Cancelled');

  // Revenue (strictly excludes Cancelled orders)
  const totalRevenue = activeOrders.reduce((sum, o) => {
    const val = Number(o.total !== undefined ? o.total : (o.totals ? o.totals.total : 0));
    return sum + (isNaN(val) ? 0 : val);
  }, 0);

  const thisMonthPrefix = today.substring(0, 7);
  const thisMonthRevenue = activeOrders
    .filter(o => o.date && o.date.startsWith(thisMonthPrefix))
    .reduce((sum, o) => {
      const val = Number(o.total !== undefined ? o.total : (o.totals ? o.totals.total : 0));
      return sum + (isNaN(val) ? 0 : val);
    }, 0);

  // Devices
  const mobileVisits = visits.filter(v => v.userAgent === 'Mobile').length;
  const desktopVisits = visits.filter(v => v.userAgent === 'Desktop').length;

  // Referrers
  const referrerCounts = {};
  visits.forEach(v => {
    const ref = v.referrer || 'Direct';
    referrerCounts[ref] = (referrerCounts[ref] || 0) + 1;
  });
  if (Object.keys(referrerCounts).length === 0 && visits.length > 0) {
    referrerCounts['Direct'] = visits.length;
  }

  // Status breakdown
  const statusCounts = { 'Confirmed & Packing': 0, 'Delivered': 0, 'Shipped': 0, 'Processing': 0, 'Cancelled': 0 };
  orders.forEach(o => {
    const st = o.status || 'Processing';
    if (statusCounts[st] !== undefined) statusCounts[st]++;
    else statusCounts[st] = 1;
  });

  // Customers count
  const customerSet = new Set();
  orders.forEach(o => {
    const c = o.email || o.customer;
    if (c) customerSet.add(c.toLowerCase());
  });

  return {
    totalVisits: visits.length,
    todayVisits: todayVisits.length,
    totalOrders: orders.length,
    totalCustomers: customerSet.size || orders.length,
    pendingOrders: orders.filter(o => o.status === 'Processing' || o.status === 'Confirmed & Packing').length,
    totalRevenue,
    thisMonthRevenue,
    avgOrderValue: activeOrders.length > 0 ? Math.round(totalRevenue / activeOrders.length) : 0,
    last7,
    mobileVisits,
    desktopVisits,
    referrerCounts,
    statusCounts
  };
}
