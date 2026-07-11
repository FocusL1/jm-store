import { getProducts } from "@/services/products";
import ProductRow from "./ProductRow";

export default async function ProductsTable() {

  const products = await getProducts();

  return (
    <div
      className="
        bg-zinc-900
        rounded-2xl
        border
        border-zinc-800
        overflow-hidden
      "
    >

      <table className="w-full">

        <thead className="bg-zinc-950">

          <tr>

            <th className="text-left p-5 text-yellow-400">
              Imagen
            </th>

            <th className="text-left p-5 text-yellow-400">
              Producto
            </th>

            <th className="text-left p-5 text-yellow-400">
              Categoría
            </th>

            <th className="text-left p-5 text-yellow-400">
              Marca
            </th>

            <th className="text-left p-5 text-yellow-400">
              Precio
            </th>

            <th className="text-left p-5 text-yellow-400">
              Stock
            </th>

            <th className="text-left p-5 text-yellow-400">
              Estado
            </th>

            <th className="text-left p-5 text-yellow-400">
              Acciones
            </th>

          </tr>

        </thead>

        <tbody>

          {products.length === 0 ? (

            <tr>

              <td
                colSpan={8}
                className="text-center py-20 text-gray-500"
              >
                No hay productos para mostrar.
              </td>

            </tr>

          ) : (

            products.map((product: any) => (

              <ProductRow
                key={product.id}
                product={product}
              />

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}