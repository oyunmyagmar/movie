import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LuPlay } from "react-icons/lu";
import { MovieTrailerType } from "@/types";

type TrailerDialogProps = {
  trailer: MovieTrailerType | undefined;
};
export const HeroTrailerDialog = ({ trailer }: TrailerDialogProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex gap-3 items-center absolute bottom-6 left-6">
            <Button variant="secondary">
              <LuPlay width={16} height={16} /> Watch Trailer
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-5xl w-[997px] h-[561px] p-0 border-none">
          <DialogTitle className="hidden" />
          <iframe
            src={`//www.youtube-nocookie.com/embed/${trailer?.key}`}
            allowFullScreen
            width={997}
            height={561}
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
};
