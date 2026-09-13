"use client";

import { motion, useScroll } from "framer-motion";
import { servicesData } from "@/constants/assets";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stats = [
  { value: "4 min", label: "Faculty of Technology" },
  { value: "8 min", label: "Faculty of Science" },
  { value: "6", label: "Room types" },
  { value: "24/7", label: "Security & support" },
];

const Amenities = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-stone-100 dark:bg-[#0c0a09] text-stone-900 dark:text-stone-100 overflow-hidden"
    >
      {/* Decorative vertical rule */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-800/40 hidden lg:block pointer-events-none" />

      {/* ── Header ── */}
      <div className="global-padding pt-20 pb-16 md:pt-28 md:pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "2.5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-px bg-stone-400 dark:bg-stone-600 mb-6"
            />
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] ">
              Everything
              <br />
              <span className="font-serif italic font-normal text-rose-400 dark:text-rose-500">
                you need,
              </span>
              <br />
              one compound.
            </h2>
          </div>

          <div className="lg:max-w-xs">
            <p className="text-stone-500 dark:text-stone-400 text-base leading-relaxed mb-8">
              Built for the modern UI student — steps from every faculty, packed
              with amenities, designed around your comfort.
            </p>
            <motion.a
              href="/rooms"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-3 text-sm font-semibold text-stone-700 dark:text-stone-300 group"
            >
              View all rooms
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-stone-300 dark:border-stone-700 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white dark:group-hover:bg-stone-100 dark:group-hover:text-stone-900 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* ── Ticker ── */}
      <div className="border-y border-stone-200 dark:border-stone-800/60 py-3.5 overflow-hidden mb-14 md:mb-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap w-max"
        >
          {[...stats, ...stats, ...stats, ...stats].map(({ value, label }, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <span className="text-lg font-semibold text-stone-800 dark:text-stone-200">{value}</span>
              <span className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-600">{label}</span>
              <span className="text-stone-300 dark:text-stone-700 ml-1">·</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Bento grid ── */}
      <div className="global-padding pb-24 md:pb-32 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4"
        >
          {servicesData.map((service, i) => {
            const isWide = i % 3 === 0;
            const colSpan = isWide ? "lg:col-span-7" : "lg:col-span-5";
            const aspectClass = isWide
              ? "aspect-[3/2] sm:aspect-[16/9]"
              : "aspect-[3/2] sm:aspect-[4/5]";

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group relative rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-900 ${colSpan} ${aspectClass} cursor-pointer`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Lighter overlay — less dramatic */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                {/* ID tag */}
                <span className="absolute top-3 left-3 text-xs font-mono text-stone-400 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {service.id}
                </span>

                {/* Content */}
                <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-stone-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;