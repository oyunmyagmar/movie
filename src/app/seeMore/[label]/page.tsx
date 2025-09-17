import React from "react";
import { getMoviesList } from "@/utils/get-data";
import { movieResponseType, MovieType } from "@/types";
import { MovieCard } from "@/components/home";

type SeeMoreDynamicPageProps = {
  params: Promise<{ label: string; link: string }>;
};
const SeeMoreDynamicPage = async ({ params }: SeeMoreDynamicPageProps) => {
  const dynamicParams = await params;
  const label = dynamicParams.label.toLowerCase();
  const link = dynamicParams.link;

  const movies: movieResponseType = await getMoviesList(label);
  const moviesLabeled = movies.results;

  console.log(movies, "movies");
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1440px] px-20 mt-13 mb-19">
        <div className="flex flex-wrap gap-8">
          <div className="w-full text-3xl leading-9 font-semibold text-foreground">
            {label}
          </div>
          {moviesLabeled.map((el) => (
            <MovieCard
              key={el.id}
              id={el.id}
              title={el.title}
              score={el.vote_average}
              image={`https://image.tmdb.org/t/p/original${el.poster_path}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SeeMoreDynamicPage;
