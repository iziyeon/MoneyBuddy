// src/mocks/handlers/index.ts

import { authHandlers } from './handlers/auth/index';
import { userInfoHandlers } from '../mocks/handlers/user/userInfoHandlers';
import { resetPasswordHandlers } from '../mocks/handlers/auth/resetPasswordHandlers';
import { experthandlers } from './handlers/expert/expertHandlers';

export const handlers = [
  ...authHandlers,
  ...userInfoHandlers,
  ...resetPasswordHandlers,
  ...experthandlers,
];
