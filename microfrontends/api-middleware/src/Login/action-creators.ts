import { IAction } from 'redux-micro-frontend';
import { Dispatch } from 'redux';

import { Email, ErrorMessage, RecreatePasswordFormValues, SignInFormValues } from './types';
import { LoginActionType } from './action-types';
import { RootState } from '../rootReducer';
import {
  APIRefreshErrorsAction,
  LoginAction,
  RecreatePasswordAcceptedAction,
  RecreatePasswordDeniedAction,
  RecreatePasswordStartAction,
  SignInAcceptedAction,
  SignInDeniedAction,
  SignInStartAction,
} from './actions';
import { REFRESH_API_STATE_ACTION } from '../globalStoreUtils';

export const refreshErrorsAC = (): APIRefreshErrorsAction => {
  return {
    type: LoginActionType.API_LOGIN_REFRESH_STATE,
  };
};

export const checkAuthThunk = () => {
  return async (dispatch: Dispatch<LoginAction>, getState: () => RootState) => {
    dispatch(refreshErrorsAC());
  };
};

export const signInStartAC = (): SignInStartAction => {
  return {
    type: LoginActionType.SIGN_IN_START,
  };
};

export const signInAcceptedAC = (): SignInAcceptedAction => {
  return {
    type: LoginActionType.SIGN_IN_ACCEPTED,
  };
};

export const signInDeniedAC = (errorMessage: ErrorMessage): SignInDeniedAction => {
  return {
    type: LoginActionType.SIGN_IN_DENIED,
    payload: errorMessage,
  };
};

export const signInThunk = (formData: SignInFormValues) => {
  return async (dispatch: Dispatch<LoginAction>, getState: () => RootState) => {
    try {
      dispatch(signInStartAC());

      /** Mock Settings **/
      localStorage.setItem('token', `${Math.random()}`);
      console.log(formData);

      dispatch(signInAcceptedAC());
    } catch (e) {
      console.error('error sign in:', e);
    }
  };
};

export const signOutThunk = () => {
  return async (dispatch: Dispatch<LoginAction | IAction>, getState: () => RootState) => {
    try {
      // await Auth.signOut();

      /** Mock Settings **/
      localStorage.removeItem('token');

      dispatch(REFRESH_API_STATE_ACTION);
    } catch (e) {
      console.error('error sign out:', e);
    }
  };
};

export const forgotPasswordThunk = (email: Email) => {
  return async (dispatch: Dispatch<LoginAction>, getState: () => RootState) => {};
};

export const recreatePasswordStartAC = (): RecreatePasswordStartAction => {
  return {
    type: LoginActionType.RECREATE_PASSWORD_START,
  };
};

export const recreatePasswordAcceptedAC = (): RecreatePasswordAcceptedAction => {
  return {
    type: LoginActionType.RECREATE_PASSWORD_ACCEPTED,
  };
};

export const recreatePasswordDeniedAC = (errorMessage: ErrorMessage): RecreatePasswordDeniedAction => {
  return {
    type: LoginActionType.RECREATE_PASSWORD_DENIED,
    payload: errorMessage,
  };
};

export const recreatePasswordThunk = (formData: RecreatePasswordFormValues) => {
  return async (dispatch: Dispatch<LoginAction>, getState: () => RootState) => {};
};
