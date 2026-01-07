async function loadComponent(elementId, filePath) {
  try {
    const element = document.getElementById(elementId);
    if (!element) return;

    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);

    const html = await response.text();
    element.innerHTML = html;

    // Re-initialize functions after components load
    setTimeout(initCoreFunctions, 100);
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

// ========== CORE FUNCTIONS ==========
function initCoreFunctions() {
  initMobileMenu();
  updateCartCount();
  setCurrentYear();
  initCartButton();
  initProductImageLinks();
}

// Make all product images clickable
function initProductImageLinks() {
  // Find all product images that aren't already in a link
  document.querySelectorAll('.product-img:not(.showcase-img)').forEach(img => {
    if (!img.parentElement.classList.contains('product-img-link')) {
      const productId = getProductIdFromElement(img);
      if (productId) {
        const link = document.createElement('a');
        link.href = `product-details.html?id=${productId}`;
        link.className = 'product-img-link';
        img.parentNode.insertBefore(link, img);
        link.appendChild(img);
      }
    }
  });
}

// Helper to extract product ID from nearby elements
function getProductIdFromElement(imgElement) {
  // Look for product title link
  const showcase = imgElement.closest('.showcase');
  if (showcase) {
    const titleLink = showcase.querySelector('.showcase-title');
    if (titleLink && titleLink.href) {
      const url = new URL(titleLink.href);
      return url.searchParams.get('id');
    }
  }
  return null;
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const mobileMenuOpenBtn = document.querySelector('[data-mobile-menu-open-btn]');
  const mobileMenuCloseBtn = document.querySelector('[data-mobile-menu-close-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (mobileMenuOpenBtn && mobileMenu) {
    mobileMenuOpenBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileMenuCloseBtn && mobileMenu) {
    mobileMenuCloseBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
}

// ========== CART FUNCTIONS ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function initCartButton() {
  const cartBtn = document.getElementById('cart-btn');
  const mobileCartBtn = document.getElementById('mobile-cart-btn');

  [cartBtn, mobileCartBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        window.location.href = 'cart.html';
      });
    }
  });
}

function addToCart(productId, quantity = 1) {
  // This will be overridden by product-details.js if on that page
  console.log(`Add to cart: ${productId}, Qty: ${quantity}`);
  updateCartCount(cart.length + 1);
}

function updateCartCount(count) {
  if (count !== undefined) {
    cart = Array(Math.max(0, count)).fill({});
  }
  const totalItems = cart.length;
  document.querySelectorAll('.count').forEach(element => {
    element.textContent = totalItems;
  });
  localStorage.setItem('cart', JSON.stringify(cart));
}

// ========== UTILITY FUNCTIONS ==========
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification-toast';
  notification.innerHTML = `
    <div class="toast-detail">
      <p class="toast-message">${message}</p>
    </div>
    <button class="toast-close-btn" onclick="this.parentElement.remove()">
      <ion-icon name="close-outline"></ion-icon>
    </button>
  `;
  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 3000);
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function () {
  // Load components if containers exist
  if (document.getElementById('header-container')) {
    loadComponent('header-container', 'components/header.html');
  }
  if (document.getElementById('footer-container')) {
    loadComponent('footer-container', 'components/footer.html');
  }

  // Initialize functions (will re-run after components load)
  initCoreFunctions();

  // Product details page initialization
  if (window.location.pathname.includes('product-details.html')) {
    initProductDetails();
  }
});

// ========== PRODUCT DETAILS (only runs on product-details.html) ==========
function initProductDetails() {
  const products = {
    "iphone-17-pro": {
      id: "iphone-17-pro",
      name: "iPhone 17 Pro",
      price: 79990,
      oldPrice: 85990,
      images: ["assets/images/IPHONE/nav_iphone_17pro.png"],
      description: "The latest iPhone with advanced features...",
      specs: ["6.7-inch Display", "A18 Pro Chip", "48MP Camera"],
      rating: 4
    }
    // Add more products...
  };

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId && products[productId]) {
    displayProductDetails(products[productId]);
  }
}

function displayProductDetails(product) {
  // Your product details display logic here
  console.log('Displaying product:', product);
}

// ========== PRODUCT RENDERING FUNCTIONS ==========

function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<ion-icon name="star"></ion-icon>';
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars += '<ion-icon name="star-half-outline"></ion-icon>';
    } else {
      stars += '<ion-icon name="star-outline"></ion-icon>';
    }
  }
  return stars;
}

function generateProductHTML(product) {
  return `
    <div class="showcase">
      <div class="showcase-banner">
        <a href="product-details.html?id=${product.id}" class="product-img-link">
          <img src="${product.image}" alt="${product.name}" class="product-img">
        </a>
        ${product.badge ? `<p class="showcase-badge ${product.badge === 'Sale' ? 'angle black' : ''}">${product.badge}</p>` : ''}
        <div class="showcase-actions">
          <button class="btn-action">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
          <button class="btn-action" onclick="window.location.href='product-details.html?id=${product.id}'">
            <ion-icon name="eye-outline"></ion-icon>
          </button>
          <button class="btn-action">
            <ion-icon name="repeat-outline"></ion-icon>
          </button>
          <button class="btn-action" onclick="addToCart('${product.id}')">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div class="showcase-content">
        <a href="${product.category ? product.category.toLowerCase() + '.html' : '#'}" class="showcase-category">${product.category || ''}</a>
        <h3>
          <a href="product-details.html?id=${product.id}" class="showcase-title">${product.name}</a>
        </h3>
        <div class="showcase-rating">
          ${generateStars(product.rating)}
        </div>
        <div class="price-box">
          <p class="price">₱${product.price.toLocaleString()}</p>
          ${product.oldPrice ? `<del>₱${product.oldPrice.toLocaleString()}</del>` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderProductGrid(category = 'featured') {
  const container = document.getElementById('product-grid');
  if (!container || !products || !products[category]) return;

  container.innerHTML = products[category].map(generateProductHTML).join('');
}

function renderBestSellers() {
  const container = document.querySelector('.showcase-container');
  if (!container || !products || !products.bestSellers) return;

  container.innerHTML = products.bestSellers.map(product => `
    <div class="showcase">
      <a href="product-details.html?id=${product.id}" class="showcase-img-box">
        <img src="${product.image}" alt="${product.name}" width="75" height="75" class="showcase-img">
      </a>
      <div class="showcase-content">
        <a href="product-details.html?id=${product.id}">
          <h4 class="showcase-title">${product.name}</h4>
        </a>
        <div class="showcase-rating">
          ${generateStars(product.rating)}
        </div>
        <div class="price-box">
          ${product.oldPrice ? `<del>₱${product.oldPrice.toLocaleString()}</del>` : ''}
          <p class="price">₱${product.price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize product rendering based on current page
function initProductRendering() {
  if (document.getElementById('product-grid')) {
    // Determine which category to show based on current page
    const path = window.location.pathname;
    let category = 'featured'; // default for homepage

    if (path.includes('iphone.html')) category = 'iphone';
    else if (path.includes('ipad.html')) category = 'ipad';
    else if (path.includes('mac.html')) category = 'mac';

    renderProductGrid(category);
  }

  // Render best sellers if sidebar exists
  if (document.querySelector('.showcase-container')) {
    renderBestSellers();
  }
}