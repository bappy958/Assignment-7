import StatsCard from "@/shared/StatsCard";

function Stats() {
  const statsData = [
    { number: 10, label: "total Friends", style: "" },
    { number: 10, label: "On Track", style: "" },
    { number: 10, label: "Interactions This Month", style: "" },
  ];

  return (
    <div className="  mb-10 font-sans grid grid-cols-2 lg:grid-cols-3 w-full gap-6 max-sm:px-2">
      {statsData.map((data, i) => (
        <StatsCard key={i} number={data.number} label={data.label} />
      ))}
    </div>
  );
}

export default Stats;
