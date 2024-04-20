/**
 * Add company thumbnail to a company object.
 * The thumbnail is stored in the `public/companies` directory.
 * Each company has its unique directory with the company key as the directory name.
 * This removed the need to type the path of the logo for each company.
 * It also means that if the location of the logos are changed, only this function needs to be updated.
 *
 * @param key The key of the company to get the thumbnail for
 * @returns The path to the company thumbnail
 */
export default function addCompanyThumbnail(key: string): string {
  return `/companies/${key}/logo.png`;
}
