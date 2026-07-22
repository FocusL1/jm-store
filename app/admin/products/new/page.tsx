import ProductForm from "@/components/admin/products/ProductForm";

export default function NewProductPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-yellow-400">
          Nuevo producto
        </h1>

        <p className="mt-2 text-gray-400">
          Agrega un nuevo producto al catálogo.
        </p>
      </div>

      <ProductForm />

    </div>
  );
}