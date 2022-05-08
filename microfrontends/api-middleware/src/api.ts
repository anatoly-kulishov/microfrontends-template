import { applyMiddleware, createStore } from 'redux';
import { GlobalStore } from 'redux-micro-frontend';
import { composeWithDevTools } from 'redux-devtools-extension';

import { GlobalStoreFolders, REFRESH_API_STATE_ACTION_TYPE } from './globalStoreUtils';
import { ProfileActionType } from './Profile/action-types';
import { ChatActionTypeEnum } from './Chat/action-types';
import { LoginActionType } from './Login/action-types';
import apiMiddleware from './APIMiddleware';
import rootReducer from './rootReducer';

const api = createStore(rootReducer, composeWithDevTools(applyMiddleware(apiMiddleware)));

const globalStore = GlobalStore.Get(); // take instance of global store
globalStore.RegisterStore(GlobalStoreFolders.API, api); // registering/adding our store in it

globalStore.RegisterGlobalActions(GlobalStoreFolders.API, [
  // registering global actions, that this store will catch from other Apps

  LoginActionType.API_LOGIN_CHECK_AUTH,
  LoginActionType.API_LOGIN_SIGN_IN,
  LoginActionType.API_LOGIN_SIGN_OUT,
  LoginActionType.API_LOGIN_FORGOT_PASSWORD,
  LoginActionType.API_LOGIN_RECREATE_PASSWORD,
  LoginActionType.API_LOGIN_REFRESH_STATE,

  ProfileActionType.API_PROFILE_FETCH_DATA,
  ProfileActionType.API_PROFILE_PUT_DATA,

  ChatActionTypeEnum.API_CHAT_CONNECTION,
  ChatActionTypeEnum.API_CHAT_GET_HISTORY_DIALOG,
  ChatActionTypeEnum.API_CHAT_GET_HISTORY_DIALOG,
  ChatActionTypeEnum.API_CHAT_NEW_RESPONSE_MESSAGE,
  ChatActionTypeEnum.API_CHAT_NEW_REQUEST_MESSAGE,
  ChatActionTypeEnum.API_CHAT_SEND_FILE,
  ChatActionTypeEnum.API_CHAT_REFRESH_ERROR,
  ChatActionTypeEnum.API_CHAT_REFRESH_FILE_STATUS,
  ChatActionTypeEnum.API_CHAT_CLIENT_ACTIVITY,
  ChatActionTypeEnum.API_CHAT_SET_READ_MESSAGES,
  ChatActionTypeEnum.API_CHAT_ACTUAL_APP_PATH,

  REFRESH_API_STATE_ACTION_TYPE,
]);
