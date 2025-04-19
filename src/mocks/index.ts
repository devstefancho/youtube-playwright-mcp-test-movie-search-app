// MSW 브라우저 모의 API 설정
// 개발 모드에서만 MSW 활성화
async function initMocks() {
  if (process.env.NODE_ENV === 'development') {
    // .env 파일에서 API 키가 없을 경우에만 MSW 활성화
    if (!import.meta.env.VITE_TMDB_API_KEY) {
      console.log('🔶 MSW 모의 API가 활성화되었습니다.');
      const { worker } = await import('./browser');
      return worker.start({
        onUnhandledRequest: 'bypass', // 처리되지 않은 요청은 무시
      });
    }
  }
  
  return Promise.resolve();
}

export default initMocks;
