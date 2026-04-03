"use client";

import { TaskList } from "../../components/tasks/TaskList";

export default function TasksPage() {
  return (
    <div className="w-full p-8 h-full overflow-scroll">
      <div className="flex justify-between">
        <h2 className="flex justify-between text-sm font-thin">タスク</h2>
      </div>
      <div>
        <div className="my-4 border-b border-solid border-(--table-border-color)">
          <div className="my-2 flex items-center justify-between">
            <div className="text-xs flex items-center">
              <div className="mr-4">
                <span>1 / 5</span>
              </div>
              <div className="mr-4">
                <label>表示件数：</label>
                <select className="py-1 px-2 font-normal font-[Arial] text-[10pt]">
                  <option value="20">20 件</option>
                  <option value="50">50 件</option>
                  <option value="100">100 件</option>
                </select>
              </div>
              <div>
                <span className="inline-block mr-4">100 件</span>
              </div>
            </div>
          </div>
        </div>
        <TaskList />
      </div>
    </div>
  );
}
