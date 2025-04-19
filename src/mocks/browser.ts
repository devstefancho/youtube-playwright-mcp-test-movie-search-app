import { setupWorker } from 'msw';
import { handlers } from './handlers';

// 브라우저 환경에서 MSW 워커 설정
export const worker = setupWorker(...handlers);
