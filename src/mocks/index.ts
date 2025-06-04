// src/mocks/handlers/index.ts

import { authHandlers } from './handlers/auth/index';
import { userInfoHandlers } from '../mocks/handlers/user/userInfoHandlers';

export const handlers = [...authHandlers, ...userInfoHandlers];
