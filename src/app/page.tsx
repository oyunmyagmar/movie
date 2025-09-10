import { HeroCarousel, MovieSection } from "@/components/home";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <HeroCarousel />
      <MovieSection label="Upcoming" />
      <MovieSection label="Popular" />
      <MovieSection label="Top Rated" />
    </div>
  );
};
export default Home;
