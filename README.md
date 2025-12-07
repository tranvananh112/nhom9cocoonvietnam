# Cocoon - Mỹ phẩm Thuần Chay

Website thương mại điện tử bán mỹ phẩm thuần chay được xây dựng bằng **HTML, CSS, JavaScript thuần** - không cần backend, chạy trực tiếp trên GitHub Pages, Vercel, hoặc bất kỳ static hosting nào.

**Slogan**: "Vẻ đẹp thuần chay, sống xanh mỗi ngày"

## 🌿 Tính năng

### Cho khách hàng
- ✅ Lướt và tìm kiếm sản phẩm từ 9 dòng sản phẩm chính
- ✅ Thêm sản phẩm vào giỏ hàng (lưu trữ trên localStorage)
- ✅ Xem giỏ hàng với tính năng tăng/giảm số lượng
- ✅ Thanh toán bằng COD hoặc Momo (VietQR QR code)
- ✅ Đăng ký thông tin giao hàng (số điện thoại, tên, địa chỉ)
- ✅ Theo dõi đơn hàng theo thời gian thực
- ✅ Thông báo thành công khi đặt hàng
- ✅ Lưu trữ giỏ hàng trên thiết bị người dùng

### Cho admin
- ✅ Xem danh sách tất cả đơn hàng theo thời gian thực
- ✅ Cập nhật trạng thái đơn hàng (pending → confirmed → shipped → delivered)
- ✅ Xem chi tiết từng đơn hàng
- ✅ Xem thống kê doanh thu, số lượng đơn hàng, khách hàng
- ✅ Quản lý thông tin khách hàng
- ✅ Bảo vệ bằng mật khẩu

## 🛠 Công nghệ sử dụng

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Storage**: LocalStorage (giỏ hàng, đơn hàng, admin)
- **Styling**: Custom CSS với animation
- **Deployment**: GitHub Pages, Vercel, GitHub

## 📦 Cài đặt & Chạy

### Cách 1: Mở file HTML trực tiếp
\`\`\`bash
# macOS
open index.html

# Windows
start index.html

# Hoặc tùy vào trình duyệt, drag file vào trình duyệt
\`\`\`

### Cách 2: Sử dụng Live Server (VS Code)
1. Cài đặt extension "Live Server" trong VS Code
2. Right-click vào `index.html`
3. Chọn "Open with Live Server"

### Cách 3: Sử dụng HTTP Server
\`\`\`bash
# Node.js
npx http-server .

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
\`\`\`

## 🚀 Triển khai

### Deploy lên Vercel
1. Push code lên GitHub
2. Truy cập https://vercel.com
3. Kết nối GitHub repository
4. Deploy tự động

### Deploy lên GitHub Pages
1. Đặt repository thành public
2. Vào Settings → Pages
3. Chọn branch `main` và `/root` folder
4. Truy cập `https://yourusername.github.io/cocoon-ecommerce`

## 📁 Cấu trúc dự án

\`\`\`
cocoon-ecommerce/
├── index.html              # Trang chủ
├── products.html           # Danh sách sản phẩm
├── cart.html               # Giỏ hàng
├── checkout.html           # Thanh toán
├── order-tracking.html     # Theo dõi đơn hàng
├── admin.html              # Dashboard admin
├── about.html              # Về chúng tôi
├── css/
│   └── style.css           # Stylesheet chính
├── js/
│   └── app.js              # JavaScript chính
└── public/
    └── images/             # Hình ảnh
\`\`\`

## 📖 Hướng dẫn sử dụng

### Cho khách hàng
1. Truy cập trang chủ (`index.html`)
2. Lướt danh sách 9 dòng sản phẩm chính
3. Thêm sản phẩm vào giỏ hàng
4. Vào giỏ hàng (`cart.html`)
5. Kiểm tra thông tin sản phẩm
6. Tiến hành thanh toán (`checkout.html`)
7. Điền thông tin giao hàng (số điện thoại, tên, địa chỉ)
8. Chọn phương thức thanh toán (COD hoặc Momo)
9. Nhận thông báo thành công
10. Theo dõi đơn hàng tại `order-tracking.html`

### Cho admin
1. Truy cập `admin.html`
2. Nhập mật khẩu: `cocoon2025`
3. Xem danh sách đơn hàng theo thời gian thực
4. Xem chi tiết từng đơn hàng
5. Cập nhật trạng thái đơn hàng
6. Xem thống kê doanh thu

## 💳 Phương thức thanh toán

### COD (Thanh toán khi nhận hàng)
- Khách hàng thanh toán trực tiếp khi nhận hàng
- Không cần thông tin thẻ tín dụng
- Đơn hàng được xác nhận ngay lập tức

### Momo (VietQR)
- Quét mã QR bằng ứng dụng Momo
- Thanh toán trực tuyến an toàn
- Tự động cập nhật trạng thái đơn hàng
- Sử dụng API: `https://api.vietqr.io`

## 📱 Các dòng sản phẩm

1. **Dòng Bí Đao** - Làm sáng da, giảm mụn (189.000đ)
2. **Dòng Nghệ** - Chống viêm, làm dịu da (199.000đ)
3. **Dòng Hoa Hồng** - Cấp ẩm, chống lão hóa (209.000đ)
4. **Dòng Cà Phê** - Tẩy tế bào chết (179.000đ)
5. **Dòng Trà Xanh** - Chống oxy hóa (189.000đ)
6. **Dòng Dừa** - Cấp ẩm tự nhiên (199.000đ)
7. **Dòng Mật Ong** - Nuôi dưỡng da (219.000đ)
8. **Dòng Lúa Mạch** - Làm mịn lỗ chân lông (189.000đ)
9. **Dòng Lô Hội** - Dịu da, chữa lành (179.000đ)

## 🔒 Bảo mật

- ✅ Dữ liệu lưu trữ cục bộ trên thiết bị người dùng
- ✅ Mật khẩu admin được bảo vệ
- ✅ Không gửi dữ liệu nhạy cảm lên server
- ✅ Không lưu trữ thông tin thanh toán

## 📞 Liên hệ

- Email: info@cocoon.vn
- Điện thoại: 1900 xxxx
- Website: https://cocoon.vn
- Facebook: facebook.com/cocoon
- Instagram: @cocoon_vn

## 📄 License

MIT

---

**Lưu ý**: Website này chạy hoàn toàn trên client-side. Tất cả dữ liệu được lưu trữ trên localStorage của trình duyệt, vì vậy:
- Dữ liệu sẽ bị xóa nếu xóa cache trình duyệt
- Dữ liệu riêng biệt cho mỗi trình duyệt/thiết bị
- Để triển khai production, cần thêm backend để lưu trữ dữ liệu vĩnh viễn
