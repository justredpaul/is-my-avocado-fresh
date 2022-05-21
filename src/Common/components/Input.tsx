import * as React from 'react';
import { styled } from '../../../stitches.config';

export const BaseInput = styled('input', {
    display: 'block',
    width: '100%',
    padding: '$s3 $s7',
    marginBottom: '$s4',

    borderRadius: '$r1',
    border: '3px solid transparent',
    backgroundColor: '$blue40',
    color: '$white',

    fontSize: '$fz1',
    fontWeight: '$light',

    '&:focus': {
        borderColor: '$primary',
        outline: 'none',
    },

    variants: {
        bad: {
            true: {
                borderColor: 'transparent $attention'
            }
        }
    }
});
