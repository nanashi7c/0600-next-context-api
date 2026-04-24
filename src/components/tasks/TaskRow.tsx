import { TaskStatus } from "@/types";
import { TaskParams } from "@/app/api/datastore/models/task";
import { ProjectParams } from "@/app/api/datastore/models/project";
import { TASK_STATUSES, STATUS_LABELS } from "@/constants";
import Link from "next/link";
import { Select } from "../select";
import { IoArrowForward } from "react-icons/io5";
import { EditableField } from "../editableField";

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
  const deadlineValue = task.deadline
    ? new Date(task.deadline).toISOString().split("T")[0]
    : "";

  return (
    <div className="relative flex py-2 transition-all duration-500 hover:shadow-[1px_1px_3px_1px_#22222210] hover:scale-[1.01] hover:z-10">
      {/* タイトル */}
      <div className="pl-4 w-1/2 flex items-center py-2 text-xs">
        <div className="cursor-pointer w-full ">
          <EditableField
            value={task.title}
            displayClassName="min-w-full"
            onCommit={(title) => onUpdate({ title })}
          />
        </div>
      </div>
      {/* プロジェクト */}
      <div className="w-[14%] flex items-center py-2 text-xs">
        <div className="cursor-pointer w-full flex items-center justify-between relative">
          <span className="min-h-full w-full">
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
          <span className="min-h-full w-full">
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
            <EditableField
              value={deadlineValue}
              displayValue={deadlineValue || "-"}
              inputType="date"
              inputClassName="min-w-full bg-[#fafafa] rounded border-0 focus:outline-none shadow-[0_0_4px_1px_#22222210] py-1 px-3"
              displayClassName="min-w-full"
              onCommit={(deadline) => onUpdate({ deadline })}
            />
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
