import { cleanStores } from 'nanostores';

import {
    CarouselState,
    isCarouselFinished,
    isLastSlide,
    MaxCarouselState,
    nextSlideAction,
} from '../../stores/carousel.store';

describe('Carousel Store', () => {
    afterEach(() => {
        cleanStores(
            CarouselState,
            MaxCarouselState,
            isLastSlide,
            isCarouselFinished
        );
    });

    it('should return zero from the beginning', () => {
        expect(CarouselState.get()).toBe(0);
    });

    it('should increase slide number', () => {
        MaxCarouselState.set(2);
        nextSlideAction();

        expect(CarouselState.get()).toBe(1);
    });

    it('should stop increase slide number after reaching max count', () => {
        MaxCarouselState.set(1);
        nextSlideAction();
        nextSlideAction();

        expect(CarouselState.get()).toBe(1);
    });

    it('should compute flag for last slide', () => {
        MaxCarouselState.set(2);

        expect(isLastSlide.get()).toBeFalsy();
        nextSlideAction();
        expect(isLastSlide.get()).toBeTruthy();
    });

    it('should return false for is finished flag at the beginning', () => {
        expect(isCarouselFinished.get()).toBeFalsy();
    });
});
