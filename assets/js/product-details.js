// Product Database
const products = {
  "iphone-17-pro": {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    category: "iPhone",
    price: 79990,
    oldPrice: 85990,
    images: [
      "./assets/images/IPHONE/nav_iphone_17pro.png",
      "./assets/images/IPHONE/nav_iphone_17pro.png" // add more images if available
    ],
    description: "The latest iPhone with advanced features including A18 Pro chip, 48MP camera system, and all-day battery life.",
    specs: [
      "6.7-inch Super Retina XDR display",
      "A18 Pro chip with 6-core CPU",
      "48MP Main camera with Night mode",
      "Face ID for secure authentication",
      "All-day battery life"
    ],
    rating: 4,
    badge: "New",
    colors: ["Space Black", "Silver", "Gold", "Deep Purple"]
  },
  "iphone-air": {
    id: "iphone-air",
    name: "iPhone Air",
    category: "iPhone",
    price: 52990,
    oldPrice: 56990,
    images: ["./assets/images/IPHONE/nav_iphone_air.png"],
    description: "Lightweight and powerful iPhone with advanced features.",
    specs: [
      "6.1-inch Liquid Retina display",
      "A16 Bionic chip",
      "Dual 12MP camera system",
      "Touch ID",
      "Lightweight design"
    ],
    rating: 5,
    colors: ["Midnight", "Starlight", "Blue", "Pink"]
  },
  // Add all other products following same structure
  "macbook-pro-14": {
    id: "macbook-pro-14",
    name: "MacBook Pro 14-inch",
    category: "Mac",
    price: 89990,
    oldPrice: 95990,
    images: ["./assets/images/MAC/Air/mbp14-silver.jpg"],
    description: "Powerful MacBook Pro with M3 Pro chip.",
    specs: [
      "14-inch Liquid Retina XDR display",
      "M3 Pro chip with 12-core CPU",
      "18GB unified memory",
      "512GB SSD storage",
      "Up to 18 hours battery life"
    ],
    rating: 4,
    badge: "Sale",
    colors: ["Silver", "Space Gray"]
  }
  // Continue for all 12+ products
};

// Function to load product details
function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (!productId || !products[productId]) {
    document.getElementById('product-content').innerHTML = `
      <div class="error">
        <h2>Product not found</h2>
        <a href="index.html">Return to Home</a>
      </div>
    `;
    return;
  }

  const product = products[productId];
  const productHTML = generateProductHTML(product);
  document.getElementById('product-content').innerHTML = productHTML;

  // Update page title
  document.title = `${product.name} - JL Store`;
}

// Function to generate product HTML
function generateProductHTML(product) {
  // Create stars based on rating
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= product.rating) {
      starsHTML += '<ion-icon name="star"></ion-icon>';
    } else if (i === Math.ceil(product.rating) && !Number.isInteger(product.rating)) {
      starsHTML += '<ion-icon name="star-half-outline"></ion-icon>';
    } else {
      starsHTML += '<ion-icon name="star-outline"></ion-icon>';
    }
  }

  // Generate specs list
  const specsHTML = product.specs.map(spec => `<li>${spec}</li>`).join('');

  // Generate colors options
  const colorsHTML = product.colors ?
    product.colors.map(color =>
      `<button class="color-option" style="background-color: ${getColorValue(color)}" 
              title="${color}" data-color="${color}"></button>`
    ).join('') : '';

  return `
    <div class="product-detail-container">
      <div class="product-images">
        <div class="main-image">
          <img src="${product.images[0]}" alt="${product.name}" id="main-product-img">
        </div>
        <div class="image-thumbnails">
          ${product.images.map((img, index) =>
    `<img src="${img}" alt="${product.name} view ${index + 1}" 
                  class="thumbnail ${index === 0 ? 'active' : ''}"
                  onclick="changeMainImage('${img}')">`
  ).join('')}
        </div>
      </div>
      
      <div class="product-info">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <h1 class="product-title">${product.name}</h1>
        <div class="product-category">${product.category}</div>
        
        <div class="product-rating">
          <div class="stars">${starsHTML}</div>
          <span class="rating-text">${product.rating}/5</span>
        </div>
        
        <div class="product-price">
          <span class="current-price">₱${product.price.toLocaleString()}</span>
          ${product.oldPrice ?
      `<span class="old-price">₱${product.oldPrice.toLocaleString()}</span>` : ''}
        </div>
        
        <div class="product-description">
          <h3>Description</h3>
          <p>${product.description}</p>
        </div>
        
        <div class="product-specs">
          <h3>Specifications</h3>
          <ul>${specsHTML}</ul>
        </div>
        
        ${colorsHTML ? `
        <div class="product-colors">
          <h3>Colors</h3>
          <div class="color-options">${colorsHTML}</div>
        </div>` : ''}
        
        <div class="product-actions">
          <div class="quantity-selector">
            <button onclick="updateQuantity(-1)">-</button>
            <input type="number" id="quantity" value="1" min="1" max="10">
            <button onclick="updateQuantity(1)">+</button>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
            <ion-icon name="bag-add-outline"></ion-icon>
            Add to Cart
          </button>
          <button class="wishlist-btn">
            <ion-icon name="heart-outline"></ion-icon>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  `;
}

// Helper functions
function getColorValue(colorName) {
  const colorMap = {
    'Space Black': '#1b1b1b',
    'Silver': '#f0f0f0',
    'Gold': '#ffd700',
    'Deep Purple': '#800080',
    'Midnight': '#191970',
    'Starlight': '#e6e6fa',
    'Blue': '#0000ff',
    'Pink': '#ffc0cb',
    'Space Gray': '#808080'
  };
  return colorMap[colorName] || '#ccc';
}

function changeMainImage(src) {
  document.getElementById('main-product-img').src = src;
  // Update active thumbnail
  document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.classList.remove('active');
  });
  event.target.classList.add('active');
}

function updateQuantity(change) {
  const input = document.getElementById('quantity');
  let newValue = parseInt(input.value) + change;
  if (newValue < 1) newValue = 1;
  if (newValue > 10) newValue = 10;
  input.value = newValue;
}

// Initialize when page loads
if (window.location.pathname.includes('product-details.html')) {
  document.addEventListener('DOMContentLoaded', loadProductDetails);
}
