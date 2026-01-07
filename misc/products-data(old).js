// products-data.js - All product data in one place
const products = {
  // Featured Products (for homepage)
  "featured": [
    {
      id: "iphone-17-pro",
      name: "iPhone 17 Pro",
      category: "iPhone",
      price: 79990,
      oldPrice: 85990,
      image: "assets/images/IPHONE/nav_iphone_17pro.png",
      badge: "New",
      rating: 4
    },
    {
      id: "macbook-pro-14",
      name: "MacBook Pro 14-inch",
      category: "Mac",
      price: 89990,
      oldPrice: 95990,
      image: "assets/images/MAC/Air/mbp14-silver.jpg",
      badge: "Sale",
      rating: 4
    },
    {
      id: "ipad-pro-12",
      name: "iPad Pro 12.9-inch",
      category: "iPad",
      price: 65990,
      oldPrice: 69990,
      image: "assets/images/IPAD/ipad_pro.jpg",
      rating: 4
    },
    {
      id: "macbook-air-m3",
      name: "MacBook Air M3",
      category: "Mac",
      price: 62990,
      oldPrice: 67990,
      image: "assets/images/MAC/Pro/mba13-silver.jpg",
      badge: "New",
      rating: 5
    },
    {
      id: "iphone-air",
      name: "iPhone Air",
      category: "iPhone",
      price: 52990,
      oldPrice: 56990,
      image: "assets/images/IPHONE/nav_iphone_air.png",
      rating: 5
    },
    {
      id: "macbook-air-m2",
      name: "MacBook Air M2",
      category: "Mac",
      price: 56990,
      oldPrice: 61990,
      image: "assets/images/MAC/Pro/mac-card-macbook-air.jpg",
      badge: "Sale",
      rating: 4
    },
    {
      id: "iphone-17",
      name: "iPhone 17",
      category: "iPhone",
      price: 69990,
      oldPrice: 74990,
      image: "assets/images/IPHONE/nav_iphone_17.png",
      rating: 4.5
    },
    {
      id: "macbook-pro-16",
      name: "MacBook Pro 16-inch",
      category: "Mac",
      price: 105990,
      oldPrice: 112990,
      image: "assets/images/MAC/Air/mac-card-macbookpro-14-16.jpg",
      badge: "Sale",
      rating: 4
    },
    {
      id: "ipad-10",
      name: "iPad 10th Gen",
      category: "iPad",
      price: 32990,
      oldPrice: 36990,
      image: "assets/images/IPAD/ipad.jpg",
      rating: 4.5
    },
    {
      id: "iphone-16-plus",
      name: "iPhone 16 Plus",
      category: "iPhone",
      price: 62990,
      oldPrice: 67990,
      image: "assets/images/IPHONE/nav_iphone_16.png",
      badge: "Sale",
      rating: 4
    },
    {
      id: "macbook-air-m1",
      name: "MacBook Air M1",
      category: "Mac",
      price: 49990,
      oldPrice: 54990,
      image: "assets/images/MAC/Pro/mba13-midnight.jpg",
      rating: 4.5
    },
    {
      id: "ipad-pro-m4",
      name: "iPad Pro M4",
      category: "iPad",
      price: 75990,
      oldPrice: 82990,
      image: "assets/images/IPAD/ipad_prom4.jpg",
      badge: "Sale",
      rating: 4
    }
  ],

  // iPhone Products
  "iphone": [
    {
      id: "iphone-17-pro",
      name: "iPhone 17 Pro",
      price: 79990,
      oldPrice: 85990,
      image: "assets/images/IPHONE/nav_iphone_17pro.png",
      badge: "New",
      rating: 4
    },
    {
      id: "iphone-air",
      name: "iPhone Air",
      price: 52990,
      oldPrice: 56990,
      image: "assets/images/IPHONE/nav_iphone_air.png",
      rating: 5
    },
    {
      id: "iphone-17",
      name: "iPhone 17",
      price: 69990,
      oldPrice: 74990,
      image: "assets/images/IPHONE/nav_iphone_17.png",
      rating: 4.5
    },
    {
      id: "iphone-16-plus",
      name: "iPhone 16 Plus",
      price: 62990,
      oldPrice: 67990,
      image: "assets/images/IPHONE/nav_iphone_16.png",
      badge: "Sale",
      rating: 4
    }
  ],

  // iPad Products
  "ipad": [
    {
      id: "ipad-pro-12",
      name: "iPad Pro 12.9-inch",
      price: 65990,
      oldPrice: 69990,
      image: "assets/images/IPAD/ipad_pro.jpg",
      rating: 4
    },
    {
      id: "ipad-10",
      name: "iPad 10th Gen",
      price: 32990,
      oldPrice: 36990,
      image: "assets/images/IPAD/ipad.jpg",
      rating: 4.5
    },
    {
      id: "ipad-pro-m4",
      name: "iPad Pro M4",
      price: 75990,
      oldPrice: 82990,
      image: "assets/images/IPAD/ipad_prom4.jpg",
      badge: "Sale",
      rating: 4
    }
  ],

  // Mac Products
  "mac": [
    {
      id: "macbook-pro-14",
      name: "MacBook Pro 14-inch",
      price: 89990,
      oldPrice: 95990,
      image: "assets/images/MAC/Air/mbp14-silver.jpg",
      badge: "Sale",
      rating: 4
    },
    {
      id: "macbook-air-m3",
      name: "MacBook Air M3",
      price: 62990,
      oldPrice: 67990,
      image: "assets/images/MAC/Pro/mba13-silver.jpg",
      badge: "New",
      rating: 5
    },
    {
      id: "macbook-air-m2",
      name: "MacBook Air M2",
      price: 56990,
      oldPrice: 61990,
      image: "assets/images/MAC/Pro/mac-card-macbook-air.jpg",
      badge: "Sale",
      rating: 4
    },
    {
      id: "macbook-pro-16",
      name: "MacBook Pro 16-inch",
      price: 105990,
      oldPrice: 112990,
      image: "assets/images/MAC/Air/mac-card-macbookpro-14-16.jpg",
      badge: "Sale",
      rating: 4
    },
    {
      id: "macbook-air-m1",
      name: "MacBook Air M1",
      price: 49990,
      oldPrice: 54990,
      image: "assets/images/MAC/Pro/mba13-midnight.jpg",
      rating: 4.5
    }
  ],

  // Best Sellers
  "bestSellers": [
    {
      id: "iphone-16",
      name: "iPhone 16",
      price: 59990,
      oldPrice: 65990,
      image: "assets/images/IPHONE/nav_iphone_16.png",
      rating: 5
    },
    {
      id: "ipad-air",
      name: "iPad Air",
      price: 42990,
      oldPrice: 47990,
      image: "assets/images/IPAD/ipad.jpg",
      rating: 4.5
    },
    {
      id: "macbook-air-m2",
      name: "MacBook Air",
      price: 56990,
      oldPrice: 62990,
      image: "assets/images/MAC/Pro/mac-card-macbook-air.jpg",
      rating: 4.5
    },
    {
      id: "iphone-17-pro",
      name: "iPhone 17 Pro",
      price: 69990,
      oldPrice: 74990,
      image: "assets/images/IPHONE/nav_iphone_17pro.png",
      rating: 5
    }
  ]
};