import type { Locale } from "../config";
import { en, type Dictionary } from "./en";
import { zh } from "./zh";
import { id } from "./id";
import { ms } from "./ms";
import { th } from "./th";

export type { Dictionary };
export { en };

const dictionaries: Record<Locale, Dictionary> = { en, zh, id, ms, th };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
