const VALUES = [
  { num: "01", title: "Premium Quality", desc: "Authorized retailer for Logitech, HyperX, and Apple. Authentic gear guaranteed." },
  { num: "02", title: "Next Day Delivery", desc: "Order before 8PM for guaranteed next day delivery on all in-stock gaming gear." },
  { num: "03", title: "24/7 Support", desc: "Dedicated team of gaming enthusiasts ready to help you build the perfect setup." },
];

export function BrandValues() {
  return (
    <section className="py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {VALUES.map(({ num, title, desc }) => (
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
  );
}
