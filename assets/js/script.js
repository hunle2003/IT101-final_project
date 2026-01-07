// components.js - Core functionality for all pages
document.addEventListener('DOMContentLoaded', function () {
  // Load header and footer
  loadComponent('header-container', 'components/header.html');
  loadComponent('footer-container', 'components/footer.html');

  // Initialize core functions after components load
  setTimeout(initCoreFunctions, 100);
});

// Component loader
async function loadComponent(elementId, filePath) {
  try {
    const element = document.getElementById(elementId);
    if (!element) return;

    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);

    const html = await response.text();
    element.innerHTML = html;

    // Execute any scripts within the component
    const scripts = element.querySelectorAll('script');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      if (script.src) {
        newScript.src = script.src;
      } else {
        newScript.textContent = script.textContent;
      }
      document.body.appendChild(newScript);
    });
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

// Core functions for all pages
function initCoreFunctions() {
  initMobileMenu();
  updateCartCount();
  setCurrentYear();
  initCartButton();
}

// Mobile menu functionality
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

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (mobileMenu && mobileMenu.classList.contains('active') &&
      !mobileMenu.contains(event.target) &&
      !event.target.closest('[data-mobile-menu-open-btn]')) {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Cart functionality (shared)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function initCartButton() {
  const cartBtn = document.getElementById('cart-btn');
  const mobileCartBtn = document.getElementById('mobile-cart-btn');

  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      window.location.href = 'cart.html';
    });
  }

  if (mobileCartBtn) {
    mobileCartBtn.addEventListener('click', () => {
      window.location.href = 'cart.html';
    });
  }
}

function addToCart(productId, quantity = 1) {
  // This will be extended in product-details.js
  console.log(`Adding ${quantity} of ${productId} to cart`);
  // For now, just update count
  updateCartCount(cart.length + 1);
}

function updateCartCount(count) {
  if (count !== undefined) {
    cart = Array(count).fill({}); // Temporary
  }
  const totalItems = cart.length;
  document.querySelectorAll('.count').forEach(element => {
    element.textContent = totalItems;
  });
  localStorage.setItem('cart', JSON.stringify(cart));
}

function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}