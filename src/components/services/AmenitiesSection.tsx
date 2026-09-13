"use client";

import { motion } from "framer-motion";
import { amenities } from "@/constants/amenitiesAssets";
import NeutralGridBackground from "@/minor-components/GridBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="w-full bg-stone-50 dark:bg-stone-950 py-20 global-padding">
      <div className="max-w-5xl mx-auto">
        {/* Intro text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-rose-500 mb-4 block">
            Life at Iyalode
          </span>
          <p className="text-3xl md:text-4xl font-semibold text-stone-700 dark:text-stone-300 leading-tight">
            Everything you need to live well — built right into the compound.
          </p>
          <p className="mt-4 text-stone-500 dark:text-stone-400 text-base leading-relaxed">
            Study in peace, watch weekend football in the TV room, or simply
            enjoy the calm that makes Iyalode feel like home.
          </p>
        </div>

        {/* Amenities grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {amenities.map(({ title, Icon, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-rose-300 dark:hover:border-rose-800 transition-all duration-300 cursor-default"
            >
              {/* Grid background — top half of card only */}
              <div className="absolute inset-x-0 top-0 h-2/3 pointer-events-none scale-50">
                <NeutralGridBackground />
              </div>

              {/* Fade out grid at bottom */}
              <div className="absolute inset-x-0 top-0 h-2/3 bg-linear-to-b from-transparent to-white dark:to-stone-900 pointer-events-none z-[1]" />

              {/* Corner glow */}
              <div className="absolute -top-4 -right-4 size-14 rounded-full bg-rose-400/0 group-hover:bg-rose-400/15 dark:group-hover:bg-rose-500/15 blur-lg transition-all duration-500 pointer-events-none z-2" />

              {/* Icon — sits above grid */}
              <div className="relative z-2 flex items-center justify-center size-12 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 group-hover:bg-rose-50 dark:group-hover:bg-rose-950/60 group-hover:border-rose-200 dark:group-hover:border-rose-800 transition-colors duration-300 mt-1">
                <Icon
                  size={20}
                  className="text-stone-400 dark:text-stone-500 group-hover:text-rose-500 transition-colors duration-300"
                />
              </div>

              {/* Title */}
              <p className="relative z-2 text-xs font-medium text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-200 text-center leading-snug transition-colors duration-200 pb-1">
                {title}
              </p>
              <span className="tooltip z-20 w-50 whitespace-normal dark:bg-zinc-800 border-rose-500/20">
                {description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
