"use client";

import { useSearchParams } from "next/navigation";
import { ShopPage } from "../components/ShopPage";
import { Suspense } from "react";

function ShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || undefined;
  return <ShopPage category={category} />;
}

export default function ShopRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-8">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
