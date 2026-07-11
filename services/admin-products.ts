import { supabase } from "@/lib/supabase";
import { Product, ProductFormData } from "@/types";

export async function createProduct(
  product: ProductFormData
): Promise<Product> {

  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return data as Product;
}

export async function updateProduct(
  id: string,
  product: Partial<ProductFormData>
): Promise<Product> {

  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return data as Product;
}

export async function deleteProduct(
  id: string
): Promise<boolean> {

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw error;
  }

  return true;
}