import BrandToolbar from "../../../components/admin/brands/BrandToolbar";
import BrandsTable from "../../../components/admin/brands/BrandsTable";

export default function BrandsPage() {
  return (
    <div className="space-y-8">

      <BrandToolbar />

      <BrandsTable />

    </div>
  );
}