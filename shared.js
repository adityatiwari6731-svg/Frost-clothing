/**
 * FROST | COUTURE & LIVING
 * Shared Application Logic — Multi-Page Architecture v2.0
 * Inject common components, manage cart/wishlist/currency across all pages.
 */

// ==========================================
// 1. PRODUCT CATALOG DATA
// ==========================================
const FROST_PRODUCTS = [
  {id:'saree-01',title:'The Empress Banarasi Katan Silk Saree',category:'sarees',categoryName:'Couture Saree',priceINR:48500,originalPriceINR:58000,rating:4.9,reviewsCount:38,badge:'Heritage Heirloom',badgeType:'gold',image:'images/saree_banarasi.jpg',fabric:'Pure Katan Silk',zari:'Antique Silver & Champagne Gold Zari',craft:'Handloom Kadwa Weave — 45 Days',origin:'Varanasi Atelier',description:'A regal masterpiece handwoven over 45 days in our Varanasi ateliers. Deep wine plum body intricately showered with antique silver and champagne gold kadwa jaal motifs, crowned by an opulent heirloom pallu.',optionsLabel:'Bespoke Tailoring',options:['Unstitched Blouse Piece Included','Custom Blouse Tailored (+₹2,490)','Fall & Pico Finished (Complimentary)']},
  {id:'saree-02',title:'Frost Celestial Moonlit Tissue Saree',category:'sarees',categoryName:'Couture Saree',priceINR:36000,originalPriceINR:42000,rating:4.8,reviewsCount:29,badge:'Limited Edition',badgeType:'dark',image:'images/hero_saree.jpg',fabric:'Icy-Platinum Tissue Silk',zari:'Pure Silver Thread Embroidery',craft:'Zardozi & Cutdana Hand-Craft',origin:'Kashmir & Varanasi Guild',description:'Draped in ethereal icy-platinum luster, this tissue silk saree glimmers like morning frost. Embellished with micro-cutdana and hand-embroidered silver zardozi borders for haute couture occasions.',optionsLabel:'Bespoke Tailoring',options:['Unstitched Blouse Piece Included','Custom Blouse Tailored (+₹2,490)','Fall & Pico Finished (Complimentary)']},
  {id:'saree-03',title:'Whispering Willow Organza Silk Saree',category:'sarees',categoryName:'Couture Saree',priceINR:28500,originalPriceINR:34000,rating:4.9,reviewsCount:42,badge:'Pure Silk Mark',badgeType:'gold',image:'images/saree_organza.jpg',fabric:'Translucent Tissue Organza',zari:'Gota Patti & Crystal Filigree',craft:'Artisanal Hand-Applique',origin:'Chanderi Atelier',description:'Gossamer-light organza silk in misty sage and pearl frost tones. Finished with exquisite hand-cut gota patti and crystal sequins along an undulating scalloped hem.',optionsLabel:'Bespoke Tailoring',options:['Unstitched Blouse Piece Included','Custom Blouse Tailored (+₹2,490)','Fall & Pico Finished (Complimentary)']},
  {id:'saree-04',title:'Royal Kanjivaram Temple Border Silk Saree',category:'sarees',categoryName:'Couture Saree',priceINR:52000,originalPriceINR:65000,rating:5.0,reviewsCount:56,badge:'Royal Bridal',badgeType:'gold',image:'images/saree_banarasi.jpg',fabric:'Pure Mulberry Silk',zari:'Heavy 24k Gold Pure Zari',craft:'Temple Korvai Weave',origin:'Kanchipuram Silk Atelier',description:'The quintessential Kanjivaram wedding drape. Woven on temple korvai technique with contrasting borders and a majestic peacock pallu motif in heavy 24k gold pure zari.',optionsLabel:'Bespoke Tailoring',options:['Unstitched Blouse Piece Included','Custom Blouse Tailored (+₹2,490)','Fall & Pico Finished (Complimentary)']},
  {id:'kurta-01',title:'Noor Chanderi Zari Hand-Embroidered Silk Kurta Set',category:'sarees',categoryName:'Ethnic Couture',priceINR:18500,originalPriceINR:22000,rating:4.9,reviewsCount:31,badge:'Festive Edition',badgeType:'gold',image:'images/hero_saree.jpg',fabric:'Chanderi Silk & Mulmul Lining',zari:'Real Gota Patti & Zardozi Yoke',craft:'Artisanal Hand-Embroidery',origin:'Chanderi & Lucknow Atelier',description:'An elegant 3-piece handcrafted ensemble featuring a gold zari hand-embroidered Chanderi silk kurta, paired with tapered brocade silk trousers and an ethereal sheer dupatta with scalloped borders.',optionsLabel:'Select Size',options:['XS (Bust 34")','S (Bust 36")','M (Bust 38")','L (Bust 40")','XL (Bust 42")']},
  {id:'kurta-02',title:'Handcrafted Ajrakh Block Print Pure Tussar Kurta',category:'sarees',categoryName:'Ethnic Couture',priceINR:12800,originalPriceINR:15500,rating:4.8,reviewsCount:24,badge:'Hand Block Print',badgeType:'dark',image:'images/saree_organza.jpg',fabric:'100% Wild Tussar Silk',zari:'Natural Indigo & Madder Dyes',craft:'16-Stage Ajrakh Hand-Block Print',origin:'Kutch Artisan Collective',description:'Hand-block printed using ancestral resist-dye techniques with natural indigo, madder, and iron mordants on organic wild tussar silk. Features mother-of-pearl buttons and fine kantha accents.',optionsLabel:'Select Size',options:['S (38)','M (40)','L (42)','XL (44)']},
  {id:'home-01',title:'Imperial 800TC Egyptian Cotton Bedsheet Set',category:'bedsheets',categoryName:'Luxury Bedsheet',priceINR:14500,originalPriceINR:18000,rating:5.0,reviewsCount:64,badge:'Best Seller',badgeType:'gold',image:'images/home_sanctuary.jpg',fabric:'800-Thread Count Egyptian Cotton Sateen',zari:'Double Silver Satin Stitch Border',craft:'Single-Ply Sateen Weave',origin:'Frost Sanctuary Living',description:'Indulge in five-star sanctuary comfort. Spun from authentic long-staple Egyptian cotton with a luminous sateen finish and double-needle silver satin stitching. Includes 1 flat sheet and 2 oxford pillowcases.',optionsLabel:'Select Bed Size',options:['Super King (108" x 108")','King (100" x 108")','Queen (90" x 100")']},
  {id:'home-02',title:'Botanical Mirage Velvet Cushion Covers (Set of 3)',category:'cushions',categoryName:'Artisan Cushion Covers',priceINR:8900,originalPriceINR:11500,rating:4.9,reviewsCount:47,badge:'Artisanal Handcraft',badgeType:'dark',image:'images/cushions_luxury.jpg',fabric:'Micro-Plush Velvet & Raw Tussar Silk',zari:'Metallic Botanical Zardozi & Beadwork',craft:'Hand-Embroidered Ari Work',origin:'Lucknow & Delhi Atelier',description:'A curated triptych of jewel-toned cushions: Deep Emerald Velvet, Slate Frost Silk, and Champagne Raw Silk — each hand-embroidered with shimmering metallic fern and floral motifs.',optionsLabel:'Select Dimension',options:['18" x 18" (Standard Luxury)','16" x 16" (Accent)','20" x 20" (Grand Floor Cushion)']},
  {id:'home-03',title:'Grand Versailles Banquet Jacquard Tablecloth',category:'tablecloths',categoryName:'Banquet Table Linen',priceINR:12500,originalPriceINR:15500,rating:4.8,reviewsCount:19,badge:'Grand Soirée',badgeType:'dark',image:'images/tablecloth_luxury.jpg',fabric:'Linen-Silk Damask Jacquard',zari:'Woven Silver Meander Border',craft:'Master Loom Jacquard Weave',origin:'Coimbatore Heritage Loom',description:'Transform your dining table into a palace banquet. Luxurious linen-silk blend woven with understated champagne damask geometry framed with a double hemstitch border. Includes 6 matching dinner napkins.',optionsLabel:'Select Dining Size',options:['8-Seater (70" x 108")','6-Seater (60" x 90")','10-Seater Banquet (72" x 126")']},
  {id:'home-04',title:'Mulberry Silk Oxford Pillow Covers (Pair)',category:'pillows',categoryName:'Pillow Ensembles',priceINR:7500,originalPriceINR:9200,rating:4.9,reviewsCount:52,badge:'Pure 22-Momme Silk',badgeType:'gold',image:'images/home_sanctuary.jpg',fabric:'100% Pure 22-Momme Grade 6A Mulberry Silk',zari:'Hidden Envelope Closure & Flanged Border',craft:'Anti-Friction Hair & Skin Finish',origin:'Bangalore Silk District',description:'The definitive sleep beauty treatment. Woven from Grade 6A pure mulberry silk that naturally preserves skin hydration, reduces morning creases, and eliminates sleep friction on hair.',optionsLabel:'Select Pillow Size',options:['King Size Pair (20" x 36")','Standard / Queen Pair (20" x 30")']},
  {id:'home-05',title:'Celestial Frost Velvet Bed Runner & Cushion Duo',category:'cushions',categoryName:'Artisan Cushion Covers',priceINR:11200,originalPriceINR:14000,rating:4.9,reviewsCount:28,badge:'Sanctuary Suite',badgeType:'gold',image:'images/cushions_luxury.jpg',fabric:'Quilted Frost Slate Velvet',zari:'Silver Lurex Hand-Quilted Kantha',craft:'Artisanal Hand-Padded Quilt',origin:'Jaipur Master Guild',description:'Complete the layered bed aesthetic with our signature slate frost velvet bed runner and two matching bolsters. Features hand-stitched kantha quilting with micro silver lurex threads.',optionsLabel:'Select Option',options:['Full Bed Runner + 2 Cushions','Runner Only','Duo Cushions Only']},
];

