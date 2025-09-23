import React from "react";
import { Suspense } from "react";
import {
  MoreLikeDynamicPageComp,
  MoreLikeDynamicPageSkeleton,
} from "@/components/home";

type MoreLikePageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page: string }>;
};
const MoreLikePage = ({ params, searchParams }: MoreLikePageProps) => {
  return (
    <Suspense fallback={<MoreLikeDynamicPageSkeleton />}>
      <MoreLikeDynamicPageComp
        params={params}
        searchParams={searchParams}
      ></MoreLikeDynamicPageComp>
    </Suspense>
  );
};
export default MoreLikePage;
