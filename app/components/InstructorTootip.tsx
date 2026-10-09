"use client";
import React from "react";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import { WavyBackground } from "@/app/components/ui/wavy-background";
const Instructors = [
  {
    id: 1,
    name: "John Doe",
    designation: "Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Mike Johnson",
    designation: "Drumming Instructor",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Sarah Lee",
    designation: "Vocal Coach",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "David Brown",
    designation: "Music Theory Instructor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Alex Martinez",
    designation: "Music Production Instructor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Robert Garcia",
    designation: "Orchestral Arranging Instructor",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
export default function InstructorTootip() {
  return (
    <div className="relative h-[32rem] sm:h-[36rem] md:h-[40rem] overflow-hidden flex items-center justify-center px-4">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full px-2">
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-4 sm:mb-8 px-2">
          Meet Our Instructor
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white text-center mb-6 sm:mb-8 px-4 max-w-xl mx-auto leading-relaxed">
          Discover the talented professional who will guide your musical journey
        </p>
        <div className="flex flex-row items-center justify-center mb-6 sm:mb-10 w-full px-4">
          <AnimatedTooltip items={Instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}
