"use client";
import Link from "next/link";
import { ChartSection } from "../components/dashboard/ChartSection";
import { TaskList } from "../components/tasks/TaskList";
import { useProjects } from "../contexts/ProjectsContext";
import { useTasks } from "../contexts/TasksContext";

export default function DashboardPage() {
  const { projects } = useProjects();
  const { totalPage } = useTasks();
  return (
    //   {/* コンテンツ周りの余白 */}
    <div className="p-8 w-full h-full overflow-scroll">
      {/* プロジェクト一覧と進捗の横並び */}
      <div className="p-8 flex justify-between">
        {/* プロジェクト一覧 */}
        <div className="flex-1 mr-8">
          {/* タイトル */}
          <h2 className="flex justify-between text-sm font-thin items-center">
            プロジェクト
          </h2>
          {/* プロジェクト一覧 */}
          <div className="pt-4 pb-4">
            {projects?.data.map((project) => (
              <a key={project.id} href="">
                {/* プロジェクト1のカード */}
                <div
                  className=" border-l-[5px] border-solid p-4 border-0 shadow-[1px_1px_3px_1px_#22222210 mb-4 bg-(--background-color) transition-all duration-500"
                  style={{ borderColor: project.color }}
                >
                  {/* プロジェクトヘッダー（プロジェクト名とその期限） */}
                  <div className="flex justify-between items-center">
                    {/* プロジェクト名 */}
                    <h2
                      className="text-[10px] font-bold "
                      style={{ color: project.color }}
                    >
                      {project.name}
                    </h2>
                    {/* カレンダーアイコンと期限日 */}
                    <span className="flex items-center">
                      {/* カレンダーアイコン */}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        color="rgba(0, 0, 140, 0.6)"
                        height="10px"
                        width="10px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block mr-2 "
                        style={{ color: project.color }}
                      >
                        <path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V180a4 4 0 00-4-4H36a4 4 0 00-4 4z"></path>
                      </svg>
                      {/* 期限日 */}
                      <p className="text-[10px] font-bold">2026/03/30</p>
                    </span>
                  </div>
                  {/* プロジェクトの内容 */}
                  <div className="py-4 px-0">
                    {/* 文字列周りの余白 */}
                    <div className="items-center mr-4 mb-2 text-xl text-(--font-color-dark) font-bold">
                      {/* プロジェクト1の目的 */}
                      <p>{project.goal}</p>
                    </div>
                    {/* 文字列周りの余白 */}
                    <div className="flex items-center text-sm font-thin text-(--font-color-weak)">
                      {/* プロジェクト1のあるべき姿 */}
                      <p>{project.shouldbe}</p>
                    </div>
                  </div>
                  {/* カードフッター */}
                  <div className="flex justify-end text-(--font-color-weak)">
                    {/* カードスタッツ */}
                    <div className="flex items-center">
                      {/* マイルストーン */}
                      <p className="cursor-pointer flex items-center">
                        {/* マイルストーンアイコン */}
                        <span className="mr-1 ml-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            color="rgba(0, 0, 140, 0.6)"
                            height="12px"
                            width="12px"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: project.color }}
                          >
                            <path d="M448 224h-68a128 128 0 00-247.9 0H64a32 32 0 000 64h68.05A128 128 0 00380 288h68a32 32 0 000-64zm-192 96a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                          </svg>
                        </span>
                        <span className="text-xs text-(--font-color-weak)">
                          {project.stats.kinds.milestone}
                        </span>
                      </p>
                      {/* タスク */}
                      <p className="cursor-pointer flex items-center">
                        <span className="mr-1 ml-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            color="rgba(0, 0, 140, 0.6)"
                            height="12px"
                            width="12px"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: project.color }}
                          >
                            <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4z"></path>
                            <path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"></path>
                          </svg>
                        </span>
                        <span className="text-xs text-(--font-color-weak)">
                          {project.stats.kinds.task}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {/* プロジェクトリストフッター */}
          <div className="flex justify-end">
            <Link
              href="/projects"
              className="text-[10px] text-(--primary-color)"
            >
              プロジェクト一覧
            </Link>
          </div>
        </div>
        {/* 進捗チャートグラフ */}
        <div className="">
          <h2 className="text-sm font-thin">進捗</h2>
          {/* チャート描画領域 */}
          <div className="py-4">
            {/* チャート */}
            <div className="mt-16">
              <div>
                <ChartSection />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* タスク一覧 */}
      <div className="p-8">
        {/* タスク一覧ヘッダー */}
        <div className="flex justify-between">
          <h2 className="flex justify-between text-sm font-thin">タスク</h2>
          <Link
            href="/tasks"
            className="items-center flex text-(--primary-color) tracking-[0.1rem] text-sm"
          >
            タスク一覧
            <div className="flex justify-center items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className=""
                height="10"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="48"
                  d="M268 112l144 144-144 144m124-144H100"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        <div className="py-4 min-w-full">
          <TaskList />
        </div>
        <div className="flex justify-end">
          <Link
            href="/tasks"
            className="items-center flex text-(--primary-color) tracking-[0.1rem] text-sm"
          >
            あと {totalPage - 1} ページ
            <div className="flex justify-center items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className=""
                height="10"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="48"
                  d="M268 112l144 144-144 144m124-144H100"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
