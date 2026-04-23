"use client";

import { usePathname } from "next/navigation";
import { ProjectParams } from "../../../app/api/datastore/models/project";
import Link from "next/link";
import dayjs from "dayjs";

type Props = {
  project: ProjectParams;
};

export const ProjectItem = ({ project }: Props) => {
  const pathname = usePathname();
  const href = `/projects/${project.slug}`;
  const isActive = pathname === href;

  return (
    <li
      className={`${isActive ? "bg-(--hover-color) font-bold" : ""} cursor-pointer block pt-4 pr-4 pb-4 pl-8 whitespace-nowrap text-sm hover:bg-[#8fe3c7]/25`}
    >
      <Link href={href} className="flex justify-between items-end">
        <div>
          <span
            className="inline-block h-2 w-2 rounded mr-2"
            style={{ backgroundColor: project.color }}
          />{" "}
          {project.name}
        </div>
        <span className="inline-block text-[10px] ml-8">
          {dayjs(project.deadline).format("YYYY/MM/DD")}
        </span>
      </Link>
    </li>
  );
};
