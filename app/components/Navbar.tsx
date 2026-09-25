"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "@/app/components/ui/navbar-menu";
import { cn } from "@/app/utilities/utils";
import Link from "next/link";
export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-4 sm:top-6 md:top-10 z-50 mx-auto w-[92%] sm:w-[85%] md:w-full max-w-2xl px-2 sm:px-0",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-3 sm:space-y-4 text-xs sm:text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Song Writing</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/webinars"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Webinars"
          ></MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}