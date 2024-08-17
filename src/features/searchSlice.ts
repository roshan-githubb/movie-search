import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from '../types/movie';

interface SearchState {
  movies: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export const fetchMovies = createAsyncThunk(
  'search/fetchMovies',
  async (query: string) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=989c9dd2&s=${query}`);
    return response.json();
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    movies: [], 
    status: 'idle'
  } as SearchState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.movies = action.payload.Search || [];
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.status = 'failed';
    });
  }
});

export default searchSlice.reducer;
