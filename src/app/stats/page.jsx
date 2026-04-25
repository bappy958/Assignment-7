"use client";

import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import PieChartComponent from "@/components/PieChartComponent";

export default function StatsPage() {
  const { data } = useContext(TimelineContext);

  return (
    <div>
      <PieChartComponent data={data} />
    </div>
  );
}