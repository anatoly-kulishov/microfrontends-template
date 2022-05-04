import { AppActionType } from '../../action-types/app-action-type';

export interface InitializedSuccess {
  type: AppActionType.INITIALIZED_SUCCESS;
}

export interface InitializedFailed {
  type: AppActionType.INITIALIZED_FAILED;
}

export type AppActions = InitializedSuccess | InitializedFailed;
