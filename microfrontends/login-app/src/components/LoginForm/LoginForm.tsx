import React from 'react';
import { GlobalStore } from 'redux-micro-frontend';
import { Field, Form, Formik, FormikConfig } from 'formik';
import * as Yup from 'yup';

import { GlobalStoreFoldersEnum, signInGAC } from '../../globalStoreUtils';
import styles from './LoginForm.module.scss';

const globalStore = GlobalStore.Get();

interface ISignInFormValues {
  email: string;
  password: string;
}

const initialValues: ISignInFormValues = {
  email: '',
  password: '',
};

enum LoginFormFields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

const EMAIL_PLACEHOLDER = 'E-mail';
const PASSWORD_PLACEHOLDER = 'Password';

export const LoginForm = () => {
  const signIn = (username: string, password: string) => {
    globalStore.DispatchGlobalAction(GlobalStoreFoldersEnum.API, signInGAC({ username, password }));
  };

  const signInHandler: FormikConfig<ISignInFormValues>['onSubmit'] = values => {
    signIn(values.email, values.password);
  };

  return (
    <Formik
      isInitialValid={false}
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Please enter your email'),
        password: Yup.string().required('Please enter your password'),
      })}
      onSubmit={signInHandler}
    >
      <Form className={styles.Form}>
        <div className={styles.FormBody}>
          <div className="transparent pt-1">
            <Field name={LoginFormFields.EMAIL} type={LoginFormFields.EMAIL} placeholder={EMAIL_PLACEHOLDER} required />
          </div>
          <div className="transparent pt-1">
            <Field
              name={LoginFormFields.PASSWORD}
              type={LoginFormFields.PASSWORD}
              placeholder={PASSWORD_PLACEHOLDER}
              required
            />
          </div>
        </div>
        <div className={styles.FormFooter}>
          <span className={styles.ForgotPasswordLink}>Forgot password?</span>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
      </Form>
    </Formik>
  );
};
