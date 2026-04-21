import { IoLogOutSharp, IoPerson } from "react-icons/io5";

type Props = {
  onDone: () => void;
};

export const ProfileMenu = ({ onDone }: Props) => {
  return (
    <ul className="flex flex-col">
      <li>
        <button
          type="button"
          onClick={onDone}
          className="w-full text-left p-4 rounded-md hover:bg-gray-100 cursor-pointer text-gray-900 flex items-center"
        >
          <IoPerson size={20} className="mr-2" />
          プロフィール
        </button>
      </li>
      <li>
        <div className="h-px w-4/5 mx-auto bg-[var(--border-color)]"></div>
      </li>
      <li>
        <button
          type="button"
          onClick={onDone}
          className="w-full text-left p-4 rounded-md hover:bg-gray-100 cursor-pointer text-red-600 flex items-center"
        >
          <IoLogOutSharp size={20} className="mr-2" />
          ログアウト
        </button>
      </li>
    </ul>
  );
};
