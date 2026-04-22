"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface AddTaskModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const AddTaskModalContext = createContext<AddTaskModalContextValue | null>(
  null,
);

type AddTaskModalProviderProps = {
  children: ReactNode;
};

export const AddTaskModalProvider = ({
  children,
}: AddTaskModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <AddTaskModalContext.Provider
      value={{ isOpen, openModal: open, closeModal: close }}
    >
      {children}
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
