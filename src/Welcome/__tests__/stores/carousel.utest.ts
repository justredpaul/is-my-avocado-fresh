import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { cleanStores } from 'nanostores';

import {
    CarouselState,
    isCarouselFinished,
    isLastSlide,
    MaxCarouselState,
    nextSlideAction,
} from '../../stores/carousel.store';

const Store = suite('Carousel Store');

Store.before(() => {
    CarouselState.set(0);
});
Store.after.each(() => {
    cleanStores(
        CarouselState,
        MaxCarouselState,
        isLastSlide,
        isCarouselFinished
    );
});

Store('should return zero from the beginning', () => {
    assert.is(CarouselState.get(), 0);
});

Store('should increase slide number', () => {
    MaxCarouselState.set(2);
    nextSlideAction();

    assert.is(CarouselState.get(), 1);
});

Store('should stop increase slide number after reaching max count', () => {
    MaxCarouselState.set(1);
    nextSlideAction();
    nextSlideAction();

    assert.is(CarouselState.get(), 1);
});

Store('should compute flag for last slide', () => {
    MaxCarouselState.set(2);

    assert.not.ok(isLastSlide.get());
    nextSlideAction();
    assert.ok(isLastSlide.get());
});

Store('should return false for is finished flag at the beginning', () => {
    assert.not.ok(isCarouselFinished.get());
});

Store.run();
