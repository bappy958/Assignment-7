import { House, Clock2, ChartLine } from "lucide-react";
import CustomLink from "./CustomLink";

function Navbar() {
  const links = [
    {
      href: "/",
      icon: <House size={14} className="mr-1 inline" />,
      label: "Home",
    },
    {
      href: "/timeline",
      icon: <Clock2 size={14} className="mr-1 inline" />,
      label: "Timeline",
    },
    {
      href: "/stats",
      icon: <ChartLine size={14} className="mr-1 inline" />,
      label: "Stats",
    },
  ];

  return (
    <header className="w-full shadow-lg py-3 px-4 md:px-10 lg:px-20 mx-auto flex flex-wrap items-center justify-between gap-y-3">
      {/* Logo Section */}
      <h1 className="font-black text-xl sm:text-2xl tracking-tight">
        Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
      </h1>

      {/* Navigation Links */}
      <nav className="flex items-center gap-3 sm:gap-6 text-sm sm:text-base">
        {links.map((link, index) => (
          <CustomLink
            key={index}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
