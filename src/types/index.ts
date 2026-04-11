// Task・Projectの型定義

import { ProjectParams } from "../app/api/datastore/models/project";
import { StatsParams } from "../app/api/datastore/models/stats";
import { TaskParams } from "../app/api/datastore/models/task";
import { TASK_STATUSES } from "../components/constants";

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

export interface ProjectsResponse {
  data: ProjectParams[];
  pageInfo: {
    totalCount: number;
    limit: number;
    page: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

export type TaskStatus = (typeof TASK_STATUSES)[number];
