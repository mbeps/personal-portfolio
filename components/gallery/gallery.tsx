"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { LiaImageSolid, LiaVideoSolid } from "react-icons/lia";
import useIsMounted from "@/hooks/use-is-mounted";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shadcn/ui/tabs";
import VideoPlayer from "./video-player";

interface GalleryProps {
  images?: string[];
  videos?: string[];
}

/**
 * Media gallery used on project pages to showcase screenshots and demo clips without introducing layout shift on mobile.
 * Combines shadcn's carousel + tabs so images/videos share the same navigation controls.
 *
 * @param images Optional list of project image paths.
 * @param videos Optional list of mp4 demo paths.
 * @returns Carousel + tab UI that swaps between image and video sets.
 * @see Carousel https://ui.shadcn.com/docs/components/carousel
 * @see Tabs https://ui.shadcn.com/docs/components/tabs
 */
const Gallery: React.FC<GalleryProps> = ({ images, videos }) => {
  const [activeTab, setActiveTab] = React.useState(
    images && images.length > 0 ? "images" : "demo",
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const isMobile: boolean = useMediaQuery("(max-width: 768px)");
  const isMounted: boolean = useIsMounted();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setApi(undefined);
    setCurrent(0);
    setCount(0);
  };

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

  // If there are no images or videos do not render the gallery
  if (!images && !videos) {
    return null;
  }

  return (
    <div className="relative flex flex-col items-center">
      {/* Media Preview */}
      <div className="w-full">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          {/* Images */}
          <TabsContent value="images" className="w-full">
            {activeTab === "images" && (
              <Carousel
                setApi={setApi}
                className="rounded-xl bg-neutral-100 transition-colors duration-700 dark:bg-neutral-950"
              >
                <CarouselContent>
                  {Array.from({ length: images?.length ?? 0 }).map(
                    (_, index) => (
                      <CarouselItem key={index}>
                        <Image
                          key={index}
                          src={images?.[index] ?? ""}
                          alt={`Gallery image ${index + 1}`}
                          quality={90}
                          preload={true}
                          className="h-[60vh] w-full rounded-xl bg-neutral-100 object-contain p-2 transition-colors duration-700 dark:bg-neutral-950"
                        />
                      </CarouselItem>
                    ),
                  )}
                </CarouselContent>
                {!isMobile && (
                  <>
                    <CarouselPrevious />
                    <CarouselNext />
                  </>
                )}
              </Carousel>
            )}
            <div className="py-2 text-center text-muted-foreground text-sm">
              Slide {current} of {count}
            </div>
          </TabsContent>

          {/* Videos */}
          <TabsContent value="demo" className="w-full">
            {activeTab === "demo" && (
              <Carousel
                setApi={setApi}
                className="rounded-xl bg-neutral-100 transition-colors duration-700 dark:bg-neutral-950"
              >
                <CarouselContent>
                  {Array.from({ length: videos?.length ?? 0 }).map(
                    (_, index) => (
                      <CarouselItem key={index}>
                        <VideoPlayer
                          src={videos?.[index] ?? ""}
                          className="h-[60vh] w-full rounded-xl bg-neutral-100 object-contain p-2 transition-colors duration-700 dark:bg-neutral-950"
                        />
                      </CarouselItem>
                    ),
                  )}
                </CarouselContent>
                {!isMobile && (
                  <>
                    <CarouselPrevious />
                    <CarouselNext />
                  </>
                )}
              </Carousel>
            )}
            <div className="py-2 text-center text-muted-foreground text-sm">
              Slide {current} of {count}
            </div>
          </TabsContent>

          {/* Tabs List */}
          {images && images.length > 0 && videos && videos.length > 0 && (
            <div className="flex items-center justify-center">
              <TabsList
                variant="pill"
                className="flex flex-row space-x-1 rounded-full transition-colors duration-700"
              >
                {/* Images */}
                {images && images.length > 0 && (
                  <TabsTrigger
                    value="images"
                    variant="pill"
                    className="flex flex-row space-x-2 rounded-full px-6 text-md text-neutral-700 transition-colors duration-700 dark:text-neutral-200"
                  >
                    <LiaImageSolid fontSize={20} />
                    <span>Images</span>
                  </TabsTrigger>
                )}

                {/* Videos */}
                {videos && videos.length > 0 && (
                  <TabsTrigger
                    value="demo"
                    variant="pill"
                    className="flex flex-row space-x-2 rounded-full px-6 text-md text-neutral-700 transition-colors duration-700 dark:text-neutral-200"
                  >
                    <LiaVideoSolid fontSize={20} />
                    <span>Videos</span>
                  </TabsTrigger>
                )}
              </TabsList>
            </div>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
