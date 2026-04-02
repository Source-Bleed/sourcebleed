"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "INTEL", href: "/" },
  { label: "CVE_FEED", href: "/cve" },
  { label: "REAPER_LABS", href: "/blog" },
  { label: "ARCHIVE", href: "/archive" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface border-b-2 border-red-900/20 shadow-[0_4px_20px_rgba(255,0,0,0.05)] flex justify-between items-center px-6 h-16">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-red-600 font-[family-name:var(--font-headline)] uppercase"
        >
          SOURCE BLEED
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-[family-name:var(--font-headline)] tracking-tighter uppercase text-sm transition-colors ${
                  isActive
                    ? "text-red-500 border-b-2 border-red-600 pb-1"
                    : "text-gray-500 hover:text-red-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            search
          </span>
          <input
            type="text"
            placeholder="QUERY_DATABASE..."
            className="bg-surface-container-low border-b-2 border-outline-variant text-xs font-[family-name:var(--font-label)] uppercase py-2 pl-10 pr-4 focus:outline-none focus:border-primary transition-all w-64 focus:ring-0"
          />
        </div>
        <button className="bg-primary-container text-white px-4 py-2 text-xs font-[family-name:var(--font-headline)] font-bold uppercase tracking-widest active:scale-95 transition-all glitch-sm hover:bg-red-600">
          REPORT VULNERABILITY
        </button>
      </div>
    </nav>
  );
}
