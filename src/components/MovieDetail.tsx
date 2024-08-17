import React from 'react';
import { MovieDetail as MovieDetailType } from '../types/movie';

interface MovieDetailProps {
  movie: MovieDetailType;
  onAddToWatchlist: () => void;
  isAdded: boolean;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onAddToWatchlist, isAdded }) => {
  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Released: {movie.Released}</p>
      <p>Rating: {movie.imdbRating}</p>
      <button onClick={onAddToWatchlist}>
        {isAdded ? 'Remove from Watchlist' : 'Add to Watchlist'}
      </button>
    </div>
  );
};

export default MovieDetail;
