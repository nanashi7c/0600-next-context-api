import { IoChevronBack } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export const CollapseToggle = ({ isOpen, onToggle }: Props) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? "サイドバーを閉じる" : "サイドバーを開く"}
      className={`cursor-pointer transition-transform duration-200 ${isOpen ? "rotate-0" : "rotate-180"}`}
    >
      <IoChevronBack />
    </button>
  );
};
