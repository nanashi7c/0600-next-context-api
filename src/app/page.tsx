export default function Home() {
  return (
    //   {/* コンテンツ周りの余白 */}
    <div >
      {/* プロジェクト一覧と進捗の横並び */}
      <div>
        {/* プロジェクト一覧 */}
        <div>
          {/* タイトル */}
          <h2>プロジェクト</h2>
          {/* プロジェクト一覧 */}
          <div>
            {/* プロジェクト1へのリンク */}
            <a href="">
              {/* プロジェクト1のカード */}
              <div>
                {/* プロジェクトヘッダー（プロジェクト名とその期限） */}
                <div>
                  {/* プロジェクト名 */}
                  <h2>プロジェクト1</h2>
                  {/* カレンダーアイコンと期限日 */}
                  <p>
                    {/* カレンダーアイコン */}
                    <svg>
                      <path></path>
                    </svg>
                    {/* 期限日 */}
                    <p>2026/03/30</p>
                  </p>
                </div>
                {/* プロジェクトの内容 */}
                <div>
                  {/* 文字列周りの余白 */}
                  <div>
                    {/* プロジェクト1の目的 */}
                    <p>プロジェクト1の目的</p>
                  </div>
                  {/* 文字列周りの余白 */}
                  <div>
                    {/* プロジェクト1のあるべき姿 */}
                    <p>プロジェクト1のあるべき姿</p>
                  </div>
                </div>
                {/* カードフッター */}
                <div>
                  {/* カードスタッツ */}
                  <div>
                    {/* マイルストーン */}
                    <p>
                      {/* マイルストーンアイコン */}
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          color="rgba(0, 0, 140, 0.6)"
                          height="12px"
                          width="12px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="color: rgba(0, 0, 140, 0.6);"
                        >
                          <path d="M448 224h-68a128 128 0 00-247.9 0H64a32 32 0 000 64h68.05A128 128 0 00380 288h68a32 32 0 000-64zm-192 96a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                        </svg>
                      </span>
                      <span>マイルストーン数</span>
                    </p>
                    {/* タスク */}
                    <p>
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          color="rgba(0, 0, 140, 0.6)"
                          height="12px"
                          width="12px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="color: rgba(0, 0, 140, 0.6);"
                        >
                          <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4z"></path>
                          <path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"></path>
                        </svg>
                      </span>
                      <span>タスク数</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* 進捗チャートグラフ */}
        <div></div>
      </div>
      {/* タスク一覧 */}
      <div></div>
    </div>
  );
}
