"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "@/components/ui";
import {
  NavInputSearch,
  NavMenuItem,
  NavLogo,
  ThemeToggler,
} from "@/components/headerAndFooter";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { genreResponseType } from "@/types";

type NavMobileSearchProps = {
  movieGenresList: genreResponseType;
};
export const NavMobileSearch = ({ movieGenresList }: NavMobileSearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      {isOpen ? (
        <div className="flex items-center">
          <div className="mr-6">
            <NavMenuItem movieGenresList={movieGenresList} />
          </div>
          <NavInputSearch />
          <div className="ml-3">
            <Button variant={"ghost"} onClick={() => setIsOpen(false)}>
              X
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <NavLogo />
          <div>
            <Button
              variant="outline"
              className="w-9 h-9 mr-3"
              onClick={() => setIsOpen(true)}
            >
              <IoSearchOutline />
            </Button>
            <ThemeToggler />
          </div>
        </div>
      )}
    </div>
  );
};
