"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrderTrackingRealtime } from "@/components/order-tracking-realtime"
import { Toaster } from "sonner"

export default function OrdersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Theo dõi đơn hàng</h1>
            <p className="text-muted-foreground mb-8">
              Nhập số điện thoại để tra cứu đơn hàng. Trạng thái cập nhật tự động mỗi 5 giây.
            </p>

            <OrderTrackingRealtime />
          </div>
        </div>
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  )
}
