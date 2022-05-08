import produce from 'immer';
import { ProfileAction } from './actions';
import { ProfileActionType } from './action-types';
import { ProfileDataStatus } from './types';

interface IProfileApiState {
  data: any;
  status: ProfileDataStatus;
  putStatus: ProfileDataStatus;
}

const initialState: IProfileApiState = {
  status: null,
  putStatus: null,
  data: null,
};

const reducer = produce((state: IProfileApiState = initialState, action: ProfileAction): IProfileApiState => {
  switch (action.type) {
    case ProfileActionType.PROFILE_FETCH_START:
      state.status = 'loading';
      return state;
    case ProfileActionType.PROFILE_FETCH_COMPLETE:
      state.status = 'loaded';
      return state;
    case ProfileActionType.PROFILE_PUT_START:
      state.putStatus = 'loading';
      return state;
    case ProfileActionType.PROFILE_PUT_COMPLETE:
      state.putStatus = 'loaded';
      return state;
    case ProfileActionType.PROFILE_SET_DATA:
      state.data = action.payload;
      return state;
    default:
      return state;
  }
}, initialState);

export default reducer;
