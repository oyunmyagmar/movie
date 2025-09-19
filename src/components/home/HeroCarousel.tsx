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
import { MovieTrailerType, MovieType, movieTrailerResponseType } from "@/types";
import { getMovieTrailer } from "@/utils/get-data";

type HeroCarouselProps = {
  movies: MovieType[];
};

export const HeroCarousel = ({ movies }: HeroCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const MyTrailer = async () => {
    const [movTrailer, setMovTrailer] = React.useState<MovieTrailerType>();
    const movieTrailer: movieTrailerResponseType = await getMovieTrailer(id);
    const trailer: MovieTrailerType | undefined = movieTrailer.results.find(
      (trailer) => trailer.type === "Trailer"
    );
  };
  // setMovTrailer(MyTrailer);

  // React.useEffect(() => {
  //   setMovTrailer(trailer);
  // }, []);
  return (
    <Carousel
      className="w-[1440px] h-[600px] mt-6 relative"
      setApi={setApi}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {movies.slice(0, 5).map((movie) => (
          <CarouselItem key={movie.id}>
            <HeroCard
              image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              label="Now Playing:"
              title={movie.title}
              score={movie.vote_average}
              description={movie.overview}
              //trailer={trailer}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-11" />
      <CarouselNext className="right-11" />
      <div className="flex gap-2 absolute bottom-[37px] left-170">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`w-2 h-2 rounded-full ${
              index + 1 === current ? "bg-white" : "bg-white opacity-80"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
};
