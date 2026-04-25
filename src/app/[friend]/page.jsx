import CheckInButton from "@/shared/CheckInButton";
import StatsCard from "@/shared/StatsCard";
import {
  Archive,
  MessageSquareMore,
  PhoneCall,
  Timer,
  Trash2,
  Video,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function FriendDetails({ params }) {
  const { friend } = await params;

  const response = await fetch("https://assignment-7-theta-seven.vercel.app/friends.json", 
    );

  const friendsData = await response.json();
  const data = friendsData.find((item) => item.id === parseInt(friend));

  if (!data) notFound();

  const statsData = [
    { number: data.days_since_contact, label: "Days since contact" },
    { number: data.goal, label: "On track" },
    { number: data.next_due_date, label: "Next due" },
  ];

  const checkIn = [
    { icon: <PhoneCall size={16} />, label: "Call" },
    { icon: <MessageSquareMore size={16} />, label: "Text" },
    { icon: <Video size={16} />, label: "Video" },
  ];

  return (
    <div className="my-6 px-4 sm:px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* ── LEFT COLUMN ── */}
        <div className="lg:col-span-1 flex flex-col gap-3">
          {/* Profile card */}
          <div className="bg-white border border-gray-100 rounded-xl px-4 py-5 flex flex-col items-center gap-2.5 text-center">
            <div className="w-18 h-18 rounded-full overflow-hidden border border-gray-100 shrink-0">
              <Image
                src={data.picture}
                width={72}
                height={72}
                alt={data.name}
                className="object-cover w-full h-full"
              />
            </div>

            <p className="text-sm font-medium text-gray-900">{data.name}</p>

            <div className="mt-auto w-full pt-3 border-t border-gray-50">
              <span
                className={`text-xs font-bold uppercase px-3 py-1 rounded-full text-white ${
                  data.status === "overdue"
                    ? "bg-red-600"
                    : data.status === "almost due"
                      ? "bg-orange-600"
                      : "bg-green-600"
                }`}
              >
                {data.status}
              </span>
            </div>

            <div className="w-full border-t border-gray-50 pt-3 flex flex-wrap gap-1 justify-center">
              {data.tags.map((item, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-green-50 text-green-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">{data.bio}</p>
            <p className="text-xs text-gray-400">Preferred: {data.email}</p>
          </div>

          {/* Action buttons */}
          <button className="bg-white border border-gray-100 rounded-lg py-2.5 px-4 text-sm text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <Timer /> Snooze 2 weeks
          </button>
          <button className="bg-white border border-gray-100 rounded-lg py-2.5 px-4 text-sm text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <Archive size={15} /> Archive
          </button>
          <button className="bg-white border border-red-100 rounded-lg py-2.5 px-4 text-sm text-red-600 flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
            <Trash2 size={15} /> Delete
          </button>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {statsData.map((item, i) => (
              <StatsCard key={i} number={item.number} label={item.label} />
            ))}
          </div>

          {/* Relationship goal */}
          <div className="bg-white border border-gray-100 rounded-xl px-4 py-4">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-sm font-medium text-gray-800">
                Relationship goal
              </p>
              <button className="text-xs text-blue-600 hover:underline">
                Edit
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Connect every{" "}
              <span className="font-medium text-gray-800">
                {data.goal} days
              </span>
            </p>
          </div>

          {/* Quick check-in */}
          <div className="bg-white border border-gray-100 rounded-xl px-4 py-4">
            <p className="text-sm font-medium text-gray-800 mb-3">
              Quick check-in
            </p>
            <div className="grid grid-cols-3 gap-2">
              {checkIn.map(({ icon, label }) => (
                <CheckInButton
                  key={label}
                  icon={icon}
                  label={label}
                  name={data.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendDetails;
