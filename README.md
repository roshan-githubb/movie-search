#Movie Search App
Overview
The Movie Search App is a single-page application built using React, Redux Toolkit, and TypeScript. It allows users to search for movies, view detailed information, and manage a watchlist. The app interacts with the OMDB API to fetch movie data.

Key Features
Search Bar: Search for movies by title.
Search Results: Display a list of movies with posters, titles, and release years.
Movie Detail Page: View detailed information about a selected movie.
Watchlist Page: Manage a list of favorite movies, including adding and removing movies from the watchlist.
Persistent Watchlist: The watchlist persists across sessions using local storage.
Technical Specifications
React: For building the UI components.
Redux Toolkit: For state management (search results, movie details, and watchlist).
TypeScript: For strong typing and better development experience.
React Router: For navigation between views (Home/Search, Movie Detail, Watchlist).
OMDB API: For fetching movie data.
Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/roshan-githubb/movie-search.git
Navigate into the project directory:

bash
Copy code
cd movie-search
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add your OMDB API key:

makefile
Copy code

Start the development server:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Usage
Home/Search Page: Use the search bar to find movies. Click on a movie to view its details.
Movie Detail Page: View detailed information about the movie and add it to your watchlist.
Watchlist Page: View all movies added to your watchlist and remove them if needed.
Deployment
This application can be deployed using services like GitHub Pages, Vercel, or Netlify. For deployment instructions, please refer to the documentation of the respective hosting service.

API Key
To interact with the OMDB API, you need an API key. Follow these steps to obtain it:

Visit the OMDB API website.
Sign up for a free API key.
Add the API key to the .env file as mentioned in the Installation section.
Contributing
If you have suggestions or improvements, feel free to submit a pull request or open an issue.

License
This project is licensed under the MIT License. See the LICENSE file for details.

