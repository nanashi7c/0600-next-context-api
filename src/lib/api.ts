// API呼び出し関数

import axios from "axios";
import {
  ProjectsResponse,
  StatsResponse,
  TASK_STATUSES,
  TasksResponse,
} from "../types";

export async function getUserStats(): Promise<StatsResponse> {
  try {
    const response = await axios.get("/api/v1/users/stats");
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserTasks(params?: {
  page?: number;
  limit?: number;
}): Promise<TasksResponse> {
  try {
    const response = await axios.get("/api/v1/users/tasks", {
      params: { status: TASK_STATUSES.join(","), ...params },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserProjects(): Promise<ProjectsResponse> {
  try {
    const response = await axios.get("/api/v1/users/projects");
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateUserTask(id, params): Promise<any> {
  try {
    const response = await axios.patch(`/api/v1/users/tasks/${id}`, params);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
