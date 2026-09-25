"use client";
import React from "react";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import Link from "next/link";
export const webinars = [
  {
    title: "Guitar Lessons",
    description:
      "Learn to play the guitar from scratch, from basic chords to fingerstyle techniques and beyond.",
    link: "/webinars",
  },
  {
    title: "Drumming Basics",
    description:
      "Get into the rhythm with our drumming basics course, covering timing, coordination, and groove.",
    link: "/webinars",
  },
  {
    title: "Singing Techniques",
    description:
      "Enhance your vocal skills with professional techniques for range, control, and stage-ready confidence.",
    link: "/webinars",
  },
  {
    title: "Music Theory Essentials",
    description:
      "Understand the fundamentals of music theory — scales, chords, and progressions that unlock real composition.",
    link: "/webinars",
  },
  {
    title: "Electronic Music Production",
    description:
      "Dive into the world of electronic music production, from sound design to mixing your own tracks.",
    link: "/webinars",
  },
  {
    title: "Orchestral Arranging",
    description:
      "Learn how to arrange music for orchestras and ensembles, shaping full instrumental sections into cohesive pieces.",
    link: "/webinars",
  },
];
export default function UpcomingWebinars() {
  return (
    <div className="py-12 bg-gray-950">
      <div className="text-center">
        <h2 className="text-base text-gray-500 font-semibold tracking-wide uppercase">
          FEATURED WEBINARS
        </h2>
        <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance Your Musical Journey
        </p>
      </div>
      <div>
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={webinars} />
    </div>
      </div>
      <div className="mt-5 text-center">
        <Link
          href={"/webinars"}
          className="rounded-2xl px-6 py-4 border border-neutral-700 text-white-700 bg-gray-700 hover:bg-gray-900 transition duration-200"
        >
          View All Webinars
        </Link>
      </div>
    </div>
  );
}
