import { Suspense } from "react";
import { HomePage } from "@/components/home";
import { HomePageSkeleton } from "@/components/home/HomePageSkeleton";

const Home = () => {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePage />
    </Suspense>
  );
};
export default Home;
