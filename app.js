/**
 * FROST | COUTURE & LIVING
 * High-End Luxury Brand & E-Commerce Web Application
 */

// ==========================================
// 1. PRODUCT CATALOG DATA
// ==========================================
const FROST_PRODUCTS = [
  {
    id: 'saree-01',
    title: 'The Empress Banarasi Katan Silk Saree',
    category: 'sarees',
    categoryName: 'Couture Saree',
    priceINR: 48500,
    originalPriceINR: 58000,
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Heritage Heirloom',
    badgeType: 'gold',
    image: 'images/saree_banarasi.jpg',
    fabric: 'Pure Katan Silk',
    zari: 'Antique Silver & Champagne Gold Zari',
    craft: 'Handloom Kadwa Weave (45 Days to Craft)',
    origin: 'Varanasi Atelier',
    description: 'A regal masterpiece handwoven over 45 days in our Varanasi ateliers. Deep wine plum body intricately showered with antique silver and champagne gold kadwa jaal motifs, crowned by an opulent heirloom pallu.',
    optionsLabel: 'Bespoke Tailoring',
    options: ['Unstitched Blouse Piece Included', 'Custom Blouse Tailored (+₹2,490)', 'Fall & Pico Finished (Complimentary)']
  },
  {
    id: 'saree-02',
    title: 'Frost Celestial Moonlit Tissue Saree',
    category: 'sarees',
    categoryName: 'Couture Saree',
    priceINR: 36000,
    originalPriceINR: 42000,
    rating: 4.8,
    reviewsCount: 24,
    badge: 'Limited Edition',
    badgeType: 'dark',
    image: 'images/hero_saree.jpg',
    fabric: 'Icy-Platinum Tissue Silk',
    zari: 'Pure Silver Thread Embroidery',
    craft: 'Zardozi & Cutdana Hand-Craft',
    origin: 'Kashmir & Varanasi Guild',
    description: 'Draped in ethereal icy-platinum luster, this tissue silk saree glimmers like morning frost. Embellished with micro-cutdana and hand-embroidered silver zardozi borders for haute couture occasions.',
    optionsLabel: 'Bespoke Tailoring',
    options: ['Unstitched Blouse Piece Included', 'Custom Blouse Tailored (+₹2,490)', 'Fall & Pico Finished (Complimentary)']
  },
  {
    id: 'saree-03',
    title: 'Whispering Willow Organza Silk Saree',
    category: 'sarees',
    categoryName: 'Couture Saree',
    priceINR: 28500,
    originalPriceINR: 34000,
    rating: 4.9,
    reviewsCount: 19,
    badge: 'Pure Silk Mark',
    badgeType: 'gold',
    image: 'images/saree_organza.jpg',
    fabric: 'Translucent Tissue Organza',
    zari: 'Subtle Gota Patti & Crystal Filigree',
    craft: 'Artisanal Hand-Applique',
    origin: 'Chanderi Atelier',
    description: 'Gossamer-light organza silk draped in misty sage and pearl frost tones. Finished with exquisite hand-cut gota patti and crystal sequins along an undulating scalloped hem.',
    optionsLabel: 'Bespoke Tailoring',
    options: ['Unstitched Blouse Piece Included', 'Custom Blouse Tailored (+₹2,490)', 'Fall & Pico Finished (Complimentary)']
  },
  {
    id: 'home-01',
    title: 'Imperial 800TC Egyptian Cotton Bedsheet Set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheet',
    priceINR: 14500,
    originalPriceINR: 18000,
    rating: 5.0,
    reviewsCount: 62,
    badge: 'Best Seller',
    badgeType: 'gold',
    image: 'images/home_sanctuary.jpg',
    fabric: '800-Thread Count Long-Staple Egyptian Cotton Sateen',
    zari: 'Double Silver Satin Stitch Border',
    craft: 'Single-Ply Sateen Weave',
    origin: 'Frost Sanctuary Living',
    description: 'Indulge in five-star sanctuary comfort. Spun from authentic long-staple Egyptian cotton with a luminous sateen finish and double-needle tailored silver satin stitching. Includes 1 flat sheet and 2 oxford pillowcases.',
    optionsLabel: 'Select Bed Size',
    options: ['Super King (108" x 108")', 'King (100" x 108")', 'Queen (90" x 100")']
  },
  {
    id: 'home-02',
    title: 'Botanical Mirage Velvet Cushion Covers (Set of 3)',
    category: 'cushions',
    categoryName: 'Artisan Cushion Covers',
    priceINR: 8900,
    originalPriceINR: 11500,
    rating: 4.9,
    reviewsCount: 45,
    badge: 'Artisanal Handcraft',
    badgeType: 'dark',
    image: 'images/cushions_luxury.jpg',
    fabric: 'Micro-Plush Velvet & Raw Tussar Silk',
    zari: 'Metallic Botanical Zardozi & Beadwork',
    craft: 'Hand-Embroidered Ari Work',
    origin: 'Lucknow & Delhi Atelier',
    description: 'A curated triptych of jewel-toned cushions: Deep Emerald Velvet, Slate Frost Silk, and Champagne Raw Silk. Hand-embroidered with shimmering metallic fern and floral motifs.',
    optionsLabel: 'Select Dimension',
    options: ['18" x 18" (Standard Luxury)', '16" x 16" (Accent)', '20" x 20" (Grand Floor Cushion)']
  },
  {
    id: 'home-03',
    title: 'Grand Versailles Banquet Jacquard Tablecloth',
    category: 'tablecloths',
    categoryName: 'Banquet Table Linen',
    priceINR: 12500,
    originalPriceINR: 15500,
    rating: 4.8,
    reviewsCount: 31,
    badge: 'Grand Soirée',
    badgeType: 'dark',
    image: 'images/tablecloth_luxury.jpg',
    fabric: 'Linen-Silk Damask Jacquard',
    zari: 'Subtle Woven Silver Meander Border',
    craft: 'Master Loom Jacquard Weave',
    origin: 'Coimbatore Heritage Loom',
    description: 'Transform your dining table into a palace banquet. Luxurious linen-silk blend woven with understated champagne damask geometry and framed with a double hemstitch border. Includes 6 matching dinner napkins.',
    optionsLabel: 'Select Dining Size',
    options: ['8-Seater (70" x 108")', '6-Seater (60" x 90")', '10-Seater Banquet (72" x 126")']
  },
  {
    id: 'home-04',
    title: 'Mulberry Silk Oxford Pillow Covers (Pair)',
    category: 'pillows',
    categoryName: 'Pillow Ensembles',
    priceINR: 7500,
    originalPriceINR: 9200,
    rating: 4.9,
    reviewsCount: 53,
    badge: 'Pure 22-Momme Silk',
    badgeType: 'gold',
    image: 'images/home_sanctuary.jpg',
    fabric: '100% Pure 22-Momme Grade 6A Mulberry Silk',
    zari: 'Hidden Envelope Closure & Flanged Border',
    craft: 'Anti-Friction Hair & Skin Silk Finish',
    origin: 'Bangalore Silk District',
    description: 'The definitive sleep beauty treatment. Woven from Grade 6A pure mulberry silk that naturally preserves skin hydration, reduces morning creases, and eliminates sleep friction on hair.',
    optionsLabel: 'Select Pillow Size',
    options: ['King Size Pair (20" x 36")', 'Standard / Queen Pair (20" x 30")']
  },
  {
    id: 'home-05',
    title: 'Celestial Frost Silk Velvet Bed Runner & Cushion Duo',
    category: 'cushions',
    categoryName: 'Artisan Cushion Covers',
    priceINR: 11200,
    originalPriceINR: 14000,
    rating: 4.9,
    reviewsCount: 28,
    badge: 'Sanctuary Suite',
    badgeType: 'gold',
    image: 'images/cushions_luxury.jpg',
    fabric: 'Quilted Frost Slate Velvet',
    zari: 'Silver Lurex Hand-Quilted Kantha Stitching',
    craft: 'Artisanal Hand-Padded Quilt',
    origin: 'Jaipur Master Guild',
    description: 'Complete the layered bed aesthetic with our signature slate frost velvet bed runner accompanied by two matching bolsters. Features hand-stitched kantha quilting with micro silver lurex threads.',
    optionsLabel: 'Select Option',
    options: ['Full Bed Runner + 2 Cushions', 'Runner Only', 'Duo Cushions Only']
  }
];

