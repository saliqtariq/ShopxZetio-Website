"use client";

import { useState } from "react";
import { ALL_PRODUCTS } from "../data/products";
import type { NavigateHandler } from "../types";
import { ProductCard } from "./ProductCard";

// FILTERS removed per user request

export function ShopPage({ category, onNavigate }: { category?: string; onNavigate: NavigateHandler }) {
  const [sort, setSort] = useState("recommended");

  const filtered = category ? ALL_PRODUCTS.filter((product) => product.category === category) : ALL_PRODUCTS;
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  const pageTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : "All Products";

  return (
    <div className="w-full min-h-screen bg-black pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 border-b border-zinc-900 pb-8">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">{pageTitle}</h1>
          <p className="text-zinc-400 mt-4 text-sm font-medium max-w-xl">
            {category
              ? `Browse our premium selection of ${category} designed for maximum performance and durability.`
              : "Explore the complete Shopxzetio collection. High-performance gaming gear and flagship devices."}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-auto flex justify-end">
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="bg-zinc-900 text-white border-none text-xs font-bold uppercase tracking-widest py-2 px-4 rounded outline-none focus:ring-1 focus:ring-white cursor-pointer"
            >
              <option value="recommended">Sort By: Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {sorted.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {sorted.map((product) => (
              <ProductCard key={product.id} {...product} onNavigate={onNavigate} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold uppercase mb-4 text-zinc-300">No products found</h3>
            <p className="text-zinc-500 mb-8">We couldn&apos;t find any products in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
