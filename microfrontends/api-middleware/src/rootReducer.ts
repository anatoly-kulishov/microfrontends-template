import ProfileReducer from "./Profile/reducer";
import LoginReducer from "./Login/reducer";
import ChatReducer from "./Chat/reducer";

import { combineReducers } from "redux";
import { REFRESH_API_STATE_ACTION_TYPE } from "./globalStoreUtils";

const rootReducer = combineReducers({
  Profile: ProfileReducer,
  Login: LoginReducer,
  Chat: ChatReducer,
});

const rootReducerWrapper = (state: any, action: any) => {
  if (action.type === REFRESH_API_STATE_ACTION_TYPE) {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

export default rootReducerWrapper;

export type RootState = ReturnType<typeof rootReducer>; // for using react-redux
