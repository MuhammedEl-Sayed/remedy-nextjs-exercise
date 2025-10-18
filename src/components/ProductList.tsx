'use client'

import { getStock, getVariants } from "@/app/actions"
import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { VariantControls } from "./VariantControls"

type ProductListProps = {
    stock: Product[]
    serverVariant?: Record<string, string>
}

export function ProductList({ stock = [], serverVariant = {} }: ProductListProps) {
    const chosenVariant = useSearchParams().get("v") || serverVariant['ProductCard'] || 'A'

    return (
        <div className="flex flex-col w-full items-center">
            <VariantControls />
            <ul className="flex flex-1 overflow-x-auto space-x-6 px-8 py-6 scrollbar-thin scrollbar-thumb-neutral-700 w-full">
                {stock.map((product, index) => (
                    <li key={index} className="flex-1">
                        <ProductCard product={product} variant={chosenVariant} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
