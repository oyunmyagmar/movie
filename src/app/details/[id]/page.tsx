import React from "react";
import { Suspense } from "react";
import {
  DetailsDynamicPageComp,
  DetailsDynamicPageSkeleton,
} from "@/components/details";

type DetailsPageProps = {
  params: Promise<{ id: string }>;
};
const DetailsPage = ({ params }: DetailsPageProps) => {
  return (
    <Suspense fallback={<DetailsDynamicPageSkeleton />}>
      <DetailsDynamicPageComp params={params} />
    </Suspense>
  );
};
export default DetailsPage;
