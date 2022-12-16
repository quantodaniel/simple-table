import Link from "next/link";
import React from "react";

type SidebarLinkProps = {
  children: React.ReactElement;
  href: string;
  active?: boolean;
};

const SidebarLink = (props: SidebarLinkProps) => {
  const { children, href, active } = props;

  const className = active ? "bg-slate-100 text-gray-900" : "text-slate-500";

  return (
    <Link
      href={href}
      className={`p-2 rounded-lg hover:text-gray-900 hover:bg-slate-200 transition-all ${className}`}
    >
      {React.cloneElement(children, {
        className: "w-5 h-5",
      })}
    </Link>
  );
};

export default SidebarLink;
