import React from "react";
import { getMoviesList } from "@/utils/get-data";
import { movieResponseType } from "@/types";
import { MovieCard } from "@/components/home";

type SeeMoreDynamicPageProps = {
  params: Promise<{ link: string; label: string; page: string | "1" }>;
};
const SeeMoreDynamicPage = async ({ params }: SeeMoreDynamicPageProps) => {
  const dynamicParams = await params;
  const label = dynamicParams.label;
  console.log(label, "label");
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
            {/* {label === "upcoming"}? <span>"Upcoming"</span> :
            {label === "popular"} ? <span>"Popular"</span> :
            {label === "top_rated"} ? <span>"Top Rated"</span> : */}
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
