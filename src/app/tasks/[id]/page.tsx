"use client";

import { use, useEffect, useState } from "react";
import { IoArrowBack, IoTrashOutline } from "react-icons/io5";

import { TaskStatus } from "@/types";
import { useRouter } from "next/navigation";
import { TaskParams } from "@/app/api/datastore/models/task";
import { ProjectParams } from "@/app/api/datastore/models/project";
import {
  deleteUserTask,
  getUserProjects,
  getUserTask,
  updateUserTask,
} from "@/lib/api";
import { STATUS_LABELS, TASK_STATUSES } from "@/constants";
import { Button } from "@/components/button";
import { Select } from "@/components/select";
import { useToast } from "../../../contexts/ToastContext";

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
  const { showToast } = useToast();

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
      showToast("タスクを更新しました。");
      router.push("/");
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
              <button
                type="button"
                className="cursor-pointer flex justify-center items-center h-full"
                onClick={handleDelete}
                aria-label="タスクを削除"
              >
                <IoTrashOutline />
              </button>
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
                  <div className="shadow-[0_0_4px_1px_#22222210]">
                    <Select
                      required
                      value={projectId}
                      options={projects.map((project) => ({
                        label: project.name,
                        value: project.id,
                      }))}
                      onChange={(value) => setProjectId(value)}
                      placeholder="プロジェクトを選択してください"
                      iconSize="size-4"
                    />
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
                    />
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
                <Button type="submit">
                  <span className="text-sm">更新</span>
                </Button>

                <Button variant="secondary" onClick={handleReset}>
                  <span className="text-sm">リセット</span>
                </Button>
              </div>
              <button
                type="button"
                className="cursor-pointer pt-8 pb-4"
                onClick={() => router.back()}
              >
                <p className="text-(--primary-color) flex items-center">
                  <IoArrowBack />
                  戻る
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
