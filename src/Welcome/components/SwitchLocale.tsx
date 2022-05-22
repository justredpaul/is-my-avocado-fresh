import * as React from 'react';
import { useStore } from '@nanostores/react';

import { styled } from '../../../stitches.config';
import { localeState, TLocale } from '../../Common/stores/locale.store';
import { AVAILABLE_LOCALES, LOCALE_NAMES } from '../../Common/constants/i18n';

const Select = styled('select', {
    appearance: 'none',

    position: 'absolute',
    top: '$s4',
    right: '$s4',

    padding: '$s2 $s5',

    border: '4px solid $blue',
    borderRadius: '$r2',
    backgroundColor: 'transparent',
    color: '$white70',
    fontSize: '$fz1',
    '&:focus': {
        outline: 'none',
        borderColor: '$primary',
    }
});

export const SwitchLocale = () => {
    const locale = useStore(localeState);

    const onChange = ({ target: { value: nextLocale }}: { target: { value: TLocale }}) => localeState.set(nextLocale);

    return (
        <Select value={locale} onChange={onChange}>
            {AVAILABLE_LOCALES.map(_locale => (
                <option key={`locale_${_locale}`} value={_locale}>{LOCALE_NAMES[_locale]}</option>
            ))}
        </Select>
    );
};
