import * as React from 'react';
import { useIntl } from 'react-intl';
import { Form, Field } from 'react-final-form';

import { PageTitle } from '../../components/Page';
import { BaseInput } from '../../../Common/components/Input';
import { Button } from '../../../Common/components/Button';
import { FlexContainer } from '../../../Common/components/FlexContainer';
import { Link } from '../../components/Link';

export const url = '/login';

const required = (value?: any) => !Boolean(value) && 'required';

export const LoginScreen = () => {
    const intl = useIntl();

    return (
        <>
            <PageTitle>
                {intl.formatMessage({
                    id: 'login.title',
                    defaultMessage: 'Welcome Back',
                })}
            </PageTitle>
            <Form onSubmit={console.log} render={({ form, handleSubmit }) => (
                <form className={FlexContainer({ direction: 'column' })} onSubmit={handleSubmit}>
                    <Field name="username" validate={required} render={({ input }) => (
                        <BaseInput {...input}
                            placeholder={intl.formatMessage({
                                id: 'login.username',
                                defaultMessage: 'Username',
                            })} />
                    )} />
                    <Field name="password" validate={required} render={({ input }) => (
                        <BaseInput {...input}
                            type="password"
                            placeholder={intl.formatMessage({
                                id: 'login.password',
                                defaultMessage: 'Password',
                            })} />
                    )} />

                    <Button type="submit" disabled={form.getState().invalid}>
                        {intl.formatMessage({
                            id: 'login.submit',
                            defaultMessage: 'Login',
                        })}
                    </Button>
                </form>
            )} />
            <Link to="/register">
                {intl.formatMessage({
                    id: 'login.switch_link',
                    defaultMessage: 'Don’t have an account?'
                })}
            </Link>
        </>
    );
};
