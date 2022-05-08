import { RootState } from '../store';

export const getApiState = (state: RootState) => state.api;
export const getLoginApiState = (state: RootState) => state.api.Login;
export const getProfileApiState = (state: RootState) => state.api.Profile;
export const getChatApiState = (state: RootState) => state.api.Chat;
