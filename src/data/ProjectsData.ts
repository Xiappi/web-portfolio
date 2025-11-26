import type Project from "../models/Project";
import { mdiReact, mdiUnity } from "@mdi/js";

export const Projects: Project[] = [
  {
    name: "Kanban Board",
    description:
      "A full-featured Kanban board built with React, TypeScript, Firebase Auth, and Firestore. Supports drag-and-drop, pagination, swimlanes, real-time updates, and a polished, modern UI.",
    github: "https://github.com/Xiappi/kanban-board",
    website: "https://kanban.adam-mattatall.com/",
    icon: mdiReact,
  },
  {
    name: "2D Unity Platformer",
    description:
      "A handcrafted 2D platformer built in Unity featuring multiple levels, responsive controls, tilemap-based environments, enemies, weapons, and custom physics tuning.",
    github: "https://github.com/Xiappi/UnityProjects",
    website: "",
    icon: mdiUnity,
  },
  {
    name: "Game Jam 2022",
    description:
      "A Unity game developed in a 48-hour game jam, focusing on fast iteration, creative mechanics, tight scope management, and delivering a complete, playable experience under time pressure.",
    github: "https://github.com/Xiappi/gamejam-2022",
    website: "",
    icon: mdiUnity,
  },
];
