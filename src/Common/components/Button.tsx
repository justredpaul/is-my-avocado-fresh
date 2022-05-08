import * as React from 'react';
import { styled } from '../../../stitches.config';

const BaseButton = styled('button', {
    padding: '$s2 $s9',
    border: 'none',
    borderRadius: '$r2',
    fontSize: '$fz3',
    fontWeight: '$semiBold',
    color: '$white500',
    backgroundColor: '$primary500',
});

export const Button = (props) => (
    <BaseButton {...props}>{props.children}</BaseButton>
);
