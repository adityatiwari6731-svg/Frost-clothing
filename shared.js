/**
 * FROST | COUTURE & LIVING
 * Shared Application Logic — Multi-Page Architecture v2.0
 * Inject common components, manage cart/wishlist/currency across all pages.
 */

// ==========================================
// 1. PRODUCT CATALOG DATA
// ==========================================
const FROST_PRODUCTS = [
  {
    id: 'sage-linen-dress',
    title: 'Textured Linen Midi Dress',
    category: 'women',
    subCategory: 'dresses',
    categoryName: 'Dresses',
    priceINR: 1899,
    originalPriceINR: 2499,
    rating: 4.8,
    reviewsCount: 126,
    badge: 'Bestseller',
    badgeType: 'green',
    image: 'images/sage_linen_dress.jpg',
    gallery: [
      'images/sage_linen_dress.jpg',
      'images/sage_fabric.jpg',
      'images/women_banner.jpg',
      'images/hero_editorial.jpg'
    ],
    color: 'Sage Green',
    colors: [
      { name: 'Sage Green', hex: '#889F8D' },
      { name: 'Ivory Cream', hex: '#ECE6DA' },
      { name: 'Bordeaux', hex: '#6C151E' }
    ],
    fabric: '100% Textured Organic Linen',
    zari: 'Natural Shell Buttons',
    craft: 'Tailored Minimalist Silhouette',
    origin: 'Frost Contemporary Atelier',
    description: 'The breathable Indian linen and relaxed fit soothe with naturally airy texture. Mindfully evocative and minimalist, cut with an effortless silhouette. For the modern woman who values understated luxury and enduring style.',
    optionsLabel: 'Select Size',
    options: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'bordeaux-coord',
    title: 'Bordeaux Silk Blend Co-ord Set',
    category: 'women',
    subCategory: 'coords',
    categoryName: 'Co-ord Sets',
    priceINR: 2499,
    originalPriceINR: 3200,
    rating: 4.9,
    reviewsCount: 84,
    badge: 'Trending',
    badgeType: 'burgundy',
    image: 'images/bordeaux_coord.jpg',
    gallery: [
      'images/bordeaux_coord.jpg',
      'images/hero_editorial.jpg'
    ],
    color: 'Bordeaux',
    colors: [
      { name: 'Bordeaux', hex: '#6C151E' },
      { name: 'Forest Green', hex: '#0F382C' },
      { name: 'Warm Sand', hex: '#F5DABF' }
    ],
    fabric: 'Silk-Linen Blend',
    zari: 'Subtle Sheen Finish',
    craft: 'Relaxed Tunic & Trouser Set',
    origin: 'Frost Contemporary Atelier',
    description: 'A modern two-piece ensemble combining fluid drape and crisp tailoring. Deep wine plum body with a breathable soft touch, styled effortlessly from desk to evening soirees.',
    optionsLabel: 'Select Size',
    options: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'rose-kurti',
    title: 'Rose Handloom Cotton Kurti',
    category: 'women',
    subCategory: 'kurtis',
    categoryName: 'Kurtis',
    priceINR: 1299,
    originalPriceINR: 1800,
    rating: 4.9,
    reviewsCount: 92,
    badge: 'Artisanal',
    badgeType: 'burgundy',
    image: 'images/rose_kurti.jpg',
    gallery: [
      'images/rose_kurti.jpg'
    ],
    color: 'Dusty Rose',
    colors: [
      { name: 'Dusty Rose', hex: '#B5767A' },
      { name: 'Ivory', hex: '#FAF8F5' }
    ],
    fabric: '100% Handspun Slub Cotton',
    zari: 'Delicate Needlework Yoke',
    craft: 'Handloom Weave & Thread Accents',
    origin: 'Frost Heritage Guild',
    description: 'Crafted from handloom cotton dyed in muted antique rose. Features delicate thread embroidery at the split neckline and sleeves, paired with side slits for easy movement.',
    optionsLabel: 'Select Size',
    options: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'blockprint-bedsheet',
    title: 'Ivory Block Print Bedsheet Set',
    category: 'home',
    subCategory: 'bedsheets',
    categoryName: 'Bedding',
    priceINR: 1499,
    originalPriceINR: 2100,
    rating: 4.9,
    reviewsCount: 110,
    badge: 'Home Sanctuary',
    badgeType: 'green',
    image: 'images/blockprint_bedsheet.jpg',
    gallery: [
      'images/blockprint_bedsheet.jpg',
      'images/home_banner.jpg'
    ],
    color: 'Ivory Sage',
    colors: [
      { name: 'Ivory Sage', hex: '#DCE4DD' },
      { name: 'Warm Sand', hex: '#EBE3D7' }
    ],
    fabric: '300TC Organic Cotton Percale',
    zari: 'Double Hemstitch Edges',
    craft: 'Authentic Wooden Block Print',
    origin: 'Jaipur Master Collective',
    description: 'Transform your bedroom into a calm retreat. Hand-printed botanical flora in earthy sage on natural unbleached cotton percale. Includes 1 flat bedsheet and 2 oxford pillowcases.',
    optionsLabel: 'Select Bed Size',
    options: ['King (108" x 108")', 'Queen (90" x 100")', 'Single (60" x 90")']
  },
  {
    id: 'curtains-green',
    title: 'Deep Green Bagh Print Curtains',
    category: 'home',
    subCategory: 'curtains',
    categoryName: 'Curtains',
    priceINR: 1899,
    originalPriceINR: 2600,
    rating: 4.9,
    reviewsCount: 68,
    badge: 'Craft Edit',
    badgeType: 'green',
    image: 'images/curtains_green.jpg',
    gallery: [
      'images/curtains_green.jpg'
    ],
    color: 'Forest Green',
    colors: [
      { name: 'Forest Green', hex: '#0F382C' },
      { name: 'Ivory Sand', hex: '#E8DEC8' }
    ],
    fabric: 'Linen-Cotton Light-Filtering Blend',
    zari: 'Hand-Carved Bagh Motifs',
    craft: 'Traditional Bagh Resist Print',
    origin: 'Madhya Pradesh Guild',
    description: 'Rich deep forest green panels with heritage Bagh print patterns that softly filter daylight, bringing calm earthy poise to living rooms and verandas.',
    optionsLabel: 'Select Length',
    options: ['7 Feet Window (48" x 84")', '9 Feet Door (48" x 108")']
  },
  {
    id: 'table-runner',
    title: 'Textured Linen Table Runner',
    category: 'home',
    subCategory: 'tableware',
    categoryName: 'Table Linens',
    priceINR: 699,
    originalPriceINR: 999,
    rating: 4.8,
    reviewsCount: 45,
    badge: 'Dining Edit',
    badgeType: 'green',
    image: 'images/table_runner.jpg',
    gallery: [
      'images/table_runner.jpg'
    ],
    color: 'Natural Taupe',
    colors: [
      { name: 'Natural Taupe', hex: '#B7A89A' },
      { name: 'Forest Green', hex: '#0F382C' }
    ],
    fabric: 'Pure French Slub Linen',
    zari: 'Subtle Frayed Edge Detail',
    craft: 'Artisanal Loom Weave',
    origin: 'Frost Living Sanctuary',
    description: 'Pure washed linen table runner with natural slub texture and relaxed fringe edges. Elevates dinner tables with timeless tactile warmth.',
    optionsLabel: 'Select Size',
    options: ['Standard (14" x 72")', 'Banquet (14" x 96")']
  },
  {
    id: 'cushion-cream',
    title: 'Cream Embroidered Cushion Covers (Pair)',
    category: 'home',
    subCategory: 'cushions',
    categoryName: 'Cushions',
    priceINR: 499,
    originalPriceINR: 799,
    rating: 4.8,
    reviewsCount: 77,
    badge: 'Bestseller',
    badgeType: 'burgundy',
    image: 'images/cushion_cream.jpg',
    gallery: [
      'images/cushion_cream.jpg'
    ],
    color: 'Cream Linen',
    colors: [
      { name: 'Cream Linen', hex: '#EDE7DE' },
      { name: 'Sage Green', hex: '#99A89A' }
    ],
    fabric: 'Washed Pure Linen',
    zari: 'Floral Stem Thread Embroidery',
    craft: 'Botanical Needlework',
    origin: 'Frost Living Sanctuary',
    description: 'Set of two soft cream linen cushion covers accented with graceful botanical stem embroidery and tactile raw fringe trims. Concealed zipper closure.',
    optionsLabel: 'Select Size',
    options: ['16" x 16"', '18" x 18"', '20" x 20"']
  },
  {
    id: 'charcoal-bottoms',
    title: 'Charcoal Linen Wide-Leg Bottoms',
    category: 'women',
    subCategory: 'bottoms',
    categoryName: 'Bottoms',
    priceINR: 1599,
    originalPriceINR: 2200,
    rating: 4.7,
    reviewsCount: 53,
    badge: 'Wardrobe Staple',
    badgeType: 'green',
    image: 'images/charcoal_bottoms.jpg',
    gallery: [
      'images/charcoal_bottoms.jpg'
    ],
    color: 'Charcoal',
    colors: [
      { name: 'Charcoal', hex: '#3A3A3C' },
      { name: 'Ivory', hex: '#FAF8F5' }
    ],
    fabric: '100% Breathable Midweight Linen',
    zari: 'Tailored Horn Buttons',
    craft: 'Relaxed Tailored Cut',
    origin: 'Frost Contemporary Atelier',
    description: 'Flattering high-waisted wide-leg trousers cut in breathable charcoal linen. Features side pockets, subtle front pleats, and comfortable elastic back waist.',
    optionsLabel: 'Select Size',
    options: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  }
];

