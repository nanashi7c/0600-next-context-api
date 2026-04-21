"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { Modal } from "../components/modal/Modal";
import { AddTaskForm } from "../components/modal/AddTaskForm";

interface AddTaskModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const AddTaskModalContext = createContext<AddTaskModalContextValue | null>(
  null,
);

export const AddTaskModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <AddTaskModalContext.Provider
      value={{ isOpen, openModal: open, closeModal: close }}
    >
      {children}
      <Modal isOpen={isOpen} onClose={close} title="タスクを追加">
        <AddTaskForm onDone={close} />
      </Modal>
    </AddTaskModalContext.Provider>
  );
};

export function useAddTaskModal() {
  const ctx = useContext(AddTaskModalContext);
  if (!ctx) {
    throw new Error("useAddTaskModal must be used within AddTaskModalProvider");
  }
  return ctx;
}
