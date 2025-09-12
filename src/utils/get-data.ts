export const getMoviesList = async (type: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getGenresList = async () => {
  const result = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await result.json();
  return data;
};

export const getMoviesByGenreId = async (genreIds: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=${1}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
