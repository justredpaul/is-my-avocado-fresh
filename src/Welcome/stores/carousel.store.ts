import { atom, action, computed } from 'nanostores';

export const CarouselState = atom<number>(0);
export const MaxCarouselState = atom<number>(0);
export const nextSlideAction = action(CarouselState,
    'next-slide',
    (store) => {
        if (store.get() + 1 <= MaxCarouselState.get()) {
            store.set(store.get() + 1);
        }
    });

export const isLastSlide = computed([CarouselState, MaxCarouselState],
    (current, max) => {
        return current === max;
    });

export const isCarouselFinished = atom<boolean>(false);
