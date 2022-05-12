import produce from 'immer';

import { ActionType } from '../../action-types';
import { ModalsAction } from '../../actions';

interface ModalState {
  isModalOpen: boolean;
}

const initialState: ModalState = {
  isModalOpen: false,
};

export const modalReducer = produce((state: ModalState = initialState, action: ModalsAction): ModalState => {
  switch (action.type) {
    case ActionType.OPEN_MODAL:
      state.isModalOpen = true;
      return state;
    case ActionType.CLOSE_MODAL:
      state.isModalOpen = false;
      return state;
    default:
      return state;
  }
}, initialState);
