"use client"
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import musicData from '@/app/data/music_data.json'

export default function CourseDetailPage() {
  const params = useParams()
  const courseData = musicData.courses.find(
    (course) => course.id === Number(params.id)
  )

  if (!courseData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white gap-6">
        <h1 className="text-4xl font-bold">Course Not Found</h1>
        <Link
          href="/courses"
          className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform"
        >
          Back to Courses
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <motion.img
          src={courseData.image}
          alt={courseData.title}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-6 left-6"
        >
          <Link
            href="/courses"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-sm font-medium hover:bg-black/70 transition-colors"
          >
            ← Back to Courses
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute top-6 right-6 bg-white text-black font-bold px-5 py-2 rounded-full text-lg shadow-lg"
        >
          ${courseData.price}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
        >
          {courseData.isfeatured && (
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-bold tracking-wide uppercase">
              Featured Course
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {courseData.title}
          </h1>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-neutral-800"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-neutral-800 flex items-center justify-center text-lg">
              👤
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wide">Instructor</p>
              <p className="font-semibold">{courseData.instructor}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-neutral-800 flex items-center justify-center text-lg">
              ⏱️
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wide">Duration</p>
              <p className="font-semibold">{courseData.duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-neutral-800 flex items-center justify-center text-lg">
              💵
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wide">Price</p>
              <p className="font-semibold">${courseData.price}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4">About This Course</h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            {courseData.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <button className="w-full md:w-auto px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-xl cursor-pointer">
            Enroll Now — ${courseData.price}
          </button>
        </motion.div>
      </div>
    </div>
  )
}