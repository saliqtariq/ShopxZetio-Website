"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative w-full bg-zinc-900 overflow-hidden min-h-[55vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/shopxzetio.jpg"
          alt="ShopxZetio"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14">
        <div className="w-full max-w-4xl text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase italic leading-none mb-6">
            <span className="block">Dominate</span>
            <span className="block">The Game.</span>
          </h1>
          <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-10 max-w-2xl">
            Level up your setup with professional-grade audio and elite devices. Built for those who refuse to lose.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={() => router.push("/shop")}
              className="bg-white text-black text-center font-bold uppercase px-8 py-4 hover:bg-zinc-200 transition-colors rounded shadow-lg min-w-48 cursor-pointer"
            >
              Shop All
            </button>
            <button
              onClick={() => router.push("/shop?category=headphones")}
              className="bg-zinc-800/80 backdrop-blur text-white text-center font-bold uppercase px-8 py-4 hover:bg-zinc-700 transition-colors rounded border border-zinc-700 min-w-48 cursor-pointer"
            >
              Pro Audio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
