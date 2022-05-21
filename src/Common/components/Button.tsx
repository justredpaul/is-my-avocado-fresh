import * as React from 'react';
import { styled } from '../../../stitches.config';

const BaseButton = styled('button', {
    padding: '$s3 $s9',
    border: 'none',
    borderRadius: '$r2',
    fontSize: '$fz3',
    fontWeight: '$semiBold',
    color: '$white',
    backgroundColor: '$primary',

    variants: {
        disabled: {
            true: {
                backgroundColor: '$blue',
            }
        }
    }
});

export const Button = (props: any) => (
    <BaseButton {...props}>{props.children}</BaseButton>
);
