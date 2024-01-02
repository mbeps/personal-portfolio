"use client";

import MediaItem from "@/types/MediaItem";
import Image from "next/image";
import React from "react";
import { IoMdPlay } from "react-icons/io";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/ui/carousel";
import VideoPlayer from "./VideoPlayer";

interface GalleryProps {
  mediaItems: MediaItem[];
}

/**
 * Gallery Component which allows users to view a list of images and videos.
 * At the top, there is a preview of the currently selected image or video.
 * Bellow are the thumbnails of the available images and videos.
 * Clicking on a thumbnail will change the preview to that image.
 * There are also buttons on the left and right of the preview to change the image.
 * @param (GalleryProps) - mediaItems: list of images and videos to display
 * @returns (JSX.Element) - Gallery Component
 */
const Gallery: React.FC<GalleryProps> = ({ mediaItems }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  /**
   * Get the first image in the gallery.
   * This is used as the thumbnail for videos.
   * This is because the videos don't have thumbnails.
   */
  const firstImageSrc = mediaItems.find((item) => item.type === "image")?.src;

  return (
    <div className="flex flex-col items-center relative">
      {/* Media Preview */}
      <div className="w-full">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {Array.from({ length: mediaItems.length }).map((_, index) =>
              mediaItems[index].type === "image" ? (
                <CarouselItem key={index}>
                  <Image
                    src={mediaItems[index].src}
                    alt="Currently Active"
                    quality={90}
                    width={2000}
                    height={1125}
                    priority
                    className="w-full h-[60vh] object-contain rounded-xl bg-neutral-100 dark:bg-neutral-900 transition-colors duration-700 p-2"
                  />
                </CarouselItem>
              ) : (
                <CarouselItem key={index}>
                  <VideoPlayer src={mediaItems[index].src} />
                </CarouselItem>
              ),
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
