"use client";

import { useState } from "react";
import type { Product } from "../types";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export function ProductCard({ id, name, category, price, image, isNew, currency }: Product) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isAdded) return;

    setIsAdded(true);
    addToCart({ id, name, category, price, currency, image, isNew });

    setTimeout(() => {
      setIsAdded(false);
    }, 1000); // 1-second cooldown/rate-limit window
  };

  return (
    <div className="block cursor-pointer" onClick={() => router.push(`/shop?category=${category}`)}>
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
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-700 ease-out"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div
            className="absolute bottom-4 left-4 right-4 z-10 transition-all duration-300"
            style={{ transform: hovered ? "translateY(0)" : "translateY(100%)", opacity: hovered ? 1 : 0 }}
          >
            <button
              onClick={handleQuickAdd}
              disabled={isAdded}
              className={`w-full py-3 font-bold uppercase tracking-wider text-sm transition-all rounded shadow-lg cursor-pointer ${
                isAdded
                  ? "bg-green-500 text-black border border-green-500 scale-[0.97]"
                  : "bg-white text-black hover:bg-zinc-200"
              }`}
            >
              {isAdded ? "Added ✓" : "Quick Add"}
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">{category}</span>
          <h3 className="text-zinc-100 font-bold mb-1 group-hover:text-white transition-colors">{name}</h3>
          <span className="text-zinc-300 font-medium">
            {currency ? `${currency} ${price.toLocaleString()}` : `$${price.toFixed(2)}`}
          </span>
        </div>
      </div>
    </div>
  );
}
