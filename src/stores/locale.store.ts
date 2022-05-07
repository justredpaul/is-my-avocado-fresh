import { atom } from 'nanostores';
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '../constants/i18n';

export type TLocale = typeof AVAILABLE_LOCALES[number];
export const localeState = atom<TLocale>(DEFAULT_LOCALE);
