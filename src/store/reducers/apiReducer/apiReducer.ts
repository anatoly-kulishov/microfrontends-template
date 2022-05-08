import produce from 'immer';

import { IApiState } from '../../../globalStoreUtils';
import { ActionType } from '../../action-types';
import { Action } from '../../actions';

export interface PortalApiState {
  Login: IApiState['Login'];
  Profile: IApiState['Profile'];
  Chat: IApiState['Chat'];
}

const initialState: PortalApiState = {
  Login: {
    isLoading: false,
    signInError: '',
    signInAccepted: false,
    recreatePasswordError: '',
    recreatePasswordAccepted: false,
  },
  Profile: {
    status: null,
    putStatus: null,
    data: null,
  },
  Chat: {
    connection: null,
    history: null,
    fileStatus: null,
    error: '',
    unreadMessageCounter: 0,
    path: null,
  },
};

export const apiReducer = produce((state: PortalApiState = initialState, action: Action): PortalApiState => {
  switch (action.type) {
    case ActionType.SET_LOGIN_STATE:
      state.Login = action.payload;
      return state;

    case ActionType.SET_PROFILE_STATE:
      state.Profile = action.payload;
      return state;

    case ActionType.SET_CHAT_STATE:
      state.Chat = action.payload;
      return state;

    default:
      return state;
  }
}, initialState);
