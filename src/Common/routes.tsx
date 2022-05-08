import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { NotFoundScreen } from './screens/notFound';
import { Module } from './components/Module';

const WelcomeModule = React.lazy(() => import('../Welcome')
    .then(({ Welcome }) => ({ default: Welcome })));
const DashboardModule = React.lazy(() => import('../Dashboard')
    .then(({ Dashboard }) => ({ default: Dashboard })));

export const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/*" element={<Module><WelcomeModule redirectUrl="/dashboard" /></Module>} />
            <Route path="dashboard/*" element={<Module><DashboardModule loginUrl="/" /></Module>} />
            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    </Router>
);
