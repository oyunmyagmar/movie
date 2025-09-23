import React from "react";
import { Suspense } from "react";
import { SearchPageComp, SearchPageSkeleton } from "@/components/search";

type SearchPageProps = {
  searchParams: Promise<{
    value: string;
    genreId: string;
    page: string;
  }>;
};

const SearchPage = ({ searchParams }: SearchPageProps) => {
  return (
    <Suspense fallback={<SearchPageSkeleton />}>
      <SearchPageComp searchParams={searchParams} />
    </Suspense>
  );
};
export default SearchPage;
