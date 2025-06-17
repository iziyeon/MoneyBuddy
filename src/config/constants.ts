export const APP_CONFIG = {
  NAME: 'MoneyBuddy',
  VERSION: '1.0.0',
  MOBILE_WIDTH: 390,
  HEADER_HEIGHT: 60,
} as const;

export const PAGINATION = {
  ITEMS_PER_PAGE: 10,
  INFINITE_SCROLL_THRESHOLD: 0.1,
} as const;

export const VALIDATION_RULES = {
  NAME_MIN_LENGTH: 2,
  PASSWORD_MIN_LENGTH: 10,
  PHONE_REGEX: /^01[016789]-\d{3,4}-\d{4}$/,
  EMAIL_REGEX: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  EMAIL_ID_REGEX: /^[A-Za-z0-9._%+-]+$/,
  PASSWORD_REGEX: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{10,}$/,
} as const;

export const SORT_OPTIONS = [
  '최신순',
  '북마크순',
  '평점순',
  '상담건순',
  '낮은가격순',
  '높은가격순',
  '이름순',
  '리뷰많은순',
] as const;

export const MOCK_CONFIG = {
  VERIFICATION_CODE: '123456',
  RESET_TOKEN: 'valid-reset-token',
  TEST_EMAIL: 'test@example.com',
  TEST_PASSWORD: 'password123',
} as const;

// EXPERT_FIELDS는 expertData.ts에서 import하여 사용
export { EXPERT_FIELDS } from '../data/expertData';
