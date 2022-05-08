import * as React from 'react';
import { FormattedMessage } from 'react-intl';

export const GlobalLoading = () => (
    <h1>
        <FormattedMessage id="globalLoading.title" defaultMessage="Loading.." />
    </h1>
);
