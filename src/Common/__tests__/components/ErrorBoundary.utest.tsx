import * as React from 'react';
import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { render, screen } from '@testing-library/react';
import sinon from 'sinon';

import { ErrorBoundary } from '../../components/ErrorBoundary';

class FailedComponent extends React.Component {
    render() {
        throw new Error('Always error..');

        return <></>;
    }
}

const Component = suite('Error Boundary');

Component('should render children by default', () => {
    const childrenTestId = 'children';
    const fallbackTestId = 'fallback';

    const FallbackComponent = <p data-testid={fallbackTestId}>Fallback</p>;

    render(
        <ErrorBoundary fallbackComponent={FallbackComponent}>
            <p data-testid={childrenTestId} />
        </ErrorBoundary>
    );

    assert.ok(screen.getByTestId(childrenTestId));
});

Component('should render fallback if children throw an error', () => {
    const fallbackTestId = 'fallback';

    const FallbackComponent = <p data-testid={fallbackTestId}>Fallback</p>;

    try {
        render(
            <ErrorBoundary fallbackComponent={FallbackComponent}>
                <FailedComponent />
            </ErrorBoundary>
        );
    } finally {
        assert.ok(screen.getByTestId(fallbackTestId));
    }
});

Component('should log error to provided service if throw an error', () => {
    const mockLogService = {
        error: sinon.fake(),
    };

    const FallbackComponent = <p>Fallback</p>;

    try {
        render(
            <ErrorBoundary logService={mockLogService} fallbackComponent={FallbackComponent}>
                <FailedComponent />
            </ErrorBoundary>
        );
    } finally {
        assert.ok(mockLogService.error.called);
    }
});

Component.run();
