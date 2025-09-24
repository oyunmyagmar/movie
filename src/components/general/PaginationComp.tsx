import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationCompProps = {
  page: string;
  url: string;
};
export const PaginationComp = ({ page, url }: PaginationCompProps) => {
  return (
    <Pagination className="justify-end">
      <PaginationContent>
        {page !== "1" && (
          <>
            <PaginationItem>
              <PaginationPrevious href={`${url}page=${Number(page) - 1}`} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`${url}page=${Number(page) - 1}`}>
                {Number(page) - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink isActive href="#">
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`${url}page=${Number(page) + 1}`}>
            {Number(page) + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`${url}page=${Number(page) + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
