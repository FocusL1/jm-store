import type { Product } from "@/types/product";

import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductGrid({
  products,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}