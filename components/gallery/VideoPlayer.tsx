import React from "react";

interface VideoPlayerProps {
  src: string;
  type?: string;
  className?: string;
}

/**
 * Lightweight wrapper around the native `<video>` element to keep styling consistent inside the Gallery carousel.
 *
 * @param src Video source path relative to `/public`.
 * @param type MIME type, defaults to mp4.
 * @param className Optional Tailwind overrides.
 * @returns Styled video element with controls enabled.
 */
const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  type = "video/mp4",
  className,
}) => {
  return (
    <video
      controls
      className={`w-full h-[60vh] rounded-xl bg-neutral-100 dark:bg-neutral-900 transition-colors duration-700 p-2 ${className}`}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
