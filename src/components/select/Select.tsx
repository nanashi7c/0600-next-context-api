"use client";

import { useEffect, useRef, useState } from "react";
import { IoCaretDown } from "react-icons/io5";

interface OptionItem {
  label: string;
  value: string;
}

type Props = {
  options: OptionItem[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  iconSize?: string;
};

export const Select = ({
  options,
  value,
  onChange,
  placeholder = "選択してください",
  className = "",
  required = false,
  iconSize,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((item) => {
    return item.value === value;
  });

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {required && (
        <input
          tabIndex={-1}
          aria-hidden="true"
          required
          value={value}
          className="absolute opacity-0 w-0 h-0 pointer-events-none"
          onChange={() => {}}
        />
      )}
      <div
        className="flex items-center justify-between rounded p-2 w-full border-0 cursor-pointer text-[length:var(--text-xs)]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <IoCaretDown
          className={`shrink-0 transition-transform duration-200 pointer-events-none ${iconSize} ${isOpen ? "rotate-180" : ""} 
          `}
        />
      </div>
      {isOpen && (
        <ul className="absolute z-1 w-full bg-white rounded shadow-[2px_2px_4px_1px_#22222210] max-h-60 overflow-auto py-2">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`px-3 py-2 text-xs cursor-pointer hover:bg-[#18e5af] hover:text-white hover:font-bold hover:[text-shadow:1px_1px_1px_#56deba] ${opt.value === value ? "bg-[#18e5af] text-white font-bold [text-shadow:1px_1px_1px_#56deba]" : ""}`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
