import { IoChevronBack, IoChevronForward } from "react-icons/io5";

type PagenationProps = {
  page: number;
  totalPage: number;
  onPageChange: (page: number) => void;
};

export const Pagenation = ({ page, onPageChange, totalPage }: PagenationProps) => {
  return (
    <div className="flex justify-end max-w-200 m-auto">
      <div className="flex justify-end">
        <ul className="flex">
          <li
            onClick={() => onPageChange(Math.max(1, page - 1))}
            className="flex items-center justify-cneter cursor-pointer p-2 m-2"
          >
            <div className="flex justify-center items-center h-full">
              <IoChevronBack />
            </div>
          </li>
          {Array.from({ length: totalPage }, (_, i) => i + 1).map((p) => (
            <li
              key={p}
              onClick={() => onPageChange(p)}
              className={`flex items-center cursor-pointer p-2 m-2 ${p === page ? "text-(--primary-color) font-bold " : ""}`}
            >
              {p}
            </li>
          ))}
          <li
            onClick={() => onPageChange(Math.min(totalPage, page + 1))}
            className="flex items-center justify-cneter cursor-pointer p-2 m-2"
          >
            <div className="flex justify-center items-center h-full">
              <IoChevronForward />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
