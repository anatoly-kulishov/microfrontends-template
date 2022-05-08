export interface IChatMessagesHistory {
  file?: string | null;
  from?: string;
  from_sub?: string;
  isFile?: boolean;
  text?: string;
  timestamp?: number;
  to?: "cvb-concierge";
  to_sub?: null | string;
}

export enum ChatStatusEnum {
  "SUCCESS" = "success",
  "LOADING" = "loading",
}

export interface IChatConnectionData {
  message: string;
  role: string;
}

export enum SocketEmitEnum {
  NEW_CONNECT = "new_connect",
  HISTORY = "history",
  MESSAGE = "message",
  PING = "ping",
  READ_MSG = "read_msg",
}

export enum APIChatRoutesEnum {
  UPLOAD = "/api/chat/upload",
}

export interface IMessageData {
  text: string;
  sub?: string | null;
}

export interface IResetMessagePath {
  path: string;
  isOpenedWidget: boolean;
}

export interface IFileData {
  recipient_sub?: string | null;
  file: FormData;
}