// ==========================================
// 2. CURRENCY CONVERSION ENGINE
// ==========================================
const CURRENCIES = {
  INR: { symbol: '₹', rate: 1, locale: 'en-IN' },
  USD: { symbol: '$', rate: 0.012, locale: 'en-US' },
  EUR: { symbol: '€', rate: 0.011, locale: 'de-DE' },
  GBP: { symbol: '£', rate: 0.0094, locale: 'en-GB' }
};

let currentCurrency = 'INR';

function formatCurrency(inrAmount) {
  const currencyInfo = CURRENCIES[currentCurrency] || CURRENCIES.INR;
  const converted = Math.round(inrAmount * currencyInfo.rate);
  return `${currencyInfo.symbol}${converted.toLocaleString(currencyInfo.locale)}`;
}

// ==========================================
// 3. APPLICATION STATE
// ==========================================
let cart = JSON.parse(localStorage.getItem('frost_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('frost_wishlist')) || [];
let currentFilter = 'all';
let currentFabricFilter = 'all';
let currentSort = 'featured';
let isGiftWrapped = false;
let appliedDiscount = 0; // percentage
let activeQuickViewProduct = null;

// ==========================================
// 4. DOM REFERENCES
// ==========================================
const productsGrid = document.getElementById('products-grid');
const tabButtons = document.querySelectorAll('.tab-btn');
const fabricSelect = document.getElementById('filter-fabric');
const sortSelect = document.getElementById('sort-products');
const itemsCountDisplay = document.getElementById('items-count');

// Cart Drawer
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerBackdrop = document.getElementById('cart-backdrop');
const cartTriggerBtn = document.getElementById('cart-trigger');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCountBadge = document.getElementById('cart-badge');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartShippingEl = document.getElementById('cart-shipping');
const cartTotalEl = document.getElementById('cart-total');
const shippingProgressBar = document.getElementById('shipping-bar-fill');
const shippingTextEl = document.getElementById('shipping-text');
const giftWrapCheckbox = document.getElementById('gift-wrap-toggle');
const promoCodeInput = document.getElementById('promo-code-input');
const applyPromoBtn = document.getElementById('btn-apply-promo');
const checkoutBtn = document.getElementById('btn-checkout');

// Wishlist Drawer
const wishlistDrawer = document.getElementById('wishlist-drawer');
const wishlistTriggerBtn = document.getElementById('wishlist-trigger');
const wishlistCloseBtn = document.getElementById('wishlist-close-btn');
const wishlistItemsContainer = document.getElementById('wishlist-items-container');
const wishlistCountBadge = document.getElementById('wishlist-badge');

// Quick View Modal
const quickviewModal = document.getElementById('quickview-modal');
const quickviewBackdrop = document.getElementById('quickview-backdrop');
const quickviewCloseBtn = document.getElementById('quickview-close-btn');

// Checkout Modal
const checkoutModal = document.getElementById('checkout-modal');
const checkoutBackdrop = document.getElementById('checkout-backdrop');
const checkoutCloseBtn = document.getElementById('checkout-close-btn');

// Search Modal
const searchModal = document.getElementById('search-modal');
const searchTriggerBtn = document.getElementById('search-trigger');
const searchCloseBtn = document.getElementById('search-close-btn');
const searchInput = document.getElementById('search-input');

// Currency Selector
const currencySelect = document.getElementById('currency-select');

// Sticky Nav
const headerNav = document.getElementById('header-nav');

// ==========================================
// 5. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
  setupHeroSlider();
});

