import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getConsultations,
  getConsultationById,
} from '../services/consultation/consultationApi';

export const useConsultations = () => {
  return useQuery({
    queryKey: ['consultations'],
    queryFn: getConsultations,
  });
};

export const useConsultation = (id: number) => {
  return useQuery({
    queryKey: ['consultation', id],
    queryFn: () => getConsultationById(id),
    enabled: !!id,
  });
};
