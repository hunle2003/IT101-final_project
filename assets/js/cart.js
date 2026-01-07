// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
  const removeButtons = document.querySelectorAll('.remove-btn');
  const clearCartBtn = document.querySelector('.clear-cart-btn');
  const cartCountElements = document.querySelectorAll('.cart-count');
  const checkoutBtn = document.querySelector('.checkout-btn');
  
  // Product prices for calculation (in PHP)
  const productPrices = {
    0: 69990, // iPhone 17
    1: 65990, // iPad Pro
    2: 105990, // MacBook Pro
    3: 62990  // MacBook Air
  };
  
  // Format number as Philippine Peso
  function formatPeso(amount) {
    return '₱' + amount.toLocaleString('en-PH');
  }
  
  // Update cart total
  function updateCartTotal() {
    let itemCount = 0;
    let subtotal = 0;
    
    document.querySelectorAll('.cart-item').forEach((item, index) => {
      const quantityDisplay = item.querySelector('.quantity-display');
      let quantity = 1; // Default quantity since we removed quantity controls
      
      if (quantityDisplay) {
        // Extract quantity from text (e.g., "Quantity: 1")
        const quantityText = quantityDisplay.textContent;
        const match = quantityText.match(/\d+/);
        if (match) {
          quantity = parseInt(match[0]);
        }
      }
      
      itemCount += quantity;
      subtotal += productPrices[index] * quantity;
    });
    
    // Update cart count in header and title
    cartCountElements.forEach(element => {
      element.textContent = itemCount;
    });
    
    // Update subtotal in summary
    const subtotalElement = document.querySelector('.summary-row .summary-value');
    if (subtotalElement) {
      subtotalElement.textContent = formatPeso(subtotal);
    }
    
    // Calculate tax (8% for example)
    const tax = subtotal * 0.08;
    const taxElement = document.querySelectorAll('.summary-row .summary-value')[2];
    if (taxElement) {
      taxElement.textContent = formatPeso(tax);
    }
    
    // Calculate discount (if any)
    const discount = subtotal > 200000 ? 15000 : 0;
    const discountElement = document.querySelectorAll('.summary-row .summary-value')[3];
    if (discountElement) {
      if (discount > 0) {
        discountElement.textContent = '-' + formatPeso(discount);
        discountElement.style.color = '#5fa856';
      } else {
        discountElement.textContent = formatPeso(0);
        discountElement.style.color = '#1b191a';
      }
    }
    
    // Calculate shipping (free over 50,000)
    const shipping = subtotal > 50000 ? 0 : 500;
    const shippingElement = document.querySelectorAll('.summary-row .summary-value')[1];
    if (shippingElement) {
      if (shipping === 0) {
        shippingElement.textContent = 'FREE';
        shippingElement.style.color = '#5fa856';
      } else {
        shippingElement.textContent = formatPeso(shipping);
        shippingElement.style.color = '#1b191a';
      }
    }
    
    const shippingCost = subtotal > 50000 ? 0 : shipping;
    const total = subtotal + shippingCost + tax - discount;
    const totalElement = document.querySelector('.summary-row.total .summary-value');
    if (totalElement) {
      totalElement.textContent = formatPeso(total);
    }
    
    return itemCount;
  }
  
  // Remove item functionality
  removeButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const cartItem = this.closest('.cart-item');
      cartItem.style.transition = 'all 0.3s ease';
      cartItem.style.opacity = '0';
      cartItem.style.transform = 'translateX(-20px)';
      
      setTimeout(() => {
        cartItem.remove();
        const itemCount = updateCartTotal();
        
        // If no items left, show empty cart message
        if (itemCount === 0) {
          const cartItemsSection = document.querySelector('.cart-items');
          cartItemsSection.innerHTML = `
            <div class="cart-empty">
              <div class="cart-empty-icon">
                <ion-icon name="cart-outline"></ion-icon>
              </div>
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added any Apple products to your cart yet.</p>
              <a href="index.html" class="continue-shopping">Continue Shopping</a>
            </div>
          `;
        }
      }, 300);
    });
  });
  
  // Clear cart functionality
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', function() {
      const cartItems = document.querySelectorAll('.cart-item');
      if (cartItems.length === 0) return;
      
      if (confirm('Are you sure you want to remove all items from your cart?')) {
        cartItems.forEach(item => {
          item.style.transition = 'all 0.3s ease';
          item.style.opacity = '0';
          item.style.transform = 'translateX(-20px)';
        });
        
        setTimeout(() => {
          const cartItemsSection = document.querySelector('.cart-items');
          cartItemsSection.innerHTML = `
            <div class="cart-empty">
              <div class="cart-empty-icon">
                <ion-icon name="cart-outline"></ion-icon>
              </div>
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added any Apple products to your cart yet.</p>
              <a href="index.html" class="continue-shopping">Continue Shopping</a>
            </div>
          `;
          
          updateCartTotal();
        }, 300);
      }
    });
  }
  
  // Checkout button functionality
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
      const itemCount = updateCartTotal();
      if (itemCount === 0) {
        alert('Your cart is empty. Add some products before checking out.');
        return;
      }
      
      // Show processing animation
      const originalText = this.innerHTML;
      this.innerHTML = `<ion-icon name="refresh-outline"></ion-icon> Processing...`;
      this.disabled = true;
      
      // Simulate processing delay
      setTimeout(() => {
        const total = document.querySelector('.summary-row.total .summary-value').textContent;
        alert(`Thank you for your order of ${itemCount} Apple products!\nTotal Amount: ${total}\n\nThis is a static demo. In a real store, you would now proceed to payment.`);
        
        // Button animation
        this.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon> Order Placed!`;
        this.style.background = '#4a8c42';
        
        setTimeout(() => {
          this.innerHTML = originalText;
          this.style.background = '#5fa856';
          this.disabled = false;
        }, 2000);
      }, 1500);
    });
  }
  
  // Initialize cart total on page load
  updateCartTotal();
}); 