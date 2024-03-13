import MaterialInterface from "@/interfaces/material/MaterialInterface";
import blogDatabase from "./blogs";
import certificateDatabase from "./certificates";
import projectDatabase from "./projects";

const materialDatabase: { [key: string]: MaterialInterface } = {
  ...projectDatabase,
  ...certificateDatabase,
  ...blogDatabase,
};

export default materialDatabase;