// Merge any custom products added or updated via Admin Panel (including uploaded images)
(function mergeAdminProducts() {
  try {
    const adminProds = JSON.parse(localStorage.getItem('frost_admin_products') || '[]');
    adminProds.forEach(ap => {
      const idx = FROST_PRODUCTS.findIndex(p => p.id === ap.id);
      if (idx > -1) {
        FROST_PRODUCTS[idx] = { ...FROST_PRODUCTS[idx], ...ap };
      } else if (ap.active !== false) {
        FROST_PRODUCTS.push({
          id: ap.id,
          title: ap.title,
          category: ap.category || 'sarees',
          categoryName: ap.category === 'sarees' ? 'Couture Saree' : 'Artisanal Home',
          priceINR: ap.priceINR,
          originalPriceINR: ap.originalPriceINR,
          rating: 4.9,
          reviewsCount: 12,
          badge: ap.badge || 'New Creation',
          badgeType: 'gold',
          image: ap.image || 'images/hero_saree.jpg',
          fabric: ap.fabric || 'Pure Artisan Handloom',
          zari: 'Antique Threadwork',
          craft: 'Traditional Master Weave',
          origin: 'Frost Heritage Atelier',
          description: ap.description || ap.title,
          optionsLabel: 'Select Option',
          options: ['Standard Luxury Edition', 'Complimentary Gift Finish']
        });
      }
    });
  } catch(e) {}
})();

