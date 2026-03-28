import styles from "./Header.module.css";
// 緑のヘッダー

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
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M256 112v288m144-144H112"
                  />
                </svg>
              </div>
            </li>
            <li className="mr-4">
              <div
                className={
                  "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                }
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm64 226H200v-32h44v-88h-32v-32h64v120h44z" />
                </svg>
              </div>
            </li>
            <li className="mr-4">
              <div
                className={
                  "transition-colors duration-500 cursor-pointer flex justify-center items-center h-full"
                }
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path d="M256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zm144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48z" />
                </svg>
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
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                  >
                    <path d="M256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zm144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
