import { MovieCard } from "@/components/home/MovieCard";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <div className="pt-8 px-20 flex gap-8 flex-wrap">
        <MovieCard
          title="Dear Santa"
          score={6.9}
          image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5LufXuKTxUHK3QRI-MUZXyFsHAv-FVZJcRGi-G2fzdYPkqxAsV1nh4SNVWr5F09P6v928"
        ></MovieCard>
        <MovieCard
          title="How To Train Your Dragon Live Action"
          score={6.9}
          image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLhLTo24-Thdfk9GLYhNV4Z7XgW0tldQDBjxDdF7v75EekpDZ0CWwO5bX3yN0ecYatbHQ-"
        ></MovieCard>
        <MovieCard
          title="Dear Santa"
          score={6.9}
          image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5LufXuKTxUHK3QRI-MUZXyFsHAv-FVZJcRGi-G2fzdYPkqxAsV1nh4SNVWr5F09P6v928"
        ></MovieCard>
        <MovieCard
          title="Dear Santa"
          score={6.9}
          image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5LufXuKTxUHK3QRI-MUZXyFsHAv-FVZJcRGi-G2fzdYPkqxAsV1nh4SNVWr5F09P6v928"
        ></MovieCard>
      </div>
    </div>
  );
};
export default Home;
