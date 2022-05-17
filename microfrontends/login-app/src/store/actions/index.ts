import { ActionType } from '../action-types';

export interface OpenModalAction {
  type: ActionType.OPEN_MODAL;
}

export interface CloseModalAction {
  type: ActionType.CLOSE_MODAL;
}

export type ModalsAction = OpenModalAction | CloseModalAction;
