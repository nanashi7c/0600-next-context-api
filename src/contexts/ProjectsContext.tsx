"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getUserProjects } from "../lib/api";
import { ProjectsResponse } from "../types";

interface ProjectsContextValue {
  projects: ProjectsResponse | undefined;
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  totalPage: number;
}

const DEFAULT_LIMIT = 20;
const DEFAULT_PAGE = 1;

const ProjectsContext = createContext<ProjectsContextValue | null>(null);

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState<ProjectsResponse | undefined>();
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [page, setPage] = useState(DEFAULT_PAGE);

  const totalCount = projects?.pageInfo?.totalCount ?? 0;
  const totalPage = Math.ceil(totalCount / limit);

  useEffect(() => {
    getUserProjects({ page, limit }).then(setProjects);
  }, [page, limit]);

  return (
    <ProjectsContext
      value={{ projects, page, setPage, limit, setLimit, totalPage }}
    >
      {children}
    </ProjectsContext>
  );
};

export function useProjects() {
  const ctx = useContext(ProjectsContext);
  if (!ctx) {
    throw new Error("useProjects must be used within ProjectsProvider");
  }
  return ctx;
}
