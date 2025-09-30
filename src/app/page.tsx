import React from "react";
import { Suspense } from "react";
import { HomePageComp, HomePageSkeleton } from "@/components/home";

const Home = () => {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePageComp />
    </Suspense>
  );
};
export default Home;
