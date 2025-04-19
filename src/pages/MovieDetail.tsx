import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails, getImageUrl, BACKDROP_SIZES, POSTER_SIZES } from '@/services/api';
import { MovieDetail as MovieDetailType } from '@/types/movie';
import MovieCard from '@/components/MovieCard';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const response = await getMovieDetails(id);
        setMovie(response.data);
      } catch (err) {
        console.error('영화 상세 정보를 가져오는 중 오류가 발생했습니다:', err);
        setError('영화 상세 정보를 가져오는 중 오류가 발생했습니다. 나중에 다시 시도해주세요.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
    // 페이지 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-80 bg-gray-300 rounded-lg mb-8"></div>
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
        <div className="h-40 bg-gray-200 rounded mb-8"></div>
        <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="card">
              <div className="aspect-[2/3] bg-gray-300"></div>
              <div className="p-4">
                <div className="h-5 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error || '영화를 찾을 수 없습니다.'}</p>
        <Link to="/" className="inline-block mt-4 btn btn-primary">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  // 상영 시간을 시간과 분으로 변환
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const formattedRuntime = `${hours}시간 ${minutes}분`;

  // 개봉일 포맷팅
  const releaseDate = movie.release_date 
    ? new Date(movie.release_date).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '정보 없음';

  return (
    <div>
      {/* 배경 이미지 */}
      {movie.backdrop_path && (
        <div className="relative h-96 mb-8 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={getImageUrl(movie.backdrop_path, BACKDROP_SIZES.large)}
            alt={`${movie.title} backdrop`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            {movie.tagline && (
              <p className="text-xl italic text-gray-200">{movie.tagline}</p>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 포스터 및 기본 정보 */}
        <div>
          <div className="card overflow-hidden">
            <img
              src={getImageUrl(movie.poster_path, POSTER_SIZES.large)}
              alt={`${movie.title} poster`}
              className="w-full"
            />
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">장르</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {movie.genres.map((genre) => (
                  <span key={genre.id} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">개봉일</h3>
              <p>{releaseDate}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">상영 시간</h3>
              <p>{formattedRuntime}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">평점</h3>
              <div className="flex items-center mt-1">
                <span className="text-2xl font-bold">{movie.vote_average.toFixed(1)}</span>
                <span className="ml-2 text-sm text-gray-500">/ 10 ({movie.vote_count.toLocaleString()} 투표)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 주요 정보 및 출연진 */}
        <div className="md:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">줄거리</h2>
            <p className="text-gray-700 leading-relaxed">
              {movie.overview || '줄거리 정보가 없습니다.'}
            </p>
          </div>

          {/* 출연진 */}
          {movie.credits.cast && movie.credits.cast.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">주요 출연진</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {movie.credits.cast.slice(0, 8).map((person) => (
                  <div key={person.id} className="card">
                    <div className="aspect-[2/3] bg-gray-100">
                      <img
                        src={getImageUrl(person.profile_path, POSTER_SIZES.small)}
                        alt={person.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder-person.png';
                        }}
                      />
                    </div>
                    <div className="p-2">
                      <p className="font-medium truncate">{person.name}</p>
                      <p className="text-sm text-gray-500 truncate">{person.character}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 감독 */}
          {movie.credits.crew && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">제작진</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {movie.credits.crew
                  .filter(crew => ['Director', 'Producer', 'Screenplay'].includes(crew.job))
                  .slice(0, 4)
                  .map((person) => (
                    <div key={`${person.id}-${person.job}`} className="card">
                      <div className="aspect-[2/3] bg-gray-100">
                        <img
                          src={getImageUrl(person.profile_path, POSTER_SIZES.small)}
                          alt={person.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder-person.png';
                          }}
                        />
                      </div>
                      <div className="p-2">
                        <p className="font-medium truncate">{person.name}</p>
                        <p className="text-sm text-gray-500 truncate">{person.job}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* 비슷한 영화 */}
          {movie.recommendations.results.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">추천 영화</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {movie.recommendations.results.slice(0, 4).map((similar) => (
                  <MovieCard key={similar.id} movie={similar} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
