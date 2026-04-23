"use client";

import { IoLogOutSharp, IoPerson } from "react-icons/io5";
import { Dropdown } from ".";

export const ProfileDropdown = () => {
  const closeOnly = () => undefined;
  const trigger = (
    <div className="bg-[#e0e0e0] h-7 w-7 rounded-full flex justify-center items-center">
      <div className="transition-colors duration-500 cursor-pointer flex justify-center items-center h-full">
        <IoPerson size={20} />
      </div>
    </div>
  );

  return (
    <Dropdown
      ariaLabel="プロフィールメニューを開く"
      trigger={trigger}
      items={[
        {
          id: "profile",
          label: (
            <span className="flex items-center">
              <IoPerson size={20} className="mr-2" />
              プロフィール
            </span>
          ),
          className: "p-4 rounded-md text-gray-900 flex items-center",
          onSelect: closeOnly,
        },
        {
          id: "logout",
          label: (
            <span className="flex items-center">
              <IoLogOutSharp size={20} className="mr-2" />
              ログアウト
            </span>
          ),
          onSelect: closeOnly,
          className: "p-4 rounded-md text-red-600 flex items-center",
          dividerBefore: true,
        },
      ]}
    />
  );
};
