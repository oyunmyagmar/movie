"use client";
import * as React from "react";
import { HeroCard } from "@/components/home";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type MovieNowPlaying = {
  id: number;
  backdrop_path: string | null;
  title: string;
  vote_average: number;
  overview: string;
};

export const HeroCarousel = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = React.useState<
    MovieNowPlaying[]
  >([]);

  React.useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=75d880915800e2d2a9928e5fe720c261&language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWQ4ODA5MTU4MDBlMmQyYTk5MjhlNWZlNzIwYzI2MSIsIm5iZiI6MTc1NzQ5MzY0Ni4wNTQwMDAxLCJzdWIiOiI2OGMxMzk4ZWVkNGMzYzU0NGMwNmFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t_xWd75ZUn5fBdF6Khse5nZE2oVDHnnYyJ92JTb9cAM",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMoviesNowPlaying(json.results))
      .catch((err) => console.error(err));
  }, []);

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <Carousel
      className="w-[1440px] h-[600px] mt-6 relative"
      // plugins={[Autoplay({ delay: 2000 })]}
      setApi={setApi}
    >
      <CarouselContent>
        {moviesNowPlaying.slice(4, 8).map((movie) => (
          <CarouselItem key={movie.id}>
            <HeroCard
              image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              label="Now Playing:"
              title={movie.title}
              score={movie.vote_average}
              description={movie.overview}
              btnName="Watch Trailer"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-11" />
      <CarouselNext className="right-11" />

      <div className="flex gap-2 absolute bottom-[37px] left-1/2 z-10">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`w-20 h-20 rounded-full ${
              index + 1 === current ? "bg-white" : "bg-white opacity-80"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
};
