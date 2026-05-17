"use client";

import { BrandValues } from "./BrandValues";
import { HeroSection } from "./HeroSection";
import { NewArrivals } from "./NewArrivals";
import { PromoBanners } from "./PromoBanners";

export function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <NewArrivals />
      <PromoBanners />
      <BrandValues />
    </div>
  );
}
