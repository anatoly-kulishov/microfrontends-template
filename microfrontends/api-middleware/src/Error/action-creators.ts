import { ErrorActionEnum } from './action-types';
import { ISetErrorAction } from './actions';

export const setErrorAC = (code: number): ISetErrorAction => {
  return {
    type: ErrorActionEnum.SET_ERROR,
    payload: code,
  };
};
