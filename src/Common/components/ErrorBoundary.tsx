import * as React from 'react';
import { TChildrenProp } from '../types/common';

type TProps = TChildrenProp & {
    fallbackComponent: JSX.Element | JSX.Element[];
    logService?: any;
};

type TState = {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<TProps, TState>{
    constructor(props: TProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        if (this.props.logService) {
            this.props.logService.error(error, errorInfo);
        }
    }

    render() {
        if (this.state.hasError) return this.props.fallbackComponent;

        return this.props.children;
    }
}
