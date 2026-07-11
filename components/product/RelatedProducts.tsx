import ProductGrid from "./ProductGrid";
import { Product } from "@/data/types";

interface RelatedProductsProps {
  currentProduct: Product;
  products: Product[];
}

export default function RelatedProducts({
  currentProduct,
  products,
}: RelatedProductsProps) {
  const relatedProducts = products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-24">

      <h2 className="text-3xl font-bold text-yellow-400 mb-10">
        Productos relacionados
      </h2>

      <ProductGrid products={relatedProducts} />

    </section>
  );
}