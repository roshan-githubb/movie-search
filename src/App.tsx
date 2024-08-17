import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WatchlistPage from './pages/WatchlistPage';
import SearchPage from './pages/SearchPage';
import MovieDetailPage from './pages/MovieDetailPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/movies/:imdbID" element={<MovieDetailPage />} />
      <Route path="/watchlist" element={<WatchlistPage />} />
    </Routes>
  );
}

export default App;
