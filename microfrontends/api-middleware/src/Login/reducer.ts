import produce from "immer";
import { LoginAction } from "./actions";
import { LoginActionType } from "./action-types";
import { ErrorMessage } from "./types";

interface LoginState {
  isLoading: boolean;

  signInError: ErrorMessage;
  signInAccepted: boolean;

  recreatePasswordError: ErrorMessage;
  recreatePasswordAccepted: boolean;
}

const initialState: LoginState = {
  isLoading: false,

  signInError: "",
  signInAccepted: false,

  recreatePasswordError: "",
  recreatePasswordAccepted: false,
};

const reducer = produce(
  (state: LoginState = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
      case LoginActionType.SIGN_IN_START:
        state.signInError = "";
        state.signInAccepted = false;
        state.isLoading = true;
        return state;
      case LoginActionType.SIGN_IN_ACCEPTED:
        state.signInAccepted = true;
        state.isLoading = false;
        return state;
      case LoginActionType.SIGN_IN_DENIED:
        state.signInError = action.payload;
        state.isLoading = false;
        return state;

      case LoginActionType.RECREATE_PASSWORD_START:
        state.recreatePasswordError = "";
        state.recreatePasswordAccepted = false;
        state.isLoading = true;
        return state;
      case LoginActionType.RECREATE_PASSWORD_ACCEPTED:
        state.recreatePasswordAccepted = true;
        state.isLoading = false;
        return state;
      case LoginActionType.RECREATE_PASSWORD_DENIED:
        state.recreatePasswordError = action.payload;
        state.isLoading = false;
        return state;

      case LoginActionType.API_LOGIN_REFRESH_STATE:
        state.signInError = "";
        state.signInAccepted = false;
        state.recreatePasswordError = "";
        state.recreatePasswordAccepted = false;
        return state;

      default:
        return state;
    }
  },
  initialState
);

export default reducer;
