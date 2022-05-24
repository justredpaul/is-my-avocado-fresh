import * as React from 'react';
import { useStore } from '@nanostores/react';
import { NavLink } from 'react-router-dom';

import { css } from '../../../stitches.config';
import { isNoNotifications } from '../stores/notifications.store';
import { NotificationsPreview } from './NotificationsPreview';
import { NotificationsPlaceholder } from './NotificationsPlaceholder';

const noDecorations = css({
    textDecoration: 'none',
});

export const Notifications = () => {
    const _isNoNotifications = useStore(isNoNotifications);

    return (
        <NavLink className={noDecorations()} to="notifications">
            {_isNoNotifications
                ? <NotificationsPlaceholder />
                : <NotificationsPreview />
            }
        </NavLink>
    )
};
