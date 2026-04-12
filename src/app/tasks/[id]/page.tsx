import React from "react";
import { IoArrowBack, IoCaretDown, IoTrashOutline } from "react-icons/io5";

export default function TasksDetailPage() {
  return (
    <div className="w-full h-full p-8 overflow-scroll">
      <div className="p-16">
        <div className="m-auto w-160">
          <div className="mb-12">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-midium">
                <div className="cursor-pointer w-full">
                  <p className="min-w-full">タスク 100</p>
                </div>
              </h2>
              <div className="cursor-pointer">
                <div className="flex justify-center items-center h-full">
                  <IoTrashOutline />
                </div>
              </div>
            </div>
            <div className="my-2 text-xs flex">
              <div className="mr-4">
                <div>作成日時: 2026/04/03</div>
              </div>
              <div className="mr-4">
                <div>更新日時: 2026/04/03</div>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="my-4">
              <div>プロジェクト</div>
              <div className="my-2 pb-[19px]">
                <div className="flex justify-center items-center cursor-pointer flex-col">
                  <div className="flex items-center rounded p-2 justify-between w-full border-0 shadow-[0_0_4px_1px_#22222210]">
                    <p className="text-xs">プログラミング</p>
                    <IoCaretDown />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              <div>締切日</div>
              <div className="my-2 pb-[19px]">
                <input
                  type="date"
                  value="2026-04-17"
                  className="py-1 px-3 rounded border-0 shadow-[0_0_4px_1px_#22222210]"
                />
              </div>
            </div>
            <div className="my-4">
              <div>ステータス</div>
              <div className="my-2">
                <div className="flex justify-center items-center cursor-pointer">
                  <div className="flex items-center rounded p-2 justify-between w-full border-0 shadow-[0_0_4px_1px_#22222210]">
                    <p className="text-xs">未完了</p>
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
                  className="p-4 rounded-lg border-0 shadow-[0_0_4px_1px_#22222210] leading-[1.6em] w-full text-(--font-color-dark) focus:outline-solid focus:outline-[1.5px] focus:outline-(--input-outline-color) placeholder-[#757575]"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex h-12">
              <button className="mr-4 bg-(--primary-color) cursor-pointer py-2 px-4 rounded w-full transition-[background] duration-500 tracking-[1.4px] text-[10px] shadow-[2px_2px_4px_1px_#1e514036] text-(--font-color-light) border-0">
                <span className="text-sm">更新</span>
              </button>
              <button className="mr-4 bg-(--secondary-color) cursor-pointer py-2 px-4 rounded w-full transition-[background] duration-500 tracking-[1.4px] text-[10px] shadow-[2px_2px_4px_1px_#1e514036] text-(--font-color-light)  border-0">
                <span className="text-sm">リセット</span>
              </button>
            </div>
            <div className="cursor-pointer pt-8 pb-4">
              <p className="text-(--primary-color) flex items-center">
                <IoArrowBack />
                戻る
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
