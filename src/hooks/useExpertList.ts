import { useQuery } from '@tanstack/react-query';
import { getExperts } from '../services/experts/expertApi';
import type { Expert, ExpertFilterParams } from '../types/expert';

export const useExpertList = (params?: ExpertFilterParams) => {
  return useQuery({
    queryKey: ['experts', params],
    queryFn: () => getExperts(params),
  });
};
