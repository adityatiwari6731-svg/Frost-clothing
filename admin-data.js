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
// 3. SEED DATA — Demo Orders & Products
// ====================================================
function seedDemoData() {
  if (localStorage.getItem('frost_data_seeded')) return;

  // Demo Orders
  const demoOrders = [
    {
      id: 'FR-100201',
      date: '2026-09-17',
      customer: 'Arundhati Nambiar',
      email: 'anambiar@email.com',
      city: 'Mumbai',
      country: 'India',
      items: [{ title: 'The Empress Banarasi Katan Silk Saree', qty: 1, price: 48500 }],
      subtotal: 48500, discount: 0, shipping: 0, total: 48500,
      status: 'Delivered',
      paymentMethod: 'Credit Card',
      giftWrapped: true,
      promoCode: ''
    },
    {
      id: 'FR-100202',
      date: '2026-09-16',
      customer: 'Meera Krishnan',
      email: 'mkrishnan@email.in',
      city: 'Bengaluru',
      country: 'India',
      items: [
        { title: 'Imperial 800TC Egyptian Cotton Bedsheet Set', qty: 1, price: 14500 },
        { title: 'Botanical Mirage Velvet Cushion Covers (Set of 3)', qty: 2, price: 8900 }
      ],
      subtotal: 32300, discount: 0, shipping: 950, total: 33250,
      status: 'Shipped',
      paymentMethod: 'UPI',
      giftWrapped: true,
      promoCode: 'FROST15'
    },
    {
      id: 'FR-100203',
      date: '2026-09-15',
      customer: 'Radhika Singhania',
      email: 'rsinghania@email.com',
      city: 'New Delhi',
      country: 'India',
      items: [
        { title: 'Grand Versailles Banquet Jacquard Tablecloth', qty: 1, price: 12500 },
        { title: 'Mulberry Silk Oxford Pillow Covers (Pair)', qty: 1, price: 7500 }
      ],
      subtotal: 20000, discount: 0, shipping: 0, total: 20000,
      status: 'Processing',
      paymentMethod: 'UPI',
      giftWrapped: false,
      promoCode: ''
    },
    {
      id: 'FR-100204',
      date: '2026-09-14',
      customer: 'Priya Mehta',
      email: 'priyam@email.com',
      city: 'Hyderabad',
      country: 'India',
      items: [{ title: 'Whispering Willow Organza Silk Saree', qty: 1, price: 28500 }],
      subtotal: 28500, discount: 4275, shipping: 0, total: 24225,
      status: 'Delivered',
      paymentMethod: 'Net Banking',
      giftWrapped: false,
      promoCode: 'FROST15'
    },
    {
      id: 'FR-100205',
      date: '2026-09-13',
      customer: 'Sunita Singhal',
      email: 'sunita.singhal@email.in',
      city: 'Jaipur',
      country: 'India',
      items: [
        { title: 'The Empress Banarasi Katan Silk Saree', qty: 2, price: 48500 },
        { title: 'Frost Celestial Moonlit Tissue Saree', qty: 1, price: 36000 }
      ],
      subtotal: 133000, discount: 0, shipping: 0, total: 133000,
      status: 'Delivered',
      paymentMethod: 'RuPay Card',
      giftWrapped: true,
      promoCode: ''
    }
  ];

  // Demo Visitor Data — Last 14 days
  const demoVisits = [];
  const now = new Date();
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const visitCount = Math.floor(Math.random() * 80) + 20;
    for (let v = 0; v < visitCount; v++) {
      demoVisits.push({
        date: dateStr,
        hour: Math.floor(Math.random() * 24),
        page: ['/index.html', '/', '/catalog', '/sarees'][Math.floor(Math.random() * 4)],
        userAgent: Math.random() > 0.45 ? 'Mobile' : 'Desktop',
        referrer: ['Direct', 'Google', 'Instagram', 'Pinterest', 'WhatsApp'][Math.floor(Math.random() * 5)],
        timestamp: d.toISOString()
      });
    }
  }

  localStorage.setItem('frost_orders', JSON.stringify(demoOrders));
  localStorage.setItem('frost_visits', JSON.stringify(demoVisits));
  localStorage.setItem('frost_data_seeded', 'true');
}

// ====================================================
// 4. ORDER MANAGEMENT HELPERS
// ====================================================
function getAllOrders() {
  return JSON.parse(localStorage.getItem('frost_orders') || '[]');
}

