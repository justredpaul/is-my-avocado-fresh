import * as React from 'react';
import { FormattedMessage } from 'react-intl';

export const GlobalError = () => (
    <h1>
        <FormattedMessage id="globalError.title" defaultMessage="Something went wrong!" />
    </h1>
);
