export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};
export type movieResponseType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export type GenreType = {
  id: number;
  name: string;
};
export type genreResponseType = {
  genres: GenreType[];
};

export type MovieDetailsType = {
  backdrop_path: string;
  belongs_to_collection: {};
  genres: GenreType[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
};

export type MovieCreditsCastType = {};
export type MovieCreditsCrewType = {
  department: string;
  job: string;
  name: string;
};
export type movieCreditsResponseType = {
  cast: MovieCreditsCastType[];
  crew: MovieCreditsCrewType[];
  id: number;
};

export type MovieTrailerType = {
  id: number;
  key: string;
  name: string;
  type: string;
};
export type movieTrailerResponseType = {
  id: number;
  results: MovieTrailerType[];
};
