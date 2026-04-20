"use client";

import { use, useEffect, useState } from "react";
import { getUserProject } from "../../../lib/api";
import {
  IoArchiveOutline,
  IoCalendarOutline,
  IoCheckmark,
} from "react-icons/io5";
import dayjs from "dayjs";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getUserProject(slug);
      setProject(data ?? null);
    };
    fetchProject();
  }, [slug]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="p-8 ">
      <div className="p-8">
        <div
          className="border-l-[5px] p-4 bg-(--background-color) transition-all duration-500 rounded border border-(--weak-border-color)"
          style={{ borderLeftColor: project.color }}
        >
          {/* プロジェクトヘッダー（プロジェクト名とその期限） */}
          <div className="flex justify-between items-center">
            {/* プロジェクト名 */}
            <h1
              className="text-sm relative py-2 px-4 font-bold"
              style={{ color: project.color }}
            >
              {project.name}
            </h1>
          </div>
          <div className="relative top-[-36px]">
            <div className="flex items-center text-sm p-4 my-4 w-full">
              <label className="flex mr-4 text-xs tracking-[0.1rem] min-w-[15%]">
                <span className="relative top-0.5 mr-8 ">ゴール:</span>
              </label>
              <div>
                <p className="flex tracking-[0.1rem]">
                  <span className="inline-block mr-2">
                    あと{dayjs(project.deadline).diff(dayjs(), "day")}日
                  </span>
                  <span className="text-xs relative top-0.5">
                    ({dayjs(project.deadline).format("YYYY/MM/DD")})
                  </span>
                </p>
                {/* プロジェクトの内容 */}
                <div className="px-0">
                  {/* 文字列周りの余白 */}
                  <div className="items-center mr-4 mb-2 text-xl text-(--font-color-dark) font-bold">
                    {/* プロジェクト1の目的 */}
                    <p className="text-[28px] font-bold tracking-[0.2rem]">
                      {project.goal}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* あるべき姿 */}
            <div className="flex items-center text-sm p-4 my-4 w-full ">
              <label className="flex mr-4 text-xs tracking-[0.1rem] min-w-[15%]">
                <span className="relative top-0.5 mr-8 ">あるべき姿:</span>
              </label>
              <div>
                <p className="flex tracking-[0.1rem]">
                  <span className="inline-block mr-2">{project.shouldbe}</span>
                </p>
              </div>
            </div>
            <div className="w-[70%] h-[1px] bg-(--weak-border-color)"></div>
            {/* スラッグ */}
            <div className="flex items-center text-sm p-4 my-4 w-full ">
              <label className="flex mr-4 text-xs tracking-[0.1rem] min-w-[15%]">
                <span className="relative top-0.5">スラッグ:</span>
              </label>
              <p className="flex mr-4 text-xs tracking-[0.1rem]">
                <span className="relative top-0.5">/projects/ </span>
              </p>
              <div>
                <input
                  className="rounded py-2 px-3 w-full font-light text-xs text-(--font-color-dark) border-0 shadow-[0_0_4px_1px_#22222210]"
                  type="text"
                  value={slug}
                  readOnly
                />
              </div>
            </div>
            {/* stats */}
            <div className="flex items-center text-sm p-4 my-4 w-full ">
              <div className="flex bg-[#fefefe] relative top-5 right-2 p-2 pl-4">
                <div className="flex items-center px-4 border-r border-(--border-color)">
                  <IoCalendarOutline className="mr-2" />
                  <span className="text-xs text-(--font-color-dark)">
                    {project.stats.kinds.task}
                  </span>
                </div>
                <div className="flex items-center px-4 border-r border-(--border-color)">
                  <IoCheckmark className="mr-2" />
                  <span className="text-xs text-(--font-color-dark)">
                    {project.stats.states.completed}
                  </span>
                </div>
                <div className="flex items-center px-4">
                  <IoArchiveOutline className="mr-2" />
                  <span className="text-xs text-(--font-color-dark)">
                    {project.stats.states.archived}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
