import React from "react";
import { Suspense } from "react";
import { HomePage, HomePageSkeleton } from "@/components/home";

const Home = () => {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePage />
    </Suspense>
  );
};
export default Home;
