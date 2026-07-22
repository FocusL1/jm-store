import { supabase } from "@/lib/supabase";
import type { Product } from "@/types/product";

// ========================================
// Obtener todos los productos
// ========================================

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Error obteniendo productos:",
      error.message
    );
    return [];
  }

  return data as Product[];
}

// ========================================
// Obtener producto por slug
// ========================================

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(
      "Error obteniendo producto:",
      error.message
    );
    return null;
  }

  return data as Product;
}

// ========================================
// Productos relacionados
// ========================================

export async function getRelatedProducts(
  category: string,
  currentId: string
): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .neq("id", currentId)
    .limit(4);

  if (error) {
    console.error(
      "Error obteniendo relacionados:",
      error.message
    );

    return [];
  }

  return data as Product[];
}

// ========================================
// Crear producto
// ========================================

export async function createProduct(product: any) {
 console.log("=== PRODUCTO ===");
console.log(product);

const { data, error } = await supabase
  .from("products")
  .insert(product)
  .select();

console.log(data);
console.log(error);

  if (error) {
    throw error;
  }

  return data;
}

// ========================================
// Actualizar producto
// ========================================

export async function updateProduct(
  id: string,
  product: Partial<Product>
): Promise<Product> {
  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(
      "Error actualizando producto:",
      error.message
    );

    throw error;
  }

  return data as Product;
}

// ========================================
// Eliminar producto
// ========================================

export async function deleteProduct(
  id: string
): Promise<void> {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(
      "Error eliminando producto:",
      error.message
    );

    throw error;
  }
}

// ========================================
// Activar / Desactivar producto
// ========================================

export async function toggleProduct(
  id: string,
  active: boolean
): Promise<void> {
  const { error } = await supabase
    .from("products")
    .update({
      active,
    })
    .eq("id", id);

  if (error) {
    console.error(
      "Error cambiando estado:",
      error.message
    );

    throw error;
  }
}