"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserTasks } from "../lib/api";
import { TasksResponse } from "../types";

interface TasksContextValue {
  tasks: TasksResponse | undefined;
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  fetchTasks: () => void;
}

const TasksContext = createContext<TasksContextValue | null>(null);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState<TasksResponse | undefined>();
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);

  const fetchTasks = () => {
    getUserTasks({ page, limit }).then(setTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, [page, limit]);

  return (
    <TasksContext value={{ tasks, fetchTasks, page, setPage, limit, setLimit }}>
      {children}
    </TasksContext>
  );
};

export function useTasks() {
  const ctx = useContext(TasksContext);
  if (!ctx) {
    throw new Error("useTasks must be used within TasksProvider");
  }
  return ctx;
}
