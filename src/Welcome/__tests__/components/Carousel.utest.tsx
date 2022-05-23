import * as React from 'react';
import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';

import { Carousel, DotTestIdPrefix, PaginationTestId } from '../../components/Carousel';

const Component = suite('Carousel');

const mockSlides = [
    <p data-testid="first-slide">First</p>,
    <p data-testid="second-slide">Second</p>,
    <p data-testid="third-slide">Third</p>,
];

Component.before.each(() => {
    render(<Carousel slides={mockSlides} />);
});
Component.after.each(() => {
    cleanup();
});

Component('should render active slide with pagination', () => {
    assert.ok(screen.getByTestId('first-slide'));
    assert.ok(screen.getByTestId(PaginationTestId));
    assert.ok(screen.getByTestId(DotTestIdPrefix + '0'));
});

Component('should render amount of dots based on amount of slides', () => {
    let index = 0;
    for (let _ of mockSlides) {
        assert.ok(screen.getByTestId(DotTestIdPrefix + index));
        index++;
    }
});

Component('should render active slide after click on the dot', () => {
    fireEvent.click(screen.getByTestId(DotTestIdPrefix + '1'));

    assert.ok(screen.getByTestId('second-slide'));
});

Component.run();
