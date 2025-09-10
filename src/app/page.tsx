import Link from "next/link";
import { Navigation, HeroCarousel, MovieCard } from "@/components/home";
import { MovieCards } from "@/components/home/MovieCards";
import { Button } from "@/components/ui/button";
import { LuArrowRight } from "react-icons/lu";

const Home = () => {
  const movieCardsData = [
    {
      title: "Dear Santa",
      score: 6.9,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5LufXuKTxUHK3QRI-MUZXyFsHAv-FVZJcRGi-G2fzdYPkqxAsV1nh4SNVWr5F09P6v928",
      label: "Upcoming",
    },

    {
      title: "How To Train Your Dragon Live Action",
      score: 6.9,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLhLTo24-Thdfk9GLYhNV4Z7XgW0tldQDBjxDdF7v75EekpDZ0CWwO5bX3yN0ecYatbHQ-",

      label: "Upcoming",
    },
    {
      title: "Alien Romulus",
      score: 6.9,
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/cb/Alien_Romulus_2024_%28poster%29.jpg",
      label: "Upcoming",
    },
    {
      title: "From the Ashes",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BNzg2Mzc2OTEtZGNlZS00NTk5LThlMjYtZjM5MDZiOWZiM2RiXkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
      label: "Upcoming",
    },
    {
      title: "Space Dog",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BNjM1MzhhYjUtZGNlNy00MzUxLWI0ZDAtZjhlMDY5NDAxODZkXkEyXkFqcGc@._V1_.jpg",
      label: "Upcoming",
    },
    {
      title: "The Order",
      score: 6.9,
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Order_2024_film_poster.jpg",
      label: "Upcoming",
    },
    {
      title: "Y2K",
      score: 6.9,
      image: "https://images.justwatch.com/poster/319881695/s718/y2k-2024.jpg",
      label: "Upcoming",
    },
    {
      title: "Solo Leveling: ReAwakening",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_.jpg",
      label: "Upcoming",
    },
    {
      title: "Get Away",
      score: 6.9,
      image:
        "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2024/11/07213941/vjQQTseye7Ofe8uDTnixk4YcQNe-scaled.jpg",
      label: "Upcoming",
    },
    {
      title: "Sonic the Hedgehog 3",
      score: 6.9,
      image:
        "https://imgix.hoyts.com.au/mx/posters/nz/sonic-the-hedgehog-3-f71be93e.jpg",
      label: "Upcoming",
    },
    {
      title: "The Shawshank Redemption",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/d26b48f88d5398cad86d2fd26d32b258d43e51d4e2f949c3848be69a1e147446.jpg",
      label: "Popular",
    },
    {
      title: "The Godfather",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      label: "Popular",
    },
    {
      title: "The Dark Knight",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BYWZkNzNhNzgtYzY0Yy00NTlhLTk2NTYtNGVmZmQyMTJjNmRkXkEyXkFqcGc@._V1_.jpg",
      label: "Popular",
    },
    {
      title: "12 Angry Men",
      score: 6.9,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
      label: "Popular",
    },

    {
      title: "The Lord of the Rings: The  Return of the King",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
      label: "Popular",
    },
    {
      title: "Internstellar",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
      label: "Popular",
    },
    {
      title: "Se7en",
      score: 6.9,
      image:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/se7en_2.png",
      label: "Popular",
    },
    {
      title: "It’s a Wonderful life",
      score: 6.9,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/25/It%27s_a_Wonderful_Life_%281946_poster%29.jpeg",
      label: "Popular",
    },
    {
      title: "Seven samurai",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BZDg4MTYyYjktZGJiYy00ZGIwLWEzNTMtNTZkMjRhYTViMWE4XkEyXkFqcGc@._V1_.jpg",
      label: "Popular",
    },
    {
      title: "The Silence of the Lambs",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg",
      label: "Popular",
    },
    {
      title: "Pulp Fiction",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      label: "Top Rated",
    },
    {
      title: "The Lord of the Rings: Fellowship of the Kings",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      label: "Top Rated",
    },
    {
      title: "The Good, the Bad and the Ugly",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/I/81keqIN-tlL._UF894,1000_QL80_.jpg",
      label: "Top Rated",
    },
    {
      title: "Forrest Gump",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
      label: "Top Rated",
    },
    {
      title: "Fight Club",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      label: "Top Rated",
    },
    {
      title: "Saving Private Ryan",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_.jpg",
      label: "Top Rated",
    },
    {
      title: "City of God",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BYjY4NGI5OTUtY2ZlZS00Zjk4LTk5N2MtN2JmYWVjNGNmMGRlXkEyXkFqcGc@._V1_.jpg",
      label: "Top Rated",
    },
    {
      title: "The Green Mile",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
      label: "Top Rated",
    },
    {
      title: "Life is Beautiful",
      score: 6.9,
      image: "https://upload.wikimedia.org/wikipedia/en/7/7c/Vitaebella.jpg",
      label: "Top Rated",
    },
    {
      title: "Terminator 2: Judgement Day",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_.jpg",
      label: "Top Rated",
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Navigation />
      <HeroCarousel />
      <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
        <div className="w-full flex justify-between">
          <p className="text-2xl leading-8 font-semibold text-[#09090B]-foreground">
            Upcoming
          </p>
          <Button asChild variant="link">
            <Link href="/genre">
              See more <LuArrowRight />
            </Link>
          </Button>
        </div>
        {movieCardsData
          .filter((el) => el.label === "Upcoming")
          .map((element) => (
            <MovieCard
              key={element.title}
              title={element.title}
              score={element.score}
              image={element.image}
            />
          ))}
      </div>
      <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
        <div className="w-full flex justify-between">
          <p className="text-2xl leading-8 font-semibold text-[#09090B]-foreground">
            Popular
          </p>
          <Button asChild variant="link">
            <Link href="/genre">
              See more <LuArrowRight />
            </Link>
          </Button>
        </div>

        {movieCardsData
          .filter((el) => el.label === "Popular")
          .map((element) => (
            <MovieCard
              key={element.title}
              title={element.title}
              score={element.score}
              image={element.image}
            />
          ))}
      </div>
      <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
        <div className="w-full flex justify-between">
          <p className="text-2xl leading-8 font-semibold text-[#09090B]-foreground">
            Top Rated
          </p>
          <Button asChild variant="link">
            <Link href="/genre">
              See more <LuArrowRight />
            </Link>
          </Button>
        </div>

        {movieCardsData
          .filter((el) => el.label === "Top Rated")
          .map((element) => (
            <MovieCard
              key={element.title}
              title={element.title}
              score={element.score}
              image={element.image}
            />
          ))}
      </div>
    </div>
  );
};
export default Home;
