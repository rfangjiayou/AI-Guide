import { defaultLocale } from './config';
import { en } from './dictionaries/en';
import { zh } from './dictionaries/zh';

export const dictionaries = {
  en,
  zh,
};

export type Dictionary = typeof en;

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries[defaultLocale];
}
