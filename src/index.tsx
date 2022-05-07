import * as React from 'react';
import ReactDOM from 'react-dom';

import { I18nProvider } from './components/I18nProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import { GlobalError } from './screens/globalError';
import { StylesProvider } from './components/StylesProvider';
import { AppRoutes } from './routes';

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