// ==========================================
// 6. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
  // Sticky Nav on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      headerNav.classList.add('scrolled');
    } else {
      headerNav.classList.remove('scrolled');
    }
  });

  // Currency Switcher
  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      renderCatalog();
      updateCartUI();
      if (activeQuickViewProduct) {
        updateQuickViewPricing();
      }
      showToast(`Currency changed to ${currentCurrency}`);
    });
  }

  // Filter Tabs
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderCatalog();
    });
  });

  // Fabric Filter
  if (fabricSelect) {
    fabricSelect.addEventListener('change', (e) => {
      currentFabricFilter = e.target.value;
      renderCatalog();
    });
  }

  // Sort Select
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  // Cart Open / Close
  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartDrawerBackdrop) cartDrawerBackdrop.addEventListener('click', closeCart);

  // Wishlist Open / Close
  if (wishlistTriggerBtn) wishlistTriggerBtn.addEventListener('click', openWishlist);
  if (wishlistCloseBtn) wishlistCloseBtn.addEventListener('click', closeWishlist);

  // Quick View Close
  if (quickviewCloseBtn) quickviewCloseBtn.addEventListener('click', closeQuickView);
  if (quickviewBackdrop) quickviewBackdrop.addEventListener('click', closeQuickView);

  // Checkout Open / Close
  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', closeCheckout);
  if (checkoutBackdrop) checkoutBackdrop.addEventListener('click', closeCheckout);

  // Search Open / Close
  if (searchTriggerBtn) searchTriggerBtn.addEventListener('click', openSearch);
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      renderCatalog(q);
    });
  }

  // Gift wrap toggle
  if (giftWrapCheckbox) {
    giftWrapCheckbox.addEventListener('change', (e) => {
      isGiftWrapped = e.target.checked;
      updateCartUI();
    });
  }

  // Promo Code
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', handleApplyPromo);
  }

  // Room Visualizer Hotspots
  setupRoomHotspots();

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'white';
        navMenu.style.padding = '2rem';
        navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      }
    });
  }

  // Newsletter Submit
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      if (email) {
        showToast('Welcome to Frost Atelier! Enjoy 15% off with code FROST15');
        newsletterForm.reset();
      }
    });
  }
}

