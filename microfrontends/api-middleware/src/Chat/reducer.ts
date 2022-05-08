import produce from "immer";
import {
  ChatStatusEnum,
  IChatConnectionData,
} from "./types";
import { ChatActionType } from "./actions";
import { ChatActionTypeEnum } from "./action-types";

interface IChatApiState {
  connection: IChatConnectionData | null;
  history: any;
  fileStatus: ChatStatusEnum | null | string;
  error: string;
  unreadMessageCounter: number;
  path: any;
}

const initialState: IChatApiState = {
  connection: null,
  history: null,
  fileStatus: null,
  error: "",
  unreadMessageCounter: 0,
  path: null,
};

const reducer = produce(
  (
    state: IChatApiState = initialState,
    action: ChatActionType
  ): IChatApiState => {
    switch (action.type) {
      case ChatActionTypeEnum.CHAT_SET_CONNECTION_MESSAGE:
        state.connection = action.payload;
        return state;
      case ChatActionTypeEnum.CHAT_SET_HISTORY_DIALOG:
        state.history = action.payload;
        return state;
      case ChatActionTypeEnum.CHAT_UNREAD_MESSAGES_COUNT:
        state.unreadMessageCounter = action.payload;
        return state;
      case ChatActionTypeEnum.CHAT_SEND_FILE_STATUS:
        state.fileStatus = action.payload;
        return state;
      case ChatActionTypeEnum.CHAT_SET_ERROR:
        state.error = action.payload;
        return state;
      case ChatActionTypeEnum.API_CHAT_REFRESH_ERROR:
        state.error = "";
        return state;
      case ChatActionTypeEnum.API_CHAT_REFRESH_FILE_STATUS:
        state.fileStatus = null;
        return state;
      case ChatActionTypeEnum.CHAT_SET_ACTUAL_APP_PATH:
        state.path = action.payload;
        return state;
      default:
        return state;
    }
  },
  initialState
);

export default reducer;
