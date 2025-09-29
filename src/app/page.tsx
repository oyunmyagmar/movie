import React from "react";
import { Suspense } from "react";
import {
  HomePageComp,
  HomePageSkeleton,
  SampleBackend,
} from "@/components/home";

const Home = () => {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePageComp />
      <SampleBackend />
    </Suspense>
  );
};
export default Home;
