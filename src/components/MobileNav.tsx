import React, { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "../../config/site";
import { NavItem } from "../../types";
import { useLockBodyScroll } from "@uidotdev/usehooks";

interface MainNavProps {
  items?: NavItem[];
  children?: ReactNode;
}

export const MobileNav = ({ items }: MainNavProps) => {
  useLockBodyScroll();

  return (
    <div className="fixed top-16 left-0 right-0 bottom-0 z-50 p-6 shadow-md md:hidden animate-in slide-in-from-bottom-80">
      <div className="grid gap-6 bg-popover p-4 text-popover-foreground">
        <Link href={"/"} className="font-bold">
          {siteConfig.name}
        </Link>
        <nav className="text-sm flex gap-4">
          {items?.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
