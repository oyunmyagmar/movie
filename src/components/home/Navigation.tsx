import Link from "next/link";
import { Film } from "lucide-react";
import { NavInputSearch, NavMenuItem, ThemeToggler } from "@/components/home";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Navigation = async () => {
  // const params = await searchParams;
  // const searchValue = params.searchValue;
  // const searchedMovieResponse: movieResponseType = await getMoviesBySearch(
  //   searchValue
  // );
  // console.log(searchedMovieResponse, "searchedMovieResponse");
  return (
    <header className="w-screen">
      <div className="w-[1440px] flex justify-between items-center px-20 py-[11.5px] m-auto">
        <Link
          href="http://localhost:3000/"
          className="flex gap-2 text-indigo-700 text-base leading-5 italic font-bold items-center"
        >
          <Film width={20} height={20} color="#4338CA" />
          Movie Z
        </Link>
        <div className="flex gap-6">
          <NavMenuItem />
          <NavInputSearch />
        </div>
        <ThemeToggler />
      </div>
    </header>
  );
};
