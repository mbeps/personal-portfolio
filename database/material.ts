import MaterialInterface from "@/interfaces/material/MaterialInterface";
import blogDatabase from "./blogs";
import certificateDatabase from "./certificates";
import projectDatabase from "./projects";

/**
 * Hashmap of materials with keys as {@link MaterialKeysEnum} and values as {@link MaterialInterface}.
 * The order of the materials is the order that is used when displaying the materials on the website.
 */
const materialDatabase: Database<MaterialInterface> = {
  ...projectDatabase,
  ...certificateDatabase,
  ...blogDatabase,
};

export default materialDatabase;
