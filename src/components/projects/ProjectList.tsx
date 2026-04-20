import { IoCalendarClear, IoDocument, IoGitCommit } from "react-icons/io5";
import { useProjects } from "../../contexts/ProjectsContext";
import dayjs from "dayjs";

export const ProjectList = () => {
  const { projects } = useProjects();
  return (
    <>
      {projects?.data.map((project) => (
        <a key={project.id} href="">
          {/* プロジェクト1のカード */}
          <div
            className=" border-l-[5px] border-solid p-4 border-0 shadow-[1px_1px_3px_1px_#22222210 mb-4 bg-(--background-color) transition-all duration-500 hover:shadow-[1px_1px_8px_1px_#22222220] hover:scale-105"
            style={{ borderColor: project.color }}
          >
            {/* プロジェクトヘッダー（プロジェクト名とその期限） */}
            <div className="flex justify-between items-center">
              {/* プロジェクト名 */}
              <h2
                className="text-[10px] font-bold "
                style={{ color: project.color }}
              >
                {project.name}
              </h2>
              {/* カレンダーアイコンと期限日 */}
              <span className="flex items-center">
                {/* カレンダーアイコン */}
                <IoCalendarClear
                  size={10}
                  style={{ color: project.color }}
                  className="inline-block mr-2 "
                />
                {/* 期限日 */}
                <p className="text-[10px] font-bold">
                  {dayjs(project.deadline).format("YYYY/MM/DD")}
                </p>
              </span>
            </div>
            {/* プロジェクトの内容 */}
            <div className="py-4 px-0">
              {/* 文字列周りの余白 */}
              <div className="items-center mr-4 mb-2 text-xl text-(--font-color-dark) font-bold">
                {/* プロジェクト1の目的 */}
                <p>{project.goal}</p>
              </div>
              {/* 文字列周りの余白 */}
              <div className="flex items-center text-sm font-thin text-(--font-color-weak)">
                {/* プロジェクト1のあるべき姿 */}
                <p>{project.shouldbe}</p>
              </div>
            </div>
            {/* カードフッター */}
            <div className="flex justify-end text-(--font-color-weak)">
              {/* カードスタッツ */}
              <div className="flex items-center">
                {/* マイルストーン */}
                <p className="cursor-pointer flex items-center">
                  {/* マイルストーンアイコン */}
                  <span className="mr-1 ml-2">
                    <IoGitCommit size={12} style={{ color: project.color }} />
                  </span>
                  <span className="text-xs text-(--font-color-weak)">
                    {project.stats.kinds.milestone}
                  </span>
                </p>
                {/* タスク */}
                <p className="cursor-pointer flex items-center">
                  <span className="mr-1 ml-2">
                    <IoDocument size={12} style={{ color: project.color }} />
                  </span>
                  <span className="text-xs text-(--font-color-weak)">
                    {project.stats.kinds.task}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};
