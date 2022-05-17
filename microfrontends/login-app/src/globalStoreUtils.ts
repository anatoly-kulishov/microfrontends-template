import { IAction } from 'redux-micro-frontend';

export enum GlobalStoreFoldersEnum {
  API = 'API',
  MAIN_PORTAL = 'MAIN_PORTAL',
  HOME = 'HOME',
  PROFILE = 'PROFILE',
  MESSENGER = 'MESSENGER',
  LOGIN = 'LOGIN',
}

export enum ConfirmationStatusEnum {
  LOADING = 'loading',
  ACCEPTED = 'accepted',
  DENIED = 'denied',
}

export const signInGAC = (formData: { password: string; username: string }): IAction => {
  return {
    type: 'API/LOGIN/SIGN_IN',
    payload: formData,
  };
};
