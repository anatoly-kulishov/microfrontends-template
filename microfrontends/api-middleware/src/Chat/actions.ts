import { ChatActionTypeEnum } from "./action-types";
import {
  ChatStatusEnum,
  IChatConnectionData,
  IChatMessagesHistory,
  IMessageData,
  IResetMessagePath,
} from "./types";

export interface IAPIConnectionChatAction {
  type: ChatActionTypeEnum.API_CHAT_CONNECTION;
  payload: null;
}

export interface IChatSetConnectionMessageAction {
  type: ChatActionTypeEnum.CHAT_SET_CONNECTION_MESSAGE;
  payload: IChatConnectionData;
}

export interface IAPIGetHistoryDialogAction {
  type: ChatActionTypeEnum.API_CHAT_GET_HISTORY_DIALOG;
  payload: null;
}

export interface ISetHistoryDialogAction {
  type: ChatActionTypeEnum.CHAT_SET_HISTORY_DIALOG;
  payload: IChatMessagesHistory[];
}

export interface IFetchNewResponseMessage {
  type: ChatActionTypeEnum.API_CHAT_NEW_RESPONSE_MESSAGE;
  payload: null;
}

export interface IFetchNewRequestMessage {
  type: ChatActionTypeEnum.API_CHAT_NEW_REQUEST_MESSAGE;
  payload: IMessageData;
}

export interface IChatSendFile {
  type: ChatActionTypeEnum.API_CHAT_SEND_FILE;
  payload: FormData;
}

export interface IChatSendFileStatus {
  type: ChatActionTypeEnum.CHAT_SEND_FILE_STATUS;
  payload: ChatStatusEnum | null | string;
}

export interface IChatSetError {
  type: ChatActionTypeEnum.CHAT_SET_ERROR;
  payload: string;
}

export interface IChatRefreshError {
  type: ChatActionTypeEnum.API_CHAT_REFRESH_ERROR;
}

export interface IChatRefreshFileStatus {
  type: ChatActionTypeEnum.API_CHAT_REFRESH_FILE_STATUS;
}

// Last Activity
export interface IChatLastClientActivity {
  type: ChatActionTypeEnum.API_CHAT_CLIENT_ACTIVITY;
}

// Unread Messages
export interface IChatUnreadMessagesCount {
  type: ChatActionTypeEnum.CHAT_UNREAD_MESSAGES_COUNT;
  payload: number;
}

// Set read message counter
export interface IChatReadMessage {
  type: ChatActionTypeEnum.API_CHAT_SET_READ_MESSAGES;
}

// Actual path for chat
export interface IApiActualPathForChat {
  type: ChatActionTypeEnum.API_CHAT_ACTUAL_APP_PATH;
  payload: IResetMessagePath;
}

export interface ISetActualPathForChat {
  type: ChatActionTypeEnum.CHAT_SET_ACTUAL_APP_PATH;
  payload: IResetMessagePath;
}

export type ChatActionType =
  | IAPIConnectionChatAction
  | IChatSetConnectionMessageAction
  | IAPIGetHistoryDialogAction
  | ISetHistoryDialogAction
  | IFetchNewResponseMessage
  | IFetchNewRequestMessage
  | IChatSendFile
  | IChatSendFileStatus
  | IChatSetError
  | IChatRefreshError
  | IChatRefreshFileStatus
  | IChatLastClientActivity
  | IChatUnreadMessagesCount
  | IChatReadMessage
  | IApiActualPathForChat
  | ISetActualPathForChat;
