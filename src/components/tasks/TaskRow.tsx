import { useEffect, useRef, useState } from "react";
import { TaskStatus } from "../../types";
import { TaskParams } from "../../app/api/datastore/models/task";
import { ProjectParams } from "../../app/api/datastore/models/project";
import { STATUS_LABELS, TASK_STATUSES } from "../constants";

type TaskPatch = {
  title?: string;
  projectId?: string;
  status?: TaskStatus;
  deadline?: string;
};

type Props = {
  task: TaskParams;
  projects: ProjectParams[];
  onUpdate: (patch: TaskPatch) => void | Promise<void>;
};

export const TaskRow = ({ task, projects, onUpdate }: Props) => {
  const [draftTitle, setDraftTitle] = useState(task.title);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  useEffect(() => {
    if (isEditingTitle && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isEditingTitle]);

  return (
    <div className="flex py-2 transition-all duration-500">
      {/* タイトル */}
      <div className="pl-4 w-1/2 flex items-center py-2 text-xs">
        <div className="cursor-pointer w-full ">
          {/* Todo: input要素 */}
          {isEditingTitle ? (
            <div>
              <input
                type="text"
                ref={titleInputRef}
                value={draftTitle}
                onChange={(e) => {
                  setDraftTitle(e.target.value);
                }}
                onBlur={async () => {
                  setIsEditingTitle(false);
                  if (draftTitle !== task.title) {
                    await onUpdate({ title: draftTitle });
                  }
                }}
              />
            </div>
          ) : (
            <p onClick={() => setIsEditingTitle(true)} className="min-w-full">
              {task.title}
            </p>
          )}
        </div>
      </div>
      {/* プロジェクト */}
      <div className="w-[14%] flex items-center py-2 text-xs">
        <div className="cursor-pointer w-full flex items-center p-2 justify-between relative">
          <span className="min-h-full">
            <select
              onChange={(e) => onUpdate({ projectId: e.target.value })}
              value={task.project.id}
            >
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"></path>
            </svg>
          </span>
        </div>
      </div>
      {/* ステータス */}
      <div className="w-[12%] flex items-center py-2 text-xs">
        <div className="cursor-pointer w-full flex items-center p-2 justify-between">
          <span className="min-h-full">
            <select
              name=""
              id=""
              value={task.status}
              onChange={(e) =>
                onUpdate({ status: e.target.value as TaskStatus })
              }
            >
              {TASK_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {STATUS_LABELS[status]}
                </option>
              ))}
            </select>
          </span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"></path>
          </svg>
        </div>
      </div>
      {/* 期限日 */}
      <div className="w-1/10 flex items-center py-2 text-xs">
        <div className="cursor-pointer w-full flex items-center">
          {/* <p className="min-w-full">
            {task.deadline
              ? new Date(task.deadline).toLocaleDateString("ja-JP")
              : ""}
          </p> */}
          <span className="min-w-full">
            <input
              type="date"
              className="min-w-full"
              value={
                task.deadline
                  ? new Date(task.deadline).toISOString().split("T")[0]
                  : ""
              }
              onChange={(e) => {
                onUpdate({ deadline: e.target.value });
              }}
            />
          </span>
        </div>
      </div>
      {/* 編集画面へのリンク */}
      <div className="w-[8%] flex items-center py-2 text-xs">
        <a href="">
          <div className="cursor-pointer w-full flex items-center shadow-[2px_2px_4px_1px_#22222210]">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="table_detailIcon__v9v_Q"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="48"
                  d="M268 112l144 144-144 144m124-144H100"
                ></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
