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
        "fixed inset-x-0 top-3 sm:top-6 md:top-10 z-50 mx-auto w-[94%] sm:w-[85%] md:w-full max-w-2xl px-1 sm:px-0",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"} onClick={() => setActive(null)}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-2 sm:space-y-4 text-xs sm:text-sm">
            <HoveredLink href="/courses" onClick={() => setActive(null)}>All Courses</HoveredLink>
            <HoveredLink href="/courses" onClick={() => setActive(null)}>Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses" onClick={() => setActive(null)}>Advanced Composition</HoveredLink>
            <HoveredLink href="/courses" onClick={() => setActive(null)}>Song Writing</HoveredLink>
            <HoveredLink href="/courses" onClick={() => setActive(null)}>Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/webinars"} onClick={() => setActive(null)}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Webinars"
          ></MenuItem>
        </Link>
        <Link href={"/contact"} onClick={() => setActive(null)}>
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