"use client"
import * as React from "react";
import Link from "next/link";
import { HeroCarousel, MovieCard } from "@/components/home";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
    const [movieListUpComing, setMovieListUpComing] = React.useState([])
    const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=75d880915800e2d2a9928e5fe720c261&language=en-US';
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWQ4ODA5MTU4MDBlMmQyYTk5MjhlNWZlNzIwYzI2MSIsIm5iZiI6MTc1NzQ5MzY0Ni4wNTQwMDAxLCJzdWIiOiI2OGMxMzk4ZWVkNGMzYzU0NGMwNmFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t_xWd75ZUn5fBdF6Khse5nZE2oVDHnnYyJ92JTb9cAM'
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => setMovieListUpComing(json.results))
    .catch(err => console.error(err));
    console.log(movieListUpComing, "movieListUpComing")

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <HeroCarousel />

     <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
      <div className="w-full flex justify-between">
        <p className="text-2xl leading-8 font-semibold text-[#09090B]-foreground">
          Upcoming
        </p>
        <Button asChild variant="link">
          <Link href="/genre">
            See more <ArrowRight />
          </Link>
        </Button>
      </div>
      {movieListUpComing.map((movie, id) => (
          <MovieCard
            key={id}
            title={title}
            vote_average={vote_average}
            poster_path={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        ))}
    </div>
    </div>
  );
};
export default Home;
