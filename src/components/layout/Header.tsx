"use client";

import {
  IoAdd,
  IoInformationCircleSharp,
  IoNotificationsSharp,
  IoPerson,
} from "react-icons/io5";
import { Modal } from "../modal/Modal";
import { AddTaskForm } from "../modal/AddTaskForm";
import { useState } from "react";
import { title } from "node:process";
import { ProfileMenu } from "../modal/ProfileMenu";

export const Header = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
              <div
                role="button"
                aria-label="タスクを追加"
                onClick={() => setIsAddOpen(true)}
                className={
                  "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                }
              >
                <IoAdd size={24} />
              </div>
            </li>
            <li className="mr-4">
              <div
                className={
                  "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                }
              >
                <IoInformationCircleSharp size={24} />
              </div>
            </li>
            <li className="mr-4">
              <div
                className={
                  "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                }
              >
                <IoNotificationsSharp size={24} />
              </div>
            </li>
          </ul>
          {/* プロフィールアイコン */}
          <div className="relative">
            <div
              role="button"
              aria-label="プロフィールメニューを開く"
              onClick={() => setIsProfileOpen((v) => !v)}
              className="cursor-pointer"
            >
              <div className="bg-[#e0e0e0] h-7 w-7 rounded-full flex justify-center items-center">
                <div
                  className={
                    "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                  }
                >
                  <IoPerson size={20} />
                </div>
              </div>
            </div>

            {isProfileOpen && (
              <>
                {/* <Modal
                  isOpen={isProfileOpen}
                  onClose={() => setIsProfileOpen(false)}
                  variant="popover"
                >
                  <ul className="flex flex-col gap-2">
                    <li>
                      <button
                        type="button"
                        onClick={() => setIsProfileOpen(false)}
                        className="w-full text-left px-4 py-3 rounded-md hover:bg-gray-100 cursor-pointer text-gray-900"
                      >
                        プロフィール
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => setIsProfileOpen(false)}
                        className="w-full text-left px-4 py-3 rounded-md hover:bg-gray-100 cursor-pointer text-gray-900"
                      >
                        ログアウト
                      </button>
                    </li>
                  </ul>
                </Modal> */}
                <Modal
                  isOpen={isProfileOpen}
                  onClose={() => setIsProfileOpen(false)}
                  variant="popover"
                >
                  <ProfileMenu onDone={() => setIsProfileOpen(false)} />
                </Modal>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        title="タスクを追加"
      >
        <AddTaskForm onDone={() => setIsAddOpen(false)} />
      </Modal>
      {/* <Modal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        title="プロフィール"
      >
        <ul className="flex flex-col gap-2">
          <li>
            <button
              type="button"
              onClick={() => setIsProfileOpen(false)}
              className="w-full text-left px-4 py-3 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              プロフィール
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setIsProfileOpen(false)}
              className="w-full text-left px-4 py-3 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              ログアウト
            </button>
          </li>
        </ul>
      </Modal> */}
    </header>
  );
};
