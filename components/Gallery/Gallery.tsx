"use client";

import Image from "next/image";
import React, { useState } from "react";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-2/3 my-4">
        <Image
          src={activeImage}
          alt="Currently Active"
          width={800}
          height={500}
          className="w-full h-auto object-cover rounded-xl shadow"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="w-16 h-16 border border-gray-200 rounded overflow-hidden cursor-pointer hover:border-gray-400"
            onClick={() => setActiveImage(image)}
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
