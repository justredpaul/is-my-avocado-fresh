import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Page, TestIds } from '../../components/Page';

test('Page should render wrapper, title and children', () => {
    const testTitle = 'Test page';
    const contentTestId = 'content';

    render(<Page title={testTitle}><p data-testid={contentTestId}>Test content</p></Page>);

    expect(screen.getByTestId(TestIds.Wrapper)).toBeInTheDocument();

    expect(screen.getByTestId(TestIds.Title)).toBeInTheDocument();
    expect(screen.getByTestId(TestIds.Title)).toHaveTextContent(testTitle);

    expect(screen.getByTestId(contentTestId)).toBeInTheDocument();
});
