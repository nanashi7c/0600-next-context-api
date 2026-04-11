"use client";

// ナビ・プロフェクト一覧

import { usePathname } from "next/navigation";
import { useProjects } from "../../contexts/ProjectsContext";
import Link from "next/link";
import dayjs from "dayjs";

export const Sidebar = () => {
  const pathname = usePathname();
  const { projects } = useProjects();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `${isActive(href) ? "bg-(--hover-color) text-(--font-color-dark) font-bold" : "text-(--font-color-dark) font-medium"} cursor-pointer block pt-4 pr-4 pb-4 pl-8 text-sm whitespace-nowrap hover:bg-[#8fe3c7]/25`;

  return (
    // 右側に余白
    <div className="w-73 min-w-73">
      {/* コンテンツ部分 */}
      <div className="h-[calc(100%-80px)]">
        {/* 上側の余白 */}
        <div className="flex justify-end h-10 p-4">
          {/* サイドバーのトグル */}
          <span className="cursor-pointer transition-transform duration-200">
            {/* トグルのアイコン */}
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
          </span>
        </div>
        {/* ダッシュボード本体 */}
        <div className="h-full">
          {/* ダッシュボード・タスク・プロジェクトのリスト */}
          <ul>
            <li>
              {/* 文字周りの余白 */}
              <Link
                href="/"
                className="bg-(--hover-color) text-(--font-color-dark) font-bold cursor-pointer block pt-4 pr-4 pb-4 pl-8 text-sm whitespace-nowrap hover:bg-[#8fe3c7]/25"
              >
                {/* 「ダッシュボード」の文字列 */}
                <div className="tracking-[0.8px]">ダッシュボード</div>
              </Link>
            </li>
            <li>
              {/* 文字周りの余白 */}
              <Link
                href="/tasks"
                className="text-(--font-color-dark) font-medium cursor-pointer block pt-4 pr-4 pb-4 pl-8 text-sm whitespace-nowrap hover:bg-[#8fe3c7]/25"
              >
                {/* 「タスク」の文字列 */}
                <div className="tracking-[0.8px]">タスク</div>
              </Link>
            </li>
            <li>
              {/* 文字周りの余白 */}
              <Link
                href="/projects"
                className="text-(--font-color-dark) font-medium cursor-pointer block pt-4 pr-4 pb-4 pl-8 text-sm whitespace-nowrap hover:bg-[#8fe3c7]/25"
              >
                {/* 「プロジェクト」の文字列 */}
                <div>プロジェクト</div>
              </Link>
            </li>
            {/* プロジェクト一覧のリスト */}
            {/* 左と上下の余白 */}
            <ul className="mt-4 mb-4 ml-8 text-(--font-color-dark) ">
              {projects?.data.map((project) => (
                <li
                  key={project.slug}
                  className="cursor-pointer block pt-4 pr-4 pb-4 pl-8 whitespace-nowrap text-sm hover:bg-[#8fe3c7]/25"
                >
                  {/* プロジェクト名・期限の横並べ */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex justify-between items-end"
                  >
                    {/* ビュレット・プロジェクト名 */}
                    <div>
                      {/* ビュレット */}
                      <span
                        className="inline-block h-2 w-2 rounded mr-2"
                        style={{ backgroundColor: project.color }}
                      ></span>
                      {/* プロジェクト名 */}
                      {project.name}
                    </div>
                    {/* 期限日 */}
                    <span className="inline-block text-[10px] ml-8">
                      {dayjs(project.deadline).format("YYYY/MM/DD")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};
