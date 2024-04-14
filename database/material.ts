import MaterialInterface from "@/interfaces/material/MaterialInterface";
import blogDatabase from "./blogs";
import certificateDatabase from "./certificates";
import projectDatabase from "./projects";
import moduleDatabase from "./modules";
import courseDatabase from "./courses";

/**
 * Hashmap of materials with keys as {@link MaterialKeysEnum} and values as {@link MaterialInterface}.
 * The order of the materials is the order that is used when displaying the materials on the website.
 */
const materialDatabase: Database<MaterialInterface> = {
  ...projectDatabase,
  ...certificateDatabase,
  ...blogDatabase,
  ...moduleDatabase,
  ...courseDatabase,
};

export const materialKeys: string[] = Object.keys(materialDatabase);

export default materialDatabase;
