export interface User {
  id: number;
  nickname: string;
  role: string;
  email?: string;
  profile_image?: string;
  name?: string;
  phone?: string;
  created_at?: string;
  updated_at?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface FindIdRequest {
  name: string;
  phone: string;
}

export interface FindIdResponse {
  email: string;
  joinDate: string;
}

export interface RequestResetPasswordRequest {
  email: string;
}

export interface VerifyResetCodeRequest {
  email: string;
  code: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

export interface SignupRequest {
  name: string;
  phone: string;
  email: string;
  password: string;
  agreementTerm: string[];
}

export interface SignupResponse {
  message: string;
  user?: User;
}

export interface UpdateUserRequest {
  nickname?: string;
  profile_image?: string;
}

export interface UpdateUserResponse {
  id: number;
  nickname: string;
  profile_image: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}
