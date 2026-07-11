import ProductToolbar from "@/components/admin/products/ProductToolbar";
import ProductFilters from "@/components/admin/products/ProductFilters";
import ProductsTable from "@/components/admin/products/ProductsTable";

export default function ProductsPage() {
  return (
    <div className="space-y-8">

      <ProductToolbar />

      <ProductFilters />

      <ProductsTable />

    </div>
  );
}