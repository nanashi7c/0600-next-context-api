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
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, title, children }: Props) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      className="bg-white rounded-lg shadow-xl w-[480px] max-w-[90vw] p-8 outline-none"
      overlayClassName="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
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
      {children}
    </ReactModal>
  );
};
