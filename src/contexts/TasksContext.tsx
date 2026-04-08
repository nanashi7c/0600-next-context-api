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
  fetchTasks: () => Promise<void>;
  totalPage: number;
}

const DEFAULT_LIMIT = 20;
const DEFAULT_PAGE = 1;

const TasksContext = createContext<TasksContextValue | null>(null);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState<TasksResponse | undefined>();
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [page, setPage] = useState(DEFAULT_PAGE);

  const totalCount = tasks?.pageInfo.totalCount ?? 0;
  const totalPage = Math.ceil(totalCount / limit);

  const fetchTasks = async () => {
    await getUserTasks({ page, limit }).then(setTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, [page, limit]);

  return (
    <TasksContext
      value={{
        tasks,
        fetchTasks,
        page,
        setPage,
        limit,
        setLimit,
        totalPage,
      }}
    >
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
