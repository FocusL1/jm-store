export interface Product {
  id: string;

  name: string;

  slug: string;

  description: string;

  brand: string;

  category: string;

  image: string;

  gallery?: string[];

  price: number;

  oldPrice: number;

  discount: number;

  stock: number;

  rating: number;

  reviews: number;

  featured: boolean;

  flash: boolean;

  bestSeller: boolean;

  isNew: boolean;

  active: boolean;
}

export interface ProductFormData {
  name: string;

  slug: string;

  description: string;

  brand: string;

  category: string;

  image: string;

  price: number;

  old_price: number;

  stock: number;

  featured: boolean;

  flash: boolean;

  best_seller: boolean;

  is_new: boolean;

  active: boolean;
}