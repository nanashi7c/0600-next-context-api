// API呼び出し関数

import axios from "axios";

export async function getUserStats() {
  try {
    const response = await axios.get("/api/v1/users/stats");
    // console.log(response.data.data);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserTasks() {
  try {
    const response = await axios.get("/api/v1/users/tasks");
    // console.log(response.data.data);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// export async function fetchStats() {
//   const newStats = await getUserStats();
//   setStats(newStats);
// }

// export async function fetchTasks() {
//   const newTasks = await getUserTasks();
//   setTasks(newTasks);
// }
