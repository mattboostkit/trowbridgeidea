export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  tradePrice?: number;
  images: string[];
  category: string;
  tags: string[];
  artist: string;
  dimensions: string;
  inStock: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Artist {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  featured: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "customer" | "trade" | "admin";
  createdAt: Date;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  shippingAddress: Address;
  paymentIntent: string;
  createdAt: Date;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  county: string;
  postcode: string;
  country: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Exhibition {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  coverImage: string;
  virtualTourUrl?: string;
  featured: boolean;
}