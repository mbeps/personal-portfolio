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
			w-full h-full 
			flex items-center justify-center
			min-h-[85vh]
			"
    >
      <BounceLoader color="#ff0000" size={40} />
    </div>
  );
};

export default LoadingAnimation;
