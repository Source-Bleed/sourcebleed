import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import {
  defaultLocale,
  locales,
  type Locale,
} from "@/lib/i18n/config";

const supported = [...locales];

/** Resolves preferred locale from Accept-Language and supported list */
export function getRequestLocale(request: Request): Locale {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });
  const languages = new Negotiator({ headers }).languages();
  try {
    return matchLocale(languages, supported, defaultLocale) as Locale;
  } catch {
    return defaultLocale;
  }
}
