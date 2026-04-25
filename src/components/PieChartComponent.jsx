"use client";

import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function PieChartComponent() {
  const { data } = useContext(TimelineContext);

  const counts = data.reduce((acc, curr) => {
    acc[curr.label] = (acc[curr.label] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(counts).map(key => ({
    name: key,
    value: counts[key],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

  return (
    <div className="w-full flex flex-col items-center">
      
      <h1 className="text-2xl font-bold mb-5">
        📊 Friendship Analytics
      </h1>

      {/* 🔥 IMPORTANT FIX: FIXED WRAPPER */}
      <div style={{ width: 420, height: 420 }}>
        <PieChart width={420} height={420}>
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={130}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>

    </div>
  );
}