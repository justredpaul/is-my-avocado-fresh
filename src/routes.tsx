import * as React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { NotFoundScreen } from './screens/notFound';
import { WelcomeScreen } from './screens/welcome';
import { RegistrationScreen } from './screens/registration';
import { DashboardScreen } from './screens/dashboard';
import { SettingsScreen } from './screens/settings';
import { AccountScreen } from './screens/account';

export const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/welcome" element={<WelcomeScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/registration" element={<RegistrationScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            <Route path="/account" element={<AccountScreen />} />
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    </Router>
);
