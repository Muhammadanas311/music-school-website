"use client";
import React from "react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Learn from Expert Instructors",
    description:
      "Get hands-on guidance from professional musicians and educators. Whether you're picking up guitar for the first time or refining your vocal technique, our instructors bring years of real-world performance and teaching experience to every lesson.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Learn from Expert Instructors
      </div>
    ),
  },
  {
    title: "Practice at Your Own Pace",
    description:
      "Access lessons anytime, anywhere. With our platform, you can revisit tricky sections, slow down complex passages, and build muscle memory at a pace that actually works for you — no more rushing through material in a rigid classroom schedule.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Practice at Your Own Pace
      </div>
    ),
  },
  {
    title: "Track Your Progress",
    description:
      "Watch your skills grow with structured course paths and progress tracking. From your very first chord to performance-ready pieces, stay motivated by seeing exactly how far you've come and what's next on your musical journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Track Your Progress
      </div>
    ),
  },
  {
    title: "A Growing Course Library",
    description:
      "New lessons, techniques, and genres are added regularly. From music theory fundamentals to advanced composition and production, there's always something new to explore and master as your musical interests evolve.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        A Growing Course Library
      </div>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
