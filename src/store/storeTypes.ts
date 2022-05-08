export enum AdminStepEnum {}

export enum UserStepEnum {}

export enum RoleEnum {
  ADMIN = 'admin',
  USER = 'user',
}

export enum AppPortalRoutes {
  HOME = '/home',
  LOGIN = '/login',
  ERROR = '/error',
}

export type Email = string;
export type ErrorMessage = string;

export interface SignInFormValues {
  username: Email;
  password: string;
}

export interface RecreatePasswordFormValues extends SignInFormValues {
  code: string;
}

export type ProfileDataStatus = null | 'loading' | 'loaded';

export enum ChatStatusEnum {
  'SUCCESS' = 'success',
  'LOADING' = 'loading',
}

export interface IChatConnectionData {
  message: string;
  role: string;
}
