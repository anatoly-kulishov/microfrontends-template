import { IAction } from "redux-micro-frontend";
import { Dispatch } from "redux";

import {
  Email,
  ErrorMessage,
  RecreatePasswordFormValues,
  SignInFormValues,
} from "./types";
import { LoginActionType } from "./action-types";
import { RootState } from "../rootReducer";
import {
  RecreatePasswordAcceptedAction,
  RecreatePasswordDeniedAction,
  RecreatePasswordStartAction,
  APIRefreshErrorsAction,
  SignInAcceptedAction,
  SignInDeniedAction,
  SignInStartAction,
  LoginAction,
} from "./actions";

export const refreshErrorsAC = (): APIRefreshErrorsAction => {
  return {
    type: LoginActionType.API_LOGIN_REFRESH_STATE,
  };
};

export const checkAuthThunk = () => {
  return async (
    dispatch: Dispatch<LoginAction>,
    getState: () => RootState
  ) => {
    return {}
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
export const signInDeniedAC = (
  errorMessage: ErrorMessage
): SignInDeniedAction => {
  return {
    type: LoginActionType.SIGN_IN_DENIED,
    payload: errorMessage,
  };
};
export const signInThunk = (formData: SignInFormValues) => {
  return async (
    dispatch: Dispatch<LoginAction>,
    getState: () => RootState
  ) => {
    return {}
  };
};

export const signOutThunk = () => {
  return async (
    dispatch: Dispatch<LoginAction | IAction>,
    getState: () => RootState
  ) => {
   return {}
  };
};

export const forgotPasswordThunk = (email: Email) => {
  return async (
    dispatch: Dispatch<LoginAction>,
    getState: () => RootState
  ) => {
   return {}
  };
};

export const recreatePasswordStartAC = (): RecreatePasswordStartAction => {
  return {
    type: LoginActionType.RECREATE_PASSWORD_START,
  };
};
export const recreatePasswordAcceptedAC =
  (): RecreatePasswordAcceptedAction => {
    return {
      type: LoginActionType.RECREATE_PASSWORD_ACCEPTED,
    };
  };
export const recreatePasswordDeniedAC = (
  errorMessage: ErrorMessage
): RecreatePasswordDeniedAction => {
  return {
    type: LoginActionType.RECREATE_PASSWORD_DENIED,
    payload: errorMessage,
  };
};
export const recreatePasswordThunk = (formData: RecreatePasswordFormValues) => {
  return async (dispatch: Dispatch<LoginAction>, getState: () => RootState) => {
    return {}
  };
};
