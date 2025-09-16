import React from "react";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { movieResponseType } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MovieCard } from "@/components/home";
import { getSimilarMovies } from "@/utils/get-data";

// searchParams: Promise<{ isSim: string }>;
// const searchP = await searchParams;
// const isSim = searchP.isSim;
// const similarMovies: movieResponseType = (await isSim)
//   ? getSimilarMovies(id)
//   : getMoviesList(type);

type MoreLikeDynamicPageProps = {
  params: Promise<{ id: string }>;
};
const MoreLikeDynamicPage = async ({ params }: MoreLikeDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const similarMovies: movieResponseType = await getSimilarMovies(id);

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="mt-13 w-[1440px] px-20 flex gap-8 flex-wrap mb-19">
        <h3 className="w-full text-3xl leading-9 font-semibold text-foreground">
          More like this
        </h3>
        {similarMovies.results.map((simMov) => (
          <Link key={simMov.id} href={`/details/${simMov.id}`}>
            <MovieCard
              id={simMov.id}
              title={simMov.title}
              score={simMov.vote_average}
              image={`https://image.tmdb.org/t/p/w500${simMov.poster_path}`}
            />
          </Link>
        ))}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
export default MoreLikeDynamicPage;
