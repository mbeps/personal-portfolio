"use client";

import MediaItem from "@/types/MediaItem";
import Image from "next/image";
import React, { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoMdPlay,
} from "react-icons/io";
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
  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * Change the active media to the next media in the gallery.
   * If the current media is the last image, go to the first media.
   * Change the active media to the previous media in the gallery.
   */
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  /**
   * Change the active media to the previous media in the gallery.
   * If the current media is the first image, go to the last media.
   * Change the active media to the previous media in the gallery.
   */
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length
    );
  };

  /**
   * Get the first image in the gallery.
   * This is used as the thumbnail for videos.
   * This is because the videos don't have thumbnails.
   */
  const firstImageSrc = mediaItems.find((item) => item.type === "image")?.src;

  return (
    <div className="flex flex-col items-center relative">
      <div className="w-full relative">
        <IoIosArrowDropleftCircle
          size={44}
          className="
            absolute 
            left-1 top-1/2 
            transform -translate-y-1/2 
            text-3xl 
            opacity-30 md:hover:opacity-100 
            cursor-pointer 
            text-neutral-400 dark:text-neutral-700 md:hover:text-red-500 dark:md:hover:text-red-900 
            transition-all md:hover:scale-110 duration-300"
          onClick={handlePrev}
        />

        {/* Depending on type, show Image or Video */}
        {mediaItems[activeIndex].type === "image" ? (
          <Image
            src={mediaItems[activeIndex].src}
            alt="Currently Active"
            quality={90}
            width={2000}
            height={1125}
            priority
            className="w-full h-[60vh] object-contain rounded-xl bg-neutral-100 dark:bg-neutral-900 transition-colors duration-700 p-2"
          />
        ) : (
          <VideoPlayer src={mediaItems[activeIndex].src} />
        )}

        <IoIosArrowDroprightCircle
          size={44}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 text-3xl opacity-30 md:hover:opacity-100 cursor-pointer text-neutral-400 dark:text-neutral-700 md:hover:text-red-500 dark:md:hover:text-red-900 transition-all md:hover:scale-110 duration-300"
          onClick={handleNext}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {mediaItems.map((media, idx) => (
          <div
            key={idx}
            className={`relative w-16 h-16 ${
              idx === activeIndex
                ? "border-4 border-red-500 dark:border-red-800 md:hover:border-red-600 dark:md:hover:border-red-500"
                : "border-2 border-neutral-200 dark:border-neutral-700 md:hover:border-neutral-400 dark:md:hover:border-red-900"
            } rounded-lg overflow-hidden cursor-pointer transition-all duration-500 transform md:hover:scale-110 ease-in-out`}
            onClick={() => setActiveIndex(idx)}
          >
            <Image
              src={media.type === "image" ? media.src : firstImageSrc!}
              quality={1}
              alt={`Thumbnail ${idx}`}
              width={150}
              height={150}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg transform md:hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            {media.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <IoMdPlay
                  size={32}
                  className="
                    text-red-500 dark:text-red-900 
                    opacity-70 md:hover:opacity-100 
                    transition-all duration-300
                    "
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
