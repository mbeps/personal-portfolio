import React from "react";

interface VideoPlayerProps {
  src: string;
  type?: string;
  className?: string;
}

/**
 * Video Player Component which allows users to view a video.
 * @param src The URL of the video to be played
 * @param type The type of the video file
 * @param className Additional classes for styling
 * @returns Video player component with the video *
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
