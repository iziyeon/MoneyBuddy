// src/mocks/handlers/index.ts

import { authHandlers } from './handlers/auth/index';
import { userInfoHandlers } from './handlers/user/userInfoHandlers';
import { experthandlers } from './handlers/expert/expertHandlers';
import { advisorHandlers } from './handlers/advisor/advisorHandlers';

export const handlers = [
  ...authHandlers,
  ...userInfoHandlers,
  ...experthandlers,
  ...advisorHandlers,
];
