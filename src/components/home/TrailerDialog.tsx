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
export const TrailerDialog = ({ trailer }: TrailerDialogProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex gap-3 items-center absolute bottom-6 left-6">
            <Button
              variant="outline"
              className="w-10 h-10 rounded-full border-0 bg-white"
            >
              <LuPlay width={16} height={16} />
            </Button>
            <span className="text-base leading-6 text-white">Play Trailer</span>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-5xl w-[997px] h-[561px] p-0 border-none">
          <DialogTitle className="hidden" />
          <iframe
            src={`//www.youtube-nocookie.com/embed/${trailer?.key}`}
            allowFullScreen
            width={997}
            height={561}
            allow=""
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
};
