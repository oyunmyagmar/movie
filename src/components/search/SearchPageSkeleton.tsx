import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const SearchPageSkeleton = () => {
  return (
    <div className="w-[1440px] m-auto mt-13 mb-[344px] px-20">
      <Skeleton className="w-54 h-9 rounded-full mb-8" />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <Skeleton className="w-70 h-7 rounded-full mb-8" />
          <div className="flex flex-wrap gap-y-8 gap-x-12">
            {Array.from({ length: 18 }).map((_, index) => (
              <Skeleton
                key={index}
                className="w-[165px] h-[331px] rounded-md"
              />
            ))}
          </div>
          <Skeleton className="w-94 h-8 mt-8 justify-self-end" />
        </ResizablePanel>
        <ResizableHandle withHandle className="mx-11" />
        <ResizablePanel>
          <Skeleton className="w-51 h-8 rounded-full mb-1" />
          <Skeleton className="w-54 h-6 rounded-full mb-5" />
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 19 }).map((_, i) => (
              <Skeleton key={i} className="w-21 h-[22px] rounded-full" />
            ))}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
