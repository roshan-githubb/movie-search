import React from 'react';
import { Link } from 'react-router-dom';
import Watchlist from '../components/Watchlist'; 

const WatchlistPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <nav className="bg-blue-900 text-white flex items-center justify-between p-4 mb-4 rounded-md shadow-md">
        <Link to="/" className="text-3xl font-bold flex-1">
          Movie Search
        </Link>
      </nav>

      <h2 className="text-3xl font-bold text-center">Your Watchlist</h2>
      <Watchlist />
    </div>
  );
};

export default WatchlistPage;
