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
        <div className="flex justify-end">
          <ul className="flex">
            <li className="flex items-center justify-cneter cursor-pointer p-2 m-2">
              <div className="flex justify-center items-center h-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M328 112L184 256l144 144"
                  ></path>
                </svg>
              </div>
            </li>
            <li className="text-(--primary-color) font-bold flex items-center cursor-pointer p-2 m-2">
              1
            </li>
            <li className=" flex items-center cursor-pointer p-2 m-2">2</li>
            <li className=" flex items-center cursor-pointer p-2 m-2">3</li>
            <li className=" flex items-center cursor-pointer p-2 m-2">4</li>
            <li className=" flex items-center cursor-pointer p-2 m-2">5</li>
            <li className="flex items-center justify-cneter cursor-pointer p-2 m-2">
              <div className="flex justify-center items-center h-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M184 112l144 144-144 144"
                  ></path>
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
