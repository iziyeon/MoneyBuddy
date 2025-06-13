import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분
      retry: 1,
    },
  },
});

if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mocks/browser');
  console.log('🚀 MSW 워커 시작 중...');
  worker
    .start({
      onUnhandledRequest: 'warn',
    })
    .then(() => {
      console.log('✅ MSW 워커가 성공적으로 시작되었습니다.');
    });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
