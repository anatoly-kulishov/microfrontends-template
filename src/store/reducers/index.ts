import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { apiReducer } from './apiReducer/apiReducer';
import { errorReducer } from './errorReducer/errorReducer';

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    api: apiReducer,
    error: errorReducer,
  });
