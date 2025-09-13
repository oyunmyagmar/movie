import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { GenreType } from "@/types";
import { FaChevronRight } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type GenresListCardProps = {
  genres: GenreType[];
};

export const GenresListCard = ({ genres }: GenresListCardProps) => {
  return (
    <Card className="p-0 border-none shadow-none flex gap-5">
      <CardHeader className="p-0 space-y-1">
        <CardTitle className="text-2xl leading-8 font-semibold text-foreground">
          Genres
        </CardTitle>
        <CardDescription className="text-base leading-6 text-foreground">
          See lists of movies by genre
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 flex flex-wrap gap-4">
        {genres.map((genre) => (
          <Link key={genre.id} href={`/genre?id=${genre.id}`}>
            <Badge
              variant="outline"
              className="font-semibold rounded-full pl-2.5 gap-2 pr-1 text-center"
            >
              {genre.name}
              <FaChevronRight width={16} height={16} color="foreground" />
            </Badge>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};
