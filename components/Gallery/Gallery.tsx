"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

interface GalleryProps {
  images: string[];
}

/**
 * Gallery Component which allows users to view a list of images.
 * At the top, there is a preview of the currently selected image.
 * Bellow are the thumbnails of the available images.
 * Clicking on a thumbnail will change the preview to that image.
 * There are also buttons on the left and right of the preview to change the image.
 * @param images (string[]) - List of image urls (relative or absolute
 * @returns (JSX.Element) - Gallery Component
 */
const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * Changes the active image to the next image in the list.
   * If the current image is the last image, it will loop back to the first image.
   */
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  /**
   * Changes the active image to the previous image in the list.
   *
   */
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col items-center relative">
      <div className="w-full relative">
        <IoIosArrowDropleftCircle
          size={38}
          className="
            absolute left-1 top-1/2 transform -translate-y-1/2 text-3xl 
            cursor-pointer
            text-neutral-400 dark:text-neutral-700
            hover:text-red-500 dark:hover:text-red-900
            transition-colors duration-300"
          onClick={handlePrev}
        />
        {/* Image Preview */}
        <Image
          src={images[activeIndex]}
          alt="Currently Active"
          width={800}
          height={500}
          priority
          className="
          w-full h-[40vh] 
          object-contain rounded-xl 
          bg-neutral-100 dark:bg-neutral-900 
          transition-colors duration-700
          p-2"
        />
        <IoIosArrowDroprightCircle
          size={38}
          className="
            absolute right-1 top-1/2 transform -translate-y-1/2 text-3xl 
            cursor-pointer
            text-neutral-400 dark:text-neutral-700
            hover:text-red-500 dark:hover:text-red-900
            transition-colors duration-300"
          onClick={handleNext}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {/* Image List */}
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`w-16 h-16 ${
              idx === activeIndex
                ? "border-4 border-red-500 dark:border-red-400 hover:border-red-600 dark:hover:border-red-500"
                : "border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-red-900"
            } rounded-lg overflow-hidden cursor-pointer transition-colors duration-500 `}
            onClick={() => setActiveIndex(idx)}
          >
            <Image
              src={image}
              quality={1}
              alt={`Thumbnail ${idx}`}
              width={150}
              height={150}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
