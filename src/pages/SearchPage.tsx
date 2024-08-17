import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { Link } from 'react-router-dom';

const SearchPage: React.FC = () => {
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
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default SearchPage;
