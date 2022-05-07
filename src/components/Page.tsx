import * as React from 'react';

import { styled } from '/stitches.config';

const Wrapper = styled('main', {
    padding: '$s5',
});

type TProps = {
    title: string;
    children: JSX.Element | JSX.Element[];
}

export const Page = (props: TProps) => (
    <Wrapper>
        <h1 className="visually-hidden">{props.title}</h1>
        {props.children}
    </Wrapper>
);
