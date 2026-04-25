import Image from "next/image";
import Link from "next/link";

async function Friends() {
  const response = await fetch("/friends.json", { cache: "no-store" });
  const friends = await response.json();

  return (
    <div className="mt-5 border-t border-gray-200 px-4 sm:px-6">
      <h2 className="text-2xl font-medium text-gray-900 mt-5 mb-5">
        Your friends
      </h2>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {friends.map((friend) => (
          <Link key={friend.id} href={`/${friend.id}`}>
            <div
              key={friend.id}
              className="bg-white border border-gray-100 shadow-lg rounded-xl px-4 py-5 flex flex-col items-center gap-2 text-center"
            >
              {/* image */}
              <div className="rounded-full overflow-hidden w-18 h-18 shrink-0 border">
                <Image
                  src={friend.picture}
                  width={72}
                  height={72}
                  alt={friend.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name */}
              <p className="text-sm font-medium text-gray-900 leading-tight">
                {friend.name}
              </p>

              {/* Days since contact */}
              <p className="text-xs text-gray-400">
                {friend.days_since_contact}d ago
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 justify-center">
                {friend.tags.map((item, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Status */}

              <div className="mt-auto w-full pt-3 border-t border-gray-50">
                <span
                  className={`text-xs font-bold uppercase px-3 py-1 rounded-full text-white ${
                    friend.status === "overdue"
                      ? "bg-red-600"
                      : friend.status === "almost due"
                        ? "bg-orange-600"
                        : "bg-green-600"
                  }`}
                >
                  {friend.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Friends;
