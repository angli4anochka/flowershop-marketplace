export interface Product {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  rating: number;
  image: string;
  images?: string[];
  category: string;
  description: string;
  sku: string;
  variants?: ProductVariant[];
  specifications?: Record<string, string>;
  reviews?: Review[];
}

export interface ProductVariant {
  id: string;
  type: 'size' | 'color';
  value: string;
  available: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
  video?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem extends Product {
  quantity: number;
}
