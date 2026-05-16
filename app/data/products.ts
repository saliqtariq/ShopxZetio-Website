import type { Product } from "../types";

export const IMG = {
  headphone1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  headphone2: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
  earbuds: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80",
  iphone1: "https://images.unsplash.com/photo-1695048133142-1a20484429be?w=800&q=80",
  iphone2: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&q=80",
};

export const HOME_PRODUCTS: Product[] = [
  { id: "1", name: "Logitech G Pro X 2 Lightspeed", category: "headphones", price: 249.99, image: IMG.headphone1, isNew: true },
  { id: "2", name: "HyperX Cloud III Wireless", category: "headphones", price: 169.99, image: IMG.headphone2 },
  { id: "3", name: "HyperX Cirro Buds Pro", category: "earbuds", price: 99.99, image: IMG.earbuds },
  { id: "4", name: "iPhone 15 Pro Max - Titanium", category: "phones", price: 1199.0, image: IMG.iphone1, isNew: true },
];

export const ALL_PRODUCTS: Product[] = [
  ...HOME_PRODUCTS,
  { id: "5", name: "iPhone 14 Pro Max - Deep Purple", category: "phones", price: 999.0, image: IMG.iphone2 },
  { id: "6", name: "Logitech G733 Lightspeed", category: "headphones", price: 149.99, image: IMG.headphone1 },
  { id: "7", name: "HyperX Cloud Earbuds II", category: "earbuds", price: 39.99, image: IMG.earbuds },
  { id: "8", name: "Tactical Armor Case - iPhone 15 Pro Max", category: "accessories", price: 45.0, image: IMG.iphone2, isNew: true },
  { id: "9", name: "Clear MagSafe Case - iPhone 14 Pro Max", category: "accessories", price: 35.0, image: IMG.iphone1 },
];
