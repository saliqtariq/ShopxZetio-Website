import type { Product } from "../types";

export const IMG = {
  headphone1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  headphone2: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
  earbuds: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80",
  iphone1: "https://images.unsplash.com/photo-1695048133142-1a20484429be?w=800&q=80",
  iphone15pm: "/Iphone 15pm.jpg",
  iphone13pm: "/iphone 13pm.webp",
  ps4: "/ps4 updated pic.webp",
  logiProX: "/LogiTech G Pro X.jpeg",
  stinger2: "/HyperX Cloud Stinger 2.jpeg",
  cloud2: "/HyperX Cloud 2.jpeg",
  earbuds2: "/HyperX Earbuds 2.webp",
  appleEarbuds: "/Apple EarBuds.jpg",
  mcdodoSplitter: "/McDodo Spliter.jpeg",
  appleSinglePinSplitter: "/Apple SinglePin Spliter.jpeg",
  bluksPowerbank: "/BLUKS Powerbank.webp",
  sogoFan: "/Sogo Fan.png",
};

export const HOME_PRODUCTS: Product[] = [
  { id: "1", name: "HyperX Cloud 2", category: "headphones", price: 14500, currency: "PKR", image: IMG.cloud2, isNew: true },
  { id: "2", name: "HyperX Cloud Stinger 2", category: "headphones", price: 12000, currency: "PKR", image: IMG.stinger2 },
  { id: "3", name: "Apple Earbuds", category: "earbuds", price: 5000, currency: "PKR", image: IMG.appleEarbuds },
  { id: "4", name: "iPhone 15 Pro Max Non-Pta 256GB", category: "phones", price: 220000, currency: "PKR", image: IMG.iphone15pm, isNew: true },
  { id: "15", name: "PlayStation 4", category: "phones", price: 120000, currency: "PKR", image: IMG.ps4 },
];

export const ALL_PRODUCTS: Product[] = [
  ...HOME_PRODUCTS,
  { id: "16", name: "iPhone 13 Pro Max Non-Pta", category: "phones", price: 140, currency: "PKR", image: IMG.iphone13pm },
  { id: "6", name: "Logitech G Pro X", category: "headphones", price: 25000, currency: "PKR", image: IMG.logiProX },
  { id: "10", name: "HyperX Earbuds 2", category: "earbuds", price: 12000, currency: "PKR", image: IMG.earbuds2 },
  { id: "11", name: "McDodo Spliter", category: "accessories", price: 6000, currency: "PKR", image: IMG.mcdodoSplitter },
  { id: "12", name: "Apple Single Pin Spliter", category: "accessories", price: 2000, currency: "PKR", image: IMG.appleSinglePinSplitter },
  { id: "13", name: "BLUK'S Powerbank", category: "accessories", price: 2500, currency: "PKR", image: IMG.bluksPowerbank },
  { id: "14", name: "Sogo Rechargable Fan", category: "accessories", price: 2000, currency: "PKR", image: IMG.sogoFan },
];
