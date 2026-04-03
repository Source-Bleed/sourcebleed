import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EsimBleedArticleEn } from "@/components/blog/esim-bleed/EsimBleedArticleEn";
import { EsimBleedArticleKo } from "@/components/blog/esim-bleed/EsimBleedArticleKo";
import { hasLocale, type Locale } from "@/lib/i18n/config";

const metadataByLocale: Record<Locale, Metadata> = {
  en: {
    title:
      "eSIM_BLEED: 93 VULNS IN THE OPEN-SOURCE eSIM STACK | SOURCE BLEED",
    description:
      "We audited lpac and OpenEUICC — the most widely used open-source eSIM tools — and found 93 vulnerabilities, including a CVSS 9.8 remote kill chain that exposes subscriber credentials.",
  },
  ko: {
    title:
      "eSIM_BLEED: 오픈소스 eSIM 스택에서 발견된 93개 취약점 | SOURCE BLEED",
    description:
      "lpac과 OpenEUICC — 가장 널리 사용되는 오픈소스 eSIM 도구를 감사한 결과, CVSS 9.8 원격 킬 체인을 포함한 93개의 취약점을 발견했습니다. 가입자 인증 정보가 노출됩니다.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!hasLocale(localeParam)) {
    return {};
  }
  return metadataByLocale[localeParam as Locale];
}

export default async function EsimBleedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!hasLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam as Locale;
  if (locale === "ko") {
    return <EsimBleedArticleKo />;
  }
  return <EsimBleedArticleEn />;
}
