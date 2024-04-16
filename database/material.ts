import MaterialInterface from "@/interfaces/material/MaterialInterface";
import blogDatabase from "./blogs";
import certificateDatabase from "./certificates";
import courseDatabase from "./courses";
import moduleDatabase from "./modules";
import projectDatabase from "./projects";
import rolesDatabase from "./roles";

/**
 * Hashmap of materials with keys as {@link MaterialKeysEnum} and values as {@link MaterialInterface}.
 * The order of the materials is the order that is used when displaying the materials on the website.
 */
const materialDatabase: Database<MaterialInterface> = {
  ...projectDatabase,
  ...courseDatabase,
  ...rolesDatabase,
  ...moduleDatabase,
  ...certificateDatabase,
  ...blogDatabase,
};

export const materialKeys: string[] = Object.keys(materialDatabase);

export default materialDatabase;
