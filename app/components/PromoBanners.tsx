"use client";

import { IMG } from "../data/products";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function PromoBanners() {
  const router = useRouter();
  return (
    <section className="w-full bg-black pt-0 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-150">
        <button
          onClick={() => router.push("/shop?category=phones")}
          className="relative group rounded-2xl overflow-hidden block h-72 md:h-full w-full text-left cursor-pointer"
        >
          <div className="absolute inset-0">
            <Image
              src={IMG.iphone15pm}
              alt="iPhones"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-all duration-700 ease-out opacity-60 group-hover:opacity-80 group-hover:scale-105"
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

        <div className="flex flex-col md:grid md:grid-rows-2 gap-8 md:h-full">
          <button
            onClick={() => router.push("/shop?category=accessories")}
            className="relative group rounded-2xl overflow-hidden block w-full h-56 md:h-full text-left cursor-pointer"
          >
            <div className="absolute inset-0 bg-zinc-900">
              <Image
                src="/Accessories-Pic.png"
                alt="Tactical Phone Covers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out opacity-50 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10 bg-linear-to-t from-black/80 to-transparent">
              <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">
                Tactical<br />Phone Covers
              </h2>
              <span className="inline-flex bg-white text-black font-bold uppercase tracking-wider px-4 py-2 hover:bg-zinc-200 transition-colors rounded w-fit text-xs">
                Shop Accessories
              </span>
            </div>
          </button>

          <button
            onClick={() => router.push("/shop?category=earbuds")}
            className="relative group rounded-2xl overflow-hidden block w-full h-56 md:h-full text-left cursor-pointer"
          >
            <div className="absolute inset-0 bg-zinc-900">
              <Image
                src={IMG.earbuds}
                alt="Earbuds"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out opacity-50 group-hover:scale-105"
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
  );
}
