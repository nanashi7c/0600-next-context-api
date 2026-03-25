// ナビ・プロフェクト一覧

export const Sidebar = () => {
  return (
    // 右側に余白
    <div className="w-73 bg">
      {/* コンテンツ部分 */}
      <div className="h-calc(100%-80px)] pr-">
        {/* 上側の余白 */}
        <div className="flex justify-end h-10 p-4">
          {/* サイドバーのトグル */}
          <span className="cursor-pointer transition-transform duration-200">
            {/* トグルのアイコン */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M328 112L184 256l144 144"
              ></path>
            </svg>
          </span>
        </div>
        {/* ダッシュボード本体 */}
        <div className="h-full">
          {/* ダッシュボード・タスク・プロジェクトのリスト */}
          <ul>
            <li>
              {/* 文字周りの余白 */}
              <div className="bg-(--hover-color) text-(--font-color-dark) font-bold cursor-pointer block pt-4 pr-4 pb-4 pl-8 text-sm whitespace-nowrap hover:bg-[#8fe3c7]/25">
                {/* 「ダッシュボード」の文字列 */}
                <div className="tracking-[0.8px]">ダッシュボード</div>
              </div>
            </li>
            <li>
              {/* 文字周りの余白 */}
              <div className="text-(--font-color-dark) font-medium cursor-pointer block pt-4 pr-4 pb-4 pl-8 text-sm whitespace-nowrap hover:bg-[#8fe3c7]/25">
                {/* 「タスク」の文字列 */}
                <div className="tracking-[0.8px]">タスク</div>
              </div>
            </li>
            <li>
              {/* 文字周りの余白 */}
              <div className="text-(--font-color-dark) font-medium cursor-pointer block pt-4 pr-4 pb-4 pl-8 text-sm whitespace-nowrap hover:bg-[#8fe3c7]/25">
                {/* 「プロジェクト」の文字列 */}
                <div>プロジェクト</div>
              </div>
            </li>
            {/* プロジェクト一覧のリスト */}
            {/* 左と上下の余白 */}
            <ul className="mt-4 mb-4 ml-8 text-(--font-color-dark) ">
              {/* 文字周りの余白 */}
              <li className="cursor-pointer block pt-4 pr-4 pb-4 pl-8 whitespace-nowrap text-sm hover:bg-[#8fe3c7]/25">
                {/* プロジェクト名・期限の横並べ */}
                <div className="flex justify-between items-end">
                  {/* ビュレット・プロジェクト名 */}
                  <div>
                    {/* ビュレット */}
                    <span className="bg-[rgba(0,0,140,0.6)] inline-block h-2 w-2 rounded mr-2"></span>
                    {/* プロジェクト名 */}
                    プロジェクト1
                  </div>
                  {/* 期限日 */}
                  <span className="inline-block text-[10px] ml-8">
                    2026/03/28
                  </span>
                </div>
              </li>
              {/* 以下繰り返し */}
              {/* 文字周りの余白 */}
              <li className="cursor-pointer block pt-4 pr-4 pb-4 pl-8 whitespace-nowrap text-sm hover:bg-[#8fe3c7]/25">
                {/* プロジェクト名・期限の横並べ */}
                <div className="flex justify-between items-end">
                  {/* ビュレット・プロジェクト名 */}
                  <div>
                    {/* ビュレット */}
                    <span className="bg-[rgba(0,25,255,0.6)] inline-block h-2 w-2 rounded mr-2"></span>
                    {/* プロジェクト名 */}
                    プロジェクト２
                  </div>
                  {/* 期限日 */}
                  <span className="inline-block text-[10px] ml-8">
                    2026/03/28
                  </span>
                </div>
              </li>
              {/* 文字周りの余白 */}
              <li className="cursor-pointer block pt-4 pr-4 pb-4 pl-8 whitespace-nowrap text-sm hover:bg-[#8fe3c7]/25">
                {/* プロジェクト名・期限の横並べ */}
                <div className="flex justify-between items-end">
                  {/* ビュレット・プロジェクト名 */}
                  <div>
                    {/* ビュレット */}
                    <span className="bg-[rgba(0,165,255,0.6)] inline-block h-2 w-2 rounded mr-2"></span>
                    {/* プロジェクト名 */}
                    プロジェクト３
                  </div>
                  {/* 期限日 */}
                  <span className="inline-block text-[10px] ml-8">
                    2026/03/28
                  </span>
                </div>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};
