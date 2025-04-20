# 영화 검색 앱 (Movie Search App)

- 이 프로젝트는 영화 정보를 검색하고 둘러볼 수 있는 웹 애플리케이션입니다.
- Youtube Link : https://youtu.be/FZekDTClW48

## 기술 스택

- React
- TypeScript
- Vite
- React Router
- TailwindCSS
- Axios
- MSW (Mock Service Worker) - 개발 환경에서 API 모의 처리용

## 주요 기능

- 인기 영화 목록 표시
- 영화 검색 기능 (자동완성 지원)
- 영화 상세 정보 페이지
- 반응형 디자인

## 시작하기

### 필수 조건

- Node.js 18.x 이상
- npm 또는 yarn 또는 pnpm

### 설치

```bash
# 필요한 패키지 설치
npm install

# 개발 서버 실행
npm run dev

```

### 환경 변수 설정

```bash
# tmbd link: https://developer.themoviedb.org/reference/intro/getting-started
# env 복사 후 TMBD의 API Key를 넣으세요
cp .env.example .env
```

`.env` 파일에서 TMDB API 키를 설정할 수 있습니다:

```
VITE_TMDB_API_KEY=your_tmdb_api_key
```

API 키가 설정되지 않은 경우, 자동으로 Mock Service Worker가 활성화되어 더미 데이터를 제공합니다.

## 디렉토리 구조

```
/src
  /components - UI 컴포넌트
  /pages - 페이지 컴포넌트
  /services - API 서비스
  /types - TypeScript 타입 정의
  /mocks - MSW 모의 데이터 및 핸들러
```

## API 정보

이 프로젝트는 [TMDB API](https://www.themoviedb.org/documentation/api)를 사용합니다. API 키는 TMDB 웹사이트에서 무료로 얻을 수 있습니다.

## License

MIT
