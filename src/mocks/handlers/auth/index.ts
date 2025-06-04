import { loginHandlers } from './loginHandlers';
import { findIdHandlers } from './findIdHandlers';

export const authHandlers = [...loginHandlers, ...findIdHandlers];
