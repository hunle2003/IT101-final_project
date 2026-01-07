// product-details.js - Handles product details page only

// Color mapping for color names to hex codes
const colorMap = {
  'Space Black': '#1b1b1b',
  'Silver': '#f0f0f0',
  'Gold': '#ffd700',
  'Deep Purple': '#800080',
  'Midnight': '#191970',
  'Starlight': '#e6e6fa',
  'Blue': '#0000ff',
  'Pink': '#ffc0cb',
  'Space Gray': '#808080',
  'Black': '#000000',
  'Green': '#008000',
  'Purple': '#800080',
  'Yellow': '#ffff00',
  'Pink': '#ffc0cb',
  'Yellow': '#ffff00'
};

function getColorCode(colorName) {
  return colorMap[colorName] || '#cccccc';
}

function initProductDetails() {
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (!productId) {
    showProductNotFound();
    return;
  }

  // Find product in all categories
  let product = null;
  let category = null;

  // Search through all categories
  for (const cat in products) {
    if (Array.isArray(products[cat])) {
      const found = products[cat].find(p => p.id === productId);
      if (found) {
        product = found;
        category = cat;
        break;
      }
    }
  }

  if (!product) {
    showProductNotFound();
    return;
  }

  // Display product details
  displayProductDetails(product);

  // Update page title and breadcrumb
  document.title = `${product.name} - JL Store`;
  document.getElementById('product-category').textContent = product.category;
  document.getElementById('product-name').textContent = product.name;

  // Load related products
  loadRelatedProducts(product.category, productId);
}

function displayProductDetails(product) {
  const container = document.getElementById('product-detail-content');

  // Generate stars HTML
  const starsHTML = generateStars(product.rating);

  // Generate specs list
  const specsHTML = product.specs ?
    product.specs.map(spec => `<li>${spec}</li>`).join('') : '';

  // Generate colors options - FIXED for string array
  const colorsHTML = product.colors ?
    product.colors.map(colorName => `
      <button class="color-option" style="background-color: ${getColorCode(colorName)}" 
              title="${colorName}" data-color="${colorName}">
        <span class="color-tooltip">${colorName}</span>
      </button>
    `).join('') : '';

  // Generate storage options
  const storageHTML = product.storage ?
    product.storage.map(size => `
      <button class="storage-option" data-storage="${size}">${size}</button>
    `).join('') : '';

  // Generate images HTML - FIXED for single image
  const productImages = product.images || [product.image]; // Handle both array and single image
  const imagesHTML = productImages.map((img, index) => `
    <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
      <img src="${img}" alt="${product.name} view ${index + 1}">
    </div>
  `).join('');

  const mainImage = productImages[0];

  // Remove description section since we don't have descriptions
  // Use first spec as headline if available
  const headlineSpec = product.specs && product.specs.length > 0 ? product.specs[0] : 'Premium Product';


  container.innerHTML = `
  <div class="product-detail-main">
    <!-- Product Images -->
    <div class="product-images">
      <div class="main-image">
        <img src="${mainImage}" alt="${product.name}" id="main-product-image">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      </div>
      
      ${productImages.length > 1 ? `
      <div class="image-thumbnails">
        ${productImages.map((img, index) => `
          <img src="${img}" alt="${product.name} view ${index + 1}" 
               class="thumbnail ${index === 0 ? 'active' : ''}"
               onclick="changeProductImage('${img}', this)">
        `).join('')}
      </div>` : ''}
    </div>
    
    <!-- Product Info -->
    <div class="product-info">
      <h1 class="product-title">${product.name}</h1>
      
      <div class="product-headline">
        ${headlineSpec}
      </div>
      
      <div class="product-meta">
        <span class="product-category">${product.category}</span>
        <div class="product-rating">
          <div class="stars">${starsHTML}</div>
          <span class="rating-text">${product.rating}/5</span>
        </div>
      </div>
      
      <div class="product-price">
        <span class="current-price">₱${product.price.toLocaleString()}</span>
        ${product.oldPrice ? `<span class="old-price">₱${product.oldPrice.toLocaleString()}</span>` : ''}
      </div>
      
      ${specsHTML ? `
      <div class="product-specs">
        <h3>Key Features</h3>
        <ul>${specsHTML}</ul>
      </div>` : ''}
      
      <!-- Color Selection -->
      ${colorsHTML ? `
      <div class="product-colors">
        <h3>Color</h3>
        <div class="color-options">
          ${colorsHTML}
        </div>
      </div>` : ''}
      
      <!-- Storage Selection -->
      ${storageHTML ? `
      <div class="product-storage">
        <h3>Storage</h3>
        <div class="storage-options">
          ${storageHTML}
        </div>
      </div>` : ''}
      
      <!-- Quantity & Actions -->
      <div class="product-actions">
        <div class="quantity-selector">
          <button class="qty-btn" onclick="updateQuantity(-1)">−</button>
          <input type="number" id="quantity" value="1" min="1" max="10">
          <button class="qty-btn" onclick="updateQuantity(1)">+</button>
        </div>
        
        <button class="add-to-cart-btn" onclick="addToCartFromDetails('${product.id}')">
          <ion-icon name="bag-add-outline"></ion-icon>
          Add to Cart
        </button>
      </div>
      
      <!-- Stock Status -->
      <div class="stock-status">
        <ion-icon name="checkmark-circle"></ion-icon>
        In Stock - Ready to Ship
      </div>
    </div>
  </div>
`;

  function changeProductImage(src, element) {
    document.getElementById('main-product-image').src = src;
    // Update active state
    document.querySelectorAll('.thumbnail').forEach(thumb => {
      thumb.classList.remove('active');
    });
    element.classList.add('active');
  }

  // Add event listeners for interactive elements
  initProductDetailInteractions();
}

