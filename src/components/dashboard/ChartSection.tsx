import React from "react";
import { useStats } from "../../contexts/StatsContext";
import { ProgressChart } from "../chart/ProgressChart";

export const ChartSection = () => {
  const { stats } = useStats();
  if (!stats) return null;
  return <ProgressChart datasets={stats} />;
};
