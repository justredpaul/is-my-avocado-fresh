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
    backgroundColor: '$blue500',
    padding: 0,
    '& + &': {
        marginLeft: '$s4',
    },
    variants: {
        active: {
            true: {
                backgroundColor: '$white500',
            },
        },
    },
});

export const Carousel = (props) => {
    const active = useStore(CarouselState);

    return (
        <Wrapper>
            {props.slides[active]}
            <Pagination>
                {props.slides.map((_, index) => (
                    <Dot key={`pagination_dot_${index}`}
                        active={active === index}
                        onClick={() => CarouselState.set(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </Pagination>
        </Wrapper>
    );
};
