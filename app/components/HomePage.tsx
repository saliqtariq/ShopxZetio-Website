"use client";

import type { NavigateHandler } from "../types";
import { BrandValues } from "./BrandValues";
import { HeroSection } from "./HeroSection";
import { NewArrivals } from "./NewArrivals";
import { PromoBanners } from "./PromoBanners";

export function HomePage({ onNavigate }: { onNavigate: NavigateHandler }) {
  return (
    <div className="flex flex-col w-full">
      <HeroSection onNavigate={onNavigate} />
      <NewArrivals onNavigate={onNavigate} />
      <PromoBanners onNavigate={onNavigate} />
      <BrandValues />
    </div>
  );
}
