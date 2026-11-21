export interface ProductVariant {
  id: string;
  title: string;
  length: string;
  color: string;
  colorHex: string;
  price: number;
  available: boolean;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  collection: string;
  collectionTitle: string;
  priceFrom: number;
  description: string;
  details: string[];
  images: string[];
  colors: { name: string; label: string; hex: string }[];
  lengths: string[];
  variants: ProductVariant[];
  rating: number;
  reviewCount: number;
}

export interface Collection {
  handle: string;
  title: string;
  description: string;
  image?: string;
}

export interface CartItem {
  variantId: string;
  productId: string;
  handle: string;
  title: string;
  variantTitle: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  productTitle: string;
  title: string;
  body: string;
  verified: boolean;
}
