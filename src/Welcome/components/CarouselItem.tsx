import * as React from 'react';

import { styled, css } from '../../../stitches.config';
import { Picture } from '../../Common/components/Picture';

const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const Illustration = css({
    width: 295,
    height: 295,
    marginBottom: '$s9',
});

const Shout = styled('p', {
    fontSize: '$fz3',
    fontWeight: '$bold',
    margin: '0 0 $s3',
    textAlign: 'center',
});

const Message = styled('p', {
    fontSize: '$fz1',
    fontWeight: '$light',
    margin: '0 0 $s7',
    textAlign: 'center',
});

type TProps = {
    title: JSX.Element | string;
    message: JSX.Element | string;
    illustration: {
        src: string;
        alt: string;
        sources: [];
    }
}

export const CarouselItem = (props: TProps) => (
    <Wrapper>
        <Picture className={Illustration()}
            default={props.illustration.src}
            alt={props.illustration.alt}
            sources={props.illustration.sources} />
        <Shout>
            {props.title}
        </Shout>
        <Message>
            {props.message}
        </Message>
    </Wrapper>
);
