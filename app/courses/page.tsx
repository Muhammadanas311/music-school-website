"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import courseData from "@/app/data/music_data.json";
import Link from "next/link";

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-black py-5 pt-28 sm:pt-36 px-2 sm:px-4">
        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl font-sans mb-4 sm:mb-6 text-white px-2">All Courses ({courseData.courses.length})</h1>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
            {courseData.courses.map((course)=>(
              <CardContainer key={course.id} className="inter-var m-2 sm:m-4 w-full max-w-sm sm:max-w-none sm:w-auto">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-[calc(100vw-2.5rem)] sm:w-[30rem] sm:max-w-none h-auto rounded-xl p-4 sm:p-6 border">
        <CardItem
          translateZ={50}
          className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
        >
          {course.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300 leading-relaxed"
        >
           {course.description}
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-3 sm:mt-2">
          <img
            src={course.image}
            height="1000"
            width="1000"
            className="h-44 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6 sm:mt-8 gap-2">
          <CardItem
            translateZ={20}
            as={Link}
            href={`/courses/${course.id}`}
            className="px-3 sm:px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-black hover:underline"
          >
            Learn more →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="/contact"
            className="px-3 sm:px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Enroll (${course.price})
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
            ))}
        </div>
    </div>
  );
}
