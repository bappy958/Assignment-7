"use client";
import { TimelineContext } from "@/context/TimelineContext";
import { useContext } from "react";
import toast from "react-hot-toast";
function CheckInButton({ icon, label, name }) {
  const { data, setData } = useContext(TimelineContext);

  const handleTimeLine = () => {
    const now = new Date();

    const formattedData = {
      standardDate: new Intl.DateTimeFormat("en-GB").format(now), // "16/04/2026"
      longDate: new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now,
      ),
    };

    setData([...data, { label, name, ...formattedData }]);
    // add relevant toast notification add name and label

    toast.success(`Check-in successful for ${name} (${label})!`);
  };

  return (
    <button
      key={label}
      onClick={handleTimeLine}
      className="bg-gray-50 border border-gray-100 rounded-lg py-3 flex flex-col items-center gap-1.5 hover:bg-blue-50 hover:border-blue-100 transition-colors group"
    >
      <span className="text-gray-500 group-hover:text-blue-600 transition-colors">
        {icon}
      </span>
      <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">
        {label}
      </span>
    </button>
  );
}

export default CheckInButton;
