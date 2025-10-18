"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type CartMap = Record<string, number>

type CartContextValue = {
    items: CartMap
    addToCart: (productName: string, qty?: number) => void
    removeFromCart: (productName: string) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function useCart() {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error("useCart must be used within a CartProvider")
    return ctx
}

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartMap>({})

    useEffect(() => {
        // Would want to handle JSON parse errors here
        const raw = localStorage.getItem("cart")
        if (raw) {
            const parsed = JSON.parse(raw) as CartMap
            setItems(parsed)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items))
    }, [items])

    const addToCart = (productName: string, qty = 1) => {
        // This would also typically get stored in backend in case the user switches devices
        setItems((prev) => ({ ...prev, [productName]: (prev[productName] || 0) + qty }))
    }

    const removeFromCart = (productName: string) => {
        setItems((prev) => {
            const copy = { ...prev }
            delete copy[productName]
            return copy
        })
    }

    const clearCart = () => setItems({})

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export type { CartMap }
