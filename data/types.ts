export interface Product {
  id: number;

  name: string;

  slug: string;

  brand: string;

  category: string;

  description: string;

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
}