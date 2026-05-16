"use client";

import { HOME_PRODUCTS } from "../data/products";
import type { NavigateHandler } from "../types";
import { ProductCard } from "./ProductCard";

export function NewArrivals({ onNavigate }: { onNavigate: NavigateHandler }) {
  return (
    <section className="pt-6 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">New Arrivals</h2>
        <button
          onClick={() => onNavigate("shop")}
          className="hidden md:inline-flex text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors items-center gap-2 cursor-pointer"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {HOME_PRODUCTS.map((product) => (
          <ProductCard key={product.id} {...product} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  );
}
