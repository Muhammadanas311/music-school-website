"use client";
import React from "react";
import { BackgroundGradient } from "@/app/components/ui/background-gradient";
import courseData from "@/app/data/music_data.json";
import Link from "next/link";
//Defining Our Datatype for Typescript
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  instructor: string;
  duration: string;
  isfeatured: boolean;
}

export default function FeaturedCourses() {
  const featuredcourses = courseData.courses.filter(
    (course: Course) => course.isfeatured,
  );
  return (
    <div className="py-12 bg-gray-950">
      <div className="text-center">
        <h2 className="text-base text-gray-500 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featuredcourses.map((course: Course) => (
            <BackgroundGradient
              key={course.id}
              className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full w-full"
            >
              
              <div className="relative w-full h-44 shrink-0 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  ${course.price}
                </span>
              </div>

            
              <div className="p-5 sm:p-6 flex flex-col flex-grow text-center">
                <p className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2">
                  {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    Instructor:
                  </span>
                  <span>{course.instructor}</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-5">
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    Duration:
                  </span>
                  <span>{course.duration}</span>
                </div>

                <Link href="/courses">
                  <button
                    className="w-full rounded-full bg-neutral-800 dark:bg-neutral-400 text-white dark:text-black font-semibold text-sm py-2.5
              border border-neutral-700 dark:border-neutral-300
              transition-all duration-300 ease-in-out
              hover:bg-neutral-700 dark:hover:bg-neutral-300
              hover:scale-[1.02] hover:shadow-md
              active:scale-95
              cursor-pointer"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="rounded-2xl px-6 py-4 border border-neutral-600 text-white-700 bg-gray-700 hover:bg-gray-900 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}
