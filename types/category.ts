export interface Category {

  id: string;

  name: string;

  slug: string;

  image: string | null;

  description: string | null;

  featured: boolean;

  active: boolean;

  created_at: string;

  updated_at: string;

}

export interface CategoryFormData {

  name: string;

  slug: string;

  image?: string;

  description?: string;

  featured: boolean;

  active: boolean;

}