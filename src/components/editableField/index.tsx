"use client";

import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  displayValue?: string;
  inputType?: HTMLInputTypeAttribute;
  inputClassName?: string;
  displayClassName?: string;
  onCommit: (value: string) => void | Promise<void>;
};

export const EditableField = ({
  value,
  displayValue,
  inputType = "text",
  inputClassName = "",
  displayClassName = "",
  onCommit,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draftValue, setDraftValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const startEditing = () => {
    setDraftValue(value);
    setIsEditing(true);
  };

  const commit = async () => {
    setIsEditing(false);
    if (draftValue !== value) {
      await onCommit(draftValue);
    }
  };

  return (
    <span>
      {isEditing ? (
        <input
          ref={inputRef}
          type={inputType}
          value={draftValue}
          className={inputClassName}
          onChange={(e) => setDraftValue(e.target.value)}
          onBlur={commit}
        />
      ) : (
        <p className={displayClassName} onClick={startEditing}>
          {displayValue ?? value}
        </p>
      )}
    </span>
  );
};