window.FROST_PRODUCTS = FROST_PRODUCTS;

// Global Configuration
window.FROST_CONFIG = {
  freeShipThreshold: 1499,
  currency: 'INR'
};

function filterOutDeletedProducts() {
  try {
    const deletedIds = JSON.parse(localStorage.getItem('frost_deleted_products') || '[]');
    if (Array.isArray(deletedIds) && deletedIds.length > 0) {
      for (let i = FROST_PRODUCTS.length - 1; i >= 0; i--) {
        if (deletedIds.includes(FROST_PRODUCTS[i].id)) {
          FROST_PRODUCTS.splice(i, 1);
        }
      }
      // Also purge deleted product DOM elements across all pages
      deletedIds.forEach(id => {
        document.querySelectorAll(`[data-id="${id}"], [data-product-id="${id}"]`).forEach(el => el.remove());
      });
    }
  } catch(e) {}
}

// 5. STORAGE & ADMIN PRODUCT SYNC
// ==========================================
function refreshProductsFromStorage() {
  try {
    const deletedIds = JSON.parse(localStorage.getItem('frost_deleted_products') || '[]');
    const adminProds = JSON.parse(localStorage.getItem('frost_admin_products') || '[]');

    // 1. Purge deleted products
    if (Array.isArray(deletedIds) && deletedIds.length > 0) {
      for (let i = FROST_PRODUCTS.length - 1; i >= 0; i--) {
        if (deletedIds.includes(FROST_PRODUCTS[i].id)) {
          FROST_PRODUCTS.splice(i, 1);
        }
      }
    }

    // 2. Merge/insert admin-added products
    if (Array.isArray(adminProds)) {
      adminProds.forEach(ap => {
        if (deletedIds.includes(ap.id)) return;
        if (ap.active === false) {
          const idx = FROST_PRODUCTS.findIndex(p => p.id === ap.id);
          if (idx > -1) FROST_PRODUCTS.splice(idx, 1);
          return;
        }

        const isWomen = (ap.category === 'women' || ap.category === 'sarees' || ap.category === 'dresses');
        const normalizedCat = isWomen ? 'women' : 'home';
        const catName = ap.categoryName || (isWomen ? "Women's Collection" : "Home & Living");

        const formattedProd = {
          id: ap.id,
          title: ap.title,
          category: normalizedCat,
          categoryName: catName,
          priceINR: Number(ap.priceINR || ap.price_inr || 1499),
          originalPriceINR: Number(ap.originalPriceINR || ap.original_price_inr || 0),
          rating: Number(ap.rating || 4.9),
          reviewsCount: Number(ap.reviewsCount || 12),
          badge: ap.badge || 'New Creation',
          badgeType: isWomen ? 'burgundy' : 'green',
          image: ap.image || ap.image_url || 'images/hero_editorial.jpg',
          gallery: [ap.image || ap.image_url || 'images/hero_editorial.jpg'],
          fabric: ap.fabric || (isWomen ? '100% Breathable Midweight Linen' : 'Pure French Slub Linen'),
          zari: ap.zari || 'Fine Hand Finish',
          craft: ap.craft || 'Artisanal Craft',
          origin: ap.origin || 'Frost Atelier',
          description: ap.description || ap.title,
          optionsLabel: ap.optionsLabel || (isWomen ? 'Select Size' : 'Select Dimensions'),
          options: Array.isArray(ap.options) ? ap.options : (isWomen ? ['XS', 'S', 'M', 'L', 'XL'] : ['Standard Edition', 'Luxury Set'])
        };

        const idx = FROST_PRODUCTS.findIndex(p => p.id === ap.id);
        if (idx > -1) {
          FROST_PRODUCTS[idx] = { ...FROST_PRODUCTS[idx], ...formattedProd };
        } else {
          FROST_PRODUCTS.unshift(formattedProd);
        }
      });
    }

    filterOutDeletedProducts();
  } catch(e) {
    console.warn('refreshProductsFromStorage notice:', e);
  }
}

// Run immediately
refreshProductsFromStorage();

// Listen for updates from other tabs or admin panel
window.addEventListener('storage', (e) => {
  if (e.key && (e.key.startsWith('frost_admin_products') || e.key.startsWith('frost_deleted') || e.key.startsWith('frost_last_product_update'))) {
    refreshProductsFromStorage();
    window.dispatchEvent(new CustomEvent('frost:products-updated'));
  }
});
window.addEventListener('frost:products-updated', () => {
  refreshProductsFromStorage();
});

