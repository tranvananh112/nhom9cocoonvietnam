"use client"

export function ChristmasBanner() {
    return (
        <div className="w-full bg-gradient-to-r from-red-600 via-green-600 to-red-600 py-2 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
                <span className="text-white font-bold text-lg mx-8">
                    🎄 Mừng Giáng Sinh 2025 - Giảm giá 90% cho tất cả sản phẩm! 🎅
                </span>
                <span className="text-white font-bold text-lg mx-8">
                    🎁 Mừng Giáng Sinh 2025 - Giảm giá 90% cho tất cả sản phẩm! ⭐
                </span>
                <span className="text-white font-bold text-lg mx-8">
                    🎄 Mừng Giáng Sinh 2025 - Giảm giá 90% cho tất cả sản phẩm! 🎅
                </span>
                <span className="text-white font-bold text-lg mx-8">
                    🎁 Mừng Giáng Sinh 2025 - Giảm giá 90% cho tất cả sản phẩm! ⭐
                </span>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    display: inline-block;
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </div>
    )
}
