"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CustomLink({ href, icon, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "inline-block bg-[#244D3F] py-2 px-4 rounded-sm text-white"
          : "text-gray-600 hover:text-[#244D3F] hover:border-b-2 hover:border-b-[#244D3F]  transition duration-100"
      }
    >
      {icon}
      {label}
    </Link>
  );
}

export default CustomLink;
