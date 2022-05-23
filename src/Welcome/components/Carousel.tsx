import * as React from 'react';
import { useStore } from '@nanostores/react';

import { styled } from '../../../stitches.config';
import { CarouselState } from '../stores/carousel.store';

const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginBottom: '$s9',
});

const Pagination = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
});

const Dot = styled('button', {
    width: '14px',
    height: '14px',
    borderRadius: '14px',
    border: 'none',
    backgroundColor: '$blue',
    padding: 0,
    '& + &': {
        marginLeft: '$s4',
    },
    variants: {
        active: {
            true: {
                backgroundColor: '$white',
            },
        },
    },
});

type TProps = {
    slides: JSX.Element[],
}

export const PaginationTestId = 'pagination';
export const DotTestIdPrefix = 'dot_';

export const Carousel = (props: TProps) => {
    const active = useStore(CarouselState);

    return (
        <Wrapper>
            {props.slides[active]}
            <Pagination data-testid={PaginationTestId}>
                {props.slides.map((_, index: number) => (
                    <Dot key={`pagination_dot_${index}`}
                        data-testid={`${DotTestIdPrefix}${index}`}
                        active={active === index}
                        onClick={() => CarouselState.set(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </Pagination>
        </Wrapper>
    );
};
