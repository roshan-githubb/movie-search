import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import MovieCard from './MovieCard';
import { Movie } from '../types/movie';

export const MovieList: React.FC = () => {
  const { movies, status } = useSelector((state: RootState) => state.search);

  if (status === 'loading') {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (status === 'failed') {
    return <p className="text-center text-red-500">Failed to fetch movies.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {status === 'succeeded' && movies.length > 0 ? (
        movies.map((movie: Movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <p className="text-center text-lg text-gray-500">No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
