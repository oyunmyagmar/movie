import React from "react";
import { Suspense } from "react";
import {
  SeeMoreDynamicPageComp,
  SeeMoreDynamicPageSkeleton,
} from "@/components/home";

type SeeMorePageProps = {
  params: Promise<{ link: string }>;
  searchParams: Promise<{ page: string }>;
};
const SeeMorePage = ({ params, searchParams }: SeeMorePageProps) => {
  return (
    <Suspense fallback={<SeeMoreDynamicPageSkeleton />}>
      <SeeMoreDynamicPageComp searchParams={searchParams} params={params} />
    </Suspense>
  );
};
export default SeeMorePage;
