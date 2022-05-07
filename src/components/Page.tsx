import * as React from 'react';

import { styled } from '../../stitches.config';
import { TChildrenProp } from '../types/common';

const Wrapper = styled('main', {
    padding: '$s5',
});

type TProps = TChildrenProp & {
    title: string;
}

export const TestIds = {
    Wrapper: 'wrapper',
    Title: 'title',
};

export const Page = (props: TProps) => (
    <Wrapper data-testid={TestIds.Wrapper}>
        <h1 className="visually-hidden" data-testid={TestIds.Title}>{props.title}</h1>
        {props.children}
    </Wrapper>
);
