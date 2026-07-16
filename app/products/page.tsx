import Header from "@/components/layout/Header";
import ProductGrid from "@/components/product/ProductGrid";

import { getProducts } from "@/services/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <Header />

      <main className="bg-black min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-yellow-400">
              Todos los productos
            </h1>

            <p className="text-gray-400 mt-4 text-lg">
              Explora nuestro catálogo completo de tecnología.
            </p>

            <p className="text-yellow-500 mt-2 font-semibold">
              {products.length} productos disponibles
            </p>
          </div>

          <ProductGrid products={products} />
        </div>
      </main>
    </>
  );
}