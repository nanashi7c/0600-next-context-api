// モーダルの枠 (オーバーレイ・閉じるボタン)
"use client";

import { IoClose } from "react-icons/io5";
import ReactModal from "react-modal";

if (typeof window !== "undefined") {
  ReactModal.setAppElement("body");
}

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  variant?: "center" | "popover";
  children: React.ReactNode;
};

export const Modal = ({
  isOpen,
  onClose,
  title,
  variant = "center",
  children,
}: Props) => {
  // const isPopover = variant === "popover";
  if (!isOpen) return null;

  if (variant === "popover") {
    return (
      <>
        <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose} />
        <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-md shadow-lg ring-1 ring-black/10 py-1 z-50">
          {children}
        </div>
      </>
    );
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      // className={
      //   isPopover
      //     ? "absolute right-0 top-full mt-2 w-44 bg-white rounded-md shadow-lg ring-1 ring-black/10 py-1 outline-none"
      //     : "bg-white rounded-lg shadow-xl w-[480px] max-w-[90vw] p-8 outline-none"
      // }
      // overlayClassName={
      //   isPopover
      //     ? "fixed inset-0 z-40"
      //     : "fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      // }
      className="bg-white rounded-lg shadow-xl w-[480px] max-w-[90vw] p-8 outline-none"
      overlayClassName="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      {/* {!isPopover && ( */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">{title}</h3>
        <button
          onClick={onClose}
          className="cursor-pointer flex items-center"
          aria-label="閉じる"
        >
          <IoClose size={22} />
        </button>
      </div>
      {/* )} */}
      {children}
    </ReactModal>
  );
};
