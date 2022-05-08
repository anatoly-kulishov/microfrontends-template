import produce from 'immer';

import { ActionType } from '../../action-types';
import { Action } from '../../actions';

export interface ErrorState {
  error: number | null;
}

const initialState: ErrorState = {
  error: null,
};

export const errorReducer = produce((state: ErrorState = initialState, action: Action): ErrorState => {
  switch (action.type) {
    case ActionType.SET_ERROR:
      state.error = action.payload;
      return state;
    case ActionType.CLEAN_ERROR:
      state.error = null;
      return state;
    default:
      return state;
  }
}, initialState);
