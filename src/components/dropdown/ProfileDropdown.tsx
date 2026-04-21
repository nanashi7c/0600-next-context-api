"use client";

import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { Modal } from "../modal/Modal";
import { ProfileMenu } from "../modal/ProfileMenu";

export const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        role="button"
        aria-label="プロフィールメニューを開く"
        onClick={() => setIsOpen((v) => !v)}
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

      {isOpen && (
        <>
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            variant="popover"
          >
            <ProfileMenu onDone={() => setIsOpen(false)} />
          </Modal>
        </>
      )}
    </div>
  );
};
