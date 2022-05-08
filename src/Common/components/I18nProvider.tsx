import * as React from 'react';
import { useStore } from '@nanostores/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { IntlProvider } from 'react-intl';

import { TChildrenProp } from '../types/common';
import { localeState } from '../stores/locale.store';
import { LocaleInstance } from '../services/locale.service';

type TProps = TChildrenProp;

export const I18nProvider = (props: TProps) => {
    const locale = useStore(localeState);
    const [messages, setMessages] = useState<Record<string, string>>(undefined);

    useEffect(() => {
        LocaleInstance.getMessages(locale).then(setMessages);
    }, [locale]);

    return (
        <IntlProvider
            locale={locale}
            defaultLocale={LocaleInstance.getDefaultLocale()}
            messages={messages}
        >
            {props.children}
        </IntlProvider>
    );
};
