"use client";

// tasks・projects・モーダルのopen/close状態(イメージ曖昧)
import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserStats, getUserTasks } from "../lib/api";

const AppContext = createContext<any>(null);

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState<any>();
  const [stats, setStats] = useState<any>();

  useEffect(() => {
    getUserStats().then(setStats);
    getUserTasks().then(setTasks);
  }, []);

  return <AppContext value={{ tasks, stats }}>{children}</AppContext>;
};

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within AppProvider");
  }
  return ctx;
}
