import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Page } from '../components/Page';

export const DashboardScreen = () => (
    <Page title="Dashboard">
        <Outlet />
    </Page>
);

export const DashboardIndex = () => (
    <>
        <NavLink to="notifications">Notifications</NavLink>
        <NavLink to="grocery">Grocery</NavLink>
        <NavLink to="stocktaking">Stocktaking</NavLink>
        <NavLink to="explore">Explore</NavLink>
        <NavLink to="write-off">Write-off</NavLink>
        <NavLink to="search">Search</NavLink>
    </>
);
