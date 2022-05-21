import * as React from 'react';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Form, Field } from 'react-final-form';

import { isCarouselFinished } from '../../stores/carousel.store';
import { PageTitle } from '../../components/Page';
import { BaseInput } from '../../../Common/components/Input';
import { Checkbox } from '../../../Common/components/Checkbox';
import { Button } from '../../../Common/components/Button';
import { FlexContainer } from '../../../Common/components/FlexContainer';
import { Link } from '../../components/Link';

export const url = '/register';

const required = (value?: any) => !Boolean(value) && 'required';

export const RegisterScreen = () => {
    const intl = useIntl();

    useEffect(() => {
        isCarouselFinished.set(true);
    }, []);

    return (
        <>
            <PageTitle>
                {intl.formatMessage({
                    id: 'register.title',
                    defaultMessage: 'Create a New Account',
                })}
            </PageTitle>
            <Form onSubmit={console.log} render={({ form, handleSubmit }) => (
                <form className={FlexContainer({ direction: 'column' })} onSubmit={handleSubmit}>
                    <Field name="username" validate={required} render={({ input }) => (
                        <BaseInput {...input}
                            placeholder={intl.formatMessage({
                                id: 'register.username',
                                defaultMessage: 'Username',
                            })} />
                    )} />
                    <Field name="email" validate={required} render={({ input }) => (
                        <BaseInput {...input}
                            type="email"
                            placeholder={intl.formatMessage({
                                id: 'register.email',
                                defaultMessage: 'Email',
                            })} />
                    )} />
                    <Field name="password" validate={required} render={({ input }) => (
                        <BaseInput {...input}
                            type="password"
                            placeholder={intl.formatMessage({
                                id: 'register.password',
                                defaultMessage: 'Password',
                            })} />
                    )} />
                    <Field type="checkbox" validate={required} name="agreement" render={({ input }) => (
                        <Checkbox checked={input.checked} onChange={input.onChange} labelElement={(
                            <>
                                {intl.formatMessage({
                                    id: 'register.terms',
                                    defaultMessage: 'I agree to the Terms of Service',
                                })}
                            </>
                        )} />
                    )} />

                    <Button type="submit" disabled={form.getState().invalid}>
                        {intl.formatMessage({
                            id: 'register.submit',
                            defaultMessage: 'Create Account',
                        })}
                    </Button>
                </form>
            )} />
            <Link to="/login">
                {intl.formatMessage({
                    id: 'register.switch_link',
                    defaultMessage: 'Already have an account?'
                })}
            </Link>
        </>
    );
};
