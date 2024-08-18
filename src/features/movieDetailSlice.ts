import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieDetail } from '../types/movie';

interface MovieDetailState {
  movie: MovieDetail | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchMovieDetail = createAsyncThunk(
  'movieDetail/fetchMovieDetail',
  async (movieId: string) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=989c9dd2&i=${movieId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    return response.json();
  }
);

const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState: {
    movie: null,
    status: 'idle',
    error: null
  } as MovieDetailState,
  reducers: {
    clearMovieDetail(state) {
      state.movie = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetail.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.movie = action.payload;
    });
    builder.addCase(fetchMovieDetail.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed to fetch movie details';
    });
  }
});

export const { clearMovieDetail } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
