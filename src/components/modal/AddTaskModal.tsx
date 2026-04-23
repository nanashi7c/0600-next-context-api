"use client";

import { Modal } from ".";
import { useAddTaskModal } from "../../contexts/AddTaskModalContext";
import { AddTaskForm } from "./AddTaskForm";

export const AddTaskModal = () => {
  const { isOpen, closeModal } = useAddTaskModal();

  return (
    <Modal isOpen={isOpen} onClose={closeModal} title="タスクを追加">
      <AddTaskForm />
    </Modal>
  );
};
