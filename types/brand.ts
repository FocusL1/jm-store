export interface Brand {

  id: string;

  name: string;

  slug: string;

  logo: string | null;

  description: string | null;

  featured: boolean;

  active: boolean;

  created_at: string;

  updated_at: string;

}

export interface BrandFormData {

  name: string;

  slug: string;

  logo?: string;

  description?: string;

  featured: boolean;

  active: boolean;

}