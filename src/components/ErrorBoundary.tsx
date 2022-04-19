import * as React from 'react';

type TProps = {
    fallbackComponent: JSX.Element | JSX.Element[];
    children: JSX.Element | JSX.Element[];
};

type TState = {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<TProps, TState>{
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) return this.props.fallbackComponent;

        return this.props.children;
    }
}
