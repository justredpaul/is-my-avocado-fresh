import * as React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { NotFoundScreen } from './screens/notFound';
import { WelcomeScreen } from './screens/welcome';
import { RegistrationScreen } from './screens/registration';
import { DashboardIndex, DashboardScreen } from './screens/dashboard';
import { SettingsScreen } from './screens/settings';
import { AccountScreen } from './screens/account';
import { SearchScreen } from './screens/dashboard/screens/search';
import { NotificationsScreen } from './screens/dashboard/screens/notifications';
import { GroceryScreen } from './screens/dashboard/screens/grocery';
import { StocktakingScreen } from './screens/dashboard/screens/stocktaking';
import { ExploreScreen } from './screens/dashboard/screens/explore';
import { WriteOffScreen } from './screens/dashboard/screens/writeOff';

export const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="welcome" element={<WelcomeScreen />} />
            <Route path="dashboard" element={<DashboardScreen />}>
                <Route index element={<DashboardIndex />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="notifications" element={<NotificationsScreen />} />
                <Route path="grocery" element={<GroceryScreen />} />
                <Route path="stocktaking" element={<StocktakingScreen />} />
                <Route path="explore" element={<ExploreScreen />} />
                <Route path="write-off" element={<WriteOffScreen />} />
            </Route>
            <Route path="registration" element={<RegistrationScreen />} />
            <Route path="settings" element={<SettingsScreen />} />
            <Route path="account" element={<AccountScreen />} />
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    </Router>
);
