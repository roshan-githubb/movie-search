import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import MovieDetail from '../components/MovieDetail';
import { Link } from 'react-router-dom';
import { addMovieToWatchlist, removeMovieFromWatchlist } from '../features/watchlistSlice';
import { MovieDetail as MovieDetailType, Movie } from '../types/movie';

const MovieDetailPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movieDetail = useSelector((state: RootState) => state.movieDetail.movie);
  const watchlist = useSelector((state: RootState) => state.watchlist.movies);

  if (!movieDetail) {
    return <p className="text-center text-lg">No movie details available.</p>;
  }

 const movieDetailTyped = movieDetail as MovieDetailType;

  const isAdded = watchlist.some(movie => movie.imdbID === movieDetailTyped.imdbID);

  const handleAddToWatchlist = () => {
    if (isAdded) {
      dispatch(removeMovieFromWatchlist(movieDetailTyped as unknown as Movie));
    } else {
      dispatch(addMovieToWatchlist(movieDetailTyped as unknown as Movie));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <nav className="bg-blue-900 text-white flex items-center justify-between p-4 mb-4 rounded-md shadow-md">
        <Link to="/" className="text-3xl font-bold flex-1">
          Movie Search
        </Link>
        <div className="ml-auto">
          <Link
            to="/watchlist"
            className="text-white font-bold py-2 px-4 mr-5 rounded hover:bg-blue-700"
            aria-label="Go to Watchlist"
          >
            Watchlist
          </Link>
        </div>
      </nav>
      <h2 className="text-3xl font-bold text-center">Movie Details</h2>
      <MovieDetail
        movie={movieDetailTyped}
        onAddToWatchlist={handleAddToWatchlist}
        isAdded={isAdded}
      />
      <hr className="my-4 border-t-2 border-gray-300" />
    </div>
  );
};

export default MovieDetailPage;
