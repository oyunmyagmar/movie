import React from "react";
import { Suspense } from "react";
import { GenrePageComp, GenrePageSkeleton } from "@/components/genre";

type GenrePageProps = {
  searchParams: Promise<{
    id: string;
    page: string;
    name: string;
  }>;
};

const GenrePage = ({ searchParams }: GenrePageProps) => {
  return (
    <Suspense fallback={<GenrePageSkeleton />}>
      <GenrePageComp searchParams={searchParams} />
    </Suspense>
  );
};
export default GenrePage;
