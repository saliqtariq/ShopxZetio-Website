"use client";

import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "../data/navigation";
import type { NavigateHandler } from "../types";

export function Navbar({ onNavigate }: { onNavigate: NavigateHandler }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="flex items-center justify-between h-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center md:hidden">
          <button className="text-zinc-100 p-2 -ml-2 cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <button onClick={() => onNavigate("home")} className="shrink-0 flex items-center cursor-pointer">
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">SHOPXZETIO</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ label, cat }) => (
            <button
              key={cat}
              onClick={() => onNavigate("shop", cat)}
              className="text-sm font-bold text-zinc-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-zinc-300 hover:text-white hidden md:block transition-colors cursor-pointer">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-zinc-300 hover:text-white hidden md:block transition-colors cursor-pointer">
            <User className="w-5 h-5" />
          </button>
          <button className="text-zinc-300 hover:text-white relative transition-colors cursor-pointer">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map(({ label, cat }) => (
            <button
              key={cat}
              onClick={() => {
                onNavigate("shop", cat);
                setMobileOpen(false);
              }}
              className="text-sm font-bold text-zinc-300 hover:text-white uppercase tracking-wider text-left transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
