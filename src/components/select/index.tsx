import React from "react";

interface OptionItem {
  label: string;
  value: string;
}

type Props = {
  data: OptionItem[];
  value: string;
  onChange: (value: string) => void;
};

export const Select = ({ data, value, onChange }: Props) => {
  const selectedItem = data.find((item) => {
    return item.value === value;
  });
  return (
    <div>
      {selectedItem ? selectedItem.label : ""}
      <ul>
        {data.map((optionItem) => {
          return (
            <li>
              <div
                onClick={(e) => {
                  debugger;
                  onChange(value);
                }}
              >
                {optionItem.label}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
