import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createReservationApi,
  getReservationsApi,
  getReservationDetailApi,
  cancelReservationApi,
} from '../services/reservation/reservationApi';

// 예약 생성
export const useCreateReservation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReservationApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
      queryClient.invalidateQueries({ queryKey: ['consultations'] });
    },
  });
};

// 예약 목록 조회
export const useReservations = () => {
  return useQuery({
    queryKey: ['reservations'],
    queryFn: getReservationsApi,
  });
};

// 예약 상세 조회
export const useReservationDetail = (reservationId: number | undefined) => {
  return useQuery({
    queryKey: ['reservation', reservationId],
    queryFn: () =>
      reservationId ? getReservationDetailApi(reservationId) : null,
    enabled: !!reservationId,
  });
};

// 예약 취소
export const useCancelReservation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelReservationApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
    },
  });
};
