import { CartCounter } from "@/components/CartCounter"
import { ProductList } from "@/components/ProductList"
import { getStock, getVariants } from "./actions";

export default async function Home() {

  const stock = await getStock();
  const serverVariant = await getVariants();
  return (
    <div className="relative font-sans grid grid-rows-[1fr] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="absolute top-8 right-8 z-10">
        <CartCounter />
      </div>
      <main className="w-full overflow-x-auto overflow-y-hidden flex items-center">
        <ProductList stock={stock} serverVariant={serverVariant} />
      </main>
    </div>
  )
}
