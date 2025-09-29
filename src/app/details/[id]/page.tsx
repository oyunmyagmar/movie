import React from "react";
import { Suspense } from "react";
import {
  DetailsDynamicPageComp,
  DetailsDynamicPageSkeleton,
} from "@/components/details";
import { getMovieDetails } from "@/utils/get-data";
import { MovieDetailsType } from "@/types";

type DetailsPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: DetailsPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetails: MovieDetailsType = await getMovieDetails(id);

  return {
    title: `MovieZ | ${movieDetails.title}`,
  };
};

const DetailsPage = ({ params }: DetailsPageProps) => {
  return (
    <Suspense fallback={<DetailsDynamicPageSkeleton />}>
      <DetailsDynamicPageComp params={params} />
    </Suspense>
  );
};
export default DetailsPage;
