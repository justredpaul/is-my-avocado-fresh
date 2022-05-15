import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useStore } from '@nanostores/react';
import { useNavigate } from 'react-router-dom';

import { Carousel } from '../../components/Carousel';
import { CarouselNav } from '../../components/CarouselNav';
import { isCarouselFinished, MaxCarouselState } from '../../stores/carousel.store';
import { url as registerUrl } from '../register';
import { CarouselItem } from '../../components/CarouselItem';

// @ts-ignore
import illustration_1 from 'url:../../../assets/images/food.png';
// @ts-ignore
import illustration_2 from 'url:../../../assets/images/eating.png';
// @ts-ignore
import illustration_3 from 'url:../../../assets/images/picnic.png';

export const WelcomeScreen = () => {
    const isFinished = useStore(isCarouselFinished);
    const navigate = useNavigate();
    const intl = useIntl();

    const slides = useMemo(() => ([
        <CarouselItem
            title={intl.formatMessage({
                id: 'carousel.1.title',
                defaultMessage: 'Keep Your Products Fresh'
            })}
            message={intl.formatMessage({
                id: 'carousel.1.message',
                defaultMessage: 'Create an account to track stocks and manage products expiration date'
            })}
            illustration={{
                src: illustration_1,
                alt: intl.formatMessage({
                    id: 'carousel.1.alt',
                    defaultMessage: 'A bunch of food products'
                }),
                sources: [],
            }}
        />,
        <CarouselItem
            title={intl.formatMessage({
                id: 'carousel.2.title',
                defaultMessage: 'Be Creative in Cooking'
            })}
            message={intl.formatMessage({
                id: 'carousel.2.message',
                defaultMessage: 'Create an account to track stocks and manage products expiration date'
            })}
            illustration={{
                src: illustration_2,
                alt: intl.formatMessage({
                    id: 'carousel.2.alt',
                    defaultMessage: 'The woman eats a freshly made salad'
                }),
                sources: [],
            }}
        />,
        <CarouselItem
            title={intl.formatMessage({
                id: 'carousel.3.title',
                defaultMessage: 'Enjoy the Moments with Food'
            })}
            message={intl.formatMessage({
                id: 'carousel.3.message',
                defaultMessage: 'Create an account to track stocks and manage products expiration date'
            })}
            illustration={{
                src: illustration_3,
                alt: intl.formatMessage({
                    id: 'carousel.3.alt',
                    defaultMessage: 'The man and the woman having a picnic'
                }),
                sources: [],
            }}
        />,
    ]), [intl]);

    useEffect(() => {
        MaxCarouselState.set(slides.length - 1);
    }, []);

    useEffect(() => {
        if (isFinished) {
            navigate(registerUrl, { replace: true });
        }
    }, [isFinished]);

    return (
        <>
            <Carousel slides={slides} />
            <CarouselNav />
        </>
    );
};

