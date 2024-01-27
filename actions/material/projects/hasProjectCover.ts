import fs from "fs";
import path from "path";

/**
 * Checks if a project cover image exists.
 * @param slug (string) - The slug of the project.
 * @returns (boolean) - Returns true if the cover image exists, false otherwise.
 */
export default function hasProjectCover(slug: string) {
  const coverImagePath = path.join("public", "projects", slug, "cover.png");

  try {
    if (fs.existsSync(coverImagePath)) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
}
