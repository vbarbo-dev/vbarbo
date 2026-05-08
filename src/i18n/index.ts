import { pt } from './pt';
import { en } from './en';

export const languages = {
  pt,
  en,
};

export type Language = keyof typeof languages;