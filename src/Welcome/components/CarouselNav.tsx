import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { styled, css } from '../../../stitches.config';
import { url as registerUrl } from '../screens/register';
import { Button } from '../../Common/components/Button';
import { isLastSlide, nextSlideAction } from '../stores/carousel.store';
import { useStore } from '@nanostores/react';
import { FormattedMessage } from 'react-intl';

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
    color: '$white500',
});

export const CarouselNav = () => {
    const isFinished = useStore(isLastSlide);
    const navigate = useNavigate();

    return (
        <Wrapper>
            <NavLink to={registerUrl} replace className={SkipLink()}>
                <FormattedMessage id="welcome.skip"
                    defaultMessage="Skip" />
            </NavLink>
            {isFinished ? (
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
