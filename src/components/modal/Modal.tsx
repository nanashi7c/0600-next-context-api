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
        <div className="fixed inset-0 z-40 bg-black/2" onClick={onClose} />
        <div className="absolute right-[-16px] top-full w-44 bg-white shadow-lg ring-1 ring-black/10 py-2 z-50 min-w-[200px]">
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
      className="shadow-xl bg-white w-[60%] max-w-[90vw] outline-none"
      overlayClassName="fixed inset-0 bg-black/10 flex pt-[5%] justify-center z-50 items-start"
    >
      <div className="p-4 flex justify-end">
        <button
          onClick={onClose}
          className="cursor-pointer flex items-center"
          aria-label="閉じる"
        >
          <IoClose size={16} />
        </button>
      </div>
      <div className="max-h-[80vh] overflow-y-scroll overflow-x-scroll">
        <div className="p-16 w-max mx-auto">
          {/* {!isPopover && ( */}
          <div className="flex justify-between items-center mb-12 w-[640px]">
            <h3 className="text-sm font-light">{title}</h3>
          </div>
          {children}
        </div>
      </div>
    </ReactModal>
  );
};
