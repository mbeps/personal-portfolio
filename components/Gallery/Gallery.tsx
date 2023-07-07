"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col items-center relative">
      <FiArrowLeftCircle
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
        onClick={handlePrev}
      />
      <div className="w-full md:w-2/3 my-4">
        <Image
          src={images[activeIndex]}
          alt="Currently Active"
          width={800}
          height={500}
          className="w-full h-auto object-cover rounded-xl shadow"
        />
      </div>
      <FiArrowRightCircle
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
        onClick={handleNext}
      />
      <div className="flex flex-wrap justify-center gap-2">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="w-16 h-16 border border-gray-200 rounded overflow-hidden cursor-pointer hover:border-gray-400"
            onClick={() => setActiveIndex(idx)}
          >
            <Image
              src={image}
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
