import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { I18nSwitcher } from './I18n';

export const Routes = () => (
    <>
        <I18nSwitcher />
        <h1>
            <FormattedMessage defaultMessage="Is My Avocado Fresh?" />
        </h1>
        <p>
            <FormattedMessage defaultMessage="Not sure yet" />
        </p>
    </>
);
