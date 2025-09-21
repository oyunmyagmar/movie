import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const GenrePageSkeleton = () => {
  return (
    <div className="w-[1440px] m-auto mt-13 mb-8 pl-20 pr-32">
      <Skeleton className="w-40 h-9 rounded-full mb-8" />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <Skeleton className="w-27 h-8 rounded-full mb-1" />
          <Skeleton className="w-54 h-6 rounded-full mb-5" />
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 19 }).map((_, i) => (
              <Skeleton key={i} className="h-[22px] w-21 rounded-full" />
            ))}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="mx-5" />
        <ResizablePanel>
          <Skeleton className="w-74 h-7 mb-8 rounded-full" />
          <div className="flex flex-wrap gap-y-8 gap-x-12">
            {Array.from({ length: 20 }).map((_, index) => (
              <Skeleton
                key={index}
                className="w-[165px] h-[331px] rounded-md"
              />
            ))}
          </div>
          <Skeleton className="w-94 h-8 mt-8 justify-self-end" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
