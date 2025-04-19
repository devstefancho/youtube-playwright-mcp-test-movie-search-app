import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPopularMovies, searchMovies } from '@/services/api';
import { Movie, MovieResponse } from '@/types/movie';
import MovieGrid from '@/components/MovieGrid';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      
      try {
        let response;
        
        if (searchQuery) {
          response = await searchMovies(searchQuery, currentPage);
        } else {
          response = await getPopularMovies(currentPage);
        }
        
        const data: MovieResponse = response.data;
        setMovies(data.results);
        setTotalPages(Math.min(data.total_pages, 500)); // TMDB는 최대 500페이지로 제한됨
      } catch (err) {
        console.error('영화 데이터를 가져오는 중 오류가 발생했습니다:', err);
        setError('영화 데이터를 가져오는 중 오류가 발생했습니다. 나중에 다시 시도해주세요.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        {searchQuery ? `"${searchQuery}" 검색 결과` : '인기 영화'}
      </h1>
      
      {error ? (
        <div className="text-center py-12">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <>
          <MovieGrid movies={movies} loading={loading} />
          
          {/* 페이지네이션 */}
          {!loading && totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded border bg-white disabled:opacity-50"
                >
                  이전
                </button>
                
                <div className="flex items-center px-4">
                  {currentPage} / {totalPages}
                </div>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded border bg-white disabled:opacity-50"
                >
                  다음
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
