import { Dispatch } from 'redux';
import { RootState } from '../rootReducer';
import { ChatActionType, IChatSendFileStatus, ISetActualPathForChat } from './actions';
import { AppPortalRoutes } from '../globalStoreUtils';
import { ChatActionTypeEnum } from './action-types';
import axiosInst from '../axiosInstance';
import { getAuthToken } from '../utils';
import socket from '../socketInstance';
import {
  APIChatRoutesEnum,
  ChatStatusEnum,
  IChatConnectionData,
  IChatMessagesHistory,
  IFileData,
  IMessageData,
  IResetMessagePath,
  SocketEmitEnum,
} from './types';

//Error
const setChatErrorAC = (error: string): ChatActionType => {
  return {
    type: ChatActionTypeEnum.CHAT_SET_ERROR,
    payload: error,
  };
};

//Connection
const setConnectionMessageAC = (message: IChatConnectionData): ChatActionType => {
  return {
    type: ChatActionTypeEnum.CHAT_SET_CONNECTION_MESSAGE,
    payload: message,
  };
};

export const connectedChatThunk = () => {
  return async (dispatch: Dispatch<ChatActionType>, getState: () => RootState) => {
    const token = await getAuthToken();
    socket.emit(SocketEmitEnum.NEW_CONNECT, {
      token: token,
    });

    socket.on(SocketEmitEnum.NEW_CONNECT, (message: IChatConnectionData) => {
      dispatch(setConnectionMessageAC(message));
    });
  };
};

//Fetch History Dialog
const setHistoryDialogAC = (history: IChatMessagesHistory[]): ChatActionType => {
  return {
    type: ChatActionTypeEnum.CHAT_SET_HISTORY_DIALOG,
    payload: history,
  };
};

//Fetch History Dialog
const setUnreadMessagesAC = (unreadMessage: number): ChatActionType => {
  return {
    type: ChatActionTypeEnum.CHAT_UNREAD_MESSAGES_COUNT,
    payload: unreadMessage,
  };
};

export const getHistoryDialogChatThunk = () => {
  return async (dispatch: Dispatch<ChatActionType>, getState: () => RootState) => {
    const token = await getAuthToken();

    socket.emit(SocketEmitEnum.HISTORY, {
      token: token,
    });

    socket.on(SocketEmitEnum.HISTORY, (data: { data: IChatMessagesHistory[]; num_unread_msg: number }) => {
      dispatch(setHistoryDialogAC(data.data));
      dispatch(setUnreadMessagesAC(data.num_unread_msg));
    });
  };
};

//Fetch Response Message

export const fetchNewResponseMessageThunk = () => {
  return async (dispatch: Dispatch<ChatActionType>, getState: () => RootState) => {
    try {
      const token = await getAuthToken();

      socket.on(SocketEmitEnum.MESSAGE, () => {
        const {
          Chat: { path },
        } = getState();

        if (path.path === AppPortalRoutes.INBOX || path.isOpenedWidget) {
          socket.emit(SocketEmitEnum.READ_MSG, {
            token: token,
          });
        }

        socket.emit(SocketEmitEnum.HISTORY, {
          token: token,
        });

        socket.on(SocketEmitEnum.HISTORY, (data: { data: IChatMessagesHistory[]; num_unread_msg: number }) => {
          dispatch(setHistoryDialogAC(data.data));
          dispatch(setUnreadMessagesAC(data.num_unread_msg));
        });
      });
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

//Fetch Request Message

export const fetchNewRequestMessageThunk = (messageData: IMessageData) => {
  return async (dispatch: Dispatch<ChatActionType>, getState: () => RootState) => {
    const token = await getAuthToken();

    socket.emit(SocketEmitEnum.MESSAGE, {
      token: token,
      text: messageData.text,
    });

    socket.emit(SocketEmitEnum.HISTORY, {
      token: token,
    });

    socket.on(SocketEmitEnum.HISTORY, ({ data }: any) => {
      dispatch(setHistoryDialogAC(data));
    });
  };
};

const chatSendFileStatusAC = (status: ChatStatusEnum | null | string): IChatSendFileStatus => {
  return {
    type: ChatActionTypeEnum.CHAT_SEND_FILE_STATUS,
    payload: status,
  };
};

export const chatSendFileThunk = (data: IFileData) => {
  return async (dispatch: Dispatch<ChatActionType>, getState: () => RootState) => {
    dispatch(chatSendFileStatusAC(ChatStatusEnum.LOADING));
    try {
      const token = await getAuthToken();

      await axiosInst.post(APIChatRoutesEnum.UPLOAD, data.file, {
        headers: {
          Authorization: token,
        },
      });
      socket.emit(SocketEmitEnum.NEW_CONNECT, {
        token: token,
      });

      socket.on(SocketEmitEnum.NEW_CONNECT, ({ message }: any) => {
        dispatch(setConnectionMessageAC(message));
      });
      socket.emit(SocketEmitEnum.HISTORY, {
        token: token,
      });
      socket.on(SocketEmitEnum.HISTORY, ({ data }: any) => {
        dispatch(setHistoryDialogAC(data));
        dispatch(chatSendFileStatusAC(ChatStatusEnum.SUCCESS));
      });
    } catch (e: any) {
      console.error(e.message);
      dispatch(setChatErrorAC('Error. Connection lost'));
    }
  };
};

// Ping Pong

export const lastClientActivityThunk = () => {
  return async (dispatch: Dispatch<ChatActionType>, getState: () => RootState) => {
    const token = await getAuthToken();

    socket.emit(SocketEmitEnum.PING, {
      token: token,
    });
  };
};

// Set read messages

export const setReadMessageThunk = () => {
  return async (dispatch: Dispatch<ChatActionType>, getState: () => RootState) => {
    const token = await getAuthToken();

    socket.emit(SocketEmitEnum.READ_MSG, {
      token: token,
    });

    socket.emit(SocketEmitEnum.HISTORY, {
      token: token,
    });

    socket.on(SocketEmitEnum.HISTORY, (data: { num_unread_msg: number }) => {
      dispatch(setUnreadMessagesAC(data.num_unread_msg));
    });
  };
};

// Actual path for chat

const setActualChatPathAC = (path: IResetMessagePath): ISetActualPathForChat => {
  return {
    type: ChatActionTypeEnum.CHAT_SET_ACTUAL_APP_PATH,
    payload: path,
  };
};

export const actualPathChatThunk = (path: IResetMessagePath) => {
  return async (dispatch: Dispatch<ChatActionType>, getState: () => RootState) => {
    dispatch(setActualChatPathAC(path));
  };
};
