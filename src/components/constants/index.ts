import { TaskStatus } from "../../types";

export const TASK_STATUSES = ["scheduled", "completed", "archived"] as const;

export const STATUS_LABELS: Record<TaskStatus, string> = {
  scheduled: "未完了",
  completed: "完了",
  archived: "アーカイブ済み",
};
