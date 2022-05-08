import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useStore } from '@nanostores/react';

import { SwitchLocale } from './components/SwitchLocale';
import { WelcomeScreen } from './screens/welcome';
import { isAuthenticatedState } from '../Common/stores/user.store';
import { NotFoundScreen } from '../Common/screens/notFound';

type TProps = {
    redirectUrl: string;
};

export const Welcome = (props: TProps) => {
    const isAuthenticated = useStore(isAuthenticatedState);

    if (isAuthenticated) {
        return <Navigate replace to={props.redirectUrl} />
    }

    return (
        <>
            <SwitchLocale />
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </>
    );
};
