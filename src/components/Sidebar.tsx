"use client";

import { usePathname } from "next/navigation";

const sidebarItems = [
  { icon: "terminal", label: "TERMINAL" },
  { icon: "public", label: "THREAT_MAP" },
  { icon: "biotech", label: "PAYLOADS" },
  { icon: "skull", label: "ZERO_DAYS" },
  { icon: "settings", label: "SETTINGS" },
];

export function Sidebar() {
  const pathname = usePathname();

  const activeIndex =
    pathname === "/blog" ? 2 : pathname === "/cve" ? 0 : -1;

  return (
    <aside className="hidden lg:flex fixed left-0 top-16 h-[calc(100vh-64px)] w-64 flex-col bg-surface border-r border-red-900/30 z-40">
      <div className="p-6 border-b border-red-900/10 bg-surface-container-low">
        <div className="text-red-600 font-bold font-[family-name:var(--font-headline)] text-xs tracking-widest uppercase">
          OPERATOR_01
        </div>
        <div className="text-gray-500 font-[family-name:var(--font-headline)] text-[10px] tracking-widest uppercase">
          CLEARANCE: OMEGA
        </div>
      </div>
      <div className="flex-1 py-4 overflow-y-auto">
        <div className="space-y-1">
          {sidebarItems.map((item, i) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-6 py-3 font-[family-name:var(--font-label)] text-xs tracking-widest uppercase transition-all duration-100 ${
                i === activeIndex
                  ? "bg-red-950/40 text-red-500 border-l-4 border-red-600"
                  : "text-gray-600 hover:bg-surface-container-low hover:text-red-400"
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="p-6">
        <button className="w-full py-3 border border-red-900/50 text-red-500 font-[family-name:var(--font-label)] text-[10px] tracking-widest uppercase hover:bg-red-900/30 transition-all bg-red-950/20">
          ENCRYPT_SESSION
        </button>
      </div>
    </aside>
  );
}
