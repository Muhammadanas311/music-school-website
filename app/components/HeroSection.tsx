import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";
import Link from "next/link";
import { Button } from "@/app/components/ui/moving-border";
export default function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden
    mx-auto pt-24 sm:pt-32 md:pt-0 pb-12 md:py-0"
    >
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 px-2 tracking-tight">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-sm sm:text-base md:text-lg text-neutral-300 max-w-lg mx-auto px-4 leading-relaxed">
          Dive into our comprehensive music courses and transform your musical
          journey today. whether you are beginner or looking to refine your
          skills, join us to unlock your skills and refine your potential
        </p>
        <div className="mt-6 sm:mt-8">
          <Link href={"/courses"}>
            <Button
             borderRadius="1.75rem"
             className="bg-white dark:bg-neutral-900 text-black dark:text-white border-neutral-200 dark:border-neutral-800 cursor-pointer"
              >
       Explore Courses
      </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
