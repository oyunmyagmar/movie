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
