"use client";

import { useState } from "react";
import { Search, ShoppingBag, Menu, User, X } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────
// Replace these placeholder URLs with your actual imported images.
// In a real Next.js project you'd do: import img1 from "@/imports/image.png"; etc.

const IMG = {
  hero: "https://images.unsplash.com/photo-1593640408182-31c228c29c72?w=1600&q=80",        // image.png
  headphone1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",  // image-1.png
  headphone2: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",  // image-2.png
  earbuds: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80",     // image-3.png
  iphone1: "https://images.unsplash.com/photo-1695048133142-1a20484429be?w=800&q=80",    // image-4.png
  iphone2: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&q=80",    // image-5.png
};

const HOME_PRODUCTS: Product[] = [
  { id: "1", name: "Logitech G Pro X 2 Lightspeed", category: "headphones", price: 249.99, image: IMG.headphone1, isNew: true },
  { id: "2", name: "HyperX Cloud III Wireless",     category: "headphones", price: 169.99, image: IMG.headphone2 },
  { id: "3", name: "HyperX Cirro Buds Pro",         category: "earbuds",    price: 99.99,  image: IMG.earbuds },
  { id: "4", name: "iPhone 15 Pro Max – Titanium",  category: "phones",     price: 1199.00, image: IMG.iphone1, isNew: true },
];

const ALL_PRODUCTS: Product[] = [
  ...HOME_PRODUCTS,
  { id: "5", name: "iPhone 14 Pro Max – Deep Purple",            category: "phones",      price: 999.00,  image: IMG.iphone2 },
  { id: "6", name: "Logitech G733 Lightspeed",                   category: "headphones",  price: 149.99,  image: IMG.headphone1 },
  { id: "7", name: "HyperX Cloud Earbuds II",                    category: "earbuds",     price: 39.99,   image: IMG.earbuds },
  { id: "8", name: "Tactical Armor Case – iPhone 15 Pro Max",    category: "accessories", price: 45.00,   image: IMG.iphone2, isNew: true },
  { id: "9", name: "Clear MagSafe Case – iPhone 14 Pro Max",     category: "accessories", price: 35.00,   image: IMG.iphone1 },
];

// ─── ProductCard ──────────────────────────────────────────────────────────────

