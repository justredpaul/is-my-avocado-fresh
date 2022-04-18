import * as React from 'react';
import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

const AVAILABLE_LOCALES = ['en', 'ru'] as const;
const LOCALE_NAMES = {
    'en': 'English',
    'ru': 'Русский',
};
const DEFAULT_LOCALE = 'en';

export type TLocaleStore = typeof AVAILABLE_LOCALES[number];
export const localeState = atom<TLocaleStore>(DEFAULT_LOCALE);

type i18nConfig = {
    defaultLocale: string;
    availableLocales: string[];
}

class LocaleService {
    private readonly defaultLocale: string;
    private readonly availableLocales: string[];
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

    async getMessages(locale: string) {
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

const I18n = new LocaleService({ defaultLocale: DEFAULT_LOCALE, availableLocales: AVAILABLE_LOCALES });

export const I18nProvider = (props) => {
    const locale = useStore(localeState);
    const [messages, setMessages] = useState<Record<string, string>>(undefined);

    useEffect(() => {
        I18n.getMessages(locale).then(setMessages);
    }, [locale]);

    return (
        <IntlProvider
            locale={locale}
            defaultLocale={I18n.getDefaultLocale()}
            messages={messages}
        >
            {props.children}
        </IntlProvider>
    );
};

export const I18nSwitcher = () => {
    const updateLocale = _locale => localeState.set(_locale);

    return (
        <>
            {AVAILABLE_LOCALES.map(_locale => (
                <button type="button" onClick={() => updateLocale(_locale)}>
                    {LOCALE_NAMES[_locale]}
                </button>
            ))}
        </>
    )
};
