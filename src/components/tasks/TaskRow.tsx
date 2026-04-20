import { useEffect, useRef, useState } from "react";
import { TaskStatus } from "@/types";
import { TaskParams } from "@/app/api/datastore/models/task";
import { ProjectParams } from "@/app/api/datastore/models/project";
import { TASK_STATUSES, STATUS_LABELS } from "@/constants";
import Link from "next/link";
import { Select } from "../select/Select";
import { IoArrowForward } from "react-icons/io5";

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
  const deadlineInputRef = useRef<HTMLInputElement>(null);
  const [isEditingDeadline, setIsEditingDeadline] = useState(false);

  const deadlineValue = task.deadline
    ? new Date(task.deadline).toISOString().split("T")[0]
    : "";

  useEffect(() => {
    if (isEditingDeadline && deadlineInputRef.current) {
      deadlineInputRef.current.focus();
    }
  }, [isEditingDeadline]);

  useEffect(() => {
    if (isEditingTitle && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isEditingTitle]);

  return (
    <div className="flex py-2 transition-all duration-500 hover:shadow-[1px_1px_3px_1px_#22222210] hover:scale-[1.01]">
      {/* タイトル */}
      <div className="pl-4 w-1/2 flex items-center py-2 text-xs">
        <div className="cursor-pointer w-full ">
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
        <div className="cursor-pointer w-full flex items-center justify-between relative">
          <span className="min-h-full">
            <Select
              options={projects.map((project) => ({
                label: project.name,
                value: project.id,
              }))}
              value={task.project.id}
              onChange={(value) => onUpdate({ projectId: value })}
              iconSize="size-3"
            />
          </span>
        </div>
      </div>
      {/* ステータス */}
      <div className="w-[12%] flex items-center py-2 text-xs">
        <div className="cursor-pointer w-full flex items-center justify-between">
          <span className="min-h-full">
            <Select
              options={TASK_STATUSES.map((status) => ({
                label: STATUS_LABELS[status],
                value: status,
              }))}
              value={task.status}
              onChange={(value) => onUpdate({ status: value as TaskStatus })}
              iconSize="size-3"
            />
          </span>
        </div>
      </div>
      {/* 期限日 */}
      <div className="w-1/10 flex items-center py-2 text-xs">
        <div className="cursor-pointer w-full flex items-center">
          <span className="min-w-full">
            {isEditingDeadline ? (
              <input
                type="date"
                className="min-w-full"
                ref={deadlineInputRef}
                value={deadlineValue}
                onChange={(e) => {
                  onUpdate({ deadline: e.target.value });
                }}
                onBlur={() => setIsEditingDeadline(false)}
              />
            ) : (
              <p
                onClick={() => setIsEditingDeadline(true)}
                className="min-w-full"
              >
                {deadlineValue || "-"}
              </p>
            )}
          </span>
        </div>
      </div>
      {/* 編集画面へのリンク */}
      <div className="w-[8%] flex items-center py-2 text-xs">
        <Link href={`/tasks/${task.id}`}>
          <div className="cursor-pointer w-full flex items-center shadow-[2px_2px_4px_1px_#22222210]">
            <div>
              <IoArrowForward />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
