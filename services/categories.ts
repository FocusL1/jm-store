import { supabase } from "@/lib/supabase/client";

import {
    Category,
    CategoryFormData,
} from "@/types/category";

export async function getCategories(): Promise<Category[]> {

    const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");

    if (error) {
        console.error(error);
        return [];
    }

    return data as Category[];

}

export async function createCategory(
    category: CategoryFormData
): Promise<Category> {

    const { data, error } = await supabase
        .from("categories")
        .insert([category])
        .select()
        .single();

    if (error) throw error;

    return data as Category;

}

export async function updateCategory(
    id: string,
    category: Partial<CategoryFormData>
): Promise<Category> {

    const { data, error } = await supabase
        .from("categories")
        .update(category)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data as Category;

}

export async function deleteCategory(
    id: string
): Promise<boolean> {

    const { error } = await supabase
        .from("categories")
        .delete()
        .eq("id", id);

    if (error) throw error;

    return true;

}