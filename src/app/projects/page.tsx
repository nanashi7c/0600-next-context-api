"use client";

import { ProjectList } from "../../components/projects/ProjectList";
import { useProjects } from "../../contexts/ProjectsContext";

export default function ProjectsPage() {
  const { projects, page, setPage, totalPage } = useProjects();

  console.log("projects", projects);

  return (
    <div className="p-8 w-full h-full overflow-scroll">
      <div className="m-8 p-8">
        <h2 className="font-light text-sm">プロジェクト</h2>
        <div className="max-w-200 mt-16 mx-auto">
          <div className="flex justify-between py-4">
            <p>
              {page} / {totalPage} ({projects?.data.length} 件)
            </p>
          </div>
          <ProjectList />
          <div className="flex justify-end max-w-200 m-auto">
            <div className="flex justify-end">
              <ul className="flex">
                <li
                  onClick={() => setPage(Math.max(1, page - 1))}
                  className="flex items-center justify-cneter cursor-pointer p-2 m-2"
                >
                  <div className="flex justify-center items-center h-full">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="48"
                        d="M328 112L184 256l144 144"
                      ></path>
                    </svg>
                  </div>
                </li>
                {Array.from({ length: totalPage }, (_, i) => i + 1).map((p) => (
                  <li
                    key={p}
                    onClick={() => setPage(p)}
                    className={`flex items-center cursor-pointer p-2 m-2 ${p === page ? "text-(--primary-color) font-bold " : ""}`}
                  >
                    {p}
                  </li>
                ))}
                <li
                  onClick={() => setPage(Math.min(totalPage, page + 1))}
                  className="flex items-center justify-cneter cursor-pointer p-2 m-2"
                >
                  <div className="flex justify-center items-center h-full">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="48"
                        d="M184 112l144 144-144 144"
                      ></path>
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
            {/* <ul className="flex list-none">
              <li className="flex items-center justify-center cursor-pointer p-2 m-2">
                <div className="flex justify-center items-center h-full"><svg>
                  </svg></div>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