// ==========================================
// 7. HERO EDITORIAL SLIDER
// ==========================================
function setupHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slide-dot');
  let currentSlide = 0;

  if (slides.length <= 1) return;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSlide(idx));
  });

  setInterval(() => {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }, 6500);
}

// ==========================================
// 8. PRODUCT CATALOG RENDERING & FILTERING
// ==========================================
function renderCatalog(searchQuery = '') {
  if (!productsGrid) return;

  let filtered = FROST_PRODUCTS.filter((product) => {
    const matchesCategory = currentFilter === 'all' || product.category === currentFilter;
    const matchesFabric = currentFabricFilter === 'all' || product.fabric.toLowerCase().includes(currentFabricFilter.toLowerCase());
    const matchesSearch = searchQuery === '' || 
      product.title.toLowerCase().includes(searchQuery) ||
      product.categoryName.toLowerCase().includes(searchQuery) ||
      product.fabric.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesFabric && matchesSearch;
  });

  // Sorting
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.priceINR - b.priceINR);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.priceINR - a.priceINR);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update Items Count
  if (itemsCountDisplay) {
    itemsCountDisplay.textContent = `Showing ${filtered.length} curated ${filtered.length === 1 ? 'creation' : 'creations'}`;
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 0.8rem; color: var(--frost-dark);">No creations matched your criteria</h3>
        <p style="color: var(--text-muted);">Try adjusting your category or fabric filters to discover our atelier creations.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map((product) => {
    const isWishlisted = wishlist.includes(product.id);
    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-media" onclick="openQuickView('${product.id}')">
          <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy" />
          <span class="product-badge ${product.badgeType === 'gold' ? 'gold' : ''}">${product.badge}</span>
          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${product.id}')" title="Save to Wishlist">
            <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <div class="card-overlay-actions">
            <button class="btn-card-quickview" onclick="event.stopPropagation(); openQuickView('${product.id}')">Quick View & Details</button>
          </div>
        </div>

        <div class="product-info">
          <span class="product-category">${product.categoryName} • ${product.origin}</span>
          <h4 class="product-title" onclick="openQuickView('${product.id}')">${product.title}</h4>
          <span class="product-fabric-meta">${product.fabric}</span>

          <div class="product-price-row">
            <div class="price-wrap">
              <span class="price-current">${formatCurrency(product.priceINR)}</span>
              ${product.originalPriceINR ? `<span class="price-original">${formatCurrency(product.originalPriceINR)}</span>` : ''}
            </div>
            <button class="btn-add-cart" onclick="addToCart('${product.id}')">+ Add to Bag</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 9. SHOPPING BAG / CART LOGIC
// ==========================================
function addToCart(productId, selectedOption = null) {
  const product = FROST_PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const option = selectedOption || product.options[0];
  const existingIndex = cart.findIndex((item) => item.id === productId && item.option === option);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      priceINR: product.priceINR,
      image: product.image,
      categoryName: product.categoryName,
      option: option,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  openCart();
  showToast(`"${product.title}" added to your shopping bag`);
}

function updateCartQty(index, change) {
  if (cart[index]) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(index) {
  if (cart[index]) {
    const title = cart[index].title;
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast(`Removed "${title}" from bag`);
  }
}

function saveCart() {
  localStorage.setItem('frost_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  if (cartCountBadge) cartCountBadge.textContent = totalItems;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <h4 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--frost-dark); margin-bottom: 0.4rem;">Your shopping bag is empty</h4>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem;">Explore our clothing and artisanal home living products.</p>
        <button class="btn-luxury btn-gold" onclick="closeCart(); window.location.href='shop.html'" style="font-size: 0.72rem; padding: 0.8rem 1.6rem;">Start Shopping</button>
      </div>
    `;

    if (cartSubtotalEl) cartSubtotalEl.textContent = formatCurrency(0);
    if (cartShippingEl) cartShippingEl.textContent = formatCurrency(0);
    if (cartTotalEl) cartTotalEl.textContent = formatCurrency(0);
    if (shippingProgressBar) shippingProgressBar.style.width = '0%';
    if (shippingTextEl) shippingTextEl.textContent = 'Add ₹20,000 more for complimentary white-glove delivery';
    return;
  }

  // Render Items
  cartItemsContainer.innerHTML = cart.map((item, index) => {
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-meta">${item.categoryName} • ${item.option}</div>
          <div class="cart-item-bottom">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
            </div>
            <div style="display: flex; align-items: center;">
              <span class="cart-item-price">${formatCurrency(item.priceINR * item.qty)}</span>
              <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Remove item">✕</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Calculations
  const subtotalINR = cart.reduce((sum, item) => sum + (item.priceINR * item.qty), 0);
  const giftWrapCostINR = isGiftWrapped ? 450 : 0;
  const discountAmountINR = subtotalINR * (appliedDiscount / 100);
  const freeShippingThresholdINR = 20000;
  const isFreeShipping = subtotalINR >= freeShippingThresholdINR;
  const shippingCostINR = isFreeShipping ? 0 : 950;
  const grandTotalINR = Math.max(0, subtotalINR - discountAmountINR + giftWrapCostINR + shippingCostINR);

  if (cartSubtotalEl) cartSubtotalEl.textContent = formatCurrency(subtotalINR);
  if (cartShippingEl) cartShippingEl.textContent = isFreeShipping ? 'Complimentary' : formatCurrency(shippingCostINR);
  if (cartTotalEl) cartTotalEl.textContent = formatCurrency(grandTotalINR);

  // Free shipping progress
  const progressPercent = Math.min(100, Math.round((subtotalINR / freeShippingThresholdINR) * 100));
  if (shippingProgressBar) shippingProgressBar.style.width = `${progressPercent}%`;

  if (shippingTextEl) {
    if (isFreeShipping) {
      shippingTextEl.innerHTML = `<strong>✨ You've unlocked Complimentary White-Glove Global Shipping!</strong>`;
    } else {
      const remainingINR = freeShippingThresholdINR - subtotalINR;
      shippingTextEl.innerHTML = `Add <strong>${formatCurrency(remainingINR)}</strong> more for Complimentary White-Glove Delivery`;
    }
  }
}

function handleApplyPromo() {
  const code = promoCodeInput.value.trim().toUpperCase();
  if (code === 'FROST15') {
    appliedDiscount = 15;
    updateCartUI();
    showToast('Privilege Code FROST15 applied! 15% discount granted.');
  } else if (code === 'WELCOME10') {
    appliedDiscount = 10;
    updateCartUI();
    showToast('Privilege Code WELCOME10 applied! 10% discount granted.');
  } else {
    showToast('Invalid privilege code. Try "FROST15" or "WELCOME10".');
  }
}

function openCart() {
  if (cartDrawer) cartDrawer.classList.add('active');
  if (cartDrawerBackdrop) cartDrawerBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  if (cartDrawer) cartDrawer.classList.remove('active');
  if (cartDrawerBackdrop) cartDrawerBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 10. WISHLIST MANAGEMENT
// ==========================================
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const product = FROST_PRODUCTS.find((p) => p.id === productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed from your Atelier Wishlist`);
  } else {
    wishlist.push(productId);
    showToast(`Saved "${product ? product.title : 'creation'}" to Wishlist`);
  }

  localStorage.setItem('frost_wishlist', JSON.stringify(wishlist));
  renderCatalog();
  updateWishlistUI();
}

function updateWishlistUI() {
  if (wishlistCountBadge) wishlistCountBadge.textContent = wishlist.length;

  if (!wishlistItemsContainer) return;

  if (wishlist.length === 0) {
    wishlistItemsContainer.innerHTML = `
      <div class="empty-cart-state">
        <h4 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--frost-dark); margin-bottom: 0.4rem;">No saved heirlooms</h4>
        <p style="font-size: 0.88rem; color: var(--text-muted);">Click the heart icon on any saree or home decor piece to bookmark it.</p>
      </div>
    `;
    return;
  }

  const wishlistedProducts = FROST_PRODUCTS.filter((p) => wishlist.includes(p.id));

  wishlistItemsContainer.innerHTML = wishlistedProducts.map((product) => {
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.title}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4 class="cart-item-title">${product.title}</h4>
          <div class="cart-item-meta">${product.categoryName} • ${product.fabric}</div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">${formatCurrency(product.priceINR)}</span>
            <div>
              <button class="btn-add-cart" style="padding: 0.35rem 0.7rem; font-size: 0.68rem;" onclick="addToCart('${product.id}'); toggleWishlist('${product.id}')">Move to Bag</button>
              <button class="cart-item-remove" onclick="toggleWishlist('${product.id}')">✕</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openWishlist() {
  if (wishlistDrawer) wishlistDrawer.classList.add('active');
  if (cartDrawerBackdrop) cartDrawerBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWishlist() {
  if (wishlistDrawer) wishlistDrawer.classList.remove('active');
  if (cartDrawerBackdrop) cartDrawerBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 11. QUICK VIEW PRODUCT MODAL
// ==========================================
let selectedOption = null;

function openQuickView(productId) {
  const product = FROST_PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  activeQuickViewProduct = product;
  selectedOption = product.options[0];

  const modalContainer = document.getElementById('quickview-modal-body');
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-media">
        <img src="${product.image}" alt="${product.title}" />
      </div>
      <div class="quickview-content">
        <button class="modal-close-icon" onclick="closeQuickView()">✕</button>
        <span class="product-category">${product.categoryName} • ${product.origin}</span>
        <h2 style="font-size: 2rem; margin: 0.4rem 0 0.8rem; line-height: 1.2;">${product.title}</h2>
        
        <div class="price-wrap" style="margin-bottom: 1.2rem;">
          <span class="price-current" style="font-size: 1.5rem;" id="modal-price">${formatCurrency(product.priceINR)}</span>
          ${product.originalPriceINR ? `<span class="price-original" style="font-size: 1.05rem;">${formatCurrency(product.originalPriceINR)}</span>` : ''}
        </div>

        <p style="font-size: 0.92rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 1.5rem;">${product.description}</p>

        <div class="quickview-specs">
          <div class="spec-line"><span>Fabric Composition:</span> <span>${product.fabric}</span></div>
          <div class="spec-line"><span>Zari / Detailing:</span> <span>${product.zari}</span></div>
          <div class="spec-line"><span>Artisanal Craft:</span> <span>${product.craft}</span></div>
          <div class="spec-line"><span>Authenticity:</span> <span>100% Certified Pure Silk / Egyptian Cotton</span></div>
        </div>

        <div class="option-selector-group">
          <label>${product.optionsLabel}:</label>
          <div class="option-pills" id="modal-options-pills">
            ${product.options.map((opt, i) => `
              <button class="option-pill ${i === 0 ? 'active' : ''}" onclick="selectModalOption('${opt}', this)">${opt}</button>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 1rem; margin-top: auto;">
          <button class="btn-luxury btn-gold" style="flex: 1;" onclick="addToCart('${product.id}', selectedOption); closeQuickView();">
            Add to Shopping Bag
          </button>
          <button class="btn-luxury btn-outline-white" style="border-color: var(--frost-dark); color: var(--frost-dark);" onclick="toggleWishlist('${product.id}')">
            ♡ Wishlist
          </button>
        </div>
      </div>
    </div>
  `;

  if (quickviewModal) quickviewModal.classList.add('active');
  if (quickviewBackdrop) quickviewBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectModalOption(optionText, btnEl) {
  selectedOption = optionText;
  const pills = document.querySelectorAll('#modal-options-pills .option-pill');
  pills.forEach((p) => p.classList.remove('active'));
  btnEl.classList.add('active');
}

function updateQuickViewPricing() {
  const modalPrice = document.getElementById('modal-price');
  if (modalPrice && activeQuickViewProduct) {
    modalPrice.textContent = formatCurrency(activeQuickViewProduct.priceINR);
  }
}

function closeQuickView() {
  if (quickviewModal) quickviewModal.classList.remove('active');
  if (quickviewBackdrop) quickviewBackdrop.classList.remove('active');
  document.body.style.overflow = '';
  activeQuickViewProduct = null;
}

// ==========================================
// 12. ROOM VISUALIZER INTERACTIVE HOTSPOTS
// ==========================================
function setupRoomHotspots() {
  const pins = document.querySelectorAll('.hotspot-pin');
  pins.forEach((pin) => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = pin.classList.contains('active');
      pins.forEach((p) => p.classList.remove('active'));
      if (!isActive) {
        pin.classList.add('active');
      }
    });
  });

  document.addEventListener('click', () => {
    pins.forEach((p) => p.classList.remove('active'));
  });
}

// ==========================================
// 13. CHECKOUT SIMULATOR LOGIC
// ==========================================
let checkoutStep = 1;
let shippingInfo = {};

function openCheckout() {
  if (cart.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }
  closeCart();
  checkoutStep = 1;
  renderCheckoutStep();
  if (checkoutModal) checkoutModal.classList.add('active');
  if (checkoutBackdrop) checkoutBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  if (checkoutModal) checkoutModal.classList.remove('active');
  if (checkoutBackdrop) checkoutBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function renderCheckoutStep() {
  const container = document.getElementById('checkout-modal-body');
  if (!container) return;

  const subtotalINR = cart.reduce((sum, item) => sum + (item.priceINR * item.qty), 0);
  const giftWrapCostINR = isGiftWrapped ? 450 : 0;
  const discountAmountINR = subtotalINR * (appliedDiscount / 100);
  const isFreeShipping = subtotalINR >= 20000;
  const shippingCostINR = isFreeShipping ? 0 : 950;
  const grandTotalINR = Math.max(0, subtotalINR - discountAmountINR + giftWrapCostINR + shippingCostINR);

  if (checkoutStep === 1) {
    container.innerHTML = `
      <div class="checkout-step-indicator">
        <div class="step-circle active">1</div>
        <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 600; letter-spacing: 0.12em;">Shipping</span>
        <div style="width: 40px; height: 1px; background: var(--frost-silk);"></div>
        <div class="step-circle">2</div>
        <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.12em;">Payment</span>
        <div style="width: 40px; height: 1px; background: var(--frost-silk);"></div>
        <div class="step-circle">3</div>
        <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.12em;">Receipt</span>
      </div>

      <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem; text-align: center;">White-Glove Delivery Details</h3>
      <p style="text-align: center; font-size: 0.88rem; color: var(--text-muted); margin-bottom: 2rem;">Every Frost heirloom is individually packaged in custom embossed presentation cases.</p>

      <form id="shipping-form" onsubmit="event.preventDefault(); submitShippingStep();">
        <div class="form-grid">
          <div>
            <label style="display:block; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; font-weight:600;">First Name *</label>
            <input type="text" class="form-control" id="ship-fname" required value="Eleanor" />
          </div>
          <div>
            <label style="display:block; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; font-weight:600;">Last Name *</label>
            <input type="text" class="form-control" id="ship-lname" required value="Vanderbilt" />
          </div>
          <div class="form-group-full">
            <label style="display:block; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; font-weight:600;">Street Address *</label>
            <input type="text" class="form-control" id="ship-address" required value="740 Park Avenue, Suite 14B" />
          </div>
          <div>
            <label style="display:block; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; font-weight:600;">City *</label>
            <input type="text" class="form-control" id="ship-city" required value="New York" />
          </div>
          <div>
            <label style="display:block; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; font-weight:600;">Country *</label>
            <select class="form-control" id="ship-country">
              <option value="India">India (Mumbai / Delhi / Bengaluru)</option>
              <option value="United States" selected>United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Singapore">Singapore</option>
            </select>
          </div>
          <div class="form-group-full">
            <label style="display:block; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; font-weight:600;">Concierge Delivery Instructions</label>
            <input type="text" class="form-control" id="ship-notes" placeholder="e.g. Ring private bell, leave with concierge" />
          </div>
        </div>

        <div style="margin-top: 2rem; padding: 1.2rem; background: var(--frost-cream); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Order Total:</span>
            <strong style="font-size: 1.3rem; margin-left: 0.6rem; color: var(--frost-dark);">${formatCurrency(grandTotalINR)}</strong>
          </div>
          <button type="submit" class="btn-luxury btn-gold" style="padding: 0.8rem 1.8rem; font-size: 0.76rem;">Proceed to Payment →</button>
        </div>
      </form>
    `;
  } else if (checkoutStep === 2) {
    container.innerHTML = `
      <div class="checkout-step-indicator">
        <div class="step-circle" style="background: #2ed573; color: white;">✓</div>
        <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 600; letter-spacing: 0.12em;">Shipping</span>
        <div style="width: 40px; height: 1px; background: var(--frost-silk);"></div>
        <div class="step-circle active">2</div>
        <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 600; letter-spacing: 0.12em;">Payment</span>
        <div style="width: 40px; height: 1px; background: var(--frost-silk);"></div>
        <div class="step-circle">3</div>
        <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.12em;">Receipt</span>
      </div>

      <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem; text-align: center;">Secure Luxury Checkout</h3>
      <p style="text-align: center; font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem;">Encrypted with 256-bit SSL banking-grade authentication.</p>

      <div class="payment-method-selector">
        <button class="payment-method-btn active" type="button">Credit / Debit Card</button>
        <button class="payment-method-btn" type="button">UPI / QR Scan</button>
        <button class="payment-method-btn" type="button">Apple Pay</button>
      </div>

      <div class="form-grid">
        <div class="form-group-full">
          <label style="display:block; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; font-weight:600;">Cardholder Name</label>
          <input type="text" class="form-control" value="${shippingInfo.name || 'Eleanor Vanderbilt'}" />
        </div>
        <div class="form-group-full">
          <label style="display:block; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; font-weight:600;">Card Number</label>
          <input type="text" class="form-control" value="•••• •••• •••• 4242" />
        </div>
        <div>
          <label style="display:block; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; font-weight:600;">Expiry Date</label>
          <input type="text" class="form-control" value="09/29" />
        </div>
        <div>
          <label style="display:block; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; font-weight:600;">CVV / Security</label>
          <input type="password" class="form-control" value="•••" />
        </div>
      </div>

      <div style="margin-top: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <button type="button" class="btn-luxury" style="color: var(--text-muted); font-size: 0.76rem;" onclick="checkoutStep = 1; renderCheckoutStep();">← Back</button>
        <button type="button" class="btn-luxury btn-gold" style="padding: 0.9rem 2.2rem; font-size: 0.82rem;" onclick="submitPaymentStep()">Authorize & Pay ${formatCurrency(grandTotalINR)}</button>
      </div>
    `;
  } else if (checkoutStep === 3) {
    const orderId = `FR-${Math.floor(100000 + Math.random() * 900000)}`;
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    container.innerHTML = `
      <div class="order-success-view">
        <div class="success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span class="section-eyebrow">Transaction Confirmed</span>
        <h2 style="font-size: 2.2rem; margin: 0.4rem 0 0.8rem;">Thank You, ${shippingInfo.name || 'Honored Client'}</h2>
        <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 1.5rem;">Your bespoke order has been registered at the Frost Atelier. Our master curators will inspect each piece before white-glove dispatch.</p>

        <div class="order-receipt-box">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--frost-silk); padding-bottom: 0.8rem; margin-bottom: 0.8rem;">
            <div>
              <span style="font-size: 0.76rem; color: var(--text-muted); text-transform: uppercase;">Order Number</span>
              <h4 style="font-family: var(--font-display); font-size: 1.1rem; color: var(--frost-dark);">${orderId}</h4>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 0.76rem; color: var(--text-muted); text-transform: uppercase;">Date</span>
              <div style="font-weight: 600; font-size: 0.9rem;">${today}</div>
            </div>
          </div>

          <div style="font-size: 0.85rem; margin-bottom: 1rem;">
            <div style="color: var(--text-muted); margin-bottom: 0.3rem;">Shipping Address:</div>
            <strong>${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.country}</strong>
          </div>

          <div style="border-top: 1px solid var(--frost-silk); padding-top: 0.8rem;">
            ${cart.map((item) => `
              <div style="display: flex; justify-content: space-between; font-size: 0.86rem; margin-bottom: 0.4rem;">
                <span>${item.qty}x ${item.title} (${item.option})</span>
                <strong>${formatCurrency(item.priceINR * item.qty)}</strong>
              </div>
            `).join('')}
          </div>

          <div style="border-top: 1px solid var(--frost-silk); margin-top: 0.8rem; padding-top: 0.8rem; display: flex; justify-content: space-between; font-size: 1.05rem;">
            <span>Total Paid:</span>
            <strong style="color: var(--frost-dark); font-size: 1.25rem;">${formatCurrency(grandTotalINR)}</strong>
          </div>
        </div>

        <div style="display: flex; justify-content: center; gap: 1rem;">
          <button class="btn-luxury btn-gold" onclick="completeOrderAndReset()">Continue Exploring</button>
          <button class="btn-luxury btn-outline-white" style="border-color: var(--frost-dark); color: var(--frost-dark);" onclick="window.print()">Print Receipt</button>
        </div>
      </div>
    `;
  }
}

function submitShippingStep() {
  const fname = document.getElementById('ship-fname').value;
  const lname = document.getElementById('ship-lname').value;
  const address = document.getElementById('ship-address').value;
  const city = document.getElementById('ship-city').value;
  const country = document.getElementById('ship-country').value;

  shippingInfo = {
    name: `${fname} ${lname}`,
    address: address,
    city: city,
    country: country
  };

  checkoutStep = 2;
  renderCheckoutStep();
}

function submitPaymentStep() {
  showToast('Authorizing payment with Frost Private Concierge...');
  setTimeout(() => {
    checkoutStep = 3;
    renderCheckoutStep();
  }, 1200);
}

function completeOrderAndReset() {
  cart = [];
  saveCart();
  updateCartUI();
  closeCheckout();
  showToast('Order confirmed! Welcome package dispatched to your email.');
}

// ==========================================
// 14. SEARCH OVERLAY
// ==========================================
function openSearch() {
  if (searchModal) searchModal.classList.add('active');
  if (searchInput) searchInput.focus();
}

function closeSearch() {
  if (searchModal) searchModal.classList.remove('active');
  if (searchInput) searchInput.value = '';
  renderCatalog();
}

// ==========================================
// 15. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: var(--gold-light); font-size: 1.1rem;">❖</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}
