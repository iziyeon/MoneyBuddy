import { setupWorker } from 'msw/browser';
import { handlers } from './index';

console.log('🔧 MSW 핸들러 개수:', handlers.length);

export const worker = setupWorker(...handlers);
