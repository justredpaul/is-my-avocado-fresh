import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Page } from '../components/Page';
import { Header } from '../components/Header';
import { Notifications } from '../components/Notifications';

export const DashboardScreen = () => (
    <Page title="Dashboard">
        <Outlet />
    </Page>
);

export const DashboardIndex = () => (
    <>
        <Header />
        <Notifications />
        <NavLink to="grocery">Grocery</NavLink>
        <NavLink to="stocktaking">Stocktaking</NavLink>
        <NavLink to="explore">Explore</NavLink>
        <NavLink to="write-off">Write-off</NavLink>
        <NavLink to="search">Search</NavLink>
    </>
);
