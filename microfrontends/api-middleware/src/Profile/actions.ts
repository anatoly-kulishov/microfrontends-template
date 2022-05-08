import { ProfileActionType } from './action-types';
import { IProfileDataResponse } from './types';

export interface IProfileFetchDataAction {
  type: ProfileActionType.API_PROFILE_FETCH_DATA;
  payload: null; // data from request
}

export interface IProfileSetDataAction {
  type: ProfileActionType.PROFILE_SET_DATA;
  payload: IProfileDataResponse; // data from request
}

export interface IProfileFetchDataStartAC {
  type: ProfileActionType.PROFILE_FETCH_START;
}

export interface IProfileFetchDataCompleteAC {
  type: ProfileActionType.PROFILE_FETCH_COMPLETE;
}

//Profile put actions
export interface IProfilePutDataStartAC {
  type: ProfileActionType.PROFILE_PUT_START;
}

export interface IProfilePutDataCompleteAC {
  type: ProfileActionType.PROFILE_PUT_COMPLETE;
}

export interface IProfilePutDataAction {
  type: ProfileActionType.API_PROFILE_PUT_DATA;
  payload: IProfileDataResponse; // data from request
}

export type ProfileAction =
  | IProfileFetchDataAction
  | IProfileSetDataAction
  | IProfileFetchDataStartAC
  | IProfileFetchDataCompleteAC
  | IProfilePutDataAction
  | IProfilePutDataCompleteAC
  | IProfilePutDataStartAC;
