"use client";
import React from "react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { NavInputSearch } from "./NavInputSearch";
import { NavLogo } from "./NavLogo";
import { NavMenuItem } from "./NavMenuItem";
import { genreResponseType } from "@/types";
import { ThemeToggler } from "./ThemeToggler";

type NavMobileSearch = {
  movieGenresList: genreResponseType;
};
export const NavMobileSearch = ({ movieGenresList }: NavMobileSearch) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      {isOpen ? (
        <div className="flex justify-between items-center">
          <NavMenuItem movieGenresList={movieGenresList} />
          <div className="flex items-center">
            <NavInputSearch />
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
