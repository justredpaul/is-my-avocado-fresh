import * as React from 'react';
import { useEffect } from 'react';

import { isCarouselFinished } from '../../stores/carousel.store';

export const url = '/register';

export const RegisterScreen = () => {
    useEffect(() => {
        isCarouselFinished.set(true);
    }, []);

    return (
        <h1>Register</h1>
    );
};