function initProductDetailInteractions() {
  // Image thumbnail clicks
  document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', function () {
      const imageSrc = this.getAttribute('data-image');
      document.getElementById('main-product-image').src = imageSrc;

      // Update active state
      document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Color selection - activate first by default
  const colorOptions = document.querySelectorAll('.color-option');
  if (colorOptions.length > 0) {
    colorOptions[0].classList.add('active');
    colorOptions.forEach(option => {
      option.addEventListener('click', function () {
        colorOptions.forEach(o => o.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  // Storage selection - activate first by default
  const storageOptions = document.querySelectorAll('.storage-option');
  if (storageOptions.length > 0) {
    storageOptions[0].classList.add('active');
    storageOptions.forEach(option => {
      option.addEventListener('click', function () {
        storageOptions.forEach(o => o.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
}

function updateQuantity(change) {
  const input = document.getElementById('quantity');
  if (!input) return;

  let newValue = parseInt(input.value) + change;
  if (newValue < 1) newValue = 1;
  if (newValue > 10) newValue = 10;
  input.value = newValue;
}

function addToCartFromDetails(productId) {
  const quantityInput = document.getElementById('quantity');
  if (!quantityInput) return;

  const quantity = parseInt(quantityInput.value);
  const selectedColor = document.querySelector('.color-option.active')?.getAttribute('data-color');
  const selectedStorage = document.querySelector('.storage-option.active')?.getAttribute('data-storage');

  // Get product details
  let product = null;
  for (const cat in products) {
    if (Array.isArray(products[cat])) {
      const found = products[cat].find(p => p.id === productId);
      if (found) {
        product = found;
        break;
      }
    }
  }

  if (!product) return;

  // Add to cart with options
  const cartItem = {
    id: productId,
    name: product.name,
    price: product.price,
    quantity: quantity,
    image: product.image,
    color: selectedColor,
    storage: selectedStorage,
    category: product.category
  };

  addToCart(productId, quantity, cartItem);
  showNotification(`${product.name} added to cart!`);
}

function loadRelatedProducts(category, currentProductId) {
  const container = document.getElementById('related-products-grid');
  if (!container) return;

  // Get 4 related products (same category, excluding current)
  let relatedProducts = [];

  // First try featured products in same category
  if (products.featured) {
    relatedProducts = products.featured
      .filter(p => p.category === category && p.id !== currentProductId)
      .slice(0, 4);
  }

  // If not enough, get from specific category
  if (relatedProducts.length < 4 && products[category.toLowerCase()]) {
    const additional = products[category.toLowerCase()]
      .filter(p => p.id !== currentProductId)
      .slice(0, 4 - relatedProducts.length);
    relatedProducts = [...relatedProducts, ...additional];
  }

  if (relatedProducts.length > 0) {
    // Use the generateProductHTML function from script.js
    if (typeof generateProductHTML === 'function') {
      container.innerHTML = relatedProducts.map(generateProductHTML).join('');
    } else {
      // Fallback if function doesn't exist
      container.innerHTML = relatedProducts.map(product => `
        <div class="showcase">
          <div class="showcase-banner">
            <a href="product-details.html?id=${product.id}" class="product-img-link">
              <img src="${product.image}" alt="${product.name}" class="product-img">
            </a>
            ${product.badge ? `<p class="showcase-badge ${product.badge === 'Sale' ? 'angle black' : ''}">${product.badge}</p>` : ''}
          </div>
          <div class="showcase-content">
            <a href="${product.category.toLowerCase()}.html" class="showcase-category">${product.category}</a>
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
      `).join('');
    }
  } else {
    container.innerHTML = '<p class="no-related">No related products found.</p>';
  }
}

function showProductNotFound() {
  const container = document.getElementById('product-detail-content');
  container.innerHTML = `
    <div class="product-not-found">
      <h2>Product Not Found</h2>
      <p>The product you're looking for doesn't exist or has been removed.</p>
      <a href="index.html" class="btn-back">Return to Home</a>
    </div>
  `;
}

// Initialize when page loads
if (window.location.pathname.includes('product-details.html')) {
  document.addEventListener('DOMContentLoaded', initProductDetails);
}