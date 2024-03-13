import MaterialInterface from "@/interfaces/material/MaterialInterface";
import blogs from "./blogs";
import certificateDatabase from "./certificates";
import projectDatabase from "./projects";

const materialDatabase: { [key: string]: MaterialInterface } = {
  ...projectDatabase,
  ...certificateDatabase,
  ...blogs,
};

export default materialDatabase;
