"use client";
import React from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import { cn } from "@/app/utilities/utils";

const testimonials = [
  {
    quote:
      "I went from barely knowing how to hold a guitar to playing full songs in just a few months. The lessons are structured so well that I always knew exactly what to practice next, and my instructor's feedback made all the difference.",
    name: "Sarah Mitchell",
    title: "Guitar Lessons Student",
  },
  {
    quote:
      "Learning drums felt intimidating at first, but breaking everything down into small, practiced steps made it click. I can finally keep a steady beat and even jam along with my friends now — something I never thought I'd be able to do.",
    name: "Marcus Chen",
    title: "Drumming Basics Student",
  },
  {
    quote:
      "My vocal range and control have improved more in three months here than in years of trying to teach myself from YouTube videos. The personalized technique tips were exactly what I needed.",
    name: "Amara Okafor",
    title: "Singing Techniques Student",
  },
  {
    quote:
      "Music theory always felt like a wall I couldn't get past. This course finally made scales, chords, and progressions make sense — and now composing my own music doesn't feel impossible anymore.",
    name: "Daniel Kim",
    title: "Music Theory Essentials Student",
  },
  {
    quote:
      "I started with zero production experience and now I'm mixing my own electronic tracks. The step-by-step approach to sound design and arrangement gave me the confidence to actually finish songs instead of abandoning them halfway.",
    name: "Priya Sharma",
    title: "Electronic Music Production Student",
  },
];

export default function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full bg-white dark:bg-black relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <h2 className="text-center font-bold mb-8 z-10 text-3xl text-neutral-800 dark:text-white">
        Hear Our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
