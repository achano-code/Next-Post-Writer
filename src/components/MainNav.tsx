"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { NavItem } from "../../types";
import { MobileNav } from "./MobileNav";
import { useState } from "react";

interface MainNavProps {
  items?: NavItem[];
  children?: ReactNode;
}

const MainNav = ({ items }: MainNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  return (
    <div className="flex items-center md:gap-10">
      <Link href={"/"} className="hidden md:flex items-center space-x-2">
        <span className="font-bold hidden md:inline-block">Post Writer</span>
      </Link>
      <nav className="md:flex gap-6 hidden">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-lg font-medium sm:text-sm hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span>メニュー</span>
        {showMobileMenu && <MobileNav items={items} />}
      </button>
    </div>
  );
};

export default MainNav;
