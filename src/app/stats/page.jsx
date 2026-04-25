"use client";

import dynamic from "next/dynamic";

const PieChartComponent = dynamic(
  () => import("@/components/PieChartComponent"),
  { ssr: false }
);

export default function StatsPage() {
  return (
    <div>
      <PieChartComponent />
    </div>
  );
}