import * as React from 'react';
import ReactDOM from 'react-dom';

import { I18nProvider } from './Common/components/I18nProvider';
import { ErrorBoundary } from './Common/components/ErrorBoundary';
import { GlobalError } from './Common/components/GlobalError';
import { StylesProvider } from './Common/components/StylesProvider';
import { AppRoutes } from './Common/routes';

ReactDOM.render(
    <I18nProvider>
        <ErrorBoundary fallbackComponent={<GlobalError />}>
            <StylesProvider>
                <AppRoutes />
            </StylesProvider>
        </ErrorBoundary>
    </I18nProvider>,
    document.getElementById('root'),
);
