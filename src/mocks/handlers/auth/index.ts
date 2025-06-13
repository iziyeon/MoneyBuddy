import { findIdHandlers } from './findIdHandlers';
import { loginHandlers } from './loginHandlers';
import { resetPasswordHandlers } from './resetPasswordHandlers';

// 모든 auth 핸들러를 하나로 통합
export const authHandlers = [
  ...findIdHandlers,
  ...loginHandlers,
  ...resetPasswordHandlers,
];
