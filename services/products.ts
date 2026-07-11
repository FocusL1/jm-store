import { supabase } from "@/lib/supabase";

export async function getProducts() {

  const { data, error } = await supabase
    .from("products")
    .select("*");

  console.log("=================================");
  console.log("DATA:");
  console.log(data);

  console.log("ERROR:");
  console.log(error);

  console.log("=================================");

  if (error) {
    return [];
  }

  return data ?? [];
}