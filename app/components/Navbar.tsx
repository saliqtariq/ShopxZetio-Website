"use client";

import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState, KeyboardEvent, useEffect, useRef } from "react";
import { NAV_ITEMS } from "../data/navigation";
import { ALL_PRODUCTS } from "../data/products";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { cartCount, setIsOpen } = useCart();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileOpen(false); // Close mobile menu if open
      setShowSuggestions(false);
    }
  };

  const suggestions = searchQuery.trim() === "" ? [] : Array.from(new Set(
    ALL_PRODUCTS
      .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(p => p.name)
  )).slice(0, 5);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="flex items-center justify-between h-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center md:hidden">
          <button className="text-zinc-100 p-2 -ml-2 cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <Link href="/" className="shrink-0 flex items-center cursor-pointer">
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">SHOPXZETIO</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ label, cat }) => (
            <button
              key={cat}
              onClick={() => router.push(cat ? `/shop?category=${cat}` : `/shop`)}
              className="text-sm font-bold text-zinc-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div ref={searchRef} className="hidden md:block relative">
            <div className="flex items-center bg-white/10 text-white rounded-full px-2 py-1 w-42 lg:w-52 gap-2 border border-white/20 backdrop-blur-sm">
              <Search className="w-4 h-4 text-white cursor-pointer" onClick={() => { if(searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`); setShowSuggestions(false); } }} />
              <input
                aria-label="Search"
                type="search"
                placeholder="What are you looking for tod..."
                className="bg-transparent outline-none text-xs w-full placeholder-zinc-400 text-white"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onKeyDown={handleSearch}
              />
            </div>
            
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl overflow-hidden z-50">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setShowSuggestions(false);
                      router.push(`/search?q=${encodeURIComponent(suggestion)}`);
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="text-zinc-300 hover:text-white relative transition-colors cursor-pointer"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map(({ label, cat }) => (
            <button
              key={cat}
              onClick={() => {
                router.push(cat ? `/shop?category=${cat}` : `/shop`);
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
