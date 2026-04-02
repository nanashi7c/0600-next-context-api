"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserStats } from "../lib/api";
import { StatsResponse } from "../types";

interface StatsContextValue {
  stats: StatsResponse | undefined;
}

const StatsContext = createContext<StatsContextValue | null>(null);

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState<StatsResponse | undefined>();

  useEffect(() => {
    getUserStats().then(setStats);
  }, []);

  return <StatsContext value={{ stats }}>{children}</StatsContext>;
};

export function useStats() {
  const ctx = useContext(StatsContext);
  if (!ctx) {
    throw new Error("useStats must be used within StatsProvider");
  }
  return ctx;
}
