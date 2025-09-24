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
      <DialogContent className="sm:max-w-5xl w-[997px] h-[561px] p-0 border-none">
        <DialogTitle className="hidden" />
        <iframe
          src={`//www.youtube-nocookie.com/embed/${trailerKey}`}
          allowFullScreen
          width={997}
          height={561}
        />
      </DialogContent>
    </Dialog>
  );
};
