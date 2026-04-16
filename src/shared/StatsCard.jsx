function StatsCard({ number, label, style }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 flex-col bg-white p-8 text-center rounded-lg shadow-lg ${style} `}
    >
      <h2 className=" text-3xl font-bold">{number}</h2>
      <p className=" text-lg font-normal text-[#64748B]">{label}</p>
    </div>
  );
}

export default StatsCard;
