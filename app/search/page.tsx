"use client";

import { useSearchParams } from "next/navigation";
import { ShopPage } from "../components/ShopPage";
import { Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || undefined;
  return <ShopPage searchQuery={query} />;
}

export default function SearchRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-8">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
