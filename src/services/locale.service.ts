import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '../constants/i18n';
import { TLocale } from '../stores/locale.store';

type i18nConfig = {
    defaultLocale: TLocale;
    availableLocales: typeof AVAILABLE_LOCALES;
}

export class LocaleService {
    private readonly defaultLocale: TLocale;
    private readonly availableLocales: typeof AVAILABLE_LOCALES;
    private loadMessages(locale: string) {
        return fetch(`/locales/${locale}.json`);
    }

    constructor(config: i18nConfig) {
        this.defaultLocale = config.defaultLocale;
        this.availableLocales = config.availableLocales;
    }

    getAvailableLocales() {
        return this.availableLocales;
    }

    getDefaultLocale() {
        return this.defaultLocale;
    }

    async getMessages(locale: TLocale) {
        if (this.availableLocales.includes(locale)) {
            let messages = null;

            try {
                messages = await this.loadMessages(locale).then(response => response.json());
            } catch (error) {
                console.error(error);
            }

            return messages;
        }
    }
}

export const LocaleInstance = new LocaleService({ defaultLocale: DEFAULT_LOCALE, availableLocales: AVAILABLE_LOCALES });
