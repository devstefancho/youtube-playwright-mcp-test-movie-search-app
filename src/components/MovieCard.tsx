import { Link } from 'react-router-dom';
import { Movie } from '@/types/movie';
import { getImageUrl } from '@/services/api';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'Unknown';
  
  return (
    <Link to={`/movie/${movie.id}`} className="card group">
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-200">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={`${movie.title} poster`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{movie.title}</h3>
        <p className="text-gray-500 text-sm">{releaseYear}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
