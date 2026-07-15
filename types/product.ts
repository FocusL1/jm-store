export interface Product {
  id: string;

  name: string;

  slug: string;

  description: string;

  brand: string;

  category: string;

  image: string;

  images: string[] | null;

  price: number;

  old_price: number | null;

  discount: number;

  stock: number;

  rating: number;

  reviews: number;

  featured: boolean;

  featured_order: number;

  flash: boolean;

  flash_order: number;

  best_seller: boolean;

  is_new: boolean;

  active: boolean;

  free_shipping: boolean;

  sold: number;

  views: number;

  created_at: string;

  updated_at: string;
}

export interface ProductFormData {
  name: string;

  slug: string;

  description: string;

  brand: string;

  category: string;

  image: string;

  price: number;

  old_price: number | null;

  stock: number;

  featured: boolean;

  flash: boolean;

  best_seller: boolean;

  is_new: boolean;

  active: boolean;
}