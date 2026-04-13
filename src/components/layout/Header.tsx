import {
  IoAdd,
  IoInformationCircleSharp,
  IoNotificationsSharp,
  IoPerson,
} from "react-icons/io5";

export const Header = () => {
  return (
    <header className="bg-brand text-light">
      {/* コンテンツ */}
      <div className="p-4 flex justify-between items-center">
        {/* ロゴ */}
        <div className="flex items-center">
          <a href="" className="text-inherit no-underline">
            <div className="mr-8">
              <h2 className="text-base">Turvo</h2>
            </div>
          </a>
          <div></div>
        </div>
        {/* アイコン群 */}
        <div className="mr-8 flex">
          <ul className="flex mr-4 items-center">
            <li className="mr-4">
              <div
                className={
                  "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                }
              >
                <IoAdd size={24} />
              </div>
            </li>
            <li className="mr-4">
              <div
                className={
                  "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                }
              >
                <IoInformationCircleSharp size={24} />
              </div>
            </li>
            <li className="mr-4">
              <div
                className={
                  "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                }
              >
                <IoNotificationsSharp size={24} />
              </div>
            </li>
          </ul>
          {/* プロフィールアイコン */}
          <div
          //  className="relative"
          >
            <div className="cursor-pointer">
              <div className="bg-[#e0e0e0] h-7 w-7 rounded-full flex justify-center items-center">
                <div
                  className={
                    "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                  }
                >
                  <IoPerson size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
