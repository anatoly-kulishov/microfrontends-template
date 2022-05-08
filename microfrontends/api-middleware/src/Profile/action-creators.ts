import { Dispatch } from "redux";
import { IProfileSetDataAction, ProfileAction } from "./actions";
import { IProfileDataResponse } from "./types";
import { RootState } from "../rootReducer";
import { ProfileActionType } from "./action-types";

export const profileDataGetThunk = () => {
  return async (
    dispatch: Dispatch<ProfileAction>,
    getState: () => RootState
  ) => {
    return {}
  };
};

export const profileFetchDataStartAC = (): ProfileAction => {
  return {
    type: ProfileActionType.PROFILE_FETCH_START,
  };
};

export const profileFetchDataCompleteAC = (): ProfileAction => {
  return {
    type: ProfileActionType.PROFILE_FETCH_COMPLETE,
  };
};

export const profileSetData = (
  data: IProfileDataResponse
): IProfileSetDataAction => {
  return {
    type: ProfileActionType.PROFILE_SET_DATA,
    payload: data,
  };
};

//Profile put thunk

export const profilePutStartAC = (): ProfileAction => {
  return {
    type: ProfileActionType.PROFILE_PUT_START,
  };
};

export const profilePutCompleteAC = (): ProfileAction => {
  return {
    type: ProfileActionType.PROFILE_PUT_COMPLETE,
  };
};

export const profileDataPutThunk = (data: IProfileDataResponse) => {
  return async (
    dispatch: Dispatch<ProfileAction>,
    getState: () => RootState
  ) => {
    return {}
  };
}