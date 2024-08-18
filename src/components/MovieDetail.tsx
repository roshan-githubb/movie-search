import React from 'react';
import { MovieDetail as MovieDetailType } from '../types/movie';

interface MovieDetailProps {
  movie: MovieDetailType | null;
  onAddToWatchlist: () => void;
  isAdded: boolean;
  loading: boolean;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onAddToWatchlist, isAdded, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-4 text-gray-600 text-lg">Please wait while we fetch the movie details...</p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">No movie details available.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col lg:flex-row">
          
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <img 
              src={movie.Poster} 
              alt={movie.Title} 
              className="w-full h-auto rounded-md shadow-md object-cover"
            />
          </div>

          
          <div className="lg:w-2/3 lg:pl-8">
            <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
            <p className="text-lg mb-2"><strong>Plot:</strong> {movie.Plot}</p>
            <p className="text-lg mb-2"><strong>Genre:</strong> {movie.Genre}</p>
            <p className="text-lg mb-2"><strong>Director:</strong> {movie.Director}</p>
            <p className="text-lg mb-2"><strong>Actors:</strong> {movie.Actors}</p>
            <p className="text-lg mb-2"><strong>Released:</strong> {movie.Released}</p>
            <p className="text-lg mb-4"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
            <button
              onClick={onAddToWatchlist}
              className={`py-2 px-4 rounded ${isAdded ? 'bg-red-500' : 'bg-green-500'} text-white`}
            >
              {isAdded ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
