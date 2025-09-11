import React from "react";
import { MedMovieCard } from "@/components/home";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const GenreMovies = () => {
  return (
    <div>
      <div className="pr-12 flex flex-col gap-8">
        <h4 className="text-xl leading-7 font-semibold text-foreground">
          81 titles in “Animation”
        </h4>
        <div className="flex flex-wrap gap-y-8 gap-x-12">
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
          <MedMovieCard
            title="Solo Leveling: ReAwakening"
            score={6.9}
            image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          />
        </div>
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
