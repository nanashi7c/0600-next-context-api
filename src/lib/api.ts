// API呼び出し関数

import axios from "axios";
import { ProjectsResponse, StatsResponse, TasksResponse } from "../types";
import { TASK_STATUSES } from "../components/constants";
import { ProjectParams } from "../app/api/datastore/models/project";

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

export async function getUserProjects(params?: {
  page?: number;
  limit?: number;
}): Promise<ProjectsResponse> {
  try {
    const response = await axios.get("/api/v1/users/projects", { params });
    return response.data;
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

export async function getUserProject(
  slug: string,
): Promise<ProjectParams | undefined> {
  try {
    const response = await axios.get(`/api/v1/users/projects/${slug}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}
