import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { RootState, AppDispatch } from '../app/store';
import MovieDetail from '../components/MovieDetail';
import { fetchMovieDetail, clearMovieDetail } from '../features/movieDetailSlice';
import { addMovieToWatchlist, removeMovieFromWatchlist } from '../features/watchlistSlice';
import { MovieDetail as MovieDetailType, Movie } from '../types/movie';

const MovieDetailPage: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { movie, status } = useSelector((state: RootState) => state.movieDetail);
  const watchlist = useSelector((state: RootState) => state.watchlist.movies);

  useEffect(() => {
    window.scroll(0,0)
    if (imdbID) {
      dispatch(fetchMovieDetail(imdbID));
    }

    return () => {
      dispatch(clearMovieDetail());
    };
  }, [dispatch, imdbID]);

  const isLoading = status === 'loading';
  const isAdded = movie ? watchlist.some(m => m.imdbID === movie.imdbID) : false;

  const handleAddToWatchlist = () => {
    if (movie) {
      if (isAdded) {
        dispatch(removeMovieFromWatchlist(movie as Movie));
      } else {
        dispatch(addMovieToWatchlist(movie as Movie));
      }
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
      <h2 className="text-3xl font-bold text-center mb-4">Movie Details</h2>
      <MovieDetail
        movie={movie as MovieDetailType}
        onAddToWatchlist={handleAddToWatchlist}
        isAdded={isAdded}
        loading={isLoading}
      />
    </div>
  );
};

export default MovieDetailPage;
