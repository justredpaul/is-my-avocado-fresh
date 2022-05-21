import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { styled } from '../../../stitches.config';

NavLink.toString = () => '.NavLink';

export const Link = styled(NavLink, {
    width: '100%',
    marginTop: '$s7',

    color: '$white70',
    textAlign: 'center',
    textDecoration: 'none',
});
