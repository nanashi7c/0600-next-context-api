"use client";

import { use, useEffect, useState } from "react";
import { IoArrowBack, IoCaretDown, IoTrashOutline } from "react-icons/io5";

import {
  deleteUserTask,
  getUserProjects,
  getUserTask,
  updateUserTask,
} from "../../../lib/api";
import { TaskStatus } from "../../../types";
import { useRouter } from "next/navigation";
import { STATUS_LABELS, TASK_STATUSES } from "../../../constants";
import { TaskParams } from "../../api/datastore/models/task";
import { ProjectParams } from "../../api/datastore/models/project";

export default function TasksDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [task, setTask] = useState<TaskParams | null>(null);
  const [projects, setProjects] = useState<ProjectParams[]>([]);

  const [projectId, setProjectId] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState<TaskStatus | "">("");
  const [description, setDescription] = useState("");

  const applyTaskForm = (t: TaskParams) => {
    setProjectId(t.project?.id ?? "");
    setDeadline(
      t.deadline ? new Date(t.deadline).toISOString().split("T")[0] : "",
    );
    setStatus(t.status as TaskStatus);
    setDescription(t.description ?? "");
  };

  useEffect(() => {
    const fetchData = async () => {
      const [taskData, projectData] = await Promise.all([
        getUserTask(id),
        getUserProjects(),
      ]);
      if (taskData) {
        setTask(taskData);
        applyTaskForm(taskData);
      }
      if (projectData?.data) {
        setProjects(projectData.data);
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    if (!task) return;
    const res = await updateUserTask(id, {
      projectId,
      deadline,
      status: status || undefined,
      description,
    });
    if (res?.data) {
      setTask(res.data);
      applyTaskForm(res.data);
    }
  };

  const handleReset = () => {
    if (!task) return;
    applyTaskForm(task);
  };

  const handleDelete = async () => {
    if (!task) return;
    if (!window.confirm("このタスクを削除しますか？")) return;
    const ok = await deleteUserTask(id);
    if (ok) router.back();
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="w-full h-full p-8 overflow-scroll">
      <div className="p-16">
        <div className="m-auto w-160">
          <div className="mb-12">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-midium">
                <div className="cursor-pointer w-full">
                  <p className="min-w-full">{task.title}</p>
                </div>
              </h2>
              <div
                className="cursor-pointer flex justify-center items-center h-full"
                onClick={handleDelete}
                role="button"
                aria-label="タスクを削除"
              >
                <IoTrashOutline />
              </div>
            </div>
            <div className="my-2 text-xs flex">
              <div className="mr-4">
                <div>
                  作成日時:
                  {new Date(task.createdAt).toLocaleDateString("ja-JP")}
                </div>
              </div>
              <div className="mr-4">
                <div>
                  更新日時:
                  {new Date(task.updatedAt).toLocaleDateString("ja-JP")}
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <div className="mb-12">
              <div className="my-4">
                <div>
                  プロジェクト<span className="text-red-500 ml-1">*</span>
                </div>
                <div className="my-2 pb-[19px]">
                  <div className="flex justify-center items-center cursor-pointer flex-col">
                    <div className="flex items-center rounded p-2 justify-between w-full border-0 shadow-[0_0_4px_1px_#22222210] relative">
                      <select
                        required
                        value={projectId}
                        className="text-xs appearance-none bg-transparent w-full cursor-pointer pr-6"
                        onChange={(e) => setProjectId(e.target.value)}
                      >
                        {projects.map((project) => (
                          <option key={project.id} value={project.id}>
                            {project.name}
                          </option>
                        ))}
                      </select>
                      <IoCaretDown className="pointer-events-none absolute right-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <div>
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
                <div>ステータス</div>
                <div className="my-2">
                  <div className="flex justify-center items-center cursor-pointer">
                    <div className="flex items-center rounded p-2 justify-between w-full border-0 shadow-[0_0_4px_1px_#22222210]">
                      <select
                        value={status}
                        onChange={(e) =>
                          setStatus(e.target.value as TaskStatus)
                        }
                        className="text-xs appearance-none bg-transparent w-full cursor-pointer pr-6"
                      >
                        {TASK_STATUSES.map((s) => (
                          <option key={s} value={s}>
                            {STATUS_LABELS[s]}
                          </option>
                        ))}
                      </select>
                      <IoCaretDown />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <div>説明・メモ</div>
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
            </div>
            <div>
              <div className="w-full flex h-12">
                <button
                  className="mr-4 bg-(--primary-color) cursor-pointer py-2 px-4 rounded w-full transition-[background] duration-500 tracking-[1.4px] text-[10px] shadow-[2px_2px_4px_1px_#1e514036] text-(--font-color-light) border-0 hover:bg-(--primary-color-darker)"
                  type="submit"
                >
                  <span className="text-sm">更新</span>
                </button>
                <button
                  type="button"
                  className="mr-4 bg-(--secondary-color) cursor-pointer py-2 px-4 rounded w-full transition-[background] duration-500 tracking-[1.4px] text-[10px] shadow-[2px_2px_4px_1px_#1e514036] text-(--font-color-light)  border-0  hover:opacity-80"
                  onClick={handleReset}
                >
                  <span className="text-sm">リセット</span>
                </button>
              </div>
              <div
                className="cursor-pointer pt-8 pb-4"
                onClick={() => router.back()}
              >
                <p className="text-(--primary-color) flex items-center">
                  <IoArrowBack />
                  戻る
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
