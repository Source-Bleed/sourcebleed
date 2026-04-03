import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import {
  hasLocale,
  locales,
  type Locale,
} from "@/lib/i18n/config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "SOURCE BLEED | Security Research Collective",
  description:
    "Specialized intelligence in open-source vulnerability research. We identify the critical CVEs that others ignore.",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  if (!hasLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam as Locale;
  const htmlLang = locale === "ko" ? "ko" : "en";

  return (
    <html lang={htmlLang} className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {locale === "ko" ? (
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        ) : null}
      </head>
      <body
        className={
          locale === "ko"
            ? "overflow-x-hidden"
            : `font-[family-name:var(--font-body)] overflow-x-hidden`
        }
        style={
          locale === "ko"
            ? { fontFamily: "'Noto Sans KR', sans-serif" }
            : undefined
        }
      >
        <Navbar locale={locale} />
        <Sidebar />
        <main className="lg:ml-64 mt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
