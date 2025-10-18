'use client'

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export function CartCounter() {
    const { items, clearCart } = useCart();

    const [cartCount, setCartCount] = useState<number>(0);

    useEffect(() => {
        const itemCount = Object.values(items).reduce((acc, curr) => acc + curr, 0);
        setCartCount(itemCount);
    }, [items]);

    return (
        <div>
            <span>Current cart: {cartCount}</span>
            <a onClick={() => clearCart()} className="ml-4 underline cursor-pointer">Clear Cart</a>
            {items && Object.keys(items).length > 0 && (
                <div className="mt-2">
                    <h4 className="font-semibold">Cart Details:</h4>
                    <ul>
                        {Object.entries(items).map(([productName, quantity]) => (
                            <li key={productName}>
                                {productName}: {quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}