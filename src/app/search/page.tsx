import { SearchPageComp, SearchPageSkeleton } from "@/components/home";
import { Suspense } from "react";

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
