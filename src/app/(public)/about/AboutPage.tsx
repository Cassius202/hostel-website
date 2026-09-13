"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/constants/assets";

const sections = [
  {
    label: "The Vision",
    text: "The Iyalode Taofikat Hub is a multi-million naira hostel facility commissioned in July 2024 at the University of Ibadan. Developed by Alhaja Taofikat Ajibola, CEO of Palm 77 Hotels, this modern accommodation facility has a total capacity of 202 beds — aiming to improve on-campus living standards for students.",
  },
  {
    label: "The Commissioning",
    text: "In his remarks at the commissioning, the Alake of Egba land, Oba Adedotun Aremu, commended Afolabi for the project — stating that it is an individual contribution towards education, and that government alone cannot do everything that has to do with education. He urged other well-meaning Nigerians to emulate such projects and invest in the future.",
  },
  {
    label: "The University's Words",
    text: "The Vice Chancellor, University of Ibadan, Professor Kayode Adebowale, expressed gratitude to Afolabi, noting that the hostel is very special — it would go a long way towards ameliorating the sufferings of students on campus who are finding it difficult to get accommodation. The project signifies a milestone in the university's commitment to improving students' living conditions.",
  },
  {
    label: "The Founder Speaks",
    text: `"The grand opening of Iyalode Taofikat Hub is a dream come true for me. This hub is more than just a building — it is a symbol of our commitment to providing a conducive environment for learning, growth, and development. It is a testament to the power of vision, dedication, and collaboration."`,
  },
  {
    label: "A Hub for Excellence",
    text: "The hub is designed to provide a safe, secure, and comfortable space for students to focus on their studies. It is not just a hostel but a hub for innovation, creativity, and excellence — a place where minds will meet, ideas will be born, and futures will be shaped.",
  },
];

const keyDetails = [
  { label: "Location", value: "University of Ibadan, Ibadan, Oyo State" },
  { label: "Developer", value: "Alhaja Taofikat Ajibola" },
  { label: "Capacity", value: "202 beds" },
  { label: "Commissioned", value: "July 2024" },
];

export default function AboutPage() {
  return (
    <section className="bg-stone-50 dark:bg-stone-950 global-padding py-30">
      {/* Set relative here so the absolute left column stays centered with the max-w container */}
      <div className="max-w-6xl mx-auto relative">
        
        {/* ── LEFT: Absolute Pinned Column (Desktop Only) ── */}
        {/* Sits completely outside the scroll flow, perfectly locked in place */}
        <div className="hidden lg:block absolute top-0 left-0 w-[38%] lg:pointer-events-none user-select-none">
          <div className="w-full aspect-[3/2] overflow-hidden relative rounded-2xl">
            <Image
              alt="Iyalode hostel"
              fill
              src={assets.hostelImage}
              className="object-cover"
            />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {keyDetails.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-4"
              >
                <p className="text-[10px] uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-1">
                  {label}
                </p>
                <p className="text-sm font-medium text-stone-800 dark:text-stone-200">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Hijacked Scroll Container ── */}
        <div className="lg:h-[80svh] lg:overflow-y-scroll no-scrollbar">
          <div className="flex flex-col lg:grid lg:grid-cols-[40%_60%] gap-16 lg:gap-24">
            
            {/* ── Transparent Window (Desktop Only) ── */}
            {/* This empty div forces the text to the right and lets the absolute image show through */}
            <div className="hidden lg:block w-full" />

            {/* ── RIGHT: Scrolling Content ── */}
            <div className="flex-1 pb-32 flex flex-col gap-10">
              
              {/* Opening pull quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-3xl md:text-4xl font-light text-stone-700 dark:text-stone-300 leading-tight">
                  A modern hostel facility, built with one goal —
                  <span className="font-serif italic text-stone-900 dark:text-white">
                    {" "}
                    to give students a home worthy of their potential.
                  </span>
                </p>
              </motion.div>

              {/* Mobile image */}
              <div className="lg:hidden relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  alt="Iyalode hostel"
                  src={assets.hostelImage}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-rose-900/10 mix-blend-multiply" />
              </div>

              {/* Mobile key details */}
              <div className="lg:hidden grid grid-cols-2 gap-3">
                {keyDetails.map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-4"
                  >
                    <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-stone-800 dark:text-stone-200">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sections */}
              {sections.map(({ label, text }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.05 * i }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center">
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-rose-500">
                      {label}
                    </p>
                  </div>
                  <p className="text-base md:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}

              {/* Closing stat strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-3 gap-px bg-stone-200 dark:bg-stone-800 rounded-2xl overflow-hidden mt-4"
              >
                {[
                  { value: "202", label: "Bed spaces" },
                  { value: "2024", label: "Year opened" },
                  { value: "UI", label: "University of Ibadan" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-stone-50 dark:bg-stone-950 px-6 py-8"
                  >
                    <p className="text-3xl font-bold text-stone-900 dark:text-white">
                      {value}
                    </p>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}