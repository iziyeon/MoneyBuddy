import { loginHandlers } from './loginHandlers';
import { findIdHandlers } from './findIdHandlers';
import { signupHandlers } from './signupHandlers';

export const authHandlers = [
  ...loginHandlers,
  ...findIdHandlers,
  ...signupHandlers,
];
