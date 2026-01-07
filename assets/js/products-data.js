// products-data.js - Clean product data with specs only
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
      rating: 4,
      specs: ["6.7-inch Super Retina XDR", "A18 Pro Chip", "48MP Triple Camera", "Face ID", "5G"],
      colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
      storage: ["128GB", "256GB", "512GB", "1TB"]
    },
    {
      id: "macbook-pro-14",
      name: "MacBook Pro 14-inch",
      category: "Mac",
      price: 89990,
      oldPrice: 95990,
      image: "assets/images/MAC/Air/mbp14-silver.jpg",
      badge: "Sale",
      rating: 4,
      specs: ["14-inch Liquid Retina XDR", "M3 Pro Chip", "18GB Unified Memory", "512GB SSD", "18hr Battery"],
      colors: ["Silver", "Space Gray"],
      storage: ["512GB", "1TB", "2TB"]
    },
    {
      id: "ipad-pro-12",
      name: "iPad Pro 12.9-inch",
      category: "iPad",
      price: 65990,
      oldPrice: 69990,
      image: "assets/images/IPAD/ipad_pro.jpg",
      rating: 4,
      specs: ["12.9-inch Liquid Retina", "M2 Chip", "Face ID", "Thunderbolt Port", "5G"],
      colors: ["Space Gray", "Silver"],
      storage: ["128GB", "256GB", "512GB", "1TB"]
    },
    {
      id: "macbook-air-m3",
      name: "MacBook Air M3",
      category: "Mac",
      price: 62990,
      oldPrice: 67990,
      image: "assets/images/MAC/Pro/mba13-silver.jpg",
      badge: "New",
      rating: 5,
      specs: ["13.6-inch Liquid Retina", "M3 Chip", "8GB Unified Memory", "256GB SSD", "18hr Battery"],
      colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
      storage: ["256GB", "512GB"]
    },
    {
      id: "iphone-air",
      name: "iPhone Air",
      category: "iPhone",
      price: 52990,
      oldPrice: 56990,
      image: "assets/images/IPHONE/nav_iphone_air.png",
      rating: 5,
      specs: ["6.1-inch Liquid Retina", "A16 Bionic", "Dual 12MP Camera", "Touch ID", "5G"],
      colors: ["Midnight", "Starlight", "Blue", "Pink"],
      storage: ["64GB", "128GB", "256GB"]
    },
    {
      id: "macbook-air-m2",
      name: "MacBook Air M2",
      category: "Mac",
      price: 56990,
      oldPrice: 61990,
      image: "assets/images/MAC/Pro/mac-card-macbook-air.jpg",
      badge: "Sale",
      rating: 4,
      specs: ["13.6-inch Liquid Retina", "M2 Chip", "8GB Unified Memory", "256GB SSD", "18hr Battery"],
      colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
      storage: ["256GB", "512GB"]
    },
    {
      id: "iphone-17",
      name: "iPhone 17",
      category: "iPhone",
      price: 69990,
      oldPrice: 74990,
      image: "assets/images/IPHONE/nav_iphone_17.png",
      rating: 4.5,
      specs: ["6.7-inch Super Retina", "A17 Pro Chip", "48MP Dual Camera", "Face ID", "5G"],
      colors: ["Black", "Blue", "Green", "Pink"],
      storage: ["128GB", "256GB", "512GB"]
    },
    {
      id: "macbook-pro-16",
      name: "MacBook Pro 16-inch",
      category: "Mac",
      price: 105990,
      oldPrice: 112990,
      image: "assets/images/MAC/Air/mac-card-macbookpro-14-16.jpg",
      badge: "Sale",
      rating: 4,
      specs: ["16-inch Liquid Retina XDR", "M3 Max Chip", "36GB Unified Memory", "1TB SSD", "22hr Battery"],
      colors: ["Space Black", "Silver"],
      storage: ["1TB", "2TB", "4TB", "8TB"]
    },
    {
      id: "ipad-10",
      name: "iPad 10th Gen",
      category: "iPad",
      price: 32990,
      oldPrice: 36990,
      image: "assets/images/IPAD/ipad.jpg",
      rating: 4.5,
      specs: ["10.9-inch Liquid Retina", "A14 Bionic", "12MP Front Camera", "Touch ID", "USB-C"],
      colors: ["Silver", "Blue", "Pink", "Yellow"],
      storage: ["64GB", "256GB"]
    },
    {
      id: "iphone-16-plus",
      name: "iPhone 16 Plus",
      category: "iPhone",
      price: 62990,
      oldPrice: 67990,
      image: "assets/images/IPHONE/nav_iphone_16.png",
      badge: "Sale",
      rating: 4,
      specs: ["6.7-inch Super Retina", "A16 Bionic", "48MP Dual Camera", "Face ID", "5G"],
      colors: ["Black", "Blue", "Purple", "Yellow"],
      storage: ["128GB", "256GB", "512GB"]
    },
    {
      id: "macbook-air-m1",
      name: "MacBook Air M1",
      category: "Mac",
      price: 49990,
      oldPrice: 54990,
      image: "assets/images/MAC/Pro/mba13-midnight.jpg",
      rating: 4.5,
      specs: ["13.3-inch Retina", "M1 Chip", "8GB Unified Memory", "256GB SSD", "15hr Battery"],
      colors: ["Gold", "Silver", "Space Gray"],
      storage: ["256GB", "512GB"]
    },
    {
      id: "ipad-pro-m4",
      name: "iPad Pro M4",
      category: "iPad",
      price: 75990,
      oldPrice: 82990,
      image: "assets/images/IPAD/ipad_prom4.jpg",
      badge: "Sale",
      rating: 4,
      specs: ["12.9-inch Liquid Retina XDR", "M4 Chip", "Face ID", "Thunderbolt 4", "5G"],
      colors: ["Space Black", "Silver"],
      storage: ["256GB", "512GB", "1TB", "2TB"]
    }
  ],

  // iPhone Products
  "iphone": [
    {
      id: "iphone-17-pro",
      name: "iPhone 17 Pro",
      category: "iPhone",
      price: 79990,
      oldPrice: 85990,
      image: "assets/images/IPHONE/nav_iphone_17pro.png",
      badge: "New",
      rating: 4,
      specs: ["6.7-inch Super Retina XDR", "A18 Pro Chip", "48MP Triple Camera", "Face ID", "5G"],
      colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
      storage: ["128GB", "256GB", "512GB", "1TB"]
    },
    {
      id: "iphone-air",
      name: "iPhone Air",
      category: "iPhone",
      price: 52990,
      oldPrice: 56990,
      image: "assets/images/IPHONE/nav_iphone_air.png",
      rating: 5,
      specs: ["6.1-inch Liquid Retina", "A16 Bionic", "Dual 12MP Camera", "Touch ID", "5G"],
      colors: ["Midnight", "Starlight", "Blue", "Pink"],
      storage: ["64GB", "128GB", "256GB"]
    },
    {
      id: "iphone-17",
      name: "iPhone 17",
      category: "iPhone",
      price: 69990,
      oldPrice: 74990,
      image: "assets/images/IPHONE/nav_iphone_17.png",
      rating: 4.5,
      specs: ["6.7-inch Super Retina", "A17 Pro Chip", "48MP Dual Camera", "Face ID", "5G"],
      colors: ["Black", "Blue", "Green", "Pink"],
      storage: ["128GB", "256GB", "512GB"]
    },
    {
      id: "iphone-16-plus",
      name: "iPhone 16 Plus",
      category: "iPhone",
      price: 62990,
      oldPrice: 67990,
      image: "assets/images/IPHONE/nav_iphone_16.png",
      badge: "Sale",
      rating: 4,
      specs: ["6.7-inch Super Retina", "A16 Bionic", "48MP Dual Camera", "Face ID", "5G"],
      colors: ["Black", "Blue", "Purple", "Yellow"],
      storage: ["128GB", "256GB", "512GB"]
    }
  ],

  // iPad Products
  "ipad": [
    {
      id: "ipad-pro-12",
      name: "iPad Pro 12.9-inch",
      category: "iPad",
      price: 65990,
      oldPrice: 69990,
      image: "assets/images/IPAD/ipad_pro.jpg",
      rating: 4,
      specs: ["12.9-inch Liquid Retina", "M2 Chip", "Face ID", "Thunderbolt Port", "5G"],
      colors: ["Space Gray", "Silver"],
      storage: ["128GB", "256GB", "512GB", "1TB"]
    },
    {
      id: "ipad-10",
      name: "iPad 10th Gen",
      category: "iPad",
      price: 32990,
      oldPrice: 36990,
      image: "assets/images/IPAD/ipad.jpg",
      rating: 4.5,
      specs: ["10.9-inch Liquid Retina", "A14 Bionic", "12MP Front Camera", "Touch ID", "USB-C"],
      colors: ["Silver", "Blue", "Pink", "Yellow"],
      storage: ["64GB", "256GB"]
    },
    {
      id: "ipad-pro-m4",
      name: "iPad Pro M4",
      category: "iPad",
      price: 75990,
      oldPrice: 82990,
      image: "assets/images/IPAD/ipad_prom4.jpg",
      badge: "Sale",
      rating: 4,
      specs: ["12.9-inch Liquid Retina XDR", "M4 Chip", "Face ID", "Thunderbolt 4", "5G"],
      colors: ["Space Black", "Silver"],
      storage: ["256GB", "512GB", "1TB", "2TB"]
    }
  ],

  // Mac Products
  "mac": [
    {
      id: "macbook-pro-14",
      name: "MacBook Pro 14-inch",
      category: "Mac",
      price: 89990,
      oldPrice: 95990,
      image: "assets/images/MAC/Air/mbp14-silver.jpg",
      badge: "Sale",
      rating: 4,
      specs: ["14-inch Liquid Retina XDR", "M3 Pro Chip", "18GB Unified Memory", "512GB SSD", "18hr Battery"],
      colors: ["Silver", "Space Gray"],
      storage: ["512GB", "1TB", "2TB"]
    },
    {
      id: "macbook-air-m3",
      name: "MacBook Air M3",
      category: "Mac",
      price: 62990,
      oldPrice: 67990,
      image: "assets/images/MAC/Pro/mba13-silver.jpg",
      badge: "New",
      rating: 5,
      specs: ["13.6-inch Liquid Retina", "M3 Chip", "8GB Unified Memory", "256GB SSD", "18hr Battery"],
      colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
      storage: ["256GB", "512GB"]
    },
    {
      id: "macbook-air-m2",
      name: "MacBook Air M2",
      category: "Mac",
      price: 56990,
      oldPrice: 61990,
      image: "assets/images/MAC/Pro/mac-card-macbook-air.jpg",
      badge: "Sale",
      rating: 4,
      specs: ["13.6-inch Liquid Retina", "M2 Chip", "8GB Unified Memory", "256GB SSD", "18hr Battery"],
      colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
      storage: ["256GB", "512GB"]
    },
    {
      id: "macbook-pro-16",
      name: "MacBook Pro 16-inch",
      category: "Mac",
      price: 105990,
      oldPrice: 112990,
      image: "assets/images/MAC/Air/mac-card-macbookpro-14-16.jpg",
      badge: "Sale",
      rating: 4,
      specs: ["16-inch Liquid Retina XDR", "M3 Max Chip", "36GB Unified Memory", "1TB SSD", "22hr Battery"],
      colors: ["Space Black", "Silver"],
      storage: ["1TB", "2TB", "4TB", "8TB"]
    },
    {
      id: "macbook-air-m1",
      name: "MacBook Air M1",
      category: "Mac",
      price: 49990,
      oldPrice: 54990,
      image: "assets/images/MAC/Pro/mba13-midnight.jpg",
      rating: 4.5,
      specs: ["13.3-inch Retina", "M1 Chip", "8GB Unified Memory", "256GB SSD", "15hr Battery"],
      colors: ["Gold", "Silver", "Space Gray"],
      storage: ["256GB", "512GB"]
    }
  ],

  // Best Sellers (for sidebar)
  "bestSellers": [
    {
      id: "iphone-16",
      name: "iPhone 16",
      category: "iPhone",
      price: 59990,
      oldPrice: 65990,
      image: "assets/images/IPHONE/nav_iphone_16.png",
      rating: 5,
      specs: ["6.1-inch Super Retina", "A16 Bionic", "48MP Dual Camera", "Face ID", "5G"],
      colors: ["Black", "Blue", "Green", "Yellow"]
    },
    {
      id: "ipad-air",
      name: "iPad Air",
      category: "iPad",
      price: 42990,
      oldPrice: 47990,
      image: "assets/images/IPAD/ipad.jpg",
      rating: 4.5,
      specs: ["10.9-inch Liquid Retina", "M1 Chip", "12MP Front Camera", "Touch ID", "USB-C"],
      colors: ["Space Gray", "Pink", "Purple", "Blue"]
    },
    {
      id: "macbook-air-m2",
      name: "MacBook Air",
      category: "Mac",
      price: 56990,
      oldPrice: 62990,
      image: "assets/images/MAC/Pro/mac-card-macbook-air.jpg",
      rating: 4.5,
      specs: ["13.6-inch Liquid Retina", "M2 Chip", "8GB Unified Memory", "256GB SSD", "18hr Battery"],
      colors: ["Midnight", "Starlight", "Space Gray", "Silver"]
    },
    {
      id: "iphone-17-pro",
      name: "iPhone 17 Pro",
      category: "iPhone",
      price: 69990,
      oldPrice: 74990,
      image: "assets/images/IPHONE/nav_iphone_17pro.png",
      rating: 5,
      specs: ["6.7-inch Super Retina XDR", "A18 Pro Chip", "48MP Triple Camera", "Face ID", "5G"],
      colors: ["Space Black", "Silver", "Gold", "Deep Purple"]
    }
  ]
};