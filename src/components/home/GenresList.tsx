import React from "react";
import { Badge } from "@/components/ui/badge";
import { GenreType } from "@/types";
import { FaChevronRight } from "react-icons/fa6";

type GenresListProps = {
  genres: GenreType[];
};

export const GenresList = ({ genres }: GenresListProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl leading-8 font-semibold text-foreground">
          Genres
        </h3>
        <p className="text-base leading-6 text-foreground">
          See lists of movies by genre
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {genres.map((el) => (
          <Badge
            key={el.id}
            variant="outline"
            className="font-semibold rounded-full pl-2.5 gap-2 pr-1 text-center"
            //onClick={()}
          >
            {el.name}
            <FaChevronRight className="w-4 h-4" color="foreground" />
          </Badge>
        ))}
      </div>
    </div>
  );
};