// Asynchronously sync catalog from Supabase PostgreSQL
async function syncSupabaseProducts() {
  if (typeof apiGetProducts === 'function') {
    try {
      const dbProds = await apiGetProducts();
      if (Array.isArray(dbProds)) {
        const deletedIds = JSON.parse(localStorage.getItem('frost_deleted_products') || '[]');
        const validProds = dbProds.filter(dp => !deletedIds.includes(dp.id) && dp.active !== false);

        // Supabase Cloud is the single source of truth across all devices
        // Clear old memory state and populate with live Supabase products
        FROST_PRODUCTS.length = 0;
        validProds.forEach(p => FROST_PRODUCTS.push(p));

        filterOutDeletedProducts();
        window.dispatchEvent(new CustomEvent('frost:products-updated'));
        if (typeof renderHomeCatalog === 'function') renderHomeCatalog();
        if (typeof renderCurrentPageCatalog === 'function') renderCurrentPageCatalog();
        if (typeof renderCuratedProducts === 'function') renderCuratedProducts();
        if (typeof renderShopCatalog === 'function') renderShopCatalog();
      }
    } catch(e) {
      console.warn('Supabase catalog sync warning:', e.message);
    }
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', syncSupabaseProducts);
} else {
  syncSupabaseProducts();
}

// ==========================================
// 2. CURRENCY ENGINE (PAN-INDIA INR ₹)
// ==========================================
const currentCurrency = 'INR';
function formatCurrency(n) {
  return `₹${Math.round(n).toLocaleString('en-IN')}`;
}

// ==========================================
// 3. STATE
// ==========================================
let cart = JSON.parse(localStorage.getItem('frost_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('frost_wishlist') || '[]');
let isGiftWrapped = false;
let appliedDiscount = 0;
try {
  const savedPromo = JSON.parse(localStorage.getItem('frost_promo') || 'null');
  if (savedPromo && savedPromo.discount) {
    appliedDiscount = Number(savedPromo.discount);
  }
} catch(e) {}
let activeQuickViewProduct = null;
let selectedModalOption = null;
let checkoutStep = 1;
let shippingInfo = {};

// ==========================================
// 4. CART FUNCTIONS & HELPERS
// ==========================================
function getProductById(id) {
  return FROST_PRODUCTS.find(p => p.id === id) || null;
}

function addToCart(productId, option) {
  const p = FROST_PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const opt = option || p.options[0];
  const idx = cart.findIndex(i => i.id === productId && i.option === opt);
  if (idx > -1) cart[idx].qty++;
  else cart.push({id:p.id,title:p.title,priceINR:p.priceINR,image:p.image,categoryName:p.categoryName,option:opt,qty:1});
  saveCart(); updateCartUI(); openCart();
  showToast(`Added to your shopping bag`);
}

function buyNow(productId, option) {
  const p = FROST_PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const opt = option || p.options[0];
  const idx = cart.findIndex(i => i.id === productId && i.option === opt);
  if (idx > -1) {
    cart[idx].qty++;
  } else {
    cart.push({id:p.id,title:p.title,priceINR:p.priceINR,image:p.image,categoryName:p.categoryName,option:opt,qty:1});
  }
  saveCart();
  updateCartUI();
  window.location.href = 'checkout.html';
}

function checkPincodeDelivery(pincode) {
  const pin = String(pincode || '').trim();
  if (!/^\d{6}$/.test(pin)) {
    return { valid: false, message: '⚠️ Please enter a valid 6-digit Indian PIN code.' };
  }
  const metroPins = ['11', '40', '56', '60', '70', '50', '12', '20', '30'];
  const prefix = pin.substring(0, 2);
  const isMetro = metroPins.includes(prefix);
  const days = isMetro ? '2 to 3' : '4 to 5';
  return {
    valid: true,
    message: `✨ Delivery available to PIN <strong>${pin}</strong> in <strong>${days} business days</strong>. Free Pan-India white-glove shipping & Cash On Delivery available.`
  };
}

function updateCartQty(i, d) {
  if (!cart[i]) return;
  cart[i].qty += d;
  if (cart[i].qty <= 0) cart.splice(i, 1);
  saveCart(); updateCartUI();
}

function removeFromCart(i) {
  if (!cart[i]) return;
  cart.splice(i, 1);
  saveCart(); updateCartUI();
  showToast('Removed from bag');
}

function saveCart() { localStorage.setItem('frost_cart', JSON.stringify(cart)); }

function getCartTotals() {
  const subtotal = cart.reduce((s, i) => s + i.priceINR * i.qty, 0);
  const gift = isGiftWrapped ? 450 : 0;
  const disc = subtotal * (appliedDiscount / 100);
  const freeShip = subtotal >= 1499;
  const ship = (subtotal === 0 || freeShip) ? 0 : 99;
  const total = Math.max(0, subtotal - disc + gift + ship);
  return {subtotal, gift, disc, ship, total, freeShip};
}

function updateCartUI() {
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = totalQty;
  const mobileBadge = document.getElementById('mobile-bottom-badge');
  if (mobileBadge) mobileBadge.textContent = totalQty;

  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <h4 style="font-family:var(--font-serif);font-size:1.3rem;color:var(--frost-dark);margin-bottom:.4rem;">Your bag is empty</h4>
        <p style="font-size:.85rem;color:var(--text-muted);margin-bottom:1.4rem;">Explore our couture sarees and artisanal home living.</p>
        <a href="shop.html" onclick="closeCart()" class="btn-luxury btn-gold" style="font-size:.72rem;padding:.8rem 1.6rem;">Explore Shop</a>
      </div>`;
    const t = getCartTotals();
    _updateTotalsUI(t);
    return;
  }

  container.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img"/>
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-meta">${item.categoryName} · ${item.option}</div>
        <div class="cart-item-bottom">
          <div class="qty-stepper">
            <button class="qty-btn" onclick="updateCartQty(${i},-1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${i},1)">+</button>
          </div>
          <div style="display:flex;align-items:center;gap:.5rem;">
            <span class="cart-item-price">${formatCurrency(item.priceINR * item.qty)}</span>
            <button class="cart-item-remove" onclick="removeFromCart(${i})">✕</button>
          </div>
        </div>
      </div>
    </div>`).join('');

  const t = getCartTotals();
  _updateTotalsUI(t);
}

function _updateTotalsUI({subtotal, ship, total, freeShip}) {
  const el = id => document.getElementById(id);
  if (el('cart-subtotal')) el('cart-subtotal').textContent = formatCurrency(subtotal);
  if (el('cart-shipping')) el('cart-shipping').textContent = freeShip ? 'FREE' : formatCurrency(ship);
  if (el('cart-total')) el('cart-total').textContent = formatCurrency(total);
  const pct = Math.min(100, Math.round((subtotal / 1499) * 100));
  if (el('shipping-bar-fill')) el('shipping-bar-fill').style.width = `${pct}%`;
  if (el('shipping-text')) {
    el('shipping-text').innerHTML = freeShip
      ? '<strong>✨ Complimentary Delivery Unlocked!</strong>'
      : `Add <strong>${formatCurrency(1499 - subtotal)}</strong> more for FREE SHIPPING`;
  }
}

// ==========================================
// 5. WISHLIST
// ==========================================
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  const p = FROST_PRODUCTS.find(x => x.id === productId);
  if (idx > -1) { wishlist.splice(idx, 1); showToast('Removed from Wishlist'); }
  else { wishlist.push(productId); showToast(`Saved to Wishlist`); }
  localStorage.setItem('frost_wishlist', JSON.stringify(wishlist));
  // Refresh wishlist heart icons on page
  document.querySelectorAll('.card-wishlist-btn').forEach(btn => {
    const pid = btn.closest('[data-id]')?.dataset.id;
    if (pid) {
      btn.classList.toggle('active', wishlist.includes(pid));
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', wishlist.includes(pid) ? 'currentColor' : 'none');
    }
  });
  updateWishlistUI();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlist-badge');
  if (badge) badge.textContent = wishlist.length;
  const container = document.getElementById('wishlist-items-container');
  if (!container) return;
  if (wishlist.length === 0) {
    container.innerHTML = '<div class="empty-cart-state"><h4 style="font-family:var(--font-serif);font-size:1.3rem;color:var(--frost-dark);">No saved heirlooms</h4><p style="font-size:.85rem;color:var(--text-muted);">Tap ♡ on any creation to save it here.</p></div>';
    return;
  }
  const items = FROST_PRODUCTS.filter(p => wishlist.includes(p.id));
  container.innerHTML = items.map(p => `
    <div class="cart-item">
      <img src="${p.image}" alt="${p.title}" class="cart-item-img"/>
      <div class="cart-item-info">
        <h4 class="cart-item-title">${p.title}</h4>
        <div class="cart-item-meta">${p.categoryName} · ${p.fabric}</div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">${formatCurrency(p.priceINR)}</span>
          <div style="display:flex;gap:.5rem;">
            <button class="btn-add-cart" style="padding:.3rem .7rem;font-size:.68rem;" onclick="addToCart('${p.id}');toggleWishlist('${p.id}')">Move to Bag</button>
            <button class="cart-item-remove" onclick="toggleWishlist('${p.id}')">✕</button>
          </div>
        </div>
      </div>
    </div>`).join('');
}

// ==========================================
// 6. OPEN / CLOSE OVERLAYS
// ==========================================
function openCart()    { document.getElementById('cart-drawer')?.classList.add('active'); document.getElementById('cart-backdrop')?.classList.add('active'); document.body.style.overflow='hidden'; }
function closeCart()   { document.getElementById('cart-drawer')?.classList.remove('active'); document.getElementById('cart-backdrop')?.classList.remove('active'); document.body.style.overflow=''; }
function openWishlist(){ document.getElementById('wishlist-drawer')?.classList.add('active'); document.getElementById('cart-backdrop')?.classList.add('active'); document.body.style.overflow='hidden'; }
function closeWishlist(){ document.getElementById('wishlist-drawer')?.classList.remove('active'); document.getElementById('cart-backdrop')?.classList.remove('active'); document.body.style.overflow=''; }
function openSearch()  { 
  document.getElementById('search-modal')?.classList.add('active'); 
  document.getElementById('search-backdrop')?.classList.add('active'); 
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('search-input')?.focus(), 80); 
}
function closeSearch() { 
  document.getElementById('search-modal')?.classList.remove('active'); 
  document.getElementById('search-backdrop')?.classList.remove('active'); 
  document.body.style.overflow = '';
  const si = document.getElementById('search-input'); 
  if (si) si.value = ''; 
}
function closeQuickView(){ document.getElementById('quickview-modal')?.classList.remove('active'); document.getElementById('quickview-backdrop')?.classList.remove('active'); document.body.style.overflow=''; activeQuickViewProduct=null; }
function closeCheckout(){ document.getElementById('checkout-modal')?.classList.remove('active'); document.getElementById('checkout-backdrop')?.classList.remove('active'); document.body.style.overflow=''; }

