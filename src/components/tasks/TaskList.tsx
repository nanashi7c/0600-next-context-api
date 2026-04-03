import { TaskParams } from "../../app/api/datastore/models/task";
import { useTasks } from "../../contexts/TasksContext";

export const TaskList = () => {
  const { tasks } = useTasks();
  return (
    <>
      {/* タスク一覧項目名 */}
      <div className="flex border-b border-solid border-(--table-border-color)">
        <div className="w-1/2 p-1 text-[10px] font-bold">タスク</div>
        <div className="w-[14%] p-1 text-[10px] font-bold">プロジェクト</div>
        <div className="w-[12%] p-1 text-[10px] font-bold">ステータス</div>
        <div className="w-1/10 p-1 text-[10px] font-bold">期限日</div>
        <div className="w-[8%] p-1 text-[10px] font-bold"></div>
      </div>
      {/* タスク一覧データ */}
      <div>
        {/* 各タスク行 */}
        {/* TODO：受け取った20個のデータのループ */}
        {tasks?.data.map((item: TaskParams) => (
          <div className="flex py-2 transition-all duration-500">
            {/* タスク */}
            <div className="pl-4 w-1/2 flex items-center py-2 text-xs">
              <div className="cursor-pointer w-full ">
                <p className="min-w-full">{item.title}</p>
              </div>
            </div>
            {/* プロジェクト */}
            <div className="w-[14%] flex items-center py-2 text-xs">
              <div className="cursor-pointer w-full flex items-center p-2 justify-between">
                <p className="min-h-full">{item.project.name}</p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"></path>
                </svg>
              </div>
            </div>
            {/* ステータス */}
            <div className="w-[12%] flex items-center py-2 text-xs">
              <div className="cursor-pointer w-full flex items-center p-2 justify-between">
                <p className="min-h-full">
                  {item.status === "completed"
                    ? "完了"
                    : item.status === "archived"
                      ? "アーカイブ済み"
                      : "未完了"}
                </p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"></path>
                </svg>
              </div>
            </div>
            {/* 期限日 */}
            <div className="w-1/10 flex items-center py-2 text-xs">
              <div className="cursor-pointer w-full flex items-center">
                <p className="min-w-full">
                  {item.deadline
                    ? new Date(item.deadline).toLocaleDateString("ja-JP")
                    : ""}
                </p>
              </div>
            </div>
            {/* 編集画面へのリンク */}
            <div className="w-[8%] flex items-center py-2 text-xs">
              <a href="">
                <div className="cursor-pointer w-full flex items-center shadow-[2px_2px_4px_1px_#22222210]">
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="table_detailIcon__v9v_Q"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="48"
                        d="M268 112l144 144-144 144m124-144H100"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
