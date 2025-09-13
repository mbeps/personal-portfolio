import type { MetadataRoute } from "next";
import developerName from "@/constants/developerName";
import {
  PROJECTS_PAGE,
  EXPERIENCE_PAGE,
  EDUCATION_PAGE,
} from "@/constants/pages";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${developerName}`,
    short_name: developerName,
    description: `Professional portfolio showcasing projects, experience, and skills of ${developerName}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",

    icons: [
      {
        src: "/manifest/icon512_rounded.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/manifest/icon512_maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/manifest/icon512_rounded.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/manifest/icon512_maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],

    // Quick shortcuts to main sections
    shortcuts: [
      {
        name: PROJECTS_PAGE.label,
        short_name: PROJECTS_PAGE.label,
        description: PROJECTS_PAGE.description.trim(),
        url: PROJECTS_PAGE.path,
      },
      {
        name: EXPERIENCE_PAGE.label,
        short_name: EXPERIENCE_PAGE.label,
        description: EXPERIENCE_PAGE.description.trim(),
        url: EXPERIENCE_PAGE.path,
      },
      {
        name: EDUCATION_PAGE.label,
        short_name: EDUCATION_PAGE.label,
        description: EDUCATION_PAGE.description.trim(),
        url: EDUCATION_PAGE.path,
      },
    ],
  };
}
