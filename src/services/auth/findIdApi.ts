import axios from 'axios';
import type {
  FindIdRequest,
  FindIdResponse,
} from '../../types/api/auth/findId';

export async function findIdApi(data: FindIdRequest): Promise<FindIdResponse> {
  const response = await axios.post<FindIdResponse>(
    '/api/v1/users/find-id',
    data,
  );
  return response.data;
}
