/**
 * Interface for media items.
 * This is used to display images and videos in the gallery.
 * It keeps track of the source of the media and the type of media.
 */
interface MediaItem {
  type: "image" | "video";
  src: string;
}

export default MediaItem;
