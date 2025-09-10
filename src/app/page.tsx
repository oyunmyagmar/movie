"use client";
import * as React from "react";
import Link from "next/link";
import { HeroCarousel, MovieCard } from "@/components/home";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type MovieUp = {
  id: number;
  poster_path: string | null;
  vote_average: number;
  title: string;
};
type MoviePopTop = {
  id: number;
  poster_path: string | null;
  vote_average: number;
  name: string;
};

const Home = () => {
  const [moviesUpComing, setMoviesUpComing] = React.useState<MovieUp[]>([]);
  const [moviesPopular, setMoviesPopular] = React.useState<MoviePopTop[]>([]);
  const [moviesTopRated, setMoviesTopRated] = React.useState<MoviePopTop[]>([]);

  React.useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=75d880915800e2d2a9928e5fe720c261&language=en-US&page=1";
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
      .then((json) => setMoviesUpComing(json.results))
      .catch((err) => console.error(err));
  }, []);

  React.useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/tv/popular?api_key=75d880915800e2d2a9928e5fe720c261&language=en-US&page=1";
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
      .then((json) => setMoviesPopular(json.results))
      .catch((err) => console.error(err));
  }, []);

  React.useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";
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
      .then((json) => setMoviesTopRated(json.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <HeroCarousel />

      <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
        <div className="w-full flex justify-between">
          <p className="text-2xl leading-8 font-semibold text-foreground">
            Upcoming
          </p>
          <Button asChild variant="link">
            <Link href="/genre">
              See more <ArrowRight />
            </Link>
          </Button>
        </div>
        {moviesUpComing.slice(0, 10).map((el) => (
          <MovieCard
            key={el.id}
            title={el.title}
            score={el.vote_average}
            image={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
          ></MovieCard>
        ))}
      </div>

      <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
        <div className="w-full flex justify-between">
          <p className="text-2xl leading-8 font-semibold text-foreground">
            Popular
          </p>
          <Button asChild variant="link">
            <Link href="/genre">
              See more <ArrowRight />
            </Link>
          </Button>
        </div>
        {moviesPopular.slice(0, 10).map((element) => (
          <MovieCard
            key={element.id}
            title={element.name}
            score={element.vote_average}
            image={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
          ></MovieCard>
        ))}
      </div>

      <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
        <div className="w-full flex justify-between">
          <p className="text-2xl leading-8 font-semibold text-foreground">
            Top Rated
          </p>
          <Button asChild variant="link">
            <Link href="/genre">
              See more <ArrowRight />
            </Link>
          </Button>
        </div>
        {moviesTopRated.slice(0, 10).map((element) => (
          <MovieCard
            key={element.id}
            title={element.name}
            score={element.vote_average}
            image={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
};
export default Home;
