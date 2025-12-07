# Cocoon Vietnam - Website Mỹ Phẩm Thuần Chay

Website thương mại điện tử cho thương hiệu mỹ phẩm thuần chay Cocoon Vietnam.

## 🚀 Công nghệ sử dụng

- **Next.js 16** - React Framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Supabase** - Database & Authentication
- **Zustand** - State Management
- **Radix UI** - UI Components

## 📦 Cài đặt

```bash
# Clone repository
git clone https://github.com/tranvananh112/nhom9cocoonvietnam.git
cd nhom9cocoonvietnam

# Cài đặt dependencies
npm install

# Tạo file .env.local và thêm Supabase credentials
cp .env.example .env.local

# Chạy development server
npm run dev
```

## 🌐 Deploy lên Vercel

1. Push code lên GitHub
2. Import project vào Vercel
3. Thêm Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

## 📝 Environment Variables

Tạo file `.env.local` với nội dung:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎯 Tính năng

- ✅ Trang chủ với hero section
- ✅ Danh sách sản phẩm
- ✅ Giỏ hàng
- ✅ Thanh toán
- ✅ Quản lý đơn hàng
- ✅ Trang quản trị
- ✅ Responsive design
- ✅ SEO optimized

## 📱 Scripts

```bash
npm run dev      # Chạy development server
npm run build    # Build production
npm run start    # Chạy production server
npm run lint     # Lint code
```

## 🔗 Links

- **Website**: https://nhom9cocoonvietnam.vercel.app
- **GitHub**: https://github.com/tranvananh112/nhom9cocoonvietnam

## 👥 Nhóm phát triển

Nhóm 9 - Cocoon Vietnam
