"use client";

import { useParams, useRouter } from "next/navigation";
import { ALL_PRODUCTS } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { ProductCard } from "../../components/ProductCard";
import { ArrowLeft, ShoppingBag, Truck, CheckCircle2, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = useParams();
  const { addToCart, cart, updateQuantity } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Find product by dynamic ID
  const product = ALL_PRODUCTS.find((p) => p.id === id);

  // Scroll to top when product ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setQuantity(1);
    setIsAdded(false);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-black uppercase mb-4 tracking-wider text-zinc-300">Product Not Found</h2>
        <p className="text-zinc-500 mb-8 max-w-sm text-center">
          The product you are looking for might have been removed or is temporarily unavailable.
        </p>
        <button
          onClick={() => router.push("/shop")}
          className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors rounded"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = ALL_PRODUCTS
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If not enough in same category, fill with others
  if (relatedProducts.length < 4) {
    const additional = ALL_PRODUCTS
      .filter((p) => p.id !== product.id && !relatedProducts.some((rp) => rp.id === p.id))
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...additional);
  }

  const handleAddToCart = () => {
    if (isAdded) return;
    setIsAdded(true);
    
    // Add product to cart with selected quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setTimeout(() => {
      setIsAdded(false);
    }, 1000); // 1-second visual cooldown
  };

  return (
    <div className="min-h-screen bg-black text-white pt-6 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Back navigation button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors mb-10 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Shop
        </button>

        {/* Product Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Product Image */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-4/5 bg-zinc-900/50 border border-zinc-900 rounded-xl overflow-hidden shadow-2xl group">
              {product.isNew && (
                <div className="absolute top-4 left-4 z-10 bg-white text-black text-xs font-black uppercase px-3 py-1.5 tracking-widest rounded-sm">
                  New Arrival
                </div>
              )}
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>

          {/* Right Column: Product Detail Pane */}
          <div className="lg:col-span-5 space-y-8">
            {/* Title & Category Header */}
            <div>
              <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mt-2 leading-none">
                {product.name}
              </h1>
              
              {/* Dynamic Price Display */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-black text-white tracking-tight italic">
                  {product.currency || "PKR"} {product.price.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wide">
                  Tax Included
                </span>
              </div>
            </div>

            {/* Product Description */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">
                Description
              </h3>
              <p className="text-zinc-300 text-sm font-medium leading-relaxed">
                {product.description ||
                  `Experience unmatched fidelity with the elite ${product.name}. Engineered for professional standards, designed for sleek setups, and optimized for high-performance durability.`}
              </p>
            </div>

            {/* Specifications List */}
            {product.specs && product.specs.length > 0 && (
              <div className="space-y-4 border-t border-zinc-900 pt-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">
                  Specifications
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Delivery Info Card */}
            <div className="border-t border-zinc-900 pt-6">
              <div className="flex gap-4 p-4 bg-zinc-900/30 border border-zinc-900 rounded-xl items-start">
                <Truck className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    TCS Delivery
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    {product.deliveryTime || "Fast Delivery: 2-3 Working Days (Free Shipping)"}
                  </p>
                </div>
              </div>
            </div>

            {/* Cart Operations: Quantity Selector & Add Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 border-t border-zinc-900 pt-8">
              {/* Stepper */}
              <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-md p-1 h-14 w-full sm:w-36">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-black text-white select-none w-10 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Action Button */}
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full sm:flex-1 h-14 flex-shrink-0 font-black uppercase tracking-wider text-sm transition-all rounded-md flex items-center justify-center gap-2.5 cursor-pointer shadow-lg ${
                  isAdded
                    ? "bg-green-500 text-black border border-green-500 scale-[0.98]"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isAdded ? "Added to Cart ✓" : "Add to Cart"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Related Products Grid */}
        <div className="mt-24 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-10 text-white">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
