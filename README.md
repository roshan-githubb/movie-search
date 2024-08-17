# Movie Search App

## Project Overview

The Movie Search App is a Single Page Application (SPA) built with React, Redux Toolkit, and TypeScript. It allows users to search for movies, view detailed information about selected movies, and manage a watchlist. The application interacts with the OMDB API to fetch movie data.

## Features

- **Search Bar**: Search for movies by title.
- **Search Results**: View a list of movies matching the search query with their poster, title, and release year.
- **Movie Detail Page**: View comprehensive details of a selected movie including poster, title, plot, genre, director, actors, and release date.
- **Watchlist Management**: Add movies to a watchlist from both the search results and movie detail pages. Remove movies from the watchlist and persist the watchlist in local storage.

## Technical Specifications

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **React Router**: For navigation between different views.
- **TypeScript**: For strong type definitions.
- **OMDB API**: For movie data retrieval.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/roshan-githubb/movie-search.git
2. **Navigate to the Project Directory**
   ```bash
   cd movie-search
3. **Install Dependencies**
   ```bash
   npm install
4. **Write your own api key**
   ```bash
   In searchSlice.ts
5. **Run the Application**
   ```bash
   npm run dev
