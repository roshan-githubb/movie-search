export interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
}

export interface MovieDetail extends Movie {
  Plot: string;
  Genre: string;
  Director: string;
  Actors: string;
  Released: string;
  imdbRating: string;
}
