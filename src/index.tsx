import * as React from 'react';
import ReactDOM from 'react-dom';

import { Routes } from'./routes';
import { I18nProvider } from './I18n';

ReactDOM.render(
    <I18nProvider>
        <Routes />
    </I18nProvider>,
    document.getElementById('root'),
);
