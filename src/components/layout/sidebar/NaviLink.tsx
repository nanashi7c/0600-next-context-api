"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

export const NaviLink = ({ href, label }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const linkClass = `${isActive ? "bg-(--hover-color) text-(--font-color-dark) font-bold" : "text-(--font-color-dark) font-medium"} cursor-pointer block pt-4 pr-4 pb-4 pl-8 text-sm whitespace-nowrap hover:bg-[#8fe3c7]/25`;

  return (
    <Link href={href} className={linkClass}>
      <div className="tracking-[0.8px]">{label}</div>
    </Link>
  );
};
