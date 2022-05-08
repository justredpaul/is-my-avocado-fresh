import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useStore } from '@nanostores/react';

import { isAuthenticatedState } from '../Common/stores/user.store';
import { NotFoundScreen } from '../Common/screens/notFound';
import { DashboardIndex, DashboardScreen } from './screens';
import { SearchScreen } from './screens/search';
import { NotificationsScreen } from './screens/notifications';
import { GroceryScreen } from './screens/grocery';
import { StocktakingScreen } from './screens/stocktaking';
import { ExploreScreen } from './screens/explore';
import { WriteOffScreen } from './screens/writeOff';
import { SettingsScreen } from './screens/settings';
import { AccountScreen } from './screens/account';

export const Dashboard = (props) => {
    const isAuthenticated = useStore(isAuthenticatedState);

    if (!isAuthenticated) {
        return <Navigate replace to={props.loginUrl} />;
    }

    return (
        <Routes>
            <Route path="/*" element={<DashboardScreen />}>
                <Route index element={<DashboardIndex />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="notifications" element={<NotificationsScreen />} />
                <Route path="grocery" element={<GroceryScreen />} />
                <Route path="stocktaking" element={<StocktakingScreen />} />
                <Route path="explore" element={<ExploreScreen />} />
                <Route path="write-off" element={<WriteOffScreen />} />
                <Route path="search" element={<DashboardIndex />} />
                <Route path="settings" element={<SettingsScreen />} />
                <Route path="account" element={<AccountScreen />} />
            </Route>
            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    );
};
