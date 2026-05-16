"use client";

import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ShopPage } from "./components/ShopPage";

export default function Page() {
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
