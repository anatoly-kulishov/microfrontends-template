import { ActionType } from '../action-types';
import { IApiState } from '../../globalStoreUtils';
import { ICleanErrorStateAction, ISetChatApiState, ISetLoginApiState, ISetProfileApiState } from '../actions';

export const setLoginApiStateAC = (apiLoginState: IApiState['Login']): ISetLoginApiState => {
  return {
    type: ActionType.SET_LOGIN_STATE,
    payload: apiLoginState,
  };
};

export const setProfileApiStateAC = (apiProfileState: IApiState['Profile']): ISetProfileApiState => {
  return {
    type: ActionType.SET_PROFILE_STATE,
    payload: apiProfileState,
  };
};

export const setChatApiStateAC = (apiChatState: IApiState['Chat']): ISetChatApiState => {
  return {
    type: ActionType.SET_CHAT_STATE,
    payload: apiChatState,
  };
};

export const cleanErrorStateAC = (): ICleanErrorStateAction => {
  return {
    type: ActionType.CLEAN_ERROR,
    payload: null,
  };
};
