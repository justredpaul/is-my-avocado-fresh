import * as React from 'react';
import ReactDOM from 'react-dom';

import { AppRoutes } from './routes';
import { I18nProvider } from './I18n';
import { ErrorBoundary } from './components/ErrorBoundary';
import { GlobalError } from './screens/globalError';
import { StylesProvider } from './components/StylesProvider';

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
