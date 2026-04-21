"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoCheckmarkCircleOutline, IoClose } from "react-icons/io5";

interface Toast {
  id: string;
  message: string;
}

interface ToastContextValue {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timersRef = useRef(new Map<string, ReturnType<typeof setTimeout>>());

  const removeToast = useCallback((id: string) => {
    const t = timersRef.current.get(id);
    if (t) {
      clearTimeout(t);
      timersRef.current.delete(id);
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string) => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { id, message }]);
      const timer = setTimeout(() => {
        removeToast(id);
      }, 3000);
      timersRef.current.set(id, timer);
    },
    [removeToast],
  );

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach(clearTimeout);
      timers.clear();
    };
  }, []);

  return (
    <ToastContext value={{ showToast }}>
      {children}
      <div className="fixed top-8 right-8 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="rounded bg-white text-(--primary-color) shadow-[0_0_8px_1px_#22222220] text-xs min-w-[300px] border-b-4 border-(--primary-color)  animate-slide-in-right"
          >
            <div className="flex justify-end p-[8px_8px_0]">
              <button onClick={() => removeToast(toast.id)}>
                <IoClose />
              </button>
            </div>
            <div className="flex p-[0_16px_16px_24px]">
              <IoCheckmarkCircleOutline
                size={16}
                className="items-center mr-4"
              />
              {toast.message}
            </div>
          </div>
        ))}
      </div>
    </ToastContext>
  );
};

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
