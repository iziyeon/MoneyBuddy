export * from './Validation';
export * from './formatters';

// 상수 re-export
export { VALIDATION_RULES } from '../config/constants';

// 이메일 유효성 검사를 위한 정규식
export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// 전화번호 유효성 검사를 위한 정규식
export const PHONE_REGEX = /^01[016789]-\d{3,4}-\d{4}$/;

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ko-KR').format(amount);
};

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3,4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone;
};
