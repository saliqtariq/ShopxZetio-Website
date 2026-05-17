"use client";

import { useCart } from "../context/CartContext";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function CartDrawer() {
  const {
    cart,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Prevent scroll on body when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    // Support team WhatsApp number (matches the one in Footer.tsx)
    const phoneNumber = "15551234567";

    // Format products list for WhatsApp message
    const productsText = cart
      .map(
        (item) =>
          `• *${item.quantity}x* ${item.product.name} - ${
            item.product.currency || "PKR"
          } ${(item.product.price * item.quantity).toLocaleString()}`
      )
      .join("\n");

    const totalCurrency = cart[0]?.product.currency || "PKR";
    const totalText = `${totalCurrency} ${cartTotal.toLocaleString()}`;

    // Elegant message structure
    const message = `Hello SHOPXZETIO! 👋

I would like to place an order for the following items:

${productsText}

*Total Price:* ${totalText}

Please let me know how to proceed with the payment and delivery. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect user to WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop with slide-in transition effect */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Container */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-sm h-full bg-zinc-950 border-l border-zinc-800 flex flex-col shadow-2xl z-10 animate-slide-in text-white"
        style={{
          animation: "slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-zinc-400" />
            <h2 className="text-lg font-black uppercase tracking-wider italic">
              Your Cart
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-900 transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-zinc-800">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-2">
                <ShoppingBag className="w-8 h-8 text-zinc-500" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-300">
                Cart is Empty
              </h3>
              <p className="text-zinc-500 text-sm max-w-xs">
                Add premium gaming gear and flagship devices to your cart to get started.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-3 bg-zinc-800 hover:bg-white hover:text-black text-white font-bold uppercase tracking-wider text-xs rounded transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-zinc-900/50 border border-zinc-900 hover:border-zinc-800 rounded-lg transition-colors group relative"
                >
                  {/* Product Image */}
                  <div className="relative w-20 h-20 bg-zinc-900 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">
                        {item.product.category}
                      </span>
                      <h4 className="text-sm font-bold text-white truncate pr-6 group-hover:text-zinc-200">
                        {item.product.name}
                      </h4>
                    </div>

                    {/* Price and Counter */}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-semibold text-zinc-300">
                        {item.product.currency || "PKR"}{" "}
                        {item.product.price.toLocaleString()}
                      </span>

                      {/* Quantity Selector */}
                      <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="px-2.5 py-1 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-white min-w-[24px] text-center select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-2.5 py-1 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="absolute top-3 right-3 text-zinc-500 hover:text-red-500 transition-colors cursor-pointer"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & WhatsApp Button */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-zinc-400 text-xs uppercase tracking-wider">
                <span>Items Count</span>
                <span className="font-bold text-white">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-bold uppercase tracking-wider text-zinc-300">
                  Subtotal
                </span>
                <span className="text-2xl font-black text-white italic tracking-tight">
                  {cart[0]?.product.currency || "PKR"}{" "}
                  {cartTotal.toLocaleString()}
                </span>
              </div>
              <p className="text-zinc-500 text-[10px]">
                Taxes and shipping calculated upon order confirmation in WhatsApp chat.
              </p>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-green-500 text-black py-4 font-black uppercase tracking-wider text-sm hover:bg-green-400 active:scale-[0.98] transition-all rounded-md flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-green-500/10"
            >
              <span>Buy Now via WhatsApp</span>
            </button>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
