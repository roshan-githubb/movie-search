import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { RootState, AppDispatch } from '../app/store'; 
import { removeMovieFromWatchlist } from '../features/watchlistSlice'; 
import { Movie } from '../types/movie'; 

const Watchlist: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const watchlist = useSelector((state: RootState) => state.watchlist.movies); 

  const handleRemoveFromWatchlist = (movie: Movie) => {
    dispatch(removeMovieFromWatchlist(movie));
  };

  return (
    <div className="container mx-auto py-6">
      {watchlist.length === 0 ? (
        <p className="text-lg text-gray-500 text-center">Your watchlist is empty.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {watchlist.map((movie: Movie) => (
            <div 
              key={movie.imdbID} 
              className="border border-gray-300 rounded-lg p-4 m-4 bg-white shadow-md w-48 h-90 flex flex-col justify-between"
            >
              <Link to={`/movies/${movie.imdbID}`}>
                <img
                  src={movie.Poster}
                  alt={`Poster of ${movie.Title}`}
                  className="w-40 h-60 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">{movie.Title}</h3>
              </Link>
              <p className="text-gray-600 mb-4 text-center">Year: {movie.Year}</p>
              <button
                onClick={() => handleRemoveFromWatchlist(movie)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold mt-2 py-2 px-4 rounded"
                aria-label={`Remove ${movie.Title} from watchlist`}
              >
                Remove from Watchlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
