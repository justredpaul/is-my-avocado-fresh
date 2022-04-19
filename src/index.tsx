import * as React from 'react';
import ReactDOM from 'react-dom';

import { AppRoutes } from'./routes';
import { I18nProvider } from './I18n';

ReactDOM.render(
    <I18nProvider>
        <AppRoutes />
    </I18nProvider>,
    document.getElementById('root'),
);
