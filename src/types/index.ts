// Task・Projectの型定義

import { ProjectParams } from "../app/api/datastore/models/project";
import { StatsParams } from "../app/api/datastore/models/stats";
import { TaskParams } from "../app/api/datastore/models/task";

export interface TasksResponse {
  data: TaskParams[];
  pageInfo: {
    page: number;
    limit: number;
    totalCount: number;
    hasNext: boolean;
    hasNextPage: boolean;
  };
}

export type StatsResponse = StatsParams[];

export type ProjectsResponse = ProjectParams[];
