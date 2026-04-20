"use client";

import { useProjects } from "../../../contexts/ProjectsContext";
import { CollapseToggle } from "./CollapseToggle";
import { NaviLink } from "./NaviLink";
import { ProjectItem } from "./ProjectItem";

export const Sidebar = () => {
  const { projects } = useProjects();

  return (
    <div className="w-73 min-w-73">
      <div className="h-[calc(100%-80px)]">
        <div className="flex justify-end h-10 p-4">
          <CollapseToggle />
        </div>
        <div className="h-full">
          <ul>
            <li>
              <NaviLink href="/" label="ダッシュボード" />
            </li>
            <li>
              <NaviLink href="/tasks" label="タスク" />
            </li>
            <li>
              <NaviLink href="/projects" label="プロジェクト" />
            </li>
            <ul className="mt-4 mb-4 ml-8 text-(--font-color-dark) ">
              {projects?.data.map((project) => (
                <ProjectItem key={project.slug} project={project} />
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};
