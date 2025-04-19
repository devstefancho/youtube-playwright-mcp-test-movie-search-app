import axios from 'axios';

// TMDB API 설정
const API_KEY = import.meta.env.VITE_TMDB_API_KEY || ''; // .env 파일에서 API 키 가져오기
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const POSTER_SIZES = {
  small: 'w185',
  medium: 'w342',
  large: 'w500',
  original: 'original'
};

export const BACKDROP_SIZES = {
  small: 'w300',
  medium: 'w780',
  large: 'w1280',
  original: 'original'
};

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'ko-KR',
  }
});

// 이미지 URL 생성 헬퍼 함수
export const getImageUrl = (path: string | null, size = POSTER_SIZES.medium): string => {
  if (!path) return '/placeholder-poster.png';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

// API 요청 함수들
export const getPopularMovies = (page = 1) => {
  return api.get('/movie/popular', { params: { page } });
};

export const getTopRatedMovies = (page = 1) => {
  return api.get('/movie/top_rated', { params: { page } });
};

export const getMovieDetails = (id: string) => {
  return api.get(`/movie/${id}`, { params: { append_to_response: 'videos,credits,similar,recommendations' } });
};

export const searchMovies = (query: string, page = 1) => {
  return api.get('/search/movie', { params: { query, page } });
};

export default api;
