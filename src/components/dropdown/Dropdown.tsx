"use client";

import { ReactNode, useState } from "react";
import { Modal } from "../modal/Modal";

type MenuItem = {
  id: string;
  label: ReactNode;
  onSelect: () => void;
  disabled?: boolean;
  className?: string;
  dividerBefore?: boolean;
};

type DropdownProps = {
  ariaLabel: string;
  trigger: React.ReactNode;
  items: MenuItem[];
};

export const Dropdown = ({ ariaLabel, trigger, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item: MenuItem) => {
    if (item.disabled) return;

    item.onSelect();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={() => setIsOpen((v) => !v)}
        className="cursor-pointer"
      >
        {trigger}
      </button>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          variant="popover"
        >
          <ul className="py-2">
            {items.map((item) => (
              <li key={item.id}>
                {item.dividerBefore && (
                  <div className="h-px w-4/5 mx-auto bg-[var(--border-color)]" />
                )}
                <button
                  type="button"
                  onClick={() => handleSelect(item)}
                  disabled={item.disabled}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed ${item.className ?? ""}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
};
