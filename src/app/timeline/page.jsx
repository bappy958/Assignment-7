"use client";

import { TimelineContext } from "@/context/TimelineContext";
import { LucideVideo, MessageCircleMore, PhoneCall } from "lucide-react";
import { useContext } from "react";

function TimelinePage() {
  const { data } = useContext(TimelineContext);

  return (
    <div className="my-6 px-4 sm:px-6 lg:px-30">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Timeline</h1>

      <div className="relative">
        {data.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No check-ins yet. Start by checking in!
            </p>
          </div>
        )}
        <ul className="space-y-4">
          {data.map((item, i) => (
            <li
              key={i}
              className="relative bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-4 hover:shadow-sm transition-shadow"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-50 text-gray-600">
                {item.label.toLowerCase() === "call" && <PhoneCall size={24} />}
                {item.label.toLowerCase() === "text" && (
                  <MessageCircleMore size={24} />
                )}
                {item.label.toLowerCase() !== "call" &&
                  item.label.toLowerCase() !== "text" && (
                    <LucideVideo size={24} />
                  )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-900">
                  <strong className=" text-lg">Meetup</strong> with{" "}
                  <span className="capitalize">{item.name}</span>
                </p>

                {/* Date Display */}
                <p className="text-xs text-gray-400 font-normal">
                  {item.longDate}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TimelinePage;
