import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getUserById,
  updateUser,
  getCurrentUser,
} from '../services/auth/userApi';
import type { UpdateUserRequest } from '../types/auth';

export const useUserProfile = (userId?: number) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => (userId ? getUserById(userId) : getCurrentUser()),
    enabled: !!userId || userId === undefined, // userId가 undefined면 현재 사용자 조회
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateUserRequest }) =>
      updateUser(id, data),
    onSuccess: (data, variables) => {
      // 사용자 정보 캐시 업데이트
      queryClient.setQueryData(['user', variables.id], data);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['user', 'me'],
    queryFn: getCurrentUser,
  });
};
