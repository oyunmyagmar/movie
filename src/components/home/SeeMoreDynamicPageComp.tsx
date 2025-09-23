import React from "react";
import { getMoviesList } from "@/utils/get-data";
import { movieResponseType } from "@/types";
import { MovieCard } from "@/components/home";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type SeeMoreDynamicPageProps = {
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
}: SeeMoreDynamicPageProps) => {
  const { link } = await params;
  const { page = "1" } = await searchParams;

  const movies: movieResponseType = await getMoviesList(link, "1");
  const moviesLabeled = movies.results;
  console.log(moviesLabeled, "labeled");

  const url = `/seeMore/${link}`;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1440px] px-20 mt-13 mb-19">
        <div className="flex flex-wrap gap-8">
          <div className="w-full text-3xl leading-9 font-semibold text-foreground">
            {(link.charAt(0).toLocaleUpperCase() + link.slice(1))
              .split("_")
              .join(" ")}
            {/* {label === "upcoming"}? <span>"Upcoming"</span> :
            {label === "popular"} ? <span>"Popular"</span> :
            {label === "top_rated"} ? <span>"Top Rated"</span> : */}
          </div>
          {moviesLabeled.map((movLabeled) => (
            <MovieCard
              key={movLabeled.id}
              // id={movLabeled.id} say
              title={movLabeled.title}
              score={movLabeled.vote_average}
              image={`https://image.tmdb.org/t/p/original${movLabeled.poster_path}`}
            />
          ))}
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href={`${url}&page=${Number(page) - 1}`} />
              </PaginationItem>
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      isActive={Number(page) === i + 1}
                      href={`${url}&page=${Number(page) + 1}`}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </>
              <PaginationItem>
                <PaginationNext href={`${url}&page=${Number(page) + 1}`} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};
