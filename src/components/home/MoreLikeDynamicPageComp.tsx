import React from "react";
import Link from "next/link";
import { MovieCard, PaginationComp } from "@/components/general";
import { movieResponseType } from "@/types";
import { getSimilarMovies } from "@/utils/get-data";

type MoreLikeDynamicPageCompProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page: string }>;
};
export const MoreLikeDynamicPageComp = async ({
  params,
  searchParams,
}: MoreLikeDynamicPageCompProps) => {
  const { id } = await params;
  const { page = "1" } = await searchParams;

  const similarMovies: movieResponseType = await getSimilarMovies(id, page);

  const url = `/moreLike/${id}?`;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1440px] px-20 flex gap-8 flex-wrap mt-13 mb-19">
        <h3 className="w-full text-3xl leading-9 font-semibold text-foreground">
          More like this
        </h3>
        {similarMovies.results.map((simMov) => (
          <Link key={simMov.id} href={`/details/${simMov.id}`}>
            <MovieCard
              title={simMov.title}
              score={simMov.vote_average}
              image={`https://image.tmdb.org/t/p/w500${simMov.poster_path}`}
            />
          </Link>
        ))}
        <PaginationComp url={url} page={page} />
      </div>
    </div>
  );
};
