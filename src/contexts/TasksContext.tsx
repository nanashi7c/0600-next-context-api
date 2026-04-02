"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserTasks } from "../lib/api";
import { TasksResponse } from "../types";

interface TasksContextValue {
  tasks: TasksResponse | undefined;
}

const TasksContext = createContext<TasksContextValue | null>(null);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState<TasksResponse | undefined>();

  useEffect(() => {
    getUserTasks().then(setTasks);
  }, []);

  return <TasksContext value={{ tasks }}>{children}</TasksContext>;
};

export function useTasks() {
  const ctx = useContext(TasksContext);
  if (!ctx) {
    throw new Error("useTasks must be used within TasksProvider");
  }
  return ctx;
}
