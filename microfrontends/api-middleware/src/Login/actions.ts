import { LoginActionType } from './action-types';
import { Email, ErrorMessage, RecreatePasswordFormValues, SignInFormValues } from './types';

export interface APICheckAuthAction {
  type: LoginActionType.API_LOGIN_CHECK_AUTH;
}

export interface APISignInAction {
  type: LoginActionType.API_LOGIN_SIGN_IN;
  payload: SignInFormValues;
}

export interface SignInStartAction {
  type: LoginActionType.SIGN_IN_START;
}

export interface SignInAcceptedAction {
  type: LoginActionType.SIGN_IN_ACCEPTED;
}

export interface SignInDeniedAction {
  type: LoginActionType.SIGN_IN_DENIED;
  payload: ErrorMessage;
}

export interface APISignOutAction {
  type: LoginActionType.API_LOGIN_SIGN_OUT;
}

export interface APIForgotPasswordAction {
  type: LoginActionType.API_LOGIN_FORGOT_PASSWORD;
  payload: Email;
}

export interface APIRecreatePasswordAction {
  type: LoginActionType.API_LOGIN_RECREATE_PASSWORD;
  payload: RecreatePasswordFormValues;
}

export interface RecreatePasswordStartAction {
  type: LoginActionType.RECREATE_PASSWORD_START;
}

export interface RecreatePasswordAcceptedAction {
  type: LoginActionType.RECREATE_PASSWORD_ACCEPTED;
}

export interface RecreatePasswordDeniedAction {
  type: LoginActionType.RECREATE_PASSWORD_DENIED;
  payload: ErrorMessage;
}

export interface APIRefreshErrorsAction {
  type: LoginActionType.API_LOGIN_;
}

export type LoginAction =
  | APICheckAuthAction
  | APISignInAction
  | SignInStartAction
  | SignInAcceptedAction
  | SignInDeniedAction
  | APISignOutAction
  | APIForgotPasswordAction
  | APIRecreatePasswordAction
  | RecreatePasswordStartAction
  | RecreatePasswordAcceptedAction
  | RecreatePasswordDeniedAction
  | APIRefreshErrorsAction;
