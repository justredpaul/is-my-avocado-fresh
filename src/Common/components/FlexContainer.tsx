import * as React from 'react';
import { css } from '../../../stitches.config';

export const FlexContainer = css({
    width: '100%',

    display: 'flex',

    variants: {
        direction: {
            column: {
                flexDirection: 'column'
            }
        }
    }
});
