import React from "react";
import { Skeleton } from "@/components/ui";

export const MoreLikeDynamicPageSkeleton = () => {
  return (
    <div className="w-[1440px] m-auto px-20 mt-13 mb-19">
      <Skeleton className="w-46 h-9 rounded-full mb-8" />
      <div className="flex flex-wrap gap-8">
        {Array.from({ length: 20 }).map((_, i) => (
          <Skeleton key={i} className="w-[230px] h-[439px] rounded-lg" />
        ))}
      </div>
      <Skeleton className="w-84 h-9 mt-8 flex justify-self-end" />
    </div>
  );
};
