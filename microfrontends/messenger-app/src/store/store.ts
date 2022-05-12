import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { GlobalStore } from 'redux-micro-frontend';
import { createBrowserHistory } from 'history';

import { createRootReducer } from './reducers';
import { GlobalStoreFoldersEnum } from '../globalStoreUtils';

export const history = createBrowserHistory();

const rootReducer = createRootReducer(history);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(routerMiddleware(history))));

export type RootState = ReturnType<typeof rootReducer>;

const globalStore = GlobalStore.Get();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
globalStore.RegisterStore(GlobalStoreFoldersEnum.MESSENGER, store as Store<RootState, any>);
