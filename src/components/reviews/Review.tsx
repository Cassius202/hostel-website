"use client";

import { reviews } from "@/constants/assets";
import NeutralGridBackground from "@/minor-components/GridBackground";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "200+", label: "Reviews" },
  { value: "500+", label: "Happy Residents" },
];

const Review = () => {
  const col1 = reviews.filter((_, i) => i % 2 === 0);
  const col2 = reviews.filter((_, i) => i % 2 !== 0);

  return (
    <div className="relative w-full bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-white transition-colors duration-300 global-padding py-24 md:py-28">
      <div className="opacity-40">
        <NeutralGridBackground />
      </div>
      <div className="xl:pl-10">
        <p className="text-xs uppercase tracking-[0.2em] font-medium text-rose-400 dark:text-rose-500/90 mb-3">
          Resident Reviews
        </p>
        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] ">
          What our residents
          <br />
          <span className="font-serif italic font-normal text-stone-400 dark:text-stone-500">
            are saying
          </span>
        </h2>
      </div>
      <div className="">
        {/* Giant editorial heading — behind cards */}
        <div className="absolute inset-0 items-center justify-center pointer-events-none select-none overflow-hidden hidden md:flex">
          <h2 className="font-serif italic text-[12vw] leading-none text-stone-900/10 dark:text-amber-500/15 text-center whitespace-nowrap">
            What they say?
          </h2>
        </div>

        <section className="overflow-hidden">
          <div className="relative max-w-6xl mx-auto max-md:mt-8">
           
            {/* Desktop layout */}
            <div className="hidden md:grid md:grid-cols-12 gap-6 items-start">
              <div className="col-span-4 flex flex-col gap-5 mt-16">
                {col1.map((r, i) => (
                  <ReviewCard key={i} review={r} index={i * 2} />
                ))}
              </div>
              <div className="col-span-4" />
              <div className="col-span-4 flex flex-col gap-5">
                {col2.map((r, i) => (
                  <ReviewCard key={i} review={r} index={i * 2 + 1} />
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden flex-col gap-4">
              {reviews.map((r, i) => (
                <ReviewCard key={i} review={r} index={i} />
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-12 mt-16 md:justify-end">
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-4xl md:text-5xl font-bold tracking-tight">
                    {value}
                  </p>
                  <p className="text-xs text-stone-400 dark:text-stone-500 uppercase tracking-widest mt-1">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ReviewCard = ({
  review,
  index,
}: {
  review: { name: string; image: string; review: string };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-2xl bg-white/80 dark:bg-stone-900/50 border border-stone-200 dark:border-white/5 shadow-sm dark:shadow-none backdrop-blur-sm p-5 flex flex-col gap-4"
    >
      {/* Top row: index + stars */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-stone-400 dark:text-stone-500 font-mono">
          ({String(index + 1).padStart(2, "0")})
        </span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-400 text-xs">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review text */}
      <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed flex-1">
        {review.review}
      </p>

      {/* Author row: image + name */}
      <div className="flex items-center gap-3 pt-2 border-t border-stone-100 dark:border-white/5">
        <div className="relative size-8 rounded-full overflow-hidden shrink-0 bg-stone-200 dark:bg-stone-700">
          <Image
            src={review.image}
            alt={review.name}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-xs text-stone-500 dark:text-stone-400">
          — {review.name}
        </p>
      </div>
    </motion.div>
  );
};

export default Review;
