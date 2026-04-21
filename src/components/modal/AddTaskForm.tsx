// モーダル内のタスク追加フォームの中身

import { useState } from "react";
import { useProjects } from "../../contexts/ProjectsContext";
import { useTasks } from "../../contexts/TasksContext";
import { createUserTask } from "../../lib/api";
import { Select } from "../select/Select";
import { STATUS_LABELS, TASK_STATUSES } from "../../constants";
import { TaskStatus } from "../../types";
import { Button } from "../button/Button";
import { useRouter } from "next/navigation";
import AppDate from "../../app/api/lib/date";
import { useToast } from "../../contexts/ToastContext";

type Props = {
  onDone: () => void;
};

type FormErrors = {
  projectId?: string;
  title?: string;
  deadline?: string;
};

export const AddTaskForm = ({ onDone }: Props) => {
  const { projects } = useProjects();
  const { fetchTasks } = useTasks();
  const { showToast } = useToast();
  const [status, setStatus] = useState<TaskStatus>("scheduled");

  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [deadline, setDeadline] = useState(() => AppDate.in(7).toString());
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    const nextErrors: FormErrors = {};
    e.preventDefault();
    if (!projectId) {
      nextErrors.projectId = "プロジェクトを設定してください";
    }
    if (!title) {
      nextErrors.title = "タイトルを設定してください";
    }
    if (!deadline) {
      nextErrors.deadline = "期間を設定してください";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const res = await createUserTask({
        title,
        kind: "task",
        status: status,
        projectId,
        deadline,
        description,
      });
      if (res) {
        await fetchTasks();
        showToast("タスクを作成しました");
        onDone();
        router.push("/");
      } else {
        showToast("タスクの作成に失敗しました");
      }
    } finally {
      setIsSubmitting(false);
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
              value={projectId}
              options={projects?.data.map((project) => ({
                label: project.name,
                value: project.id,
              }))}
              onChange={(value) => {
                setProjectId(value);
                setErrors((prev) => ({ ...prev, projectId: undefined }));
              }}
              placeholder="プロジェクトを選択してください"
              iconSize="size-4"
              className="shadow-[0_0_4px_1px_#22222210] my-2"
            />
            {errors.projectId && (
              <p className="text-base font-light text-red-400">
                {errors.projectId}
              </p>
            )}
          </div>
          <div className="pb-5" />
        </div>
        <div className="my-4">
          <div className="text-xs">
            タスク
            <span className="text-red-500 ml-1">*</span>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setErrors((prev) => ({ ...prev, title: undefined }));
              }}
              placeholder="タスクを入力。例) 英会話レッスンの予約、React公式ドキュメントを1ページ読む"
              className="my-2 py-1 px-3 rounded border-0 shadow-[0_0_4px_1px_#22222210] w-full"
            />
            {errors.title && (
              <p className="text-base font-light text-red-400">
                {errors.title}
              </p>
            )}
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
              type="date"
              value={deadline}
              onChange={(e) => {
                setDeadline(e.target.value);
                setErrors((prev) => ({ ...prev, deadline: undefined }));
              }}
              className="py-1 px-3 rounded border-0 shadow-[0_0_4px_1px_#22222210]"
            />
            {errors.deadline && (
              <p className="text-base font-light text-red-400">
                {errors.deadline}
              </p>
            )}
          </div>
        </div>
        <div className="my-4">
          <div className="text-xs">ステータス </div>
          <div className="shadow-[0_0_4px_1px_#22222210]">
            <Select
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
        <Button type="submit" disabled={isSubmitting}>
          <span className="text-sm">作成</span>
        </Button>
        <Button variant="secondary" onClick={onDone} disabled={isSubmitting}>
          <span className="text-sm">キャンセル</span>
        </Button>
      </div>
    </form>
  );
};
