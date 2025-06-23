import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import {
  fetchMessages,
  sendTextMessage,
  sendImageMessage,
  markAsRead,
} from '../services/chat/chatApi';

export const useChatMessages = (roomId: number | string) => {
  return useInfiniteQuery({
    queryKey: ['chatMessages', roomId],
    queryFn: ({ pageParam = 0 }) => fetchMessages(roomId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.last ? undefined : allPages.length;
    },
    refetchOnWindowFocus: false,
  });
};

export const useSendTextMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sendTextMessage,
    onSuccess: (_, { roomId }) => {
      queryClient.invalidateQueries({ queryKey: ['chatMessages', roomId] });
    },
  });
};

export const useSendImageMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sendImageMessage,
    onSuccess: (_, { roomId }) => {
      queryClient.invalidateQueries({ queryKey: ['chatMessages', roomId] });
    },
  });
};

export const useMarkMessageAsRead = () => {
  return useMutation({
    mutationFn: ({
      roomId,
      messageId,
    }: {
      roomId: number | string;
      messageId: number;
    }) => markAsRead({ roomId: String(roomId), messageId }),
  });
};
