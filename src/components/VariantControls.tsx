'use client';

import Link from "next/link";
import { useState } from "react";

export function VariantControls() {
    const [selectedProductCardVariant, setSelectedProductCardVariant] = useState<string>('A');
    return (
        <>
            <div className="mb-4">
                <label className="font-semibold mr-2">Choose Server Variant:</label>
                <select
                    value={selectedProductCardVariant}
                    onChange={(e) =>
                        setSelectedProductCardVariant(e.target.value)
                    }
                    className="border border-gray-400 rounded px-2 py-1"
                >
                    <option value="A">Variant A</option>
                    <option value="B">Variant B</option>
                </select>

            </div>
            <div>
                <button className="h-8 px-5 ml-2 bg-amber-700 text-white rounded hover:bg-amber-800">
                    <Link href={`?v=${selectedProductCardVariant}`}>Apply</Link>
                </button>
                <button className="h-8 px-5 ml-2 bg-gray-200 text-amber-700 rounded hover:bg-gray-300">
                    <Link href={"/"} replace>Clear Applied Variant</Link>
                </button>
            </div>
        </>
    )
}