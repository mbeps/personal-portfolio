/**
 * Single source for how project thumbnails are resolved so MaterialList, featured sections, and project detail pages share the same asset path.
 *
 * @param key Project slug that doubles as the folder name inside `public/projects`.
 * @returns Cover image path consumed by Next Image components.
 */
export default function addProjectThumbnail(key: string): string {
  return `/projects/${key}/cover.png`;
}
