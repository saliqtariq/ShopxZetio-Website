const HELP_LINKS = ["FAQ", "Delivery Information", "Returns Policy", "Make a Return"];
const PAGE_LINKS = ["About Us", "Student Discount", "Careers"];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-black uppercase tracking-tighter italic mb-6">SHOPXZETIO</h3>
          <p className="text-zinc-400 text-sm font-medium leading-relaxed">
            Premium gaming audio, flagship devices, and elite accessories engineered for maximum performance.
          </p>
        </div>

        <FooterLinkColumn title="Help" items={HELP_LINKS} />
        <FooterLinkColumn title="Pages" items={PAGE_LINKS} />

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-100">Newsletter</h4>
          <p className="text-zinc-400 text-sm mb-4">Sign up for exclusive drops, early access, and gaming events.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 w-full focus:outline-none focus:border-white rounded-l-md"
            />
            <button className="bg-white text-black font-bold uppercase tracking-wider px-6 py-3 hover:bg-zinc-200 transition-colors rounded-r-md cursor-pointer">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-zinc-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">
          &copy; {new Date().getFullYear()} SHOPXZETIO. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <button className="text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-white cursor-pointer transition-colors">
            Terms of Use
          </button>
          <button className="text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-white cursor-pointer transition-colors">
            Privacy Notice
          </button>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-100">{title}</h4>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item}>
            <button className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
