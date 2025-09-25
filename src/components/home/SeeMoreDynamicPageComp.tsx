import React from "react";
import Link from "next/link";
import { getMoviesList } from "@/utils/get-data";
import { movieResponseType } from "@/types";
import { MovieCard, PaginationComp } from "@/components/general";

type SeeMoreDynamicPageCompProps = {
  params: Promise<{
    link: string;
  }>;
  searchParams: Promise<{
    page: string;
  }>;
};
export const SeeMoreDynamicPageComp = async ({
  params,
  searchParams,
}: SeeMoreDynamicPageCompProps) => {
  const { link } = await params;
  const { page = "1" } = await searchParams;

  const movies: movieResponseType = await getMoviesList(link, page);
  // console.log(movies, "movies labeled");

  const url = `/seeMore/${link}?`;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="sm:w-[1440px] w-full sm:px-20 px-5 sm:mt-13 mt-8 sm:mb-19 mb-8">
        <div className="flex flex-wrap gap-8">
          <div className="w-full text-3xl leading-9 font-semibold text-foreground">
            {(link.charAt(0).toLocaleUpperCase() + link.slice(1))
              .split("_")
              .join(" ")}
          </div>
          {movies.results.map((mov) => (
            <Link key={mov.id} href={`/details/${mov.id}`}>
              <MovieCard
                title={mov.title}
                score={mov.vote_average}
                image={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
              />
            </Link>
          ))}
          <PaginationComp url={url} page={page} />
        </div>
      </div>
    </div>
  );
};
