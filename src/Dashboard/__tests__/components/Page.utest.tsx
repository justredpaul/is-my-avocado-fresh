import * as React from 'react';
import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { render, screen } from '@testing-library/react';

import { Page, TestIds } from '../../components/Page';

const Component = suite('Page');

Component('should render wrapper, title and children', () => {
    const testTitle = 'Test page';
    const contentTestId = 'content';

    render(<Page title={testTitle}><p data-testid={contentTestId}>Test content</p></Page>);

    assert.ok(screen.getByTestId(TestIds.Wrapper));

    assert.ok(screen.getByTestId(TestIds.Title));
    assert.ok(screen.getByText(testTitle));

    assert.ok(screen.getByTestId(contentTestId));
});

Component.run();
