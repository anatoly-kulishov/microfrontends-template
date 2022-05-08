export type Email = string;
export type ErrorMessage = string;

export interface SignInFormValues {
  username: Email;
  password: string;
}

export interface RecreatePasswordFormValues extends SignInFormValues {
  code: string;
}
