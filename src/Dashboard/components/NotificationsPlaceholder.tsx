import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { styled } from '../../../stitches.config';

const Wrapper = styled('div', {
    height: '90px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alightItems: 'center',

    border: '2px dashed $white30',
    borderRadius: '$r4'
});

const Message = styled('p', {
    margin: 0,

    textAlign: 'center',
    textDecoration: 'none',
    color: '$white70'
});

export const NotificationsPlaceholder = () => (
    <Wrapper>
        <Message>
            <FormattedMessage id="dashboard.notifications.placeholder"
                defaultMessage="There will be notifications" />
        </Message>
    </Wrapper>
);
