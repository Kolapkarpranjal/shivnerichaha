// lib/get-dictionary.ts
import "server-only";

import en from "../locales/en/common.json";
import hi from "../locales/hi/common.json";
import mr from "../locales/mr/common.json";

const dictionaries: Record<string, any> = {
  en,
  hi,
  mr,
};

export function getDictionary(locale: string) {
  return dictionaries[locale] || dictionaries.en;
}
