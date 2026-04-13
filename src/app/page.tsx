"use client";
import Link from "next/link";
import { ChartSection } from "../components/dashboard/ChartSection";
import { TaskList } from "../components/tasks/TaskList";
import { useTasks } from "../contexts/TasksContext";
import { IoArrowForward } from "react-icons/io5";
import { ProjectList } from "../components/projects/ProjectList";

export default function DashboardPage() {
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
            <ProjectList />
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
              <IoArrowForward size={10} />
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
              <IoArrowForward size={10} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
