import * as React from 'react';

import { ErrorBoundary } from './ErrorBoundary';
import { GlobalError } from './GlobalError';
import { GlobalLoading } from './GlobalLoading';
import { TChildrenProp } from '../types/common';

type TProps = {
    children: TChildrenProp,
}

export const Module = (props: TProps) => (
    <ErrorBoundary fallbackComponent={<GlobalError />}>
        <React.Suspense fallback={<GlobalLoading />}>
            <>
                {props.children}
            </>
        </React.Suspense>
    </ErrorBoundary>
);
