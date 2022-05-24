import * as React from 'react';
import { useStore } from '@nanostores/react';
import { useIntl } from 'react-intl';

import { styled } from '../../../stitches.config';
import { userName } from '../../Common/stores/user.store';

// @ts-ignore
import avatar from 'url:../../assets/images/avatar.svg';

const Wrapper = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: '$s7',
});

const Greeting = styled('h1', {
    margin: 0,
    fontSize: '$fz3',
});

const Avatar = styled('img', {
    width: '48px',
    height: '56px',
});

export const Header = () => {
    const intl = useIntl();
    const name = useStore(userName);
    const greeting = intl.formatMessage({
        id: 'dashboard.greeting.1',
        defaultMessage: 'Hello, {name}',
    }, { name });

    return (
        <Wrapper>
            <Greeting>{greeting}</Greeting>

            <Avatar src={avatar} />
        </Wrapper>
    );
};
