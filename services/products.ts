import { supabase } from "@/lib/supabase";
import type { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error.message);
    return [];
  }

  return data as Product[];
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return null;
  }

  return data as Product;
}

export async function getRelatedProducts(
  category: string,
  currentId: string
): Promise<Product[]> {
  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .neq("id", currentId)
    .limit(4);

  return (data ?? []) as Product[];
}