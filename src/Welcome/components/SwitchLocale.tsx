import * as React from 'react';
import { useStore } from '@nanostores/react';

import { styled } from '../../../stitches.config';
import { localeState } from '../../Common/stores/locale.store';
import { AVAILABLE_LOCALES, LOCALE_NAMES } from '../../Common/constants/i18n';

const Select = styled('select', {
    border: '2px solid blue',
});

export const SwitchLocale = () => {
    const locale = useStore(localeState);

    const onChange = ({ target: { value: nextLocale }}) => localeState.set(nextLocale);

    return (
        <Select value={locale} onChange={onChange}>
            {AVAILABLE_LOCALES.map(_locale => (
                <option value={_locale}>{LOCALE_NAMES[_locale]}</option>
            ))}
        </Select>
    );
};
