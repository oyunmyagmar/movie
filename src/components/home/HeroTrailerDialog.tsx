import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@/components/ui";
import { LuPlay } from "react-icons/lu";

export const HeroTrailerDialog = ({
  trailerKey,
}: {
  trailerKey: string | undefined;
}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <div className="sm:block hidden items-center absolute bottom-6 left-6">
              <Button variant="secondary">
                <LuPlay size={16} /> Watch Trailer
              </Button>
            </div>
            <div className="sm:hidden block">
              <Button>
                <LuPlay size={16} /> Watch Trailer
              </Button>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:min-w-[997px] min-w-full sm:min-h-[561px] min-h-full p-0 border-none bg-black rounded-none flex justify-center items-center gap-0">
          <DialogTitle className="hidden" />
          <iframe
            src={`//www.youtube-nocookie.com/embed/${trailerKey}`}
            allowFullScreen
            className="sm:w-[997px] min-w-full sm:h-[561px] aspect-[16/9]"
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
};
