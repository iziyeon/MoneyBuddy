import axios from 'axios';
import { API_ENDPOINTS } from '../../config/api';
import type { MonthlyExpert } from '../../types/api/expert/expert';

export const getMonthlyExperts = async (): Promise<MonthlyExpert[]> => {
  const response = await axios.get(API_ENDPOINTS.getMonthlyExperts);
  return response.data;
};
