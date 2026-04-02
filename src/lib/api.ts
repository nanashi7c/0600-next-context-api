// API呼び出し関数

import axios from "axios";
import { StatsResponse, TasksResponse } from "../types";

export async function getUserStats(): Promise<StatsResponse> {
  try {
    const response = await axios.get("/api/v1/users/stats");
    console.log("stats", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserTasks(): Promise<TasksResponse> {
  try {
    const response = await axios.get("/api/v1/users/tasks");
    console.log("tasks", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