function saveOrders(orders) {
  localStorage.setItem('frost_orders', JSON.stringify(orders));
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
    id: 'saree-01',
    title: 'The Empress Banarasi Katan Silk Saree',
    category: 'sarees',
    priceINR: 48500,
    originalPriceINR: 58000,
    badge: 'Heritage Heirloom',
    image: 'images/saree_banarasi.jpg',
    fabric: 'Pure Katan Silk',
    description: 'A regal masterpiece handwoven over 45 days.',
    stock: 12,
    active: true
  },
  {
    id: 'saree-02',
    title: 'Frost Celestial Moonlit Tissue Saree',
    category: 'sarees',
    priceINR: 36000,
    originalPriceINR: 42000,
    badge: 'Limited Edition',
    image: 'images/hero_saree.jpg',
    fabric: 'Icy-Platinum Tissue Silk',
    description: 'Draped in ethereal icy-platinum luster.',
    stock: 7,
    active: true
  },
  {
    id: 'saree-03',
    title: 'Whispering Willow Organza Silk Saree',
    category: 'sarees',
    priceINR: 28500,
    originalPriceINR: 34000,
    badge: 'Pure Silk Mark',
    image: 'images/saree_organza.jpg',
    fabric: 'Translucent Tissue Organza',
    description: 'Gossamer-light organza silk in misty sage.',
    stock: 15,
    active: true
  },
  {
    id: 'home-01',
    title: 'Imperial 800TC Egyptian Cotton Bedsheet Set',
    category: 'bedsheets',
    priceINR: 14500,
    originalPriceINR: 18000,
    badge: 'Best Seller',
    image: 'images/home_sanctuary.jpg',
    fabric: '800-Thread Count Egyptian Cotton',
    description: 'Five-star sanctuary comfort.',
    stock: 34,
    active: true
  },
  {
    id: 'home-02',
    title: 'Botanical Mirage Velvet Cushion Covers (Set of 3)',
    category: 'cushions',
    priceINR: 8900,
    originalPriceINR: 11500,
    badge: 'Artisanal Handcraft',
    image: 'images/cushions_luxury.jpg',
    fabric: 'Micro-Plush Velvet & Raw Tussar Silk',
    description: 'A curated triptych of jewel-toned cushions.',
    stock: 28,
    active: true
  },
  {
    id: 'home-03',
    title: 'Grand Versailles Banquet Jacquard Tablecloth',
    category: 'tablecloths',
    priceINR: 12500,
    originalPriceINR: 15500,
    badge: 'Grand Soirée',
    image: 'images/tablecloth_luxury.jpg',
    fabric: 'Linen-Silk Damask Jacquard',
    description: 'Transform your dining table.',
    stock: 18,
    active: true
  },
  {
    id: 'home-04',
    title: 'Mulberry Silk Oxford Pillow Covers (Pair)',
    category: 'pillows',
    priceINR: 7500,
    originalPriceINR: 9200,
    badge: 'Pure 22-Momme Silk',
    image: 'images/home_sanctuary.jpg',
    fabric: '100% Pure 22-Momme Grade 6A Mulberry Silk',
    description: 'The definitive sleep beauty treatment.',
    stock: 42,
    active: true
  }
];

function getAdminProducts() {
  const saved = localStorage.getItem('frost_admin_products');
  if (!saved) {
    localStorage.setItem('frost_admin_products', JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
  return JSON.parse(saved);
}

function saveAdminProducts(products) {
  localStorage.setItem('frost_admin_products', JSON.stringify(products));
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
    const dayLabel = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    last7.push({
      date: ds,
      label: dayLabel,
      visits: visits.filter(v => v.date === ds).length,
      orders: orders.filter(o => o.date === ds).length
    });
  }

  // Revenue
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const thisMonthRevenue = orders
    .filter(o => o.date.startsWith(today.substring(0, 7)))
    .reduce((sum, o) => sum + o.total, 0);

  // Devices
  const mobileVisits = visits.filter(v => v.userAgent === 'Mobile').length;
  const desktopVisits = visits.filter(v => v.userAgent === 'Desktop').length;

  // Referrers
  const referrerCounts = {};
  visits.forEach(v => {
    referrerCounts[v.referrer] = (referrerCounts[v.referrer] || 0) + 1;
  });

  // Status breakdown
  const statusCounts = { Delivered: 0, Shipped: 0, Processing: 0, Cancelled: 0 };
  orders.forEach(o => { if (statusCounts[o.status] !== undefined) statusCounts[o.status]++; });

  return {
    totalVisits: visits.length,
    todayVisits: todayVisits.length,
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => o.status === 'Processing').length,
    totalRevenue,
    thisMonthRevenue,
    avgOrderValue: orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0,
    last7,
    mobileVisits,
    desktopVisits,
    referrerCounts,
    statusCounts
  };
}
