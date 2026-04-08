import { TaskParams } from "../../app/api/datastore/models/task";
import { useProjects } from "../../contexts/ProjectsContext";
import { useTasks } from "../../contexts/TasksContext";
import { updateUserTask } from "../../lib/api";
import { TaskRow } from "./TaskRow";

export const TaskList = () => {
  const { tasks, fetchTasks } = useTasks();
  const { projects } = useProjects();

  if (!tasks || !projects) return null;

  return (
    <>
      {/* タスク一覧項目名 */}
      <div className="flex border-b border-solid border-(--table-border-color)">
        <div className="w-1/2 p-1 text-[10px] font-bold">タスク</div>
        <div className="w-[14%] p-1 text-[10px] font-bold">プロジェクト</div>
        <div className="w-[12%] p-1 text-[10px] font-bold">ステータス</div>
        <div className="w-1/10 p-1 text-[10px] font-bold">期限日</div>
        <div className="w-[8%] p-1 text-[10px] font-bold"></div>
      </div>
      {/* タスク一覧データ */}
      <div>
        {/* 各タスク行 */}
        {tasks?.data.map((task: TaskParams) => (
          <TaskRow
            key={task.id}
            task={task}
            projects={projects}
            onUpdate={async (patch) => {
              await updateUserTask(task.id, patch);
              await fetchTasks();
            }}
          />
        ))}
      </div>
    </>
  );
};
