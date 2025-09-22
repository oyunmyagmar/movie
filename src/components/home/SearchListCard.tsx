import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FaChevronRight } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { genreResponseType } from "@/types";
import { getGenresList } from "@/utils/get-data";

type SearchListCardProps = {
  searchValue: string;
  page: string | "1";
};

export const SearchListCard = async ({
  searchValue,
  page,
}: SearchListCardProps) => {
  const movieGenresList: genreResponseType = await getGenresList();

  return (
    <Card className="p-0 border-none shadow-none flex gap-5 bg-background">
      <CardHeader className="p-0 gap-1">
        <CardTitle className="text-2xl leading-8 font-semibold text-foreground">
          Search by genre
        </CardTitle>
        <CardDescription className="text-base leading-6 text-foreground">
          See lists of movies by genre
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 flex flex-wrap gap-4">
        {movieGenresList.genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/search?value=${searchValue}&genreId=${genre.id}&page=${page}`}
          >
            <Badge
              variant="outline"
              className="font-semibold rounded-full pl-2.5 gap-2 pr-1 text-center"
            >
              {genre.name}
              <FaChevronRight size={16} color="foreground" />
            </Badge>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};
