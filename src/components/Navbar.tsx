import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchMovies } from '@/services/api';
import { Movie } from '@/types/movie';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery.trim().length === 0) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);
      try {
        const response = await searchMovies(searchQuery);
        setSearchResults(response.data.results.slice(0, 5)); // 최대 5개 결과만 표시
        setShowResults(true);
      } catch (error) {
        console.error('Error searching movies:', error);
      } finally {
        setIsSearching(false);
      }
    };

    // 디바운스 처리
    const debounceTimer = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowResults(false);
    }
  };

  const handleResultClick = (movieId: number) => {
    setShowResults(false);
    setSearchQuery('');
    navigate(`/movie/${movieId}`);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container-app py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">MovieFlix</Link>
            <button className="md:hidden ml-2 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <div className="mt-4 md:mt-0 w-full md:w-2/5" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="영화 검색..."
                className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
              </button>
              
              {showResults && searchResults.length > 0 && (
                <div className="absolute z-50 mt-1 w-full bg-white rounded-md shadow-lg max-h-96 overflow-y-auto">
                  <ul className="text-gray-800 divide-y divide-gray-100">
                    {searchResults.map((movie) => (
                      <li 
                        key={movie.id} 
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleResultClick(movie.id)}
                      >
                        {movie.title} {movie.release_date && (
                          <span className="text-gray-500 text-sm">
                            ({new Date(movie.release_date).getFullYear()})
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {isSearching && (
                <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
