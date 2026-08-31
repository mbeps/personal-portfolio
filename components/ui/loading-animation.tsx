"use client";

import { BounceLoader } from "react-spinners";

/**
 * Centered BounceLoader used by the App Router `loading.tsx` fallback so every route shows the same spinner.
 *
 * @returns Full-height flex container with animated spinner.
 */
const LoadingAnimation = () => {
  return (
    <div className="flex h-[calc(100vh-10rem)] w-full items-center justify-center rounded-lg">
      <BounceLoader color="#ff0000" size={40} />
    </div>
  );
};

export default LoadingAnimation;
