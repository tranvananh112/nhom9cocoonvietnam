// Cocoon E-commerce - Main JavaScript

// ============================================
// 1. CART MANAGEMENT
// ============================================

class Cart {
  constructor() {
    this.items = this.loadCart()
  }

  loadCart() {
    const saved = localStorage.getItem("cocoon_cart")
    return saved ? JSON.parse(saved) : []
  }

  saveCart() {
    localStorage.setItem("cocoon_cart", JSON.stringify(this.items))
    this.updateCartCount()
  }

  addItem(product) {
    const existing = this.items.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity += product.quantity || 1
    } else {
      this.items.push({ ...product, quantity: product.quantity || 1 })
    }
    this.saveCart()
    this.showNotification("✓ Đã thêm vào giỏ hàng", "success")
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId)
    this.saveCart()
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find((item) => item.id === productId)
    if (item) {
      item.quantity = Math.max(1, quantity)
      this.saveCart()
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0)
  }

  updateCartCount() {
    const cartCount = document.querySelector(".cart-count")
    if (cartCount) {
      const count = this.getItemCount()
      cartCount.textContent = count
      cartCount.style.display = count > 0 ? "flex" : "none"
    }
  }

  clear() {
    this.items = []
    this.saveCart()
  }

  showNotification(message, type = "info") {
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.textContent = message
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background: ${type === "success" ? "#4CAF50" : "#2196F3"};
            color: white;
            border-radius: 5px;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `
    document.body.appendChild(notification)
    setTimeout(() => notification.remove(), 3000)
  }
}

// Initialize cart
const cart = new Cart()

// ============================================
// 2. PRODUCTS DATA
// ============================================

const products = [
  {
    id: 1,
    name: "Dòng Bí Đao",
    emoji: "🥒",
    description: "Làm sáng da, giảm mụn và cấp ẩm sâu",
    price: 189000,
    rating: 4.8,
    reviews: 245,
  },
  {
    id: 2,
    name: "Dòng Nghệ",
    emoji: "🌼",
    description: "Chống viêm, làm dịu da và tái tạo da",
    price: 199000,
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 3,
    name: "Dòng Hoa Hồng",
    emoji: "🌹",
    description: "Cấp ẩm, làm mềm mịn và chống lão hóa",
    price: 209000,
    rating: 4.7,
    reviews: 198,
  },
  {
    id: 4,
    name: "Dòng Cà Phê",
    emoji: "☕",
    description: "Tẩy tế bào chết, tăng cường lưu thông máu",
    price: 179000,
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 5,
    name: "Dòng Trà Xanh",
    emoji: "🍵",
    description: "Chống oxy hóa, bảo vệ da khỏi tác hại môi trường",
    price: 189000,
    rating: 4.8,
    reviews: 267,
  },
  {
    id: 6,
    name: "Dòng Dừa",
    emoji: "🥥",
    description: "Cấp ẩm tự nhiên, phục hồi da khô",
    price: 199000,
    rating: 4.9,
    reviews: 289,
  },
  {
    id: 7,
    name: "Dòng Mật Ong",
    emoji: "🍯",
    description: "Nuôi dưỡng, làm sáng da tự nhiên",
    price: 219000,
    rating: 4.7,
    reviews: 201,
  },
  {
    id: 8,
    name: "Dòng Lúa Mạch",
    emoji: "🌾",
    description: "Làm mịn lỗ chân lông, kiểm soát dầu",
    price: 189000,
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 9,
    name: "Dòng Lô Hội",
    emoji: "🌿",
    description: "Dịu da, chữa lành vết thương nhẹ",
    price: 179000,
    rating: 4.9,
    reviews: 345,
  },
]

// ============================================
// 3. SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    observer.observe(el)
  })
}

// ============================================
// 4. HEADER SCROLL EFFECT
// ============================================

function initHeaderScroll() {
  const header = document.querySelector("header")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 100) {
      header.classList.add("shrink")
    } else {
      header.classList.remove("shrink")
    }

    lastScrollTop = scrollTop
  })
}

// ============================================
// 5. SMOOTH SCROLL TO TOP
// ============================================

function initScrollToTop() {
  const scrollBtn = document.querySelector(".scroll-to-top")
  if (!scrollBtn) return

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = "block"
    } else {
      scrollBtn.style.display = "none"
    }
  })

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}

// ============================================
// 6. PRODUCT CARD INTERACTIONS
// ============================================

function initProductCards() {
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })

    const addBtn = this.querySelector(".btn")
    if (addBtn) {
      addBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const productId = Number.parseInt(this.dataset.productId)
        const product = products.find((p) => p.id === productId)
        if (product) {
          cart.addItem(product)
        }
      })
    }
  })
}

// ============================================
// 7. NAVIGATION LINKS
// ============================================

function initNavigation() {
  const cartIcon = document.querySelector('[data-page="cart"]')
  const adminIcon = document.querySelector('[data-page="admin"]')
  const productsLink = document.querySelector('[data-page="products"]')

  if (cartIcon) {
    cartIcon.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "cart.html"
    })
  }

  if (adminIcon) {
    adminIcon.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "admin.html"
    })
  }

  if (productsLink) {
    productsLink.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "products.html"
    })
  }
}

// ============================================
// 8. INITIALIZATION
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all features
  cart.updateCartCount()
  initScrollAnimations()
  initHeaderScroll()
  initScrollToTop()
  initProductCards()
  initNavigation()

  // Add scroll-reveal class to elements
  document.querySelectorAll(".feature-card, .product-card, .testimonial-card").forEach((el) => {
    el.classList.add("scroll-reveal")
  })
})

// ============================================
// 9. UTILITY FUNCTIONS
// ============================================

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price)
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let stars = "★".repeat(fullStars)
  if (hasHalfStar) stars += "½"
  return stars
}
