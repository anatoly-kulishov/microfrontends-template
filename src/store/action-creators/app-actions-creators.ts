import { InitializedFailed, InitializedSuccess } from '../actions/app-actions/app-actions';
import { AppActionType } from '../action-types';

export const appActions = {
  initializedSuccess: (): InitializedSuccess => ({ type: AppActionType.INITIALIZED_SUCCESS }),
  initializedFailed: (): InitializedFailed => ({ type: AppActionType.INITIALIZED_FAILED }),
};

/**
 * Initialize App
 */
export const initializeApp = () => {
  return (dispatch: Function) => {
    Promise.all([])
      .then(() => {
        dispatch(appActions.initializedSuccess());
      })
      .catch(() => dispatch(appActions.initializedFailed()));
  };
};
