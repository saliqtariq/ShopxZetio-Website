"use client";

import { useState } from "react";
import type { NavigateHandler, Product } from "../types";

type ProductCardProps = Product & {
  onNavigate: NavigateHandler;
};

export function ProductCard({ name, category, price, image, isNew, onNavigate }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="block cursor-pointer" onClick={() => onNavigate("shop", category)}>
      <div
        className="group flex flex-col"
        style={{ transform: hovered ? "translateY(-8px)" : "translateY(0)", transition: "transform 0.3s ease" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative aspect-4/5 bg-zinc-900 rounded-lg overflow-hidden mb-4">
          {isNew && (
            <div className="absolute top-3 left-3 z-10 bg-white text-black text-xs font-black uppercase px-2 py-1 tracking-widest">
              New
            </div>
          )}
          <div
            className="absolute inset-0 z-0 transition-colors"
            style={{ backgroundColor: hovered ? "transparent" : "rgba(0,0,0,0.1)" }}
          />
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div
            className="absolute bottom-4 left-4 right-4 z-10 transition-all duration-300"
            style={{ transform: hovered ? "translateY(0)" : "translateY(100%)", opacity: hovered ? 1 : 0 }}
          >
            <button className="w-full bg-white text-black py-3 font-bold uppercase tracking-wider text-sm hover:bg-zinc-200 transition-colors rounded shadow-lg cursor-pointer">
              Quick Add
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">{category}</span>
          <h3 className="text-zinc-100 font-bold mb-1 group-hover:text-white transition-colors">{name}</h3>
          <span className="text-zinc-300 font-medium">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
