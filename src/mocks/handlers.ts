import { rest } from 'msw';
import { popularMovies, movieDetails, mockSearchResults } from './data';

// TMDB API 기본 URL
const baseUrl = 'https://api.themoviedb.org/3';

export const handlers = [
  // 인기 영화 목록 가져오기
  rest.get(`${baseUrl}/movie/popular`, (req, res, ctx) => {
    const page = req.url.searchParams.get('page') || '1';
    
    // 페이지네이션 처리
    const pageNum = parseInt(page);
    const paginatedResults = {
      ...popularMovies,
      page: pageNum
    };
    
    return res(
      ctx.status(200),
      ctx.json(paginatedResults)
    );
  }),
  
  // 상위 평점 영화 목록 가져오기
  rest.get(`${baseUrl}/movie/top_rated`, (req, res, ctx) => {
    const page = req.url.searchParams.get('page') || '1';
    
    // 평점 순으로 정렬된 영화 목록 반환
    const sortedMovies = {
      ...popularMovies,
      page: parseInt(page),
      results: [...popularMovies.results].sort((a, b) => b.vote_average - a.vote_average)
    };
    
    return res(
      ctx.status(200),
      ctx.json(sortedMovies)
    );
  }),
  
  // 영화 상세 정보 가져오기
  rest.get(`${baseUrl}/movie/:id`, (req, res, ctx) => {
    const { id } = req.params;
    
    // 요청된 영화 ID에 해당하는 상세 정보가 있는지 확인
    if (movieDetails[id as string]) {
      return res(
        ctx.status(200),
        ctx.json(movieDetails[id as string])
      );
    }
    
    // 존재하지 않는 ID인 경우 첫 번째 영화 반환 (실제로는 404를 반환해야 하지만 테스트 목적)
    return res(
      ctx.status(200),
      ctx.json(movieDetails['1'])
    );
  }),
  
  // 영화 검색 기능
  rest.get(`${baseUrl}/search/movie`, (req, res, ctx) => {
    const query = req.url.searchParams.get('query') || '';
    const page = req.url.searchParams.get('page') || '1';
    
    // 검색어가 없는 경우 빈 결과 반환
    if (!query.trim()) {
      return res(
        ctx.status(200),
        ctx.json({
          page: 1,
          results: [],
          total_pages: 0,
          total_results: 0
        })
      );
    }
    
    // 검색 결과 반환
    const searchResults = mockSearchResults(query);
    
    return res(
      ctx.status(200),
      ctx.json({
        ...searchResults,
        page: parseInt(page)
      })
    );
  })
];
