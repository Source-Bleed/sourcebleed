import "server-only";

import type { Locale } from "@/lib/i18n/config";
import blogEn from "./messages/en/blog.json";

export type BlogDictionary = typeof blogEn;

export async function getBlogDictionary(locale: Locale): Promise<BlogDictionary> {
  if (locale === "en") {
    return blogEn;
  }
  const mod = await import("./messages/ko/blog.json");
  return mod.default as BlogDictionary;
}