// ==========================================
// 7. QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
  const p = FROST_PRODUCTS.find(x => x.id === productId);
  if (!p) {
    window.location.href = 'shop.html';
    return;
  }
  activeQuickViewProduct = p;
  selectedModalOption = p.options[0];
  const body = document.getElementById('quickview-modal-body');
  if (body) {
    body.innerHTML = `
      <div class="quickview-grid">
        <div class="quickview-media"><img src="${p.image}" alt="${p.title}"/></div>
        <div class="quickview-content">
          <button class="modal-close-icon" onclick="closeQuickView()">✕</button>
          <span class="product-category">${p.categoryName} · ${p.origin}</span>
          <h2 style="font-size:1.9rem;margin:.4rem 0 .8rem;line-height:1.2;">${p.title}</h2>
          <div class="price-wrap" style="margin-bottom:1.2rem;">
            <span class="price-current" style="font-size:1.5rem;">${formatCurrency(p.priceINR)}</span>
            ${p.originalPriceINR?`<span class="price-original" style="font-size:1rem;">${formatCurrency(p.originalPriceINR)}</span>`:''}
          </div>
          <p style="font-size:.92rem;line-height:1.7;color:var(--text-muted);margin-bottom:1.4rem;">${p.description}</p>
          <div class="quickview-specs">
            <div class="spec-line"><span>Fabric:</span><span>${p.fabric}</span></div>
            <div class="spec-line"><span>Zari / Detailing:</span><span>${p.zari}</span></div>
            <div class="spec-line"><span>Craft Heritage:</span><span>${p.craft}</span></div>
            <div class="spec-line"><span>Authenticity:</span><span>100% Certified Pure · Silk Mark</span></div>
          </div>
          <div class="option-selector-group">
            <label>${p.optionsLabel}:</label>
            <div class="option-pills" id="modal-opts">
              ${p.options.map((o,i)=>`<button class="option-pill${i===0?' active':''}" onclick="selOpt('${o}',this)">${o}</button>`).join('')}
            </div>
          </div>
          <div style="display:flex;gap:1rem;margin-top:auto;">
            <button class="btn-luxury btn-gold" style="flex:1;" onclick="addToCart('${p.id}',selectedModalOption);closeQuickView()">Add to Shopping Bag</button>
            <button class="btn-luxury btn-outline-white" style="border-color:var(--frost-dark);color:var(--frost-dark);padding:.9rem 1.1rem;" onclick="toggleWishlist('${p.id}')">♡</button>
          </div>
        </div>
      </div>`;
  }
  document.getElementById('quickview-modal')?.classList.add('active');
  document.getElementById('quickview-backdrop')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selOpt(opt, btn) {
  selectedModalOption = opt;
  document.querySelectorAll('#modal-opts .option-pill').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
}

