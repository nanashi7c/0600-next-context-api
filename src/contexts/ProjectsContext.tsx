"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getUserProjects } from "../lib/api";
import { ProjectsResponse } from "../types";

interface ProjectsContextValue {
  projects: ProjectsResponse | undefined;
}

const ProjectsContext = createContext<ProjectsContextValue | null>(null);

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState<ProjectsResponse | undefined>();

  useEffect(() => {
    getUserProjects().then(setProjects);
  }, []);

  return <ProjectsContext value={{ projects }}>{children}</ProjectsContext>;
};

export function useProjects() {
  const ctx = useContext(ProjectsContext);
  if (!ctx) {
    throw new Error("useProjects must be used within ProjectsProvider");
  }
  return ctx;
}
