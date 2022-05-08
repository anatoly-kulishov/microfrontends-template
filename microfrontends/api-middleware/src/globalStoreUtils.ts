import { IAction } from 'redux-micro-frontend';

export enum GlobalStoreFolders {
  API = 'API',
  APP = 'APP',
}

export enum AppPortalRoutes {
  INBOX = '/inbox',
}

export const REFRESH_API_STATE_ACTION_TYPE: string = 'API/REFRESH_ROOT_STATE';
export const REFRESH_API_STATE_ACTION: IAction = {
  type: REFRESH_API_STATE_ACTION_TYPE,
  payload: null,
};

export enum RequestStatusEnum {
  LOADING = 'loading',
  ACCEPTED = 'accepted',
  DENIED = 'denied',
}
