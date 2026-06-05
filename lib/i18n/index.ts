import en from "./dictionaries/en.json";
import es from "./dictionaries/es.json";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// `en` and `es` share an identical shape; use en's type as the contract.
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es: es as Dictionary,
};

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
