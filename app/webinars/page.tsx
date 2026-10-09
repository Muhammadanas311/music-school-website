"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

interface CardItem {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: string | (() => React.ReactNode);
}

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<CardItem | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 min-h-screen">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-3 sm:p-4 overflow-y-auto">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-3 right-3 z-30 lg:hidden items-center justify-center bg-white/90 dark:bg-neutral-800 rounded-full h-8 w-8 shadow-md cursor-pointer"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] max-h-[90vh] md:max-h-[85vh] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative my-auto"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={400}
                  height={300}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover object-top"
                />
              </motion.div>

              <div className="flex flex-col flex-grow overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4">
                  <div className="w-full sm:w-auto">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-base sm:text-lg text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-full font-bold bg-green-500 text-white text-center w-full sm:w-auto shrink-0"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-2 sm:pt-4 relative px-4 pb-4 overflow-y-auto">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs sm:text-sm max-h-44 sm:max-h-56 flex flex-col items-start gap-3 overflow-y-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full flex flex-col gap-3 sm:gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer transition-colors gap-3 sm:gap-4"
          >
            <div className="flex gap-3 sm:gap-4 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left w-full sm:w-auto">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-32 w-32 sm:h-14 sm:w-14 rounded-lg object-cover object-top shrink-0"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-sm sm:text-base text-neutral-800 dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-xs sm:text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black shrink-0 w-full sm:w-auto"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "John Doe",
    title: "Mastering Fingerstyle Guitar",
    src: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg",
    ctaText: "Register",
    ctaLink: "/webinars/mastering-fingerstyle-guitar",
    content: () => {
      return (
        <p>
          Join John Doe, our expert guitar instructor, for a live deep-dive into
          fingerstyle guitar technique. This session is designed for players who
          already know the basics and want to move into more expressive, layered
          playing. <br /> <br />
          You&apos;ll work through fingerpicking patterns, thumb independence
          exercises, and how to build full arrangements using just one guitar.
          Bring your questions — this session is interactive, with live feedback
          throughout.
        </p>
      );
    },
  },
  {
    description: "Mike Johnson",
    title: "Building Your First Drum Groove",
    src: "https://images.pexels.com/photos/1571938/pexels-photo-1571938.jpeg",
    ctaText: "Register",
    ctaLink: "/webinars/building-your-first-drum-groove",
    content: () => {
      return (
        <p>
          Mike Johnson breaks down what actually makes a drum groove feel good —
          not just technically correct, but genuinely fun to listen to. This
          live workshop is built for beginners and intermediate players alike.{" "}
          <br /> <br />
          You&apos;ll learn how to layer kick, snare, and hi-hat patterns to create
          grooves that lock in with a bassline, plus practical tips on timing
          and feel that most beginners overlook. Expect hands-on exercises you
          can try along with your own kit.
        </p>
      );
    },
  },
  {
    description: "Sarah Lee",
    title: "Vocal Warmups for Performers",
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    ctaText: "Register",
    ctaLink: "/webinars/vocal-warmups-for-performers",
    content: () => {
      return (
        <p>
          Sarah Lee, a professional vocal coach, guides you through a complete
          warmup routine designed to protect your voice and extend your range
          before any performance. <br /> <br />
          This live session covers breath control, pitch-gliding exercises, and
          how to warm up safely even on tight pre-show schedules. Whether you&apos;re
          prepping for a stage performance or just want a healthier daily vocal
          routine, this webinar is built to be practiced along with, live.
        </p>
      );
    },
  },
  {
    description: "David Brown",
    title: "Demystifying Music Theory",
    src: "https://images.pexels.com/photos/4088801/pexels-photo-4088801.jpeg",
    ctaText: "Register",
    ctaLink: "/webinars/demystifying-music-theory",
    content: () => {
      return (
        <p>
          David Brown takes the intimidation out of music theory in this
          beginner-friendly live session. If scales, chords, and key signatures
          have always felt confusing, this webinar is built to finally make them
          click. <br /> <br />
          You&apos;ll walk through the building blocks of theory step by step, with
          real musical examples rather than abstract rules, so you leave able to
          actually apply what you learn to your own playing or writing.
        </p>
      );
    },
  },
  {
    description: "Alex Martinez",
    title: "Intro to Electronic Music Production",
    src: "https://images.pexels.com/photos/9861384/pexels-photo-9861384.jpeg",
    ctaText: "Register",
    ctaLink: "/webinars/intro-to-electronic-music-production",
    content: () => {
      return (
        <p>
          Alex Martinez walks you through the fundamentals of electronic music
          production in this live, hands-on session — from your first beat to a
          basic arranged track. <br /> <br />
          You&apos;ll cover the essentials of beat-making, layering sounds, and
          simple mixing techniques, using tools accessible to complete
          beginners. By the end of the session, you&apos;ll have started your very
          first original track.
        </p>
      );
    },
  },
  {
    description: "Robert Garcia",
    title: "Arranging for Small Ensembles",
    src: "https://images.pexels.com/photos/4088012/pexels-photo-4088012.jpeg",
    ctaText: "Register",
    ctaLink: "/webinars/arranging-for-small-ensembles",
    content: () => {
      return (
        <p>
          Robert Garcia shares practical, real-world techniques for arranging
          music for string quartets, chamber groups, and other small ensembles.{" "}
          <br /> <br />
          This live session covers voicing, balancing instrumental parts, and
          adapting a melody into a full arrangement that actually works for a
          small group. Ideal for composers and arrangers looking to move beyond
          writing for a single instrument.
        </p>
      );
    },
  },
];
