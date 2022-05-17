import { IAction } from 'redux-micro-frontend';

import { ChatStatusEnum, ErrorMessage, IChatConnectionData, ProfileDataStatus } from './store/storeTypes';

export enum GlobalStoreFoldersEnum {
  API = 'API',
  MAIN_PORTAL = 'MAIN_PORTAL',
  HOME = 'HOME',
  PROFILE = 'PROFILE',
  MESSENGER = 'MESSENGER',
  LOGIN = 'LOGIN',
}

export enum AppRoutesEnum {
  HOME = '/',
  MESSENGER = 'messenger',
  PROFILE = 'profile',
}

export enum AppRoutesTitleEnum {
  HOME = 'Home',
  MESSENGER = 'Messenger',
  PROFILE = 'Profile',
}

export enum StatusEnum {
  LOADING = 'loading',
  ACCEPTED = 'accepted',
  DENIED = 'denied',
}

export interface IApiState {
  Login: {
    isLoading: boolean;

    signInError: ErrorMessage;
    signInAccepted: boolean;

    recreatePasswordError: ErrorMessage;
    recreatePasswordAccepted: boolean;
  };
  Profile: {
    data: any;
    status: ProfileDataStatus;
    putStatus: ProfileDataStatus;
  };
  Chat: {
    connection: IChatConnectionData | null;
    history: any;
    fileStatus: ChatStatusEnum | null | string;
    error: string;
    unreadMessageCounter: number;
    path: any;
  };
}

export const checkAuthGAC = (): IAction => {
  return {
    type: 'API/LOGIN/CHECK_AUTH',
    payload: null,
  };
};

export const logOutGAC = (): IAction => {
  return {
    type: 'API/LOGIN/SIGN_OUT',
    payload: null,
  };
};
