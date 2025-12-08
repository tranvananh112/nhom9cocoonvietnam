"use client"

import { useState } from "react"
import useSWR from "swr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clock, CheckCircle2, Truck, PackageCheck, RefreshCw, Search } from "lucide-react"
import { formatPrice } from "@/lib/products"
import { createClient } from "@/lib/supabase/client"

type OrderStatus = "pending" | "confirmed" | "shipping" | "delivered"

interface Order {
    id: string
    order_code: string
    customer_name: string
    customer_phone: string
    customer_address: string
    total_price: number
    status: OrderStatus
    payment_method: string
    is_paid: boolean
    created_at: string
    order_items: Array<{
        product_name: string
        product_price: number
        quantity: number
        subtotal: number
    }>
}

const statusConfig: Record<OrderStatus, { label: string; color: string; icon: React.ElementType }> = {
    pending: { label: "Chờ xử lý", color: "bg-yellow-100 text-yellow-800", icon: Clock },
    confirmed: { label: "Đã xác nhận", color: "bg-blue-100 text-blue-800", icon: CheckCircle2 },
    shipping: { label: "Đang giao", color: "bg-purple-100 text-purple-800", icon: Truck },
    delivered: { label: "Đã giao", color: "bg-green-100 text-green-800", icon: PackageCheck },
}

const fetchOrders = async (phone: string) => {
    if (!phone) return []
    const supabase = createClient()
    const { data, error } = await supabase
        .from("orders")
        .select("*, order_items(*)")
        .eq("customer_phone", phone)
        .order("created_at", { ascending: false })
    if (error) throw error
    return data as Order[]
}

export function OrderTrackingRealtime() {
    const [phone, setPhone] = useState("")
    const [searchPhone, setSearchPhone] = useState("")

    const { data: orders = [], mutate, isLoading } = useSWR(
        searchPhone ? `orders-${searchPhone}` : null,
        () => fetchOrders(searchPhone),
        {
            refreshInterval: 5000, // Auto refresh mỗi 5 giây
            revalidateOnFocus: true,
        }
    )

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        setSearchPhone(phone)
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    return (
        <div className="space-y-6">
            {/* Search Form */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Search className="h-5 w-5" />
                        Tra cứu đơn hàng
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <div className="flex-1">
                            <Label htmlFor="phone">Số điện thoại</Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="Nhập số điện thoại đặt hàng"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-end">
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Đang tìm..." : "Tra cứu"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {/* Orders List */}
            {searchPhone && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">
                            Đơn hàng của {searchPhone} ({orders.length})
                        </h2>
                        <Button variant="outline" size="sm" onClick={() => mutate()} className="gap-2">
                            <RefreshCw className="h-4 w-4" />
                            Làm mới
                        </Button>
                    </div>

                    {orders.length === 0 ? (
                        <Card>
                            <CardContent className="py-12 text-center text-muted-foreground">
                                Không tìm thấy đơn hàng nào
                            </CardContent>
                        </Card>
                    ) : (
                        orders.map((order) => {
                            const StatusIcon = statusConfig[order.status].icon
                            return (
                                <Card key={order.id}>
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-mono text-sm text-muted-foreground">
                                                    Mã đơn: {order.order_code}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {formatDate(order.created_at)}
                                                </p>
                                            </div>
                                            <Badge className={statusConfig[order.status].color}>
                                                <StatusIcon className="h-3 w-3 mr-1" />
                                                {statusConfig[order.status].label}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {/* Order Items */}
                                        <div className="space-y-2">
                                            {order.order_items.map((item, idx) => (
                                                <div key={idx} className="flex justify-between text-sm">
                                                    <span>
                                                        {item.product_name} x {item.quantity}
                                                    </span>
                                                    <span className="font-medium">{formatPrice(item.subtotal)}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Total */}
                                        <div className="border-t pt-4 flex justify-between font-semibold">
                                            <span>Tổng cộng</span>
                                            <span className="text-primary">{formatPrice(order.total_price)}</span>
                                        </div>

                                        {/* Payment Status */}
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">Thanh toán</span>
                                            <Badge variant={order.is_paid ? "default" : "secondary"}>
                                                {order.is_paid ? "Đã thanh toán" : order.payment_method.toUpperCase()}
                                            </Badge>
                                        </div>

                                        {/* Delivery Address */}
                                        <div className="text-sm">
                                            <p className="text-muted-foreground">Địa chỉ giao hàng:</p>
                                            <p>{order.customer_address}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })
                    )}

                    <p className="text-xs text-center text-muted-foreground">
                        ⚡ Tự động cập nhật mỗi 5 giây
                    </p>
                </div>
            )}
        </div>
    )
}
