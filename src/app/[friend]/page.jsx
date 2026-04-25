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
  const { friend } = params;

  const response = await fetch(
    "https://assignment-7-theta-seven.vercel.app/friends.json",
    { cache: "no-store" }
  );

  const friendsData = await response.json();

  const data = friendsData.find(
    (item) => String(item.id) === String(friend)
  );

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

        {/* LEFT */}
        <div className="lg:col-span-1 flex flex-col gap-3">

          <div className="bg-white border rounded-xl px-4 py-5 text-center">
            <Image
              src={data.picture}
              width={72}
              height={72}
              alt={data.name}
              className="rounded-full mx-auto"
            />

            <p className="font-medium">{data.name}</p>

            <p className="text-xs text-gray-400">{data.email}</p>
          </div>

          <button className="bg-white border rounded-lg py-2.5">
            <Timer /> Snooze 2 weeks
          </button>

          <button className="bg-white border rounded-lg py-2.5">
            <Archive size={15} /> Archive
          </button>

          <button className="bg-white border border-red-200 text-red-600 rounded-lg py-2.5">
            <Trash2 size={15} /> Delete
          </button>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2 flex flex-col gap-3">

          <div className="grid grid-cols-3 gap-3">
            {statsData.map((item, i) => (
              <StatsCard key={i} number={item.number} label={item.label} />
            ))}
          </div>

          <div className="bg-white border rounded-xl p-4">
            <p className="font-medium mb-3">Quick check-in</p>

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