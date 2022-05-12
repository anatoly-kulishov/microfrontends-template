import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { modalReducer } from './modalReducer/modalReducer';

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    modal: modalReducer,
  });
