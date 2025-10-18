"use client"

import { useState } from "react"
import { useCart } from "../context/CartContext"
import { trackEvent } from "@/lib/trackEvent"

interface ProductCardProps {
    product: Product
    variant: string
}

export function ProductCard({ product, variant }: ProductCardProps) {
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart()

    function handleAddToCart() {
        addToCart(product.name, quantity)
    }

    if (variant === "A") {
        return (
            <div className="w-64 rounded-lg shadow-lg overflow-hidden bg-gray-300 border border-amber-300 p-4">
                <h2 className="text-xl font-bold mb-2 text-amber-700">{product.name} (Variant A)</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <a href="#" onClick={() => alert(`${product.name} is commonly linked with causing spontaneous naps.`)} className="text-blue-400 underline mb-4 block">Learn More</a>
                <div className="flex flex-row items-center justify-between mb-3">
                    <label className="text-sm text-gray-800 mr-2">Qty:</label>
                    <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 border border-gray-400 rounded px-1 py-0.5 text-center text-gray-700"
                    />
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p className="text-lg font-normal text-amber-700 line">${product.price}</p>
                    <button className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800"
                        onClick={async () => {
                            await trackEvent("add_to_cart", { productName: product.name, quantity: quantity })
                            handleAddToCart()
                        }}
                    >Add to Cart</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-64 rounded-lg shadow-lg overflow-hidden bg-gray-900 border border-white p-4">
                <h2 className="text-xl font-bold mb-2 text-amber-700">{product.name} (Variant B)</h2>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <a href="#" onClick={() => alert(`${product.name} is commonly linked with causing spontaneous naps.`)} className="text-blue-400 underline mb-4 block">Learn More</a>
                <div className="flex flex-row items-center justify-between mb-3">
                    <label className="text-sm text-gray-300 mr-2">Qty:</label>
                    <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 border border-gray-500 rounded px-1 py-0.5 text-center bg-gray-800 text-white"
                    />
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p className="text-lg font-normal text-amber-700">${product.price}</p>
                    <button className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-00"
                        onClick={async () => {
                            await trackEvent("add_to_cart", { productName: product.name, quantity: quantity })
                            await handleAddToCart()
                        }}
                    >Add to Cart</button>
                </div>
            </div>
        )
    }
}
