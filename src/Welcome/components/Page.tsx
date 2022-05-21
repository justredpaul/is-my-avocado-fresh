import * as React from 'react';

import { styled } from '../../../stitches.config';

export const Page = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',

    width: '100%',
    height: '100%',

    padding: '$s4 $s4 $s9',
});

export const PageTitle = styled('h1', {
    width: '100%',
    marginBottom: '$s10',

    fontSize: '$fz3',
});
