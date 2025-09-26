import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@/components/ui";
import { LuPlay } from "react-icons/lu";

export const TrailerDialog = ({
  trailerKey,
}: {
  trailerKey: string | undefined;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-3 items-center absolute bottom-6 left-6">
          <Button
            variant="outline"
            className="w-10 h-10 rounded-full border-0 bg-white"
          >
            <LuPlay size={16} />
          </Button>
          <span className="text-base leading-6 text-white">Play Trailer</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:min-w-[997px] min-w-full sm:min-h-[561px] min-h-full p-0 border-none bg-black rounded-none flex justify-center items-center gap-0">
        <DialogTitle className="hidden" />
        <iframe
          src={`//www.youtube-nocookie.com/embed/${trailerKey}`}
          allowFullScreen
          className="sm:w-[997px] min-w-full sm:h-[561px] aspect-[16/9] "
        />
      </DialogContent>
    </Dialog>
  );
};
