import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useStore } from '@nanostores/react';
import { FormattedMessage } from 'react-intl';

import { styled, css } from '../../../stitches.config';
import { url as registerUrl } from '../screens/register';
import { Button } from '../../Common/components/Button';
import { isLastSlide, nextSlideAction } from '../stores/carousel.store';

const Wrapper = styled('div', {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
});

const SkipLink = css({
    padding: '$s2 $s5',

    fontSize: '24px',
    fontWeight: '$light',
    textDecoration: 'none',
    color: '$white',
});

export const CarouselNav = () => {
    const _isLastSlide = useStore(isLastSlide);
    const navigate = useNavigate();

    return (
        <Wrapper>
            <NavLink to={registerUrl} replace className={SkipLink()}>
                <FormattedMessage id="welcome.skip"
                    defaultMessage="Skip" />
            </NavLink>
            {_isLastSlide ? (
                <Button onClick={() => navigate(registerUrl, { replace: true })}>
                    <FormattedMessage id="welcome.next"
                        defaultMessage="Next" />
                </Button>
            ) : (
                <Button onClick={nextSlideAction}>
                    <FormattedMessage id="welcome.next"
                        defaultMessage="Next" />
                </Button>
            )}
        </Wrapper>
    );
};
