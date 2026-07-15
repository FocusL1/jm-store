import { supabase } from "@/lib/supabase/client";

export async function getBrands() {

    const { data, error } = await supabase
        .from("brands")
        .select("*")
        .order("name");

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}