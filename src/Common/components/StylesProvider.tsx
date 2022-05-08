import * as React from 'react';
import * as Stitches from '@stitches/react';
import { normalize } from 'stitches-normalize-css';

import { globalCss } from '../../../stitches.config';
import { TChildrenProp } from '../types/common';

const globalStyles: Record<string, Stitches.CSS> = {
    body: {
        fontFamily: '$open-sans',

        backgroundColor: '$darkBlue500',
        color: '$white500',
    },
    '.visually-hidden': {
        position: 'absolute',
        width: '1px',
        height: '1px',
        margin: '-1px',
        border: '0',
        padding: '0',
        whiteSpace: 'nowrap',
        clipPath: 'inset(100%)',
        clip: 'rect(0 0 0 0)',
        overflow: 'hidden',
    }
};

const global = globalCss(...normalize, globalStyles);

type TProps = TChildrenProp;

export const StylesProvider = (props: TProps) => {
    global();

    return <>{props.children}</>;
};
