import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice';
import movieDetailReducer from '../features/movieDetailSlice';
import watchlistReducer from '../features/watchlistSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action, Dispatch } from 'redux';


export interface RootState {
  search: ReturnType<typeof searchReducer>;
  movieDetail: ReturnType<typeof movieDetailReducer>;
  watchlist: ReturnType<typeof watchlistReducer>;
}


export type AppDispatch = ThunkDispatch<RootState, undefined, Action> & Dispatch<Action>;


export const store = configureStore({
  reducer: {
    search: searchReducer,
    movieDetail: movieDetailReducer,
    watchlist: watchlistReducer,
  },
});


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
