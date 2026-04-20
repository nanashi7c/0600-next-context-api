"use client";

import {
  IoAdd,
  IoInformationCircleSharp,
  IoNotificationsSharp,
  IoPerson,
} from "react-icons/io5";
import { useState } from "react";
import { ProfileDropdown } from "../dropdown/ProfileDropdown";
import { useAddTaskModal } from "../../contexts/AddTaskModalContext";

export const Header = () => {
  const { openModal } = useAddTaskModal();

  return (
    <header className="bg-brand text-light">
      {/* コンテンツ */}
      <div className="p-4 flex justify-between items-center">
        {/* ロゴ */}
        <div className="flex items-center">
          <a href="" className="text-inherit no-underline">
            <div className="mr-8">
              <h2 className="text-base">Turvo</h2>
            </div>
          </a>
          <div></div>
        </div>
        {/* アイコン群 */}
        <div className="mr-8 flex">
          <ul className="flex mr-4 items-center">
            <li className="mr-4">
              <button
                type="button"
                aria-label="タスクを追加"
                onClick={openModal}
                className={
                  "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                }
              >
                <IoAdd size={24} />
              </button>
            </li>
            <li className="mr-4">
              <button
                type="button"
                aria-label="お知らせ"
                className={
                  "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                }
              >
                <IoInformationCircleSharp size={24} />
              </button>
            </li>
            <li className="mr-4">
              <button
                type="button"
                aria-label="通知"
                className={
                  "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                }
              >
                <IoNotificationsSharp size={24} />
              </button>
            </li>
          </ul>
          {/* プロフィールアイコン */}
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
};
