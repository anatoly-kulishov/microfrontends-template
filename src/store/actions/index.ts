import { ActionType } from '../action-types';
import { IApiState } from '../../globalStoreUtils';

export interface ISetLoginApiState {
  type: ActionType.SET_LOGIN_STATE;
  payload: IApiState['Login'];
}

export interface ISetProfileApiState {
  type: ActionType.SET_PROFILE_STATE;
  payload: IApiState['Profile'];
}

export interface ISetChatApiState {
  type: ActionType.SET_CHAT_STATE;
  payload: IApiState['Chat'];
}

export interface ISetErrorStateAction {
  type: ActionType.SET_ERROR;
  payload: number;
}

export interface ICleanErrorStateAction {
  type: ActionType.CLEAN_ERROR;
  payload: null;
}

export type Action =
  | ISetLoginApiState
  | ISetProfileApiState
  | ISetChatApiState
  | ISetErrorStateAction
  | ICleanErrorStateAction;
