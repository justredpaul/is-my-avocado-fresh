import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorBoundary } from '../../components/ErrorBoundary';

class FailedComponent extends React.Component {
    render() {
        throw new Error('Always error..');

        return <></>;
    }
}

describe('Error Boundary', () => {
    it('should render children by default', () => {
        const childrenTestId = 'children';
        const fallbackTestId = 'fallback';

        const FallbackComponent = <p data-testid={fallbackTestId}>Fallback</p>;

        render(
            <ErrorBoundary fallbackComponent={FallbackComponent}>
                <p data-testid={childrenTestId} />
            </ErrorBoundary>
        );

        expect(screen.getByTestId(childrenTestId)).toBeInTheDocument();
    });

    it('should render fallback if children throw an error', () => {
        const fallbackTestId = 'fallback';

        const FallbackComponent = <p data-testid={fallbackTestId}>Fallback</p>;

        try {
            render(
                <ErrorBoundary fallbackComponent={FallbackComponent}>
                    <FailedComponent />
                </ErrorBoundary>
            );
        } finally {
            expect(screen.getByTestId(fallbackTestId)).toBeInTheDocument();
        }
    });

    it('should log error if logService provided', () => {
        const FallbackComponent = <p>Fallback</p>;
        const fakeLogService = {
            error: () => {}
        };
        jest.spyOn(fakeLogService, 'error');

        try {
            render(
                <ErrorBoundary fallbackComponent={FallbackComponent} logService={fakeLogService}>
                    <FailedComponent />
                </ErrorBoundary>
            );
        } finally {
            expect(fakeLogService.error).toBeCalled();
        }
    });
});
