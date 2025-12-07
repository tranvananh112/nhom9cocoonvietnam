"use client"

import { useEffect, useState } from "react"

export function ChristmasEffects() {
    const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])

    useEffect(() => {
        // Tạo 50 bông tuyết với vị trí và thời gian ngẫu nhiên
        const flakes = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 5 + Math.random() * 10,
        }))
        setSnowflakes(flakes)
    }, [])

    return (
        <>
            {/* Tuyết rơi */}
            <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                {snowflakes.map((flake) => (
                    <div
                        key={flake.id}
                        className="absolute text-white opacity-80 animate-fall"
                        style={{
                            left: `${flake.left}%`,
                            animationDelay: `${flake.delay}s`,
                            animationDuration: `${flake.duration}s`,
                            fontSize: `${Math.random() * 10 + 10}px`,
                        }}
                    >
                        ❄
                    </div>
                ))}
            </div>

            {/* Banner Noel */}
            <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 via-green-600 to-red-600 text-white py-2 text-center z-40 shadow-lg">
                <div className="flex items-center justify-center gap-3 animate-pulse">
                    <span className="text-xl">🎄</span>
                    <span className="font-semibold">Mừng Giáng Sinh 2024 - Giảm giá đến 30% cho tất cả sản phẩm!</span>
                    <span className="text-xl">🎅</span>
                </div>
            </div>

            {/* Đèn trang trí */}
            <div className="fixed top-12 left-0 right-0 pointer-events-none z-40">
                <div className="flex justify-around">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-3 h-3 rounded-full animate-twinkle"
                            style={{
                                backgroundColor: ["#ff0000", "#00ff00", "#ffff00", "#0000ff"][i % 4],
                                animationDelay: `${i * 0.2}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.3;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-twinkle {
          animation: twinkle 1.5s ease-in-out infinite;
        }
      `}</style>
        </>
    )
}