// ==========================================
// 8. CHECKOUT SIMULATOR
// ==========================================
function openCheckout() {
  if (cart.length === 0) { showToast('Your shopping bag is empty.'); return; }
  closeCart();
  checkoutStep = 1;
  renderCheckoutStep();
  document.getElementById('checkout-modal')?.classList.add('active');
  document.getElementById('checkout-backdrop')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderCheckoutStep() {
  const container = document.getElementById('checkout-modal-body');
  if (!container) return;
  const {subtotal, ship, total} = getCartTotals();
  const fmtTotal = formatCurrency(total);

  const stepIndicator = `
    <div class="checkout-step-indicator">
      <div class="step-circle${checkoutStep===1?' active':''}${checkoutStep>1?' style="background:#2ed573;color:white;"':''}">
        ${checkoutStep>1?'✓':'1'}
      </div>
      <span style="font-size:.76rem;text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Shipping</span>
      <div style="width:36px;height:1px;background:var(--frost-silk)"></div>
      <div class="step-circle${checkoutStep===2?' active':''}${checkoutStep>2?' style="background:#2ed573;color:white;"':''}">
        ${checkoutStep>2?'✓':'2'}
      </div>
      <span style="font-size:.76rem;text-transform:uppercase;letter-spacing:.1em;font-weight:600;${checkoutStep<2?'color:var(--text-muted)':''}">Payment</span>
      <div style="width:36px;height:1px;background:var(--frost-silk)"></div>
      <div class="step-circle${checkoutStep===3?' active':''}">3</div>
      <span style="font-size:.76rem;text-transform:uppercase;letter-spacing:.1em;font-weight:600;${checkoutStep<3?'color:var(--text-muted)':''}">Receipt</span>
    </div>`;

  if (checkoutStep === 1) {
    container.innerHTML = stepIndicator + `
      <h3 style="font-size:1.7rem;margin-bottom:.3rem;text-align:center;">Pan-India White-Glove Delivery</h3>
      <p style="text-align:center;color:var(--text-muted);font-size:.84rem;margin-bottom:1.8rem;">Every Frost creation arrives in a bespoke embossed gold-foil presentation case.</p>
      <div class="form-grid">
        <div><label style="display:block;font-size:.72rem;text-transform:uppercase;font-weight:600;margin-bottom:.35rem;">First Name *</label><input type="text" id="ship-fname" class="form-control" value="Aarav"/></div>
        <div><label style="display:block;font-size:.72rem;text-transform:uppercase;font-weight:600;margin-bottom:.35rem;">Last Name *</label><input type="text" id="ship-lname" class="form-control" value="Sharma"/></div>
        <div class="form-group-full"><label style="display:block;font-size:.72rem;text-transform:uppercase;font-weight:600;margin-bottom:.35rem;">Delivery Address *</label><input type="text" id="ship-address" class="form-control" value="Flat 14B, Sea Face Enclave, Worli"/></div>
        <div><label style="display:block;font-size:.72rem;text-transform:uppercase;font-weight:600;margin-bottom:.35rem;">City *</label><input type="text" id="ship-city" class="form-control" value="Mumbai"/></div>
        <div><label style="display:block;font-size:.72rem;text-transform:uppercase;font-weight:600;margin-bottom:.35rem;">State *</label>
          <select id="ship-state" class="form-control">
            <option selected>Maharashtra</option><option>Delhi NCR</option><option>Karnataka</option><option>Tamil Nadu</option><option>West Bengal</option><option>Gujarat</option><option>Telangana</option><option>Rajasthan</option><option>Uttar Pradesh</option><option>Kerala</option><option>Punjab</option><option>Other Indian States</option>
          </select>
        </div>
        <div><label style="display:block;font-size:.72rem;text-transform:uppercase;font-weight:600;margin-bottom:.35rem;">PIN Code *</label><input type="text" id="ship-pincode" class="form-control" value="400018"/></div>
      </div>
      <div style="margin-top:2rem;padding:1.2rem;background:var(--frost-cream);border-radius:var(--radius-sm);display:flex;justify-content:space-between;align-items:center;">
        <div><span style="font-size:.85rem;color:var(--text-muted);">Order Total:</span><strong style="font-size:1.3rem;margin-left:.5rem;">${fmtTotal}</strong></div>
        <button class="btn-luxury btn-gold" style="padding:.8rem 1.8rem;font-size:.76rem;" onclick="submitShippingStep()">Proceed to Payment →</button>
      </div>`;
  } else if (checkoutStep === 2) {
    container.innerHTML = stepIndicator + `
      <h3 style="font-size:1.7rem;margin-bottom:.3rem;text-align:center;">Secure Luxury Payment</h3>
      <p style="text-align:center;color:var(--text-muted);font-size:.84rem;margin-bottom:1.5rem;">RBI &amp; NPCI Compliant 256-bit Bank-Grade Encryption.</p>
      <div class="payment-method-selector" id="pay-methods">
        <button class="payment-method-btn active" onclick="setPayMethod(this)">📲 UPI (GPay / PhonePe / Paytm)</button>
        <button class="payment-method-btn" onclick="setPayMethod(this)">💳 RuPay / Cards</button>
        <button class="payment-method-btn" onclick="setPayMethod(this)">🏛️ Net Banking</button>
        <button class="payment-method-btn" onclick="setPayMethod(this)">💵 Cash on Delivery</button>
      </div>
      <div class="form-grid">
        <div class="form-group-full"><label style="display:block;font-size:.72rem;text-transform:uppercase;font-weight:600;margin-bottom:.35rem;">UPI ID / VPA</label><input class="form-control" value="aarav.sharma@okhdfcbank" placeholder="yourname@upi"/></div>
        <div class="form-group-full"><label style="display:block;font-size:.72rem;text-transform:uppercase;font-weight:600;margin-bottom:.35rem;">Account Holder Name</label><input class="form-control" value="${shippingInfo.name||'Aarav Sharma'}"/></div>
      </div>
      <div style="margin-top:2rem;display:flex;justify-content:space-between;align-items:center;">
        <button class="btn-luxury" style="color:var(--text-muted);font-size:.76rem;" onclick="checkoutStep=1;renderCheckoutStep()">← Back</button>
        <button class="btn-luxury btn-gold" style="padding:.9rem 2.2rem;font-size:.82rem;" onclick="submitPaymentStep()">Authorize & Pay ${fmtTotal}</button>
      </div>`;
  } else if (checkoutStep === 3) {
    const orderId = `FR-${Math.floor(100000+Math.random()*900000)}`;
    const today = new Date().toLocaleDateString('en-IN',{month:'short',day:'numeric',year:'numeric'});
    // Persist to admin orders
    try {
      const orders = JSON.parse(localStorage.getItem('frost_orders')||'[]');
      orders.unshift({id:orderId,date:new Date().toISOString().split('T')[0],customer:shippingInfo.name||'Valued Patron',email:'patron@frostatelier.in',city:shippingInfo.city||'Mumbai',country:'India',items:cart.map(i=>({title:i.title,qty:i.qty,price:i.priceINR})),subtotal,discount:appliedDiscount,shipping:ship,total,status:'Processing',paymentMethod:'UPI / Indian Net Banking',giftWrapped:isGiftWrapped,promoCode:appliedDiscount?'APPLIED':''});
      localStorage.setItem('frost_orders', JSON.stringify(orders));
    } catch(e){}
    container.innerHTML = stepIndicator + `
      <div class="order-success-view">
        <div class="success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
        <span class="section-eyebrow">Order Confirmed</span>
        <h2 style="font-size:2rem;margin:.4rem 0 .6rem;">Dhanyavaad, ${shippingInfo.name?.split(' ')[0]||'Honoured Patron'}</h2>
        <p style="color:var(--text-muted);max-width:420px;margin:0 auto 1.5rem;">Your heirloom creation has been reserved and is undergoing silk mark verification before dispatch via BlueDart Apex across India.</p>
        <div class="order-receipt-box">
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--frost-silk);padding-bottom:.8rem;margin-bottom:.8rem;">
            <div><span style="font-size:.7rem;color:var(--text-muted);text-transform:uppercase;">Order ID</span><div style="font-family:var(--font-display);font-size:1.05rem;font-weight:600;">${orderId}</div></div>
            <div style="text-align:right"><span style="font-size:.7rem;color:var(--text-muted);text-transform:uppercase;">Date</span><div style="font-weight:600;">${today}</div></div>
          </div>
          ${cart.map(i=>`<div style="display:flex;justify-content:space-between;font-size:.82rem;margin-bottom:.3rem;"><span>${i.qty}× ${i.title.substring(0,38)}…</span><strong>${formatCurrency(i.priceINR*i.qty)}</strong></div>`).join('')}
          <div style="border-top:1px solid var(--frost-silk);margin-top:.8rem;padding-top:.8rem;display:flex;justify-content:space-between;"><span>Total Paid:</span><strong style="font-size:1.2rem;color:var(--frost-dark);">${fmtTotal}</strong></div>
        </div>
        <div style="display:flex;gap:1rem;justify-content:center;">
          <button class="btn-luxury btn-gold" onclick="completeOrderReset()">Continue Exploring</button>
          <button class="btn-luxury btn-outline-white" style="border-color:var(--frost-dark);color:var(--frost-dark);" onclick="window.print()">Print Receipt</button>
        </div>
      </div>`;
  }
}

function setPayMethod(btn){ document.querySelectorAll('.payment-method-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); }
function submitShippingStep(){ shippingInfo={name:`${document.getElementById('ship-fname')?.value||''} ${document.getElementById('ship-lname')?.value||''}`.trim(),address:document.getElementById('ship-address')?.value||'',city:document.getElementById('ship-city')?.value||'',state:document.getElementById('ship-state')?.value||'',pincode:document.getElementById('ship-pincode')?.value||'',country:'India'}; checkoutStep=2; renderCheckoutStep(); }
function submitPaymentStep(){ showToast('Authorizing with Frost Private Concierge…'); setTimeout(()=>{checkoutStep=3;renderCheckoutStep();},1200); }
function completeOrderReset(){ cart=[]; saveCart(); updateCartUI(); closeCheckout(); showToast('Order confirmed! Welcome package sent to your registered WhatsApp & Email.'); }

// ==========================================
// 9. PROMO CODE & ORDER PLACEMENT
// ==========================================
function handleApplyPromo() {
  const code = (document.getElementById('promo-code-input')?.value || document.getElementById('cart-page-promo-input')?.value || '')?.trim()?.toUpperCase();
  if (code === 'FABINDIA15' || code === 'FROST15') {
    appliedDiscount = 15;
    updateCartUI();
    showToast('15% Handcrafted Privilege Discount Applied! ✨');
    return { success: true, discount: 15 };
  } else if (code === 'WELCOME10' || code === 'FROST10') {
    appliedDiscount = 10;
    updateCartUI();
    showToast('10% Welcome Discount Applied!');
    return { success: true, discount: 10 };
  } else {
    showToast('Invalid coupon. Try FABINDIA15 or FROST10.');
    return { success: false };
  }
}

async function placeOrder(orderData) {
  const orderId = orderData.id || ('FRST-' + Math.floor(100000 + Math.random() * 900000));
  const todayIso = new Date().toISOString().split('T')[0];
  const t = getCartTotals();
  const orderTotal = (orderData.totals && orderData.totals.total !== undefined) ? orderData.totals.total : t.total;
  const orderSubtotal = (orderData.totals && orderData.totals.subtotal !== undefined) ? orderData.totals.subtotal : t.subtotal;
  const custName = orderData.customer || orderData.name || 'Valued Guest';
  const order = {
    id: orderId,
    date: todayIso,
    customer: custName,
    email: orderData.email || 'patron@frosthaute.com',
    phone: orderData.phone || '',
    address: orderData.address || `${orderData.city || 'Mumbai'}, India`,
    city: orderData.city || 'Mumbai',
    state: orderData.state || 'Maharashtra',
    country: 'India',
    items: cart.length > 0 ? [...cart] : (orderData.items || []),
    subtotal: Number(orderSubtotal),
    discount: Number(t.disc || 0),
    shipping: Number(t.ship || 0),
    total: Number(orderTotal),
    totals: t,
    paymentMethod: orderData.paymentMethod || 'Online (UPI)',
    paymentRef: orderData.paymentRef || ('UPI' + Math.floor(1000000000 + Math.random() * 9000000000)),
    estimatedDelivery: '3 to 5 business days',
    status: 'Confirmed & Packing',
    giftWrapped: isGiftWrapped
  };
  
  // Save to orders history
  const orders = JSON.parse(localStorage.getItem('frost_orders') || '[]');
  orders.unshift(order);
  localStorage.setItem('frost_orders', JSON.stringify(orders));
  localStorage.setItem('frost_last_order', JSON.stringify(order));

  // Sync to Supabase Cloud Database if connected
  if (typeof apiCreateOrder === 'function') {
    try {
      await apiCreateOrder({
        ...order,
        customer_name: custName,
        city: orderData.city || 'Mumbai',
        state: orderData.state || 'Maharashtra',
        pincode: orderData.pincode || '400001'
      }, order.items);
      console.log('✓ Order confirmed and inserted into Supabase cloud table orders:', orderId);
    } catch(err) {
      console.warn('Supabase cloud order sync notice:', err.message);
    }
  }
  
  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();
  
  return order;
}

// ==========================================
// 10. CATALOG RENDERING
// ==========================================
function renderCatalog({ containerId='products-grid', filter='all', sort='featured', searchQuery='', maxItems=null }={}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let items = FROST_PRODUCTS.filter(p => {
    let catMatch = false;
    if (filter === 'all') catMatch = true;
    else if (filter === 'home') catMatch = p.category !== 'sarees';
    else if (filter === 'sarees') catMatch = p.category === 'sarees';
    else if (p.category === filter) catMatch = true;
    else if ([p.title, p.fabric, p.craft, p.categoryName].join(' ').toLowerCase().includes(filter.toLowerCase())) catMatch = true;

    const srch = !searchQuery || [p.title,p.fabric,p.categoryName,p.description].join(' ').toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && srch;
  });

  if (sort==='price-low') items.sort((a,b)=>a.priceINR-b.priceINR);
  else if (sort==='price-high') items.sort((a,b)=>b.priceINR-a.priceINR);
  else if (sort==='rating') items.sort((a,b)=>b.rating-a.rating);
  if (maxItems) items=items.slice(0,maxItems);

  const countEl=document.getElementById('items-count');
  if(countEl) countEl.textContent=`Showing ${items.length} curated creation${items.length!==1?'s':''}`;

  if (items.length===0){ container.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:4rem 1rem;"><h3 style="font-family:var(--font-serif);font-size:1.8rem;color:var(--frost-dark);margin-bottom:.6rem;">No creations matched</h3><p style="color:var(--text-muted);">Try adjusting your filters.</p></div>`; return; }

  container.innerHTML = items.map(p => {
    const wl = wishlist.includes(p.id);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-media" onclick="window.location.href='product.html?id=${p.id}'" style="cursor:pointer;" title="View ${p.title}">
          <img src="${p.image}" alt="${p.title}" class="product-img" loading="lazy"/>
          <span class="product-badge${p.badgeType==='gold'?' gold':''}">${p.badge}</span>
          <button class="card-wishlist-btn${wl?' active':''}" onclick="event.stopPropagation();toggleWishlist('${p.id}')" aria-label="Save to wishlist">
            <svg viewBox="0 0 24 24" fill="${wl?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <div class="card-overlay-actions">
            <button class="btn-card-quickview" onclick="event.stopPropagation();openQuickView('${p.id}')">Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${p.categoryName} · ${p.origin}</span>
          <h4 class="product-title" onclick="window.location.href='product.html?id=${p.id}'" style="cursor:pointer;" title="View Details">${p.title}</h4>
          <span class="product-fabric-meta">${p.fabric}</span>
          <div class="product-price-row">
            <div class="price-wrap">
              <span class="price-current">${formatCurrency(p.priceINR)}</span>
              ${p.originalPriceINR?`<span class="price-original">${formatCurrency(p.originalPriceINR)}</span>`:''}
            </div>
            <button class="btn-add-cart" onclick="event.stopPropagation();addToCart('${p.id}')">+ Add</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ==========================================
// 11. TOAST
// ==========================================
function showToast(msg) {
  let box = document.getElementById('toast-container');
  if (!box){ box=document.createElement('div'); box.id='toast-container'; box.className='toast-container'; document.body.appendChild(box); }
  const t=document.createElement('div'); t.className='toast';
  t.innerHTML=`<span style="color:var(--gold-light);font-size:1rem;">❖</span><span>${msg}</span>`;
  box.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(20px)';setTimeout(()=>t.remove(),400);},3500);
}

// ==========================================
// 12. HERO SLIDER
// ==========================================
function initHeroSlider() {
  const slides=document.querySelectorAll('.hero-slide');
  const dots=document.querySelectorAll('.slide-dot');
  if(slides.length<=1) return;
  let cur=0;
  const show=(n)=>{ slides.forEach(s=>s.classList.remove('active')); dots.forEach(d=>d.classList.remove('active')); slides[n].classList.add('active'); if(dots[n]) dots[n].classList.add('active'); cur=n; };
  dots.forEach((d,i)=>d.addEventListener('click',()=>show(i)));
  setInterval(()=>show((cur+1)%slides.length),6500);
}

// ==========================================
// 13. HTML COMPONENT BUILDERS
// ==========================================
// 13. HTML COMPONENT BUILDERS (REDESIGN UI)
// ==========================================
function buildTopBar() {
  return `<div class="top-announcement-bar">
    <div class="bar-inner">
      <span>100% SECURE ONLINE PAYMENT</span>
    </div>
  </div>`;
}

function buildHeader(active) {
  const a = (p) => active === p ? ' active' : '';
  return `
  <header class="frost-site-header">
    <div class="frost-header-container">
      <a href="index.html" class="brand-logo-frost" aria-label="FROST Homepage">
        <span class="logo-text">FROST</span>
        <span class="logo-sub">Finest Clothing &amp; Living</span>
      </a>

      <nav class="frost-desktop-nav" aria-label="Main Navigation">
        <ul class="frost-nav-links">
          <li><a href="shop.html" class="${a('shop')}">Shop</a></li>
          <li><a href="shop.html?cat=women" class="${a('women')}">Women</a></li>
          <li><a href="shop.html?cat=home" class="${a('home')}">Home &amp; Living</a></li>
          <li><a href="lookbook.html" class="${a('journal')}">Journal</a></li>
        </ul>
      </nav>

      <div class="frost-header-actions">
        <button class="header-action-icon" id="search-trigger" aria-label="Search" title="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <a href="wishlist.html" class="header-action-icon" id="wishlist-trigger" aria-label="Wishlist" title="Saved Items">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <span class="header-badge-count" id="wishlist-badge">0</span>
        </a>
        <a href="cart.html" class="header-action-icon" id="cart-trigger" aria-label="Bag" title="Shopping Bag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span class="header-badge-count" id="cart-badge">0</span>
        </a>
        <button class="header-action-icon mobile-menu-btn" id="mobile-menu-toggle" aria-label="Toggle Menu" style="display:none;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>
  </header>`;
}

function buildFooterArea() {
  return `
    <div class="overlay-backdrop" id="cart-backdrop"></div>
    <aside class="cart-drawer" id="cart-drawer" aria-label="Shopping Bag">
      <div class="drawer-header">
        <h3 style="font-family:var(--font-serif);font-size:1.5rem;letter-spacing:0.04em;">YOUR BAG</h3>
        <button class="close-btn" id="cart-close-btn">✕</button>
      </div>
      <div class="free-shipping-progress-banner" style="margin: 0.8rem 1.2rem;">
        <div class="free-shipping-label" id="shipping-text">Add ₹1,499 more for FREE SHIPPING</div>
        <div class="free-shipping-bar-track">
          <div class="free-shipping-bar-fill" id="shipping-bar-fill" style="width:0%"></div>
        </div>
      </div>
      <div class="drawer-body" id="cart-items-container"></div>
      <div class="drawer-footer">
        <div class="promo-input-group">
          <input type="text" id="promo-code-input" placeholder="Coupon Code (e.g. FROST10)"/>
          <button type="button" id="btn-apply-promo">Apply</button>
        </div>
        <div class="cart-summary-row"><span>Subtotal</span><span id="cart-subtotal">₹0</span></div>
        <div class="cart-summary-row"><span>Shipping</span><span id="cart-shipping">FREE</span></div>
        <div class="cart-summary-row cart-summary-total"><span>Total</span><span id="cart-total">₹0</span></div>
        <div style="display:flex;gap:0.6rem;margin-top:0.8rem;">
          <a href="cart.html" class="btn-outline" style="flex:1;text-align:center;padding:0.8rem;border:1px solid var(--frost-border);font-size:0.8rem;text-decoration:none;font-weight:700;color:var(--text-dark);border-radius:var(--radius-sm);background:#FAF7F2;">VIEW BAG</a>
          <a href="checkout.html" class="btn-checkout-bordeaux" id="btn-checkout" style="flex:1.6;margin-top:0;padding:0.8rem;text-align:center;">CHECKOUT &rarr;</a>
        </div>
        <div class="bag-guest-subtext">Guest checkout only. Online payment.</div>
      </div>
    </aside>

    <aside class="wishlist-drawer" id="wishlist-drawer" aria-label="Wishlist">
      <div class="drawer-header">
        <h3 style="font-family:var(--font-serif);font-size:1.4rem;">SAVED PIECES</h3>
        <button class="close-btn" id="wishlist-close-btn">✕</button>
      </div>
      <div class="drawer-body" id="wishlist-items-container"></div>
      <div class="drawer-footer" style="padding:1.2rem;border-top:1px solid var(--frost-border);background:#ffffff;">
        <a href="wishlist.html" class="btn-burgundy" style="display:block;text-align:center;text-decoration:none;padding:0.85rem;font-size:0.82rem;letter-spacing:0.08em;">VIEW FULL WISHLIST PAGE &rarr;</a>
      </div>
    </aside>

    <div class="overlay-backdrop" id="quickview-backdrop"></div>
    <div class="quickview-modal" id="quickview-modal" role="dialog" aria-modal="true"><div id="quickview-modal-body"></div></div>
    
    <div class="overlay-backdrop" id="checkout-backdrop"></div>
    <div class="checkout-modal" id="checkout-modal" role="dialog" aria-modal="true">
      <button class="close-btn" id="checkout-close-btn" style="position:absolute;top:1.2rem;right:1.5rem;">✕</button>
      <div id="checkout-modal-body"></div>
    </div>

    <!-- Interactive Size Guide Modal -->
    <div class="overlay-backdrop" id="sizeguide-backdrop" onclick="closeSizeGuide()"></div>
    <div class="size-guide-modal" id="sizeguide-modal" style="display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:92%;max-width:680px;background:#ffffff;border-radius:var(--radius-sm);box-shadow:var(--shadow-dark);z-index:250;padding:2.2rem;max-height:90vh;overflow-y:auto;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
        <h3 style="font-family:var(--font-serif);font-size:1.8rem;letter-spacing:0.06em;text-transform:uppercase;">SIZE GUIDE</h3>
        <button onclick="closeSizeGuide()" style="background:none;border:none;font-size:1.3rem;cursor:pointer;">✕</button>
      </div>
      <div style="display:flex;gap:1rem;border-bottom:1px solid var(--frost-border);margin-bottom:1.5rem;">
        <button class="shop-tab-btn active" id="sg-tab-women" onclick="switchSizeGuideTab('women')">WOMEN</button>
        <button class="shop-tab-btn" id="sg-tab-home" onclick="switchSizeGuideTab('home')">HOME LIVING</button>
      </div>
      <div id="sg-content-women">
        <table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin-bottom:1.8rem;text-align:center;">
          <thead>
            <tr style="background:#FAF7F2;border-bottom:2px solid var(--frost-border);">
              <th style="padding:10px;">Size</th>
              <th style="padding:10px;">Bust (in)</th>
              <th style="padding:10px;">Waist (in)</th>
              <th style="padding:10px;">Hip (in)</th>
              <th style="padding:10px;">Length (in)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--frost-border);"><td style="padding:9px;font-weight:600;">XS</td><td>34</td><td>26</td><td>36</td><td>46</td></tr>
            <tr style="border-bottom:1px solid var(--frost-border);"><td style="padding:9px;font-weight:600;">S</td><td>36</td><td>28</td><td>38</td><td>47</td></tr>
            <tr style="border-bottom:1px solid var(--frost-border);"><td style="padding:9px;font-weight:600;">M</td><td>38</td><td>30</td><td>40</td><td>48</td></tr>
            <tr style="border-bottom:1px solid var(--frost-border);"><td style="padding:9px;font-weight:600;">L</td><td>40</td><td>32</td><td>42</td><td>48.5</td></tr>
            <tr style="border-bottom:1px solid var(--frost-border);"><td style="padding:9px;font-weight:600;">XL</td><td>42</td><td>34</td><td>44</td><td>49</td></tr>
            <tr><td style="padding:9px;font-weight:600;">XXL</td><td>44</td><td>36</td><td>46</td><td>49.5</td></tr>
          </tbody>
        </table>
        <div style="background:#FAF7F2;padding:1.2rem;border-radius:var(--radius-sm);font-size:0.84rem;line-height:1.6;color:#4B5563;">
          <strong style="color:var(--text-dark);text-transform:uppercase;letter-spacing:0.08em;display:block;margin-bottom:4px;">HOW TO MEASURE</strong>
          <strong>Bust:</strong> Measure under arms around the fullest part of bust.<br/>
          <strong>Waist:</strong> Measure around your natural waistline keeping tape comfortably loose.<br/>
          <strong>Hips:</strong> Measure around the fullest part of your body at the top of the legs.
        </div>
      </div>
      <div id="sg-content-home" style="display:none;">
        <table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin-bottom:1.8rem;text-align:center;">
          <thead>
            <tr style="background:#FAF7F2;border-bottom:2px solid var(--frost-border);">
              <th style="padding:10px;">Item</th>
              <th style="padding:10px;">Dimensions</th>
              <th style="padding:10px;">Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--frost-border);"><td style="padding:9px;font-weight:600;">King Bedsheet</td><td>108" x 108"</td><td>1 Flat Sheet + 2 Pillow Covers (20" x 30")</td></tr>
            <tr style="border-bottom:1px solid var(--frost-border);"><td style="padding:9px;font-weight:600;">Queen Bedsheet</td><td>90" x 100"</td><td>1 Flat Sheet + 2 Pillow Covers (20" x 30")</td></tr>
            <tr style="border-bottom:1px solid var(--frost-border);"><td style="padding:9px;font-weight:600;">Cushion Covers</td><td>16" x 16" / 18" x 18"</td><td>Set of 2 Covers</td></tr>
            <tr><td style="padding:9px;font-weight:600;">Table Runner</td><td>14" x 72" / 14" x 96"</td><td>1 Pure Linen Runner</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Search Backdrop Overlay & Modal -->
    <div class="overlay-backdrop" id="search-backdrop" onclick="closeSearch()"></div>
    <div class="search-modal" id="search-modal">
      <div class="container" style="max-width:800px;margin:3rem auto;padding:0 1.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.2rem;">
          <span style="font-family:var(--font-serif);font-size:1.6rem;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-dark);">WHAT ARE YOU LOOKING FOR?</span>
          <button class="close-btn" id="search-close-btn" style="background:none;border:none;font-size:1.4rem;cursor:pointer;color:var(--text-dark);">✕</button>
        </div>
        <form id="global-search-form" onsubmit="event.preventDefault(); executeSearch();" style="display:flex;gap:0.6rem;align-items:center;">
          <div class="search-bar-inner" style="flex:1;display:flex;align-items:center;background:#ffffff;border:1.5px solid var(--frost-border);border-radius:var(--radius-sm);padding:0.4rem 1rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--text-muted);margin-right:0.6rem;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="search-input" class="search-input" placeholder="Search dresses, kurtis, bedsheets, cushions..." autocomplete="off" style="width:100%;border:none;font-size:1.05rem;outline:none;background:transparent;font-family:var(--font-sans);"/>
          </div>
          <button type="submit" id="search-submit-btn" class="btn-burgundy" style="padding:0.85rem 1.6rem;white-space:nowrap;font-size:0.85rem;cursor:pointer;letter-spacing:0.08em;">SEARCH</button>
        </form>
        <div style="display:flex;gap:.8rem;margin-top:1.2rem;flex-wrap:wrap;align-items:center;">
          <span style="font-size:.76rem;text-transform:uppercase;color:var(--text-muted);font-weight:600;">Popular Searches:</span>
          <a href="shop.html?search=dress" class="option-pill" style="padding:5px 14px;background:#FAF7F2;border:1px solid var(--frost-border);border-radius:20px;font-size:0.78rem;color:var(--text-dark);text-decoration:none;">Dresses</a>
          <a href="shop.html?search=coord" class="option-pill" style="padding:5px 14px;background:#FAF7F2;border:1px solid var(--frost-border);border-radius:20px;font-size:0.78rem;color:var(--text-dark);text-decoration:none;">Co-ords</a>
          <a href="shop.html?search=kurti" class="option-pill" style="padding:5px 14px;background:#FAF7F2;border:1px solid var(--frost-border);border-radius:20px;font-size:0.78rem;color:var(--text-dark);text-decoration:none;">Kurtis</a>
          <a href="shop.html?search=bedsheet" class="option-pill" style="padding:5px 14px;background:#FAF7F2;border:1px solid var(--frost-border);border-radius:20px;font-size:0.78rem;color:var(--text-dark);text-decoration:none;">Bedsheets</a>
          <a href="shop.html?search=cushion" class="option-pill" style="padding:5px 14px;background:#FAF7F2;border:1px solid var(--frost-border);border-radius:20px;font-size:0.78rem;color:var(--text-dark);text-decoration:none;">Cushions</a>
          <a href="shop.html?search=linen" class="option-pill" style="padding:5px 14px;background:#FAF7F2;border:1px solid var(--frost-border);border-radius:20px;font-size:0.78rem;color:var(--text-dark);text-decoration:none;">Linen</a>
        </div>
      </div>
    </div>

    <!-- Dark Luxury Footer -->
    <footer class="frost-dark-footer">
      <div class="frost-footer-container">
        <div class="footer-cols-grid">
          <div class="footer-brand-col">
            <h3 class="footer-brand-title">FROST</h3>
            <p class="footer-brand-sub">Crafted for the way you live. Contemporary silhouettes and refined home textiles made for everyday living.</p>
          </div>
          <div>
            <h5 class="footer-col-heading">Shop</h5>
            <ul class="footer-links-list">
              <li><a href="shop.html">All Products</a></li>
              <li><a href="shop.html?cat=women">Women</a></li>
              <li><a href="shop.html?cat=home">Home &amp; Living</a></li>
            </ul>
          </div>
          <div>
            <h5 class="footer-col-heading">Customer Care</h5>
            <ul class="footer-links-list">
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="contact.html">Shipping &amp; Delivery</a></li>
              <li><a href="contact.html">Returns &amp; Exchanges</a></li>
              <li><a href="checkout.html">Track Order</a></li>
              <li><a href="javascript:void(0)" onclick="openSizeGuide()">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <h5 class="footer-col-heading">About</h5>
            <ul class="footer-links-list">
              <li><a href="heritage.html">Our Story</a></li>
              <li><a href="heritage.html">Our Textiles</a></li>
              <li><a href="lookbook.html">Journal</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 class="footer-col-heading">Legal</h5>
            <ul class="footer-links-list">
              <li><a href="heritage.html">Privacy Policy</a></li>
              <li><a href="heritage.html">Terms of Service</a></li>
              <li><a href="heritage.html">Refund Policy</a></li>
              <li><a href="heritage.html">Shipping Policy</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom-bar">
          <div class="footer-social-icons">
            <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" aria-label="Pinterest"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12c0 2 1.5 3 2.5 3s1-1 1-2c0-2.5-1.5-4-3.5-4S4 10.5 4 13c0 2 1 3.5 2.5 4"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
          </div>

          <div style="font-size:0.78rem;color:#9CA3AF;">
            © 2026 FROST CLOTHING. All rights reserved.
          </div>

          <div class="footer-payment-badges">
            <span class="payment-badge-pill">UPI</span>
            <span class="payment-badge-pill">VISA</span>
            <span class="payment-badge-pill">Mastercard</span>
            <span class="payment-badge-pill">RuPay</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- Global Sticky Mobile Bottom Navigation Bar -->
    <nav class="mobile-bottom-nav" aria-label="Mobile Navigation">
      <a href="index.html" class="mobile-bottom-item ${active==='index'?'active':''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span>Home</span>
      </a>
      <a href="shop.html" class="mobile-bottom-item ${active==='shop'?'active':''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        <span>Shop</span>
      </a>
      <a href="shop.html?cat=women" class="mobile-bottom-item ${active==='women'?'active':''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
        <span>Women</span>
      </a>
      <a href="shop.html?cat=home" class="mobile-bottom-item ${active==='home'?'active':''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <span>Living</span>
      </a>
      <a href="cart.html" class="mobile-bottom-item ${active==='cart'?'active':''}" id="mobile-cart-bottom-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <span class="mobile-bottom-badge" id="mobile-bottom-badge">0</span>
        <span>Cart</span>
      </a>
    </nav>
    <style>.admin-access-link{position:fixed;bottom:70px;left:1rem;font-size:.65rem;color:rgba(0,0,0,.2);letter-spacing:.1em;text-transform:uppercase;z-index:50;text-decoration:none;transition:color .2s}.admin-access-link:hover{color:var(--frost-burgundy)}</style>
    <a href="admin.html" class="admin-access-link">◆ Admin</a>`;
}

function openSizeGuide() {
  const modal = document.getElementById('sizeguide-modal');
  const backdrop = document.getElementById('sizeguide-backdrop');
  if (modal && backdrop) {
    modal.style.display = 'block';
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeSizeGuide() {
  const modal = document.getElementById('sizeguide-modal');
  const backdrop = document.getElementById('sizeguide-backdrop');
  if (modal && backdrop) {
    modal.style.display = 'none';
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function switchSizeGuideTab(tab) {
  const womenBtn = document.getElementById('sg-tab-women');
  const homeBtn = document.getElementById('sg-tab-home');
  const womenContent = document.getElementById('sg-content-women');
  const homeContent = document.getElementById('sg-content-home');
  if (tab === 'women') {
    womenBtn.classList.add('active');
    homeBtn.classList.remove('active');
    womenContent.style.display = 'block';
    homeContent.style.display = 'none';
  } else {
    homeBtn.classList.add('active');
    womenBtn.classList.remove('active');
    homeContent.style.display = 'block';
    womenContent.style.display = 'none';
  }
}

// ==========================================
// 14. EVENT LISTENERS
// ==========================================
function setupEvents() {
  // Scroll → sticky nav
  window.addEventListener('scroll', ()=>{
    const nav=document.querySelector('.header-nav');
    if(nav) nav.classList.toggle('scrolled', window.scrollY>40);
  },{passive:true});



  // Drawers & Modals Backdrop Click
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCart);
  document.getElementById('cart-backdrop')?.addEventListener('click', () => { closeCart(); closeWishlist(); });
  document.getElementById('wishlist-close-btn')?.addEventListener('click', closeWishlist);
  document.getElementById('search-backdrop')?.addEventListener('click', closeSearch);

  // Search
  document.getElementById('search-trigger')?.addEventListener('click', openSearch);
  document.getElementById('search-close-btn')?.addEventListener('click', closeSearch);
  document.getElementById('search-submit-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    executeSearch();
  });
  document.getElementById('global-search-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    executeSearch();
  });
  document.getElementById('search-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeSearch();
    }
  });

  // Quick view backdrop
  document.getElementById('quickview-backdrop')?.addEventListener('click', closeQuickView);

  // Checkout
  document.getElementById('btn-checkout')?.addEventListener('click', openCheckout);
  document.getElementById('checkout-close-btn')?.addEventListener('click', closeCheckout);
  document.getElementById('checkout-backdrop')?.addEventListener('click', closeCheckout);

  // Gift wrap & promo
  document.getElementById('gift-wrap-toggle')?.addEventListener('change', e => { isGiftWrapped = e.target.checked; updateCartUI(); });
  document.getElementById('btn-apply-promo')?.addEventListener('click', handleApplyPromo);

  // Newsletter
  document.getElementById('newsletter-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email')?.value;
    if (email) { showToast('Welcome! Use code FROST15 for 15% off your first order.'); e.target.reset(); }
  });

  // Mobile menu
  document.getElementById('mobile-menu-toggle')?.addEventListener('click', () => {
    const menu = document.querySelector('.nav-menu');
    if (!menu) return;
    if (menu.style.display === 'flex') {
      menu.removeAttribute('style');
    } else {
      Object.assign(menu.style, { display: 'flex', flexDirection: 'column', position: 'absolute', top: '100%', left: '0', width: '100%', background: 'white', padding: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,.1)', zIndex: '200' });
    }
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeCart(); closeWishlist(); closeQuickView(); closeCheckout(); closeSearch(); }
  });
}

// Global Search Execution Function
function executeSearch() {
  const input = document.getElementById('search-input');
  const q = input ? input.value.trim() : '';
  if (!q) return;
  closeSearch();
  const isShop = window.location.pathname.toLowerCase().includes('shop');
  if (isShop && typeof filterCatalogBySearch === 'function') {
    filterCatalogBySearch(q);
  } else {
    window.location.href = `shop.html?search=${encodeURIComponent(q)}`;
  }
}

// Real Visitor Tracking Function
function trackVisit() {
  try {
    const visits = JSON.parse(localStorage.getItem('frost_visits') || '[]');
    const today = new Date().toISOString().split('T')[0];
    const hour = new Date().getHours();
    const page = window.location.pathname.split('/').pop() || 'index.html';
    
    visits.push({
      date: today,
      hour: hour,
      page: page,
      userAgent: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop',
      referrer: document.referrer ? (new URL(document.referrer, window.location.origin).hostname || 'Direct') : 'Direct',
      timestamp: new Date().toISOString()
    });

    if (visits.length > 5000) visits.splice(0, visits.length - 5000);
    localStorage.setItem('frost_visits', JSON.stringify(visits));

    // Also sync to Supabase visitor_logs table if REST client is available
    if (typeof supabaseRest === 'function') {
      supabaseRest('visitor_logs', 'POST', {
        page_path: page,
        referrer: document.referrer || 'Direct',
        user_device: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop'
      }).catch(() => {});
    }
  } catch(e) {}
}

// ==========================================
// 15. MAIN INIT
// ==========================================
function initFrostPage(activePage) {
  // Inject Top Bar if empty placeholder exists
  const tb = document.getElementById('frost-topbar');
  if (tb && !tb.innerHTML.trim()) { tb.className = 'top-bar'; tb.innerHTML = buildTopBar(); }

  // Inject Header if empty placeholder exists
  const hd = document.getElementById('frost-header');
  if (hd && !hd.innerHTML.trim()) { hd.className = 'header-nav'; hd.innerHTML = buildHeader(activePage); }

  // Inject Footer Area (drawers + modals + footer) if empty
  const fa = document.getElementById('frost-footer-area');
  if (fa && !fa.innerHTML.trim()) fa.innerHTML = buildFooterArea();

  // Active link highlighting
  if (activePage) {
    document.querySelectorAll('.nav-link, .frost-nav-links a').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (
        (activePage === 'index' && (href === 'index.html' || href === '#')) ||
        (activePage === 'shop' && href === 'shop.html') ||
        (activePage === 'women' && (href.includes('cat=women') || href.includes('sarees'))) ||
        (activePage === 'home' && (href.includes('cat=home') || href.includes('home-living'))) ||
        (activePage === 'lookbook' && href.includes('lookbook')) ||
        (activePage === 'heritage' && href.includes('heritage')) ||
        (activePage === 'contact' && href.includes('contact')) ||
        (activePage === 'wishlist' && href.includes('wishlist'))
      ) {
        link.classList.add('active');
      }
    });
  }

  // Events + state
  setupEvents();
  updateCartUI();
  updateWishlistUI();

  // Real visitor tracking
  trackVisit();
}

// Auto-run when script loads or DOM is ready
function autoInitFrost() {
  const path = window.location.pathname.toLowerCase();
  const search = window.location.search.toLowerCase();
  let page = 'index';
  if (path.includes('shop')) {
    if (search.includes('cat=women')) page = 'women';
    else if (search.includes('cat=home')) page = 'home';
    else page = 'shop';
  } else if (path.includes('sarees')) {
    page = 'women';
  } else if (path.includes('home-living')) {
    page = 'home';
  } else if (path.includes('product')) {
    page = 'product';
  } else if (path.includes('cart')) {
    page = 'cart';
  } else if (path.includes('wishlist')) {
    page = 'wishlist';
  } else if (path.includes('checkout')) {
    page = 'checkout';
  } else if (path.includes('lookbook')) {
    page = 'lookbook';
  } else if (path.includes('heritage')) {
    page = 'heritage';
  } else if (path.includes('contact')) {
    page = 'contact';
  }

  initFrostPage(page);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoInitFrost);
} else {
  autoInitFrost();
}