function ProductCard({ name, category, price, image, isNew, onNavigate }: Product & { onNavigate: (page: string, cat?: string) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="block cursor-pointer"
      onClick={() => onNavigate("shop", category)}
    >
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
          {/* Quick Add */}
          <div
            className="absolute bottom-4 left-4 right-4 z-10 transition-all duration-300"
            style={{ transform: hovered ? "translateY(0)" : "translateY(100%)", opacity: hovered ? 1 : 0 }}
          >
            <button className="w-full bg-white text-black py-3 font-bold uppercase tracking-wider text-sm hover:bg-zinc-200 transition-colors rounded shadow-lg">
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

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ onNavigate }: { onNavigate: (page: string, cat?: string) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="flex items-center justify-between h-16 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button className="text-zinc-100 p-2 -ml-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="shrink-0 flex items-center"
        >
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
            SHOPXZETIO
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Headphones", cat: "headphones" },
            { label: "Earbuds",    cat: "earbuds" },
            { label: "iPhones",    cat: "phones" },
            { label: "Covers",     cat: "accessories" },
          ].map(({ label, cat }) => (
            <button
              key={cat}
              onClick={() => onNavigate("shop", cat)}
              className="text-sm font-bold text-zinc-300 hover:text-white uppercase tracking-wider transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-zinc-300 hover:text-white hidden md:block transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-zinc-300 hover:text-white hidden md:block transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="text-zinc-300 hover:text-white relative transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Headphones", cat: "headphones" },
            { label: "Earbuds",    cat: "earbuds" },
            { label: "iPhones",    cat: "phones" },
            { label: "Covers",     cat: "accessories" },
          ].map(({ label, cat }) => (
            <button
              key={cat}
              onClick={() => { onNavigate("shop", cat); setMobileOpen(false); }}
              className="text-sm font-bold text-zinc-300 hover:text-white uppercase tracking-wider text-left transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-black uppercase tracking-tighter italic mb-6">SHOPXZETIO</h3>
          <p className="text-zinc-400 text-sm font-medium leading-relaxed">
            Premium gaming audio, flagship devices, and elite accessories engineered for maximum performance.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-100">Help</h4>
          <ul className="space-y-4">
            {["FAQ", "Delivery Information", "Returns Policy", "Make a Return"].map((item) => (
              <li key={item}>
                <button className="text-sm text-zinc-400 hover:text-white transition-colors">{item}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-100">Pages</h4>
          <ul className="space-y-4">
            {["About Us", "Student Discount", "Careers"].map((item) => (
              <li key={item}>
                <button className="text-sm text-zinc-400 hover:text-white transition-colors">{item}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-100">Newsletter</h4>
          <p className="text-zinc-400 text-sm mb-4">Sign up for exclusive drops, early access, and gaming events.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 w-full focus:outline-none focus:border-white rounded-l-md"
            />
            <button className="bg-white text-black font-bold uppercase tracking-wider px-6 py-3 hover:bg-zinc-200 transition-colors rounded-r-md">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-zinc-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">
          &copy; {new Date().getFullYear()} SHOPXZETIO. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <button className="text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Terms of Use</button>
          <button className="text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Privacy Notice</button>
        </div>
      </div>
    </footer>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({ onNavigate }: { onNavigate: (page: string, cat?: string) => void }) {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative h-[85vh] w-full bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Hero Background" className="w-full h-full object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-end pb-24 md:pb-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.85] mb-6">
              Dominate <br /> The Game.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-medium mb-8 max-w-md">
              Level up your setup with professional-grade audio and elite devices. Built for those who refuse to lose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate("shop")}
                className="bg-white text-black text-center font-bold uppercase tracking-wider px-8 py-4 hover:bg-zinc-200 transition-colors rounded shadow-lg"
              >
                Shop All
              </button>
              <button
                onClick={() => onNavigate("shop", "headphones")}
                className="bg-zinc-800/80 backdrop-blur text-white text-center font-bold uppercase tracking-wider px-8 py-4 hover:bg-zinc-700 transition-colors rounded border border-zinc-700"
              >
                Pro Audio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">New Arrivals</h2>
          <button
            onClick={() => onNavigate("shop")}
            className="hidden md:inline-flex text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors items-center gap-2"
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

      {/* Mid Banner Split */}
      <section className="w-full bg-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-150">
          {/* Box 1 – iPhones */}
          <button
            onClick={() => onNavigate("shop", "phones")}
            className="relative group rounded-2xl overflow-hidden block h-72 md:h-full w-full text-left"
          >
            <div className="absolute inset-0">
              <img
                src={IMG.iphone2}
                alt="iPhones"
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out opacity-60 group-hover:opacity-80 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
            </div>
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-10">
              <span className="text-white text-sm font-bold uppercase tracking-widest mb-2">Flagship Power</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
                iPhone 14 &amp; 15 <br /> Pro Max
              </h2>
              <span className="inline-flex bg-white text-black font-bold uppercase tracking-wider px-6 py-3 hover:bg-zinc-200 transition-colors rounded w-fit text-sm">
                Shop Devices
              </span>
            </div>
          </button>

          {/* Box 2 – Two stacked */}
          <div className="grid grid-rows-2 gap-8 h-72 md:h-full">
            <button
              onClick={() => onNavigate("shop", "accessories")}
              className="relative group rounded-2xl overflow-hidden block w-full text-left"
            >
              <div className="absolute inset-0 bg-zinc-900">
                <div className="absolute inset-0 bg-zinc-800 group-hover:bg-zinc-700 transition-colors flex items-center justify-center p-8">
                  <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter text-center">
                    Tactical<br />Phone Covers
                  </h2>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 z-10">
                <span className="inline-flex bg-black/50 backdrop-blur text-white font-bold uppercase tracking-wider px-4 py-2 border border-zinc-700 rounded text-xs hover:bg-black transition-colors">
                  Shop Accessories
                </span>
              </div>
            </button>

            <button
              onClick={() => onNavigate("shop", "earbuds")}
              className="relative group rounded-2xl overflow-hidden block w-full text-left"
            >
              <div className="absolute inset-0 bg-zinc-900">
                <img
                  src={IMG.earbuds}
                  alt="Earbuds"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out opacity-50 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10 bg-linear-to-t from-black/80 to-transparent">
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">
                  HyperX<br />Earbuds
                </h2>
                <span className="inline-flex bg-white text-black font-bold uppercase tracking-wider px-4 py-2 hover:bg-zinc-200 transition-colors rounded w-fit text-xs">
                  Shop Now
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { num: "01", title: "Premium Quality",    desc: "Authorized retailer for Logitech, HyperX, and Apple. Authentic gear guaranteed." },
              { num: "02", title: "Next Day Delivery",  desc: "Order before 8PM for guaranteed next day delivery on all in-stock gaming gear." },
              { num: "03", title: "24/7 Support",       desc: "Dedicated team of gaming enthusiasts ready to help you build the perfect setup." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-6 text-white font-black italic text-xl">
                  {num}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-3">{title}</h3>
                <p className="text-zinc-400 leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Shop Page ────────────────────────────────────────────────────────────────

function ShopPage({ category, onNavigate }: { category?: string; onNavigate: (page: string, cat?: string) => void }) {
  const [sort, setSort] = useState("recommended");

  const filtered = category
    ? ALL_PRODUCTS.filter((p) => p.category === category)
    : ALL_PRODUCTS;

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  const pageTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "All Products";

  return (
    <div className="w-full min-h-screen bg-black pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 border-b border-zinc-900 pb-8">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            {pageTitle}
          </h1>
          <p className="text-zinc-400 mt-4 text-sm font-medium max-w-xl">
            {category
              ? `Browse our premium selection of ${category} designed for maximum performance and durability.`
              : "Explore the complete Shopxzetio collection. High-performance gaming gear and flagship devices."}
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {["All Filters", "Price", "Brand", "Color"].map((f, i) => (
              <span
                key={f}
                className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded whitespace-nowrap cursor-pointer transition-colors ${
                  i === 0
                    ? "bg-white text-black"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                }`}
              >
                {f}
              </span>
            ))}
          </div>

          <div className="w-full md:w-auto flex justify-end">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
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
            <p className="text-zinc-500 mb-8">We couldn't find any products in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Root Page (page.tsx) ─────────────────────────────────────────────────────

export default function Page() {
  // Simple client-side routing state (replaces react-router)
  const [currentPage, setCurrentPage] = useState<"home" | "shop">("home");
  const [currentCategory, setCurrentCategory] = useState<string | undefined>();

  function navigate(page: string, cat?: string) {
    setCurrentPage(page as "home" | "shop");
    setCurrentCategory(cat);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar onNavigate={navigate} />

      <main className="flex-1">
        {currentPage === "home" ? (
          <HomePage onNavigate={navigate} />
        ) : (
          <ShopPage category={currentCategory} onNavigate={navigate} />
        )}
      </main>

      <Footer />
    </div>
  );
}
