import { API_ENDPOINTS } from '../../config/api';
import type { UpdateUserRequest } from '../../types/auth';

export interface User {
  id: number;
  email: string;
  name: string;
  nickname: string;
  role: string;
}

export const getUserById = async (userId: number): Promise<User> => {
  const response = await fetch(`/api/v1/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
};

export const updateUser = async (
  id: number,
  data: UpdateUserRequest,
): Promise<User> => {
  const response = await fetch(`/api/v1/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update user');
  return response.json();
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await fetch('/api/v1/users/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch current user');
  return response.json();
};
