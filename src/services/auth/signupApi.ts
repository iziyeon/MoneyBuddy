import axios from 'axios';
import type { SignupRequest } from '../../types/api/auth/signup';

export async function signupApi(
  data: SignupRequest,
): Promise<{ message: string }> {
  const response = await axios.post<{ message: string }>(
    '/api/v1/users/signup',
    data,
  );
  return response.data;
}
