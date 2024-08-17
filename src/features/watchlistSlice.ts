import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types/movie";

interface WatchlistState {
  movies: Movie[];
}

const initialState: WatchlistState = {
  movies: JSON.parse(localStorage.getItem('watchlist') || '[]')
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addMovieToWatchlist(state, action: PayloadAction<Movie>) {
      const movie = action.payload;
      const existingMovie = state.movies.find(item => item.imdbID === movie.imdbID);
      if (!existingMovie) {
        state.movies.push(movie);
        localStorage.setItem('watchlist', JSON.stringify(state.movies));
      }
    },
    removeMovieFromWatchlist(state, action: PayloadAction<Movie>) {
      state.movies = state.movies.filter(movie => movie.imdbID !== action.payload.imdbID);
      localStorage.setItem('watchlist', JSON.stringify(state.movies));
    }
  }
});

export const { addMovieToWatchlist, removeMovieFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
