import { IAction } from 'redux-micro-frontend';

export enum GlobalStoreFoldersEnum {
  API = 'API',
  EnrollmentPortal = 'EnrollmentPortal',
}

export enum StatusEnum {
  LOADING = 'loading',
  ACCEPTED = 'accepted',
  DENIED = 'denied',
}

export interface IApiState {}

type DeviceSetupStatus = null | StatusEnum;

export const openAccountSetupModalGAC = (): IAction => {
  // Global Action Creator for opening Account setup modal
  return {
    type: 'ACCOUNT_SETUP/OPEN_MODAL',
    payload: null,
  };
};