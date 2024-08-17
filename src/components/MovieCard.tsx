import React from "react";
import { Movie } from "../types/movie";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store"; 
import { addMovieToWatchlist } from "../features/watchlistSlice";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useDispatch<AppDispatch>();

  const watchlist = useSelector((state: RootState) => state.watchlist.movies);
  const isAdded = watchlist.some((item) => item.imdbID === movie.imdbID);

  const handleAddToWatchlist = () => {
    dispatch(addMovieToWatchlist(movie));
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4 bg-white shadow-md w-48 h-110 flex flex-col justify-between">
      <Link to={`/movies/${movie.imdbID}`}>
        <img
          src={movie.Poster}
          alt={`Poster of ${movie.Title}`}
          className="w-full h-60 object-cover rounded-md mb-2"
        />
        <div className="h-16 overflow-hidden">
          <h3 className="text-md font-semibold text-center">{movie.Title}</h3>
        </div>
        <p className="text-gray-600 text-center">Year: {movie.Year}</p>
      </Link>
      <button
        onClick={handleAddToWatchlist}
        className={`${
          isAdded ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
        } text-white font-bold py-2 px-4 rounded mt-2`}
        disabled={isAdded}
        aria-label={isAdded ? `Added ${movie.Title} to watchlist` : `Add ${movie.Title} to watchlist`}
      >
        {isAdded ? "Added to Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default MovieCard;
