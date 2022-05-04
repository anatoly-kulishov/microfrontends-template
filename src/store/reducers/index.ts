import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { appReducer } from './appReducer/appReducer';

export const reducers = combineReducers({
  app: appReducer,
});

export type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;
