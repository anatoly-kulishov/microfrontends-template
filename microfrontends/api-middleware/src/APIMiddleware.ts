import { Dispatch, Middleware } from 'redux';
import { IAction } from 'redux-micro-frontend';

import { profileDataGetThunk, profileDataPutThunk } from './Profile/action-creators';
import { ProfileActionType } from './Profile/action-types';
import { ChatActionTypeEnum } from './Chat/action-types';
import { LoginActionType } from './Login/action-types';
import { ProfileAction } from './Profile/actions';
import { ChatActionType } from './Chat/actions';
import { LoginAction } from './Login/actions';
import { RootState } from './rootReducer';
import {
  checkAuthThunk,
  forgotPasswordThunk,
  recreatePasswordThunk,
  signInThunk,
  signOutThunk,
} from './Login/action-creators';
import {
  actualPathChatThunk,
  chatSendFileThunk,
  connectedChatThunk,
  fetchNewRequestMessageThunk,
  fetchNewResponseMessageThunk,
  getHistoryDialogChatThunk,
  lastClientActivityThunk,
  setReadMessageThunk,
} from './Chat/action-creators';

type AllActions =
  | LoginAction
  | ProfileAction
  | ChatActionType
  | IAction;

const apiMiddleware: Middleware<{}, RootState, Dispatch<AllActions>> =
  ({ dispatch, getState }) =>
  next =>
  (action: AllActions) => {
    switch (
      action.type // filtering global actions to dispatch thunk
    ) {
      case ProfileActionType.API_PROFILE_FETCH_DATA:
        return profileDataGetThunk()(dispatch, getState);
      case ProfileActionType.API_PROFILE_PUT_DATA:
        return profileDataPutThunk(action.payload)(dispatch, getState);

      case LoginActionType.API_LOGIN_CHECK_AUTH:
        return checkAuthThunk()(dispatch, getState);
      case LoginActionType.API_LOGIN_SIGN_IN:
        return signInThunk(action.payload)(dispatch, getState);
      case LoginActionType.API_LOGIN_SIGN_OUT:
        return signOutThunk()(dispatch, getState);
      case LoginActionType.API_LOGIN_FORGOT_PASSWORD:
        return forgotPasswordThunk(action.payload)(dispatch, getState);
      case LoginActionType.API_LOGIN_RECREATE_PASSWORD:
        return recreatePasswordThunk(action.payload)(dispatch, getState);

      case ChatActionTypeEnum.API_CHAT_CONNECTION:
        return connectedChatThunk()(dispatch, getState);
      case ChatActionTypeEnum.API_CHAT_GET_HISTORY_DIALOG:
        return getHistoryDialogChatThunk()(dispatch, getState);
      case ChatActionTypeEnum.API_CHAT_NEW_RESPONSE_MESSAGE:
        return fetchNewResponseMessageThunk()(dispatch, getState);
      case ChatActionTypeEnum.API_CHAT_NEW_REQUEST_MESSAGE:
        return fetchNewRequestMessageThunk(action.payload)(dispatch, getState);
      case ChatActionTypeEnum.API_CHAT_SEND_FILE:
        return chatSendFileThunk(action.payload)(dispatch, getState);
      case ChatActionTypeEnum.API_CHAT_CLIENT_ACTIVITY:
        return lastClientActivityThunk()(dispatch, getState);
      case ChatActionTypeEnum.API_CHAT_SET_READ_MESSAGES:
        return setReadMessageThunk()(dispatch, getState);
      case ChatActionTypeEnum.API_CHAT_ACTUAL_APP_PATH:
        return actualPathChatThunk(action.payload)(dispatch, getState);

      default:
        // if this is not global action, we don't dispatch thunk
        return next(action); // dispatch simple action to reducer
    }
  };

export default apiMiddleware;
