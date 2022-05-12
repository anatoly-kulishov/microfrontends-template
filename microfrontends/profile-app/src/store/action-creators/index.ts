import { CloseModalAction, OpenModalAction } from '../actions';
import { ActionType } from '../action-types';

export const openModalAC = (): OpenModalAction => {
  return {
    type: ActionType.OPEN_MODAL,
  };
};

export const closeModalAC = (): CloseModalAction => {
  return {
    type: ActionType.CLOSE_MODAL,
  };
};
