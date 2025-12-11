"use client";

import LoadingAnimation from "@/components/ui/LoadingAnimation";

/**
 * Streaming fallback for slow routes so users always see the brand animation while data heavy lists hydrate.
 *
 * @returns Loading spinner component.
 */
const Loading = () => {
  return <LoadingAnimation />;
};

export default Loading;
