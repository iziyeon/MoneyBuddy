import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getUserById,
  updateUser,
  getCurrentUser,
  getUserSettings,
  updateUserSettings,
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
    mutationFn: ({ id, data }: { id: number; data: UpdateUserRequest }) => {
      console.log('🔍 useUpdateUser - API 호출:', { id, data });
      return updateUser(id, data);
    },
    onSuccess: (data, variables) => {
      console.log('🔍 useUpdateUser - onSuccess:', data);
      // 사용자 정보 캐시 업데이트
      queryClient.setQueryData(['user', variables.id], data);
      queryClient.setQueryData(['currentUser'], data);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: error => {
      console.error('🔍 useUpdateUser - onError:', error);
    },
  });
};

// 사용자 설정 관련 hook - 명세서 준수
export const useUserSettings = (userId: number) => {
  return useQuery({
    queryKey: ['userSettings', userId],
    queryFn: () => getUserSettings(userId),
    enabled: !!userId,
  });
};

export const useUpdateUserSettings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, settings }: { userId: number; settings: any }) =>
      updateUserSettings(userId, settings),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['userSettings', variables.userId],
      });
    },
  });
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 5, // 5분
  });
};
