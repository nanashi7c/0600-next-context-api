import { IoChevronBack } from "react-icons/io5";

// TODO: サイドバー開閉機能実装
export const CollapseToggle = () => {
  return (
    <span className="cursor-pointer transition-transform duration-200">
      <IoChevronBack />
    </span>
  );
};
