import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore, Store } from 'redux';
import { GlobalStore } from 'redux-micro-frontend';
import { createBrowserHistory } from 'history';

import { createRootReducer } from './reducers';
import { GlobalStoreFoldersEnum, IApiState } from '../globalStoreUtils';
import { setChatApiStateAC, setLoginApiStateAC, setProfileApiStateAC } from './action-creators';

export const history = createBrowserHistory();

const rootReducer = createRootReducer(history);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(routerMiddleware(history))));

export type RootState = ReturnType<typeof rootReducer>;

const globalStore = GlobalStore.Get();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
globalStore.RegisterStore(GlobalStoreFoldersEnum.MAIN_PORTAL, store as Store<RootState, any>, [GlobalStore.AllowAll]);

globalStore.SubscribeToPartnerState(
  GlobalStoreFoldersEnum.MAIN_PORTAL,
  GlobalStoreFoldersEnum.API,
  (apiState: IApiState) => {
    if (apiState.Login !== store.getState().api.Login) {
      store.dispatch(setLoginApiStateAC(apiState.Login));
    }
  },
);

globalStore.SubscribeToPartnerState(
  GlobalStoreFoldersEnum.MAIN_PORTAL,
  GlobalStoreFoldersEnum.API,
  (apiState: IApiState) => {
    if (apiState.Profile !== store.getState().api.Profile) {
      store.dispatch(setProfileApiStateAC(apiState.Profile));
    }
  },
);

globalStore.SubscribeToPartnerState(
  GlobalStoreFoldersEnum.MAIN_PORTAL,
  GlobalStoreFoldersEnum.API,
  (apiState: IApiState) => {
    if (apiState.Chat !== store.getState().api.Chat) {
      store.dispatch(setChatApiStateAC(apiState.Chat));
    }
  },
);
