import { Chart, registerables } from "chart.js";
import AppDate from "../../app/api/lib/date";
import { useEffect, useMemo, useRef } from "react";

export const ProgressChart = ({ datasets }) => {
  Chart.register(...registerables);

  const canvasRef = useRef<HTMLCanvasElement>(null); // CanvasElementへのポインタ
  const chartData = useMemo(
    () => ({
      labels: datasets?.data.data[0].data.map((item: any) => {
        const d = new AppDate(new Date(item.date));
        const month = (d.date.getMonth() + 1).toString().padStart(2, "0");
        const day = d.date.getDate().toString().padStart(2, "0");
        return `${month} / ${day}`;
      }),
      datasets: datasets?.data.data.map((item: any, index: number) => {
        const alpha = index === 0 ? 1 : 0.36;
        return {
          label: item.label,
          data: item.data.map((item: any) => item.value),
          borderWidth: 1,
          backgroundColor: `rgba(143, 227, 199, ${alpha})`,
          borderColor: `rgba(143, 227, 199, ${alpha})`,
        };
      }),
    }),
    [datasets],
  );

  const CHART_OPTIONS: any = {
    interaction: {
      mode: "index",
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: chartData,
      options: CHART_OPTIONS,
    });

    return () => chart.destroy(); // クリーンアップ（二重初期化防止）
  }, [datasets]);

  return (
    <canvas
      ref={canvasRef}
      id="myChart"
      role="img"
      height="612"
      width="1224"
      className="block border-box h-102 w-204"
    />
  );
};
