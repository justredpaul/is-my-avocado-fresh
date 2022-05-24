import * as React from 'react';
import { useStore } from '@nanostores/react';

import { styled } from '../../../stitches.config';
import { CountState, PreviewState } from '../stores/notifications.store';

const Wrapper = styled('div', {
    position: 'relative',
    width: '100%',
});

const Notification = styled('div', {
    position: 'relative',
    width: '100%',
    height: '70px',
    backgroundColor: '$notification',
    borderRadius: '$r2',

    variants: {
        order: {
            0: {
                zIndex: '999',
            },
            1: {
                backgroundColor: 'hsl(18,59%,41%)',
                transform: 'scale(0.95)',
                marginTop: '-60px',
                zIndex: '998',
            },
            2: {
                backgroundColor: 'hsl(18,59%,37%)',
                transform: 'scale(0.90)',
                marginTop: '-60px',
                zIndex: '997',
            },
        },
    },
});

const Badge = styled('p', {
    position: 'absolute',
    top: '-16px',
    right: '16px',
    zIndex: '1000',

    width: '32px',
    height: '32px',
    margin: 0,

    borderRadius: '$r2',
    backgroundColor: '$attention',
    textAlign: 'center',
    lineHeight: '32px',
    fontSize: '$fz1',
    color: '$white',
});

export const NotificationsPreview = () => {
    const count = useStore(CountState);
    const preview = useStore(PreviewState);

    return (
        <Wrapper>
            {preview.map((_, index) => (
                <Notification key={`notification_${index}`} order={index} />
            ))}
            <Badge>{count}</Badge>
        </Wrapper>
    );
};
