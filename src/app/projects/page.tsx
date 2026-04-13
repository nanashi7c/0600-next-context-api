"use client";

import { Pagenation } from "../../components/pagenation/Pagenation";
import { ProjectList } from "../../components/projects/ProjectList";
import { useProjects } from "../../contexts/ProjectsContext";

export default function ProjectsPage() {
  const { projects, page, setPage, totalPage } = useProjects();

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
          <Pagenation
            page={page}
            onPageChange={setPage}
            totalPage={totalPage}
          />
        </div>
      </div>
    </div>
  );
}
