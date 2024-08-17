import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetail } from "../types/movie";

interface MovieDetailState {
  movie: MovieDetail | null;
}

const initialState: MovieDetailState = {
  movie: null, 
};

const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    setMovieDetail(state, action: PayloadAction<MovieDetail>) {
      state.movie = action.payload;
    },
    clearMovieDetail(state) {
      state.movie = null;
    }
  }
});

export const { setMovieDetail, clearMovieDetail } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
