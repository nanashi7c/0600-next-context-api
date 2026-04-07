// API呼び出し関数

import axios from "axios";
import { ProjectsResponse, StatsResponse, TasksResponse } from "../types";

export async function getUserStats(): Promise<StatsResponse> {
  try {
    const response = await axios.get("/api/v1/users/stats");
    console.log("stats", response.data.data);
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
      params: { status: "scheduled,completed,archived", ...params },
    });
    console.log("tasks", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserProjects(): Promise<ProjectsResponse> {
  try {
    const response = await axios.get("/api/v1/users/projects");
    console.log("projects", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateUserTask(id, params): Promise<any> {
  try {
    console.log("id", id);
    const response = await axios.patch(`/api/v1/users/tasks/${id}`, params);
    console.log("updateTask", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
