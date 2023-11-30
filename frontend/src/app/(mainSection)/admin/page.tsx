import FormDialog from "@/components/admin/FormDialog";
import ProductList from "@/components/admin/ProductList";

export default function AdminPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center px-60 py-24 gap-10">
      <ProductList />
      <FormDialog />
    </main>
  );
}
