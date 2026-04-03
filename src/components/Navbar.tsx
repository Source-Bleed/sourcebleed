"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { pathnameWithoutLocale, withLocale } from "@/lib/i18n/paths";

const navItems: { label: string; href: string }[] = [
  { label: "INTEL", href: "/" },
  { label: "CVE_FEED", href: "/cve" },
  { label: "REAPER_LABS", href: "/blog" },
  { label: "ARCHIVE", href: "/archive" },
];

export function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const path = pathnameWithoutLocale(pathname);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface border-b-2 border-red-900/20 shadow-[0_4px_20px_rgba(255,0,0,0.05)] flex justify-between items-center px-6 h-16">
      <div className="flex items-center gap-8">
        <Link
          href={withLocale(locale, "/")}
          className="text-2xl font-black tracking-tighter text-red-600 font-[family-name:var(--font-headline)] uppercase"
        >
          SOURCE BLEED
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const localized = withLocale(locale, item.href);
            const isActive =
              item.href === "/"
                ? path === "/" || path === ""
                : path === item.href || path.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={localized}
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
        <div className="flex items-center rounded border border-outline-variant/40 overflow-hidden text-[10px] font-[family-name:var(--font-headline)] font-bold tracking-widest">
          {locales.map((l) => {
            const active = l === locale;
            return (
              <Link
                key={l}
                href={withLocale(l, path)}
                className={`px-2 py-1 uppercase transition-colors ${
                  active
                    ? "bg-red-950/50 text-red-400"
                    : "text-gray-500 hover:text-on-surface"
                }`}
                hrefLang={l}
              >
                {l}
              </Link>
            );
          })}
        </div>
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
        <button
          type="button"
          className="bg-primary-container text-white px-4 py-2 text-xs font-[family-name:var(--font-headline)] font-bold uppercase tracking-widest active:scale-95 transition-all glitch-sm hover:bg-red-600"
        >
          REPORT VULNERABILITY
        </button>
      </div>
    </nav>
  );
}
