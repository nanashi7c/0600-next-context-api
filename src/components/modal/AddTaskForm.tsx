// モーダル内のタスク追加フォームの中身

import { useState } from "react";
import { useProjects } from "../../contexts/ProjectsContext";
import { useTasks } from "../../contexts/TasksContext";
import { createUserTask } from "../../lib/api";
import { IoCaretDown } from "react-icons/io5";
import { Select } from "../select/Select";
import { ProjectParams } from "../../app/api/datastore/models/project";
import { STATUS_LABELS, TASK_STATUSES } from "../../constants";
import { TaskStatus } from "../../types";
import { Button } from "../button/Button";
import { useRouter } from "next/navigation";
import AppDate from "../../app/api/lib/date";

type Props = {
  onDone: () => void;
};

export const AddTaskForm = ({ onDone }: Props) => {
  const { projects } = useProjects();
  const { fetchTasks } = useTasks();
  const [status, setStatus] = useState<TaskStatus | "">("");

  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [deadline, setDeadline] = useState(() => AppDate.in(7).toString());
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await createUserTask({
      title,
      kind: "task",
      status: "scheduled",
      projectId,
      deadline,
      description,
    });
    setIsSubmitting(false);
    if (res) {
      await fetchTasks();
      onDone();
      router.push("/");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-12">
        <div className="my-4">
          <div className="text-xs">
            プロジェクト
            <span className="text-red-500 ml-1">*</span>
            <Select
              required
              value={projectId}
              options={projects?.data.map((project) => ({
                label: project.name,
                value: project.id,
              }))}
              onChange={(value) => setProjectId(value)}
              placeholder="プロジェクトを選択してください"
              iconSize="size-4"
              className="shadow-[0_0_4px_1px_#22222210] my-2"
            />
          </div>
          <div className="pb-5" />
        </div>
        <div className="my-4">
          <div className="text-xs">
            タスク
            <span className="text-red-500 ml-1">*</span>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="タスクを入力。例) 英会話レッスンの予約、React公式ドキュメントを1ページ読む"
              className="my-2 py-1 px-3 rounded border-0 shadow-[0_0_4px_1px_#22222210] w-full"
            />
          </div>
          <div className="pb-5" />
        </div>

        <div className="my-4">
          <div className="text-xs">説明・メモ</div>
          <div className="my-2">
            <textarea
              rows={5}
              placeholder="タスクの説明・メモ"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-4 rounded-lg border-0 shadow-[0_0_4px_1px_#22222210] leading-[1.6em] w-full text-(--font-color-dark) focus:outline-solid focus:outline-[1.5px] focus:outline-(--input-outline-color) placeholder-[#757575]"
            />
          </div>
        </div>

        <div className="my-4">
          <div className="text-xs">
            締切日<span className="text-red-500 ml-1">*</span>
          </div>

          <div className="my-2 pb-[19px]">
            <input
              required
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="py-1 px-3 rounded border-0 shadow-[0_0_4px_1px_#22222210]"
            />
          </div>
        </div>
        <div className="my-4">
          <div className="text-xs">ステータス </div>
          <div className="shadow-[0_0_4px_1px_#22222210]">
            <Select
              required
              value={status}
              options={TASK_STATUSES.map((status) => ({
                label: STATUS_LABELS[status],
                value: status,
              }))}
              onChange={(value) => setStatus(value as TaskStatus)}
              placeholder="ステータスを選択してください"
              className="my-2"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex h-12">
        <Button type="submit">
          <span className="text-sm">作成</span>
        </Button>
        <Button variant="secondary" onClick={onDone}>
          <span className="text-sm">キャンセル</span>
        </Button>
      </div>
    </form>
  );
};
