// Task・Projectの型定義

import { StatsParams } from "../app/api/datastore/models/stats";
import { TaskParams } from "../app/api/datastore/models/task";

export interface TasksResponse {
  data: TaskParams[];
  pageInfo: {
    page: number;
    limit: number;
    totalCount: number;
    totalPage: number;
    hasNextPage: boolean;
  };
}

export type StatsResponse = StatsParams[];
