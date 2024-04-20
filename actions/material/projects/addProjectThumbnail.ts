/**
 * Add project thumbnail.
 * The thumbnail is stored in the `public/projects` directory.
 * Each project has its unique directory with the project key as the directory name.
 * This removed the need to type the path of the thumbnail for each project.
 * It also means that if the location of the thumbnails are changed, only this function needs to be updated.
 *
 * @param key The key of the project to get the thumbnail for
 * @returns The path to the project thumbnail
 */
export default function addProjectThumbnail(key: string): string {
  return `/projects/${key}/cover.png`;
}
