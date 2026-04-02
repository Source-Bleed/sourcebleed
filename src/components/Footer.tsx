import Link from "next/link";

const footerLinks = [
  { label: "MANIFESTO", href: "#" },
  { label: "ENCRYPTION_STANDARDS", href: "#" },
  { label: "PGP_KEY", href: "#" },
  { label: "LEGAL_VOID", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-red-950 py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 lg:ml-64 lg:w-[calc(100%-16rem)]">
      <div className="flex flex-col gap-2 items-center md:items-start">
        <span className="text-red-800 font-black font-[family-name:var(--font-headline)] uppercase tracking-tighter text-xl">
          SOURCE BLEED PROTOCOL
        </span>
        <p className="font-[family-name:var(--font-body)] text-[10px] tracking-widest uppercase text-gray-700">
          &copy; 2024 SOURCE BLEED PROTOCOL. UNHESITATING PRECISION.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-[family-name:var(--font-body)] text-[10px] tracking-widest uppercase text-gray-700 hover:text-red-600 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6 opacity-40">
        <span className="material-symbols-outlined text-on-surface">terminal</span>
        <span className="material-symbols-outlined text-on-surface">shield</span>
        <span className="material-symbols-outlined text-on-surface">radar</span>
      </div>
    </footer>
  );
}
