import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/searchSlice";
import { AppDispatch } from "../app/store"; 

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (query) {
      dispatch(fetchMovies(query));
    }
    setQuery("");
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movie..."
        className="border rounded-lg p-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="ml-4 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
