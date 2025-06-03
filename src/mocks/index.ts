import { loginHandlers } from './handlers/auth/loginHandlers';

export const handlers = [
  ...loginHandlers,
  // 이후 계속 핸들러 확장
];
