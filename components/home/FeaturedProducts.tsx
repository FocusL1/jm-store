import { getProducts } from "@/services/products";
import ProductCard from "@/components/product/ProductCard";

export default async function FeaturedProducts() {
  const products = await getProducts();

  console.log("=================================");
  console.log("PRODUCTOS DESDE SUPABASE:");
  console.log(products);
  console.log("=================================");

  const featuredProducts = products
    .filter((product: any) => product.featured)
    .slice(0, 4);

  console.log("PRODUCTOS DESTACADOS:");
  console.log(featuredProducts);

  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
          Productos destacados
        </h2>

        <p className="text-center text-gray-400 text-lg mb-14">
          Los productos más vendidos y recomendados de JM-STORE.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}