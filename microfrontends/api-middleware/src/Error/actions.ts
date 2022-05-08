import { ErrorActionEnum } from "./action-types";

export interface ISetErrorAction {
  type: ErrorActionEnum.SET_ERROR;
  payload: number;
}

export type ErrorActionType = ISetErrorAction;
