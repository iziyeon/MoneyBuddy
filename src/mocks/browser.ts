import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';
import { advisorHandlers } from './handlers/advisor/advisorHandlers';

// 모든 핸들러를 명시적으로 등록
export const worker = setupWorker(...handlers, ...advisorHandlers);
