import type { Product } from "@/types/product";

import ProductGrid from "./ProductGrid";

interface Props {
  currentProduct: Product;
  products: Product[];
}

export default function RelatedProducts({
  products,
}: Props) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-yellow-400 mb-10">
        Productos relacionados
      </h2>

      <ProductGrid
        products={products}
      />
    </section>
  );
}