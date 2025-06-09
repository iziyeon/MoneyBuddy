export type RequestResetPasswordRequest = {
  email: string;
};

export type VerifyResetCodeRequest = {
  email: string;
  code: string;
};

export type ResetPasswordRequest = {
  token: string;
  newPassword: string;
};