// Asynchronously sync catalog from Supabase PostgreSQL
async function syncSupabaseProducts() {
  if (typeof apiGetProducts === 'function') {
    try {
      const dbProds = await apiGetProducts();
      if (dbProds && dbProds.length > 0) {
        dbProds.forEach(dp => {
          const idx = FROST_PRODUCTS.findIndex(p => p.id === dp.id);
          if (idx > -1) {
            FROST_PRODUCTS[idx] = { ...FROST_PRODUCTS[idx], ...dp };
          } else {
            FROST_PRODUCTS.unshift(dp);
          }
        });
        window.dispatchEvent(new CustomEvent('frost:products-updated'));
        if (typeof renderCurrentPageCatalog === 'function') renderCurrentPageCatalog();
        if (typeof renderCuratedProducts === 'function') renderCuratedProducts();
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
  const freeShip = subtotal >= 20000;
  const ship = freeShip ? 0 : 950;
  const total = Math.max(0, subtotal - disc + gift + ship);
  return {subtotal, gift, disc, ship, total, freeShip};
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = cart.reduce((s, i) => s + i.qty, 0);

  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <h4 style="font-family:var(--font-serif);font-size:1.3rem;color:var(--frost-dark);margin-bottom:.4rem;">Your bag is empty</h4>
        <p style="font-size:.85rem;color:var(--text-muted);margin-bottom:1.4rem;">Explore our couture sarees and artisanal home living.</p>
        <a href="sarees.html" onclick="closeCart()" class="btn-luxury btn-gold" style="font-size:.72rem;padding:.8rem 1.6rem;">Explore Collections</a>
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
  if (el('cart-shipping')) el('cart-shipping').textContent = freeShip ? 'Complimentary' : formatCurrency(ship);
  if (el('cart-total')) el('cart-total').textContent = formatCurrency(total);
  const pct = Math.min(100, Math.round((subtotal / 20000) * 100));
  if (el('shipping-bar-fill')) el('shipping-bar-fill').style.width = `${pct}%`;
  if (el('shipping-text')) {
    el('shipping-text').innerHTML = freeShip
      ? '<strong>✨ Complimentary Pan-India White-Glove Shipping unlocked!</strong>'
      : `Add <strong>${formatCurrency(20000 - subtotal)}</strong> more for Complimentary Delivery Across India`;
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
function openSearch()  { document.getElementById('search-modal')?.classList.add('active'); setTimeout(()=>document.getElementById('search-input')?.focus(), 50); }
function closeSearch() { document.getElementById('search-modal')?.classList.remove('active'); const si=document.getElementById('search-input'); if(si) si.value=''; }
function closeQuickView(){ document.getElementById('quickview-modal')?.classList.remove('active'); document.getElementById('quickview-backdrop')?.classList.remove('active'); document.body.style.overflow=''; activeQuickViewProduct=null; }
function closeCheckout(){ document.getElementById('checkout-modal')?.classList.remove('active'); document.getElementById('checkout-backdrop')?.classList.remove('active'); document.body.style.overflow=''; }

// ==========================================
// 7. QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
  const p = FROST_PRODUCTS.find(x => x.id === productId);
  if (!p) return;
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
  const orderId = 'FAB-' + Math.floor(100000 + Math.random() * 900000);
  const today = new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
  const t = getCartTotals();
  const order = {
    id: orderId,
    date: today,
    customer: orderData.name,
    email: orderData.email,
    phone: orderData.phone,
    address: `${orderData.address}, ${orderData.landmark ? orderData.landmark + ', ' : ''}${orderData.city}, ${orderData.state} - ${orderData.pincode}`,
    items: [...cart],
    totals: t,
    paymentMethod: orderData.paymentMethod || 'UPI (Google Pay / PhonePe)',
    paymentRef: orderData.paymentRef || ('UPI' + Math.floor(1000000000 + Math.random() * 9000000000)),
    estimatedDelivery: '3 to 5 business days',
    status: 'Confirmed & Packing'
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
function buildTopBar() {
  return `<div class="container">
    <div class="top-bar-ticker"><span class="badge-pulse"></span><span>Complimentary Pan-India White-Glove Shipping On Orders Above ₹20,000</span></div>
    <div class="top-bar-actions">
      <a href="heritage.html" class="top-bar-link">Our Atelier Story</a>
      <a href="contact.html" class="top-bar-link">Private Concierge</a>
      <div class="currency-selector" style="color:var(--gold-light);font-size:0.75rem;font-weight:600;letter-spacing:0.04em;">
        <span>🇮🇳 India · INR (₹)</span>
      </div>
    </div>
  </div>`;
}

function buildHeader(active) {
  const a=(p)=>active===p?' active':'';
  return `<div class="container"><div class="nav-wrapper">
    <a href="index.html" class="brand-logo" aria-label="FROST"><span class="logo-monogram">FROST</span><span class="logo-tagline">Couture &amp; Living</span></a>
    <nav aria-label="Primary">
      <ul class="nav-menu">
        <li class="nav-item"><a href="sarees.html" class="nav-link${a('sarees')}">Couture Sarees</a>
          <ul class="nav-dropdown">
            <li><a href="sarees.html" class="dropdown-link">Banarasi Brocades</a></li>
            <li><a href="sarees.html" class="dropdown-link">Kanjivaram Heirlooms</a></li>
            <li><a href="sarees.html" class="dropdown-link">Tissue Organza</a></li>
            <li><a href="sarees.html" class="dropdown-link">Bridal Trousseau</a></li>
          </ul>
        </li>
        <li class="nav-item"><a href="home-living.html" class="nav-link${a('home')}">Home Sanctuary</a>
          <ul class="nav-dropdown">
            <li><a href="home-living.html" class="dropdown-link">Egyptian Cotton Bedsheets</a></li>
            <li><a href="home-living.html" class="dropdown-link">Velvet Cushion Covers</a></li>
            <li><a href="home-living.html" class="dropdown-link">Mulberry Silk Pillows</a></li>
            <li><a href="home-living.html" class="dropdown-link">Banquet Table Linens</a></li>
          </ul>
        </li>
        <li class="nav-item"><a href="lookbook.html" class="nav-link${a('lookbook')}">Lookbook</a></li>
        <li class="nav-item"><a href="heritage.html" class="nav-link${a('heritage')}">Heritage</a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link${a('contact')}">Contact</a></li>
      </ul>
    </nav>
    <div class="nav-actions">
      <button class="icon-btn" id="search-trigger" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
      <button class="icon-btn" id="wishlist-trigger" aria-label="Wishlist"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><span class="badge-count" id="wishlist-badge">0</span></button>
      <button class="icon-btn" id="cart-trigger" aria-label="Bag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><span class="badge-count" id="cart-badge">0</span></button>
      <button class="icon-btn mobile-toggle" id="mobile-menu-toggle" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
    </div>
  </div></div>`;
}

function buildFooterArea() {
  return `
    <div class="overlay-backdrop" id="cart-backdrop"></div>
    <aside class="cart-drawer" id="cart-drawer" aria-label="Shopping Bag">
      <div class="drawer-header"><h3>Your Shopping Bag</h3><button class="close-btn" id="cart-close-btn">✕</button></div>
      <div class="shipping-progress-box"><div id="shipping-text">Add ₹20,000 more for Complimentary Pan-India Delivery</div><div class="shipping-bar-track"><div class="shipping-bar-fill" id="shipping-bar-fill" style="width:0%"></div></div></div>
      <div class="drawer-body" id="cart-items-container"></div>
      <div class="drawer-footer">
        <label class="gift-wrap-toggle"><input type="checkbox" id="gift-wrap-toggle"/><span>Bespoke Gold-Foil Gift Box &amp; Card (+₹450)</span></label>
        <div class="promo-input-group"><input type="text" id="promo-code-input" placeholder="Privilege Code (e.g. FROST15)"/><button type="button" id="btn-apply-promo">Apply</button></div>
        <div class="cart-summary-row"><span>Subtotal</span><span id="cart-subtotal">₹0</span></div>
        <div class="cart-summary-row"><span>Pan-India Delivery</span><span id="cart-shipping">₹0</span></div>
        <div class="cart-summary-row cart-summary-total"><span>Estimated Total</span><span id="cart-total">₹0</span></div>
        <a href="checkout.html" class="btn-checkout" id="btn-checkout" style="display:block; text-align:center; text-decoration:none;">Proceed to Checkout</a>
        <a href="cart.html" style="display:block; text-align:center; font-size:0.75rem; color:var(--text-muted); text-decoration:underline; margin-top:0.6rem;">View Detailed Shopping Bag</a>
      </div>
    </aside>
    <aside class="wishlist-drawer" id="wishlist-drawer" aria-label="Wishlist">
      <div class="drawer-header"><h3>Saved Heirlooms</h3><button class="close-btn" id="wishlist-close-btn">✕</button></div>
      <div class="drawer-body" id="wishlist-items-container"></div>
    </aside>
    <div class="overlay-backdrop" id="quickview-backdrop"></div>
    <div class="quickview-modal" id="quickview-modal" role="dialog" aria-modal="true"><div id="quickview-modal-body"></div></div>
    <div class="overlay-backdrop" id="checkout-backdrop"></div>
    <div class="checkout-modal" id="checkout-modal" role="dialog" aria-modal="true">
      <button class="close-btn" id="checkout-close-btn" style="position:absolute;top:1.2rem;right:1.5rem;">✕</button>
      <div id="checkout-modal-body"></div>
    </div>
    <div class="search-modal" id="search-modal">
      <div class="container">
        <div class="search-bar-inner"><input type="text" id="search-input" class="search-input" placeholder="Search sarees, bedsheets, cushions, linens…" autocomplete="off"/><button class="close-btn" id="search-close-btn">✕</button></div>
        <div style="display:flex;gap:.8rem;margin-top:1rem;flex-wrap:wrap;align-items:center;">
          <span style="font-size:.74rem;text-transform:uppercase;color:var(--gold-dark);font-weight:600;">Trending:</span>
          <a href="sarees.html" class="option-pill">Banarasi</a>
          <a href="sarees.html" class="option-pill">Organza Saree</a>
          <a href="home-living.html" class="option-pill">Egyptian Cotton</a>
          <a href="home-living.html" class="option-pill">Velvet Cushion</a>
          <a href="home-living.html" class="option-pill">Tablecloth</a>
        </div>
      </div>
    </div>
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col footer-brand">
            <div class="brand-logo" style="align-items:flex-start;margin-bottom:1.2rem;"><span class="logo-monogram" style="color:var(--frost-white);">FROST</span><span class="logo-tagline">Couture &amp; Living</span></div>
            <p class="footer-desc">An artisanal Indian atelier celebrating the zenith of handloom weaving and sanctuary home decor.</p>
            <form class="newsletter-form" id="newsletter-form"><input type="email" class="newsletter-input" id="newsletter-email" placeholder="Your email address" required/><button type="submit" class="newsletter-btn">Subscribe</button></form>
            <span style="font-size:.72rem;color:rgba(255,255,255,.35);margin-top:.5rem;display:block;">15% off your first order upon subscribing.</span>
          </div>
          <div class="footer-col"><h5>Couture Sarees</h5><ul class="footer-links"><li><a href="sarees.html">Banarasi Brocades</a></li><li><a href="sarees.html">Kanjivaram Heirlooms</a></li><li><a href="sarees.html">Tissue Organza</a></li><li><a href="sarees.html">Bridal Trousseau</a></li></ul></div>
          <div class="footer-col"><h5>Sanctuary Living</h5><ul class="footer-links"><li><a href="home-living.html">Egyptian Cotton Bedsheets</a></li><li><a href="home-living.html">Velvet Cushion Covers</a></li><li><a href="home-living.html">Mulberry Silk Pillows</a></li><li><a href="home-living.html">Banquet Table Linens</a></li></ul></div>
          <div class="footer-col"><h5>The Maison</h5><ul class="footer-links"><li><a href="lookbook.html">The Lookbook</a></li><li><a href="heritage.html">Heritage &amp; Craft</a></li><li><a href="contact.html">Contact &amp; Concierge</a></li><li><span style="color:var(--gold-light);">Mumbai:</span> The Taj Mahal Palace</li><li><span style="color:var(--gold-light);">New Delhi:</span> The Chanakya</li><li><span style="color:var(--gold-light);">Bengaluru:</span> The Leela Palace</li></ul></div>
        </div>
        <div class="footer-bottom"><div>© 2026 FROST ATELIER &amp; LIVING LTD. ALL RIGHTS RESERVED.</div><div>CERTIFIED HANDLOOM &amp; PURE SILK MARK OF INDIA</div></div>
      </div>
    </footer>
    <style>.admin-access-link{position:fixed;bottom:.6rem;left:1rem;font-size:.6rem;color:rgba(255,255,255,.15);letter-spacing:.1em;text-transform:uppercase;z-index:50;transition:color .2s}.admin-access-link:hover{color:var(--gold-dark)}</style>
    <a href="admin.html" class="admin-access-link">◆ Admin</a>`;
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



  // Cart
  document.getElementById('cart-trigger')?.addEventListener('click',openCart);
  document.getElementById('cart-close-btn')?.addEventListener('click',closeCart);
  document.getElementById('cart-backdrop')?.addEventListener('click',()=>{closeCart();closeWishlist();});

  // Wishlist
  document.getElementById('wishlist-trigger')?.addEventListener('click',openWishlist);
  document.getElementById('wishlist-close-btn')?.addEventListener('click',closeWishlist);

  // Search
  document.getElementById('search-trigger')?.addEventListener('click',openSearch);
  document.getElementById('search-close-btn')?.addEventListener('click',closeSearch);
  document.getElementById('search-input')?.addEventListener('input', e=>{
    const q = e.target.value.trim();
    if(document.getElementById('products-grid')){
      renderCatalog({ searchQuery: q });
    }
  });
  document.getElementById('search-input')?.addEventListener('keydown', e=>{
    if(e.key === 'Enter'){
      const q = e.target.value.trim().toLowerCase();
      if(!q) return;
      if(q.includes('saree') || q.includes('banarasi') || q.includes('kanjivaram') || q.includes('organza')){
        window.location.href = 'sarees.html';
      } else if(q.includes('bed') || q.includes('cushion') || q.includes('pillow') || q.includes('table') || q.includes('sheet') || q.includes('linen') || q.includes('home')){
        window.location.href = 'home-living.html';
      }
    }
  });

  // Quick view backdrop
  document.getElementById('quickview-backdrop')?.addEventListener('click',closeQuickView);

  // Checkout
  document.getElementById('btn-checkout')?.addEventListener('click',openCheckout);
  document.getElementById('checkout-close-btn')?.addEventListener('click',closeCheckout);
  document.getElementById('checkout-backdrop')?.addEventListener('click',closeCheckout);

  // Gift wrap & promo
  document.getElementById('gift-wrap-toggle')?.addEventListener('change',e=>{isGiftWrapped=e.target.checked;updateCartUI();});
  document.getElementById('btn-apply-promo')?.addEventListener('click',handleApplyPromo);

  // Newsletter
  document.getElementById('newsletter-form')?.addEventListener('submit',e=>{
    e.preventDefault();
    const email=document.getElementById('newsletter-email')?.value;
    if(email){showToast('Welcome! Use code FROST15 for 15% off your first order.');e.target.reset();}
  });

  // Mobile menu
  document.getElementById('mobile-menu-toggle')?.addEventListener('click',()=>{
    const menu=document.querySelector('.nav-menu');
    if(!menu) return;
    if(menu.style.display==='flex'){
      menu.removeAttribute('style');
    } else {
      Object.assign(menu.style,{display:'flex',flexDirection:'column',position:'absolute',top:'100%',left:'0',width:'100%',background:'white',padding:'1.5rem',boxShadow:'0 10px 30px rgba(0,0,0,.1)',zIndex:'200'});
    }
  });

  // Escape key
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){closeCart();closeWishlist();closeQuickView();closeCheckout();closeSearch();}
  });
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
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (
        (activePage === 'index' && (href === 'index.html' || href === '#')) ||
        (activePage === 'sarees' && href.includes('sarees')) ||
        (activePage === 'home' && href.includes('home-living')) ||
        (activePage === 'lookbook' && href.includes('lookbook')) ||
        (activePage === 'heritage' && href.includes('heritage')) ||
        (activePage === 'contact' && href.includes('contact'))
      ) {
        link.classList.add('active');
      }
    });
  }

  // Events + state
  setupEvents();
  updateCartUI();
  updateWishlistUI();

  // Visitor tracking
  try { trackVisit(); } catch(e) {}
}

// Auto-run when script loads or DOM is ready
function autoInitFrost() {
  const path = window.location.pathname.toLowerCase();
  let page = 'index';
  if (path.includes('sarees')) page = 'sarees';
  else if (path.includes('home-living')) page = 'home';
  else if (path.includes('lookbook')) page = 'lookbook';
  else if (path.includes('heritage')) page = 'heritage';
  else if (path.includes('contact')) page = 'contact';

  initFrostPage(page);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoInitFrost);
} else {
  autoInitFrost();
}
