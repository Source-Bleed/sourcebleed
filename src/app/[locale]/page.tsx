import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { hasLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import { withLocale } from "@/lib/i18n/paths";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!hasLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam as Locale;
  const cve = withLocale(locale, "/cve");
  const blog = withLocale(locale, "/blog");

  return (
    <>
      <section className="relative h-[870px] flex items-center justify-start px-8 md:px-16 overflow-hidden border-b border-red-900/20 bg-surface">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

        <div className="relative z-20 max-w-4xl">
          <div className="mb-4 flex items-center space-x-4">
            <span className="h-[1px] w-12 bg-primary" />
            <span className="text-primary font-[family-name:var(--font-headline)] text-xs tracking-[0.3em] uppercase">
              Security Research Collective
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-[family-name:var(--font-headline)] tracking-tighter leading-none mb-6">
            SOURCE <span className="text-primary-container">BLEED</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-red-600/30 pl-6">
            We find critical vulnerabilities in open-source software and
            responsibly disclose them. Lethal precision for the security of the
            ecosystem we all depend on.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={cve}
              className="bg-primary-container text-white px-8 py-4 font-[family-name:var(--font-headline)] font-black tracking-widest text-sm hover:translate-x-1 transition-transform inline-block"
            >
              EXPLORE CVE DATABASE
            </Link>
            <Link
              href={blog}
              className="border border-outline-variant text-on-surface px-8 py-4 font-[family-name:var(--font-headline)] font-bold tracking-widest text-sm hover:bg-surface-container-high transition-colors inline-block"
            >
              VIEW_RESEARCH
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16 bg-surface-container-lowest">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl font-black tracking-tighter uppercase mb-2">
              LATEST_FINDINGS
            </h2>
            <p className="text-gray-500 font-[family-name:var(--font-headline)] text-xs tracking-widest">
              LIVE FEED / RECENT DISCLOSURES
            </p>
          </div>
          <Link
            href={cve}
            className="text-primary text-xs font-[family-name:var(--font-headline)] font-bold tracking-[0.2em] border-b border-primary/40 pb-1 cursor-pointer hover:text-white transition-colors"
          >
            VIEW_ALL_CVEs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 md:row-span-2 group relative border border-outline-variant/20 bg-surface p-8 transition-all hover:border-primary/40 overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-error-container text-on-error-container px-3 py-1 text-[10px] font-[family-name:var(--font-headline)] font-bold tracking-widest">
                CRITICAL
              </span>
            </div>
            <div className="mb-12">
              <span className="text-primary font-[family-name:var(--font-headline)] text-xs tracking-widest">
                CVE-2024-XXXX
              </span>
              <h3 className="text-3xl font-[family-name:var(--font-headline)] font-black mt-2 leading-tight">
                OPEN-SOURCE RCE IN WIDELY-USED LIBRARY
              </h3>
            </div>
            <p className="text-on-surface-variant mb-12 max-w-md">
              Remote code execution vulnerability discovered in a popular
              open-source package. Responsible disclosure completed. Patch
              available.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-[family-name:var(--font-headline)]">
                  AUTHORS
                </span>
                <span className="text-xs font-bold font-[family-name:var(--font-headline)]">
                  SOURCE_BLEED_TEAM
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-[family-name:var(--font-headline)]">
                  STATUS
                </span>
                <span className="text-xs font-bold font-[family-name:var(--font-headline)] text-green-500">
                  DISCLOSED
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mb-16 rounded-full group-hover:scale-150 transition-transform duration-700" />
          </div>

          <div className="border border-outline-variant/20 bg-surface-container-low p-6 red-glow-card transition-all group">
            <div className="flex justify-between mb-8">
              <span className="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform">
                biotech
              </span>
              <span className="text-gray-600 font-[family-name:var(--font-headline)] text-[10px]">
                03.2025
              </span>
            </div>
            <h4 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-4">
              DEPENDENCY_CHAIN_AUDIT
            </h4>
            <p className="text-sm text-gray-500 line-clamp-2">
              Automated supply chain analysis tool for detecting transitive
              dependency vulnerabilities.
            </p>
          </div>

          <div className="border border-outline-variant/20 bg-surface-container-low p-6 red-glow-card transition-all group">
            <div className="flex justify-between mb-8">
              <span className="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform">
                cell_tower
              </span>
              <span className="text-gray-600 font-[family-name:var(--font-headline)] text-[10px]">
                02.2025
              </span>
            </div>
            <h4 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-4">
              PROTOCOL_FUZZER_V2
            </h4>
            <p className="text-sm text-gray-500 line-clamp-2">
              Next-generation protocol fuzzing framework targeting network stack
              implementations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-square bg-surface-container-highest border border-outline-variant/30 p-2 overflow-hidden flex items-center justify-center">
            <div className="w-full h-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-red-900/30 text-[120px]">
                shield
              </span>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-primary/20 bg-background/80 backdrop-blur-md p-6 hidden md:block">
            <span className="text-primary font-[family-name:var(--font-headline)] font-black text-4xl">
              0.0
            </span>
            <p className="text-[10px] text-gray-500 font-[family-name:var(--font-headline)] leading-tight mt-2">
              DOWNTIME RECORDED SINCE DEPLOYMENT
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="mb-8">
            <span className="text-primary font-[family-name:var(--font-headline)] text-xs tracking-widest uppercase">
              The Protocol
            </span>
            <h2 className="text-5xl font-[family-name:var(--font-headline)] font-black tracking-tighter uppercase mt-4 leading-tight">
              OUR MISSION: <br /> UNHESITATING PRECISION
            </h2>
          </div>
          <div className="space-y-6 text-on-surface-variant max-w-xl">
            <p>
              Source Bleed was founded on the principle that open-source
              security is a shared responsibility. We systematically audit
              critical projects to find vulnerabilities before malicious actors
              do.
            </p>
            <p>
              We operate through responsible disclosure. Every vulnerability we
              find is reported to maintainers first, and publicly disclosed only
              after patches are available. Our CVEs protect millions of users
              worldwide.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-red-900/10 pt-12">
            <div>
              <span className="block text-2xl font-[family-name:var(--font-headline)] font-bold text-primary">
                150+
              </span>
              <span className="text-[10px] text-gray-500 font-[family-name:var(--font-headline)] uppercase tracking-widest">
                CRITICAL CVEs FILED
              </span>
            </div>
            <div>
              <span className="block text-2xl font-[family-name:var(--font-headline)] font-bold text-primary">
                48h
              </span>
              <span className="text-[10px] text-gray-500 font-[family-name:var(--font-headline)] uppercase tracking-widest">
                AVG DISCLOSURE TIME
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16 bg-surface-container-low border-y border-red-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-headline)] text-5xl font-black tracking-tighter uppercase mb-8">
            JOIN THE RESEARCH
          </h2>
          <p className="text-on-surface-variant text-lg mb-12">
            Think you have what it takes to find the needle in the codebase? We
            are always looking for elite researchers with expertise in reverse
            engineering, code auditing, and vulnerability research.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="w-full md:w-96">
              <input
                type="email"
                placeholder="ENCRYPTED_EMAIL_ADDRESS"
                className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant px-4 py-4 focus:ring-0 focus:border-primary transition-all font-[family-name:var(--font-headline)] text-sm tracking-widest placeholder:text-gray-700"
              />
            </div>
            <button
              type="button"
              className="w-full md:w-auto bg-primary text-on-primary px-12 py-4 font-[family-name:var(--font-headline)] font-black tracking-widest text-sm hover:bg-white transition-colors"
            >
              SUBMIT_APPLICATION
            </button>
          </div>
          <p className="mt-8 text-[10px] font-[family-name:var(--font-headline)] text-gray-600 tracking-[0.2em]">
            ALL SUBMISSIONS ARE REVIEWED BY THE CORE TEAM.
          </p>
        </div>
      </section>
    </>
  );
}
