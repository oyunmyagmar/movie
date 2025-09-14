import Link from "next/link";
import { Film } from "lucide-react";
import { NavInputSearch, NavMenuItem, ThemeToggler } from "@/components/home";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { getMoviesBySearch } from "@/utils/get-data";
import { movieResponseType } from "@/types";

type NavigationProps = {
  searchParams: Promise<{ searchValue: string }>;
};

export const Navigation = async ({ searchParams }: NavigationProps) => {
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
          <div className="flex items-center">
            <Search className="w-4 h-4 -mr-7" color="#71717A" />
            <Input
              type="text"
              placeholder="Search.."
              className="w-[379px] px-3 py-[7px] pl-[38px] border border-[#E4E4E7]-foreground rounded-lg text-[#71717A]-foreground text-sm leading-5 flex items-center box-border"
            />
          </div>
          <NavInputSearch />
        </div>
        <ThemeToggler />
      </div>
    </header>
  );
};
