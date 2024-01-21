"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shadcn/ui/tabs";
import VideoPlayer from "./VideoPlayer";
import useIsMounted from "@/hooks/useIsMounted";
import { Button } from "../shadcn/ui/button";
import { LiaImageSolid, LiaVideoSolid } from "react-icons/lia";

interface GalleryProps {
  images?: string[];
  videos?: string[];
}

/**
 * Gallery Component which allows users to view a list of images and videos.
 * At the top, there is a preview of the currently selected image or video.
 * Bellow are the thumbnails of the available images and videos.
 * Clicking on a thumbnail will change the preview to that image.
 * There are also buttons on the left and right of the preview to change the image.
 * @param (GalleryProps) - images: list of images and videos to display
 * @returns (JSX.Element) - Gallery Component
 */
const Gallery: React.FC<GalleryProps> = ({ images, videos }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isMounted = useIsMounted();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!isMounted) {
    return null;
  }

  if (!images && !videos) {
    return null;
  }

  return (
    <div className="flex flex-col items-center relative">
      {/* Media Preview */}
      <div className="w-full">
        <Tabs defaultValue="images" className="w-full">
          {/* Images */}
          <TabsContent value="images" className="w-full">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {Array.from({ length: images?.length ?? 0 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Image
                      key={index}
                      src={images?.[index] ?? ""}
                      alt="Currently Active"
                      quality={90}
                      width={2000}
                      height={1125}
                      priority
                      className="w-full h-[60vh] object-contain rounded-xl bg-neutral-100 dark:bg-neutral-950 transition-colors duration-700 p-2"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {!isMobile && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </TabsContent>
          {/* Video Demos */}
          <TabsContent value="demo">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {Array.from({ length: videos?.length ?? 0 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <VideoPlayer
                      src={videos?.[index] ?? ""}
                      className="w-full h-[60vh] object-contain rounded-xl bg-neutral-100 dark:bg-neutral-950 transition-colors duration-700 p-2"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {!isMobile && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </TabsContent>

          <div className="flex justify-center items-center">
            <TabsList>
              <TabsTrigger 
                value="images" 
                className="
                  flex flex-row space-x-1 
                  text-neutral-700 dark:text-neutral-200 text-lg
                  ">
                    <LiaImageSolid fontSize={20}/>
                    <span>
                      Images
                    </span>
              </TabsTrigger>
              <TabsTrigger 
                value="demo" 
                className="
                  flex flex-row space-x-1 
                  text-neutral-700 dark:text-neutral-200 text-lg
                  ">
                    <LiaVideoSolid fontSize={20}/>
                    <span>
                      Videos
                    </span>
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
