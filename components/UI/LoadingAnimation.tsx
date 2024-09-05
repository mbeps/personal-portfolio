"use client";

import { BounceLoader } from "react-spinners";

/**
 * Loading animation component which displays a loading animation.
 * This is used on loading pages while content is being fetched.
 *
 * @returns Loading animation
 */
const LoadingAnimation = () => {
  return (
    <div
      className="
			rounded-lg 
			w-full h-[calc(100vh-10rem)]
			flex items-center justify-center
			"
    >
      <BounceLoader color="#ff0000" size={40} />
    </div>
  );
};

export default LoadingAnimation;
