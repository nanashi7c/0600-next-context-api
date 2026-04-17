// モーダル内のタスク追加フォームの中身

import { useState } from "react";
import { useProjects } from "../../contexts/ProjectsContext";
import { useTasks } from "../../contexts/TasksContext";
import { createUserTask } from "../../lib/api";
import { IoCaretDown } from "react-icons/io5";

type Props = {
  onDone: () => void;
};

export const AddTaskForm = ({ onDone }: Props) => {
  const { projects } = useProjects();
  const { fetchTasks } = useTasks();

  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4">
        <div>
          タイトル <span className="text-red-500 ml-1">*</span>
        </div>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="my-2 py-1 px-3 rounded border-0 shadow-[0_0_4px_1px_#22222210] w-full"
        />
      </div>

      <div className="my-4">
        <div>
          プロジェクト<span className="text-red-500 ml-1">*</span>
        </div>
        <div
          className="my-2 flex items-center rounded p-2 w-full border-0     
  shadow-[0_0_4px_1px_#22222210] relative"
        >
          <select
            required
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            className="text-xs appearance-none bg-transparent w-full
  cursor-pointer pr-6"
          >
            <option value="" disabled>
              選択してください
            </option>
            {projects?.data.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <IoCaretDown className="pointer-events-none absolute right-2" />
        </div>
      </div>
      <div className="my-4">
        <div>
          締切日<span className="text-red-500 ml-1">*</span>
        </div>
        <input
          required
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="my-2 py-1 px-3 rounded border-0 shadow-[0_0_4px_1px_#22222210]"
        />
      </div>

      <div className="my-4">
        <div>説明・メモ</div>
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="my-2 p-4 rounded-lg border-0 shadow-[0_0_4px_1px_#22222210] w-full"
        />
      </div>
      <div className="w-full flex h-12">
        <button
          type="submit"
          disabled={isSubmitting}
          className="mr-4 bg-(--primary-color) cursor-pointer py-2 px-4 rounded w-full transition-[background] duration-500 tracking-[1.4px] text-[10px] shadow-[2px_2px_4px_1px_#1e514036] text-(--font-color-light) border-0 hover:bg-(--primary-color-darker)"
        >
          <span className="text-sm">作成</span>
        </button>
        <button
          type="button"
          disabled={isSubmitting}
          className="mr-4 bg-(--secondary-color) cursor-pointer py-2 px-4 rounded w-full transition-[background] duration-500 tracking-[1.4px] text-[10px] shadow-[2px_2px_4px_1px_#1e514036] text-(--font-color-light)  border-0  hover:opacity-80"
        >
          <span className="text-sm" onClick={onDone}>
            キャンセル
          </span>
        </button>
      </div>
    </form>
  );
};
