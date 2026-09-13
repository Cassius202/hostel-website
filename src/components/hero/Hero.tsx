"use client";

import { assets } from "@/constants/assets";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroForm from "./AvailabilityForm";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        alt="Iyalode hero"
        src={assets.heroImage}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-zinc-950/65" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-zinc-950 to-transparent" />

      {/* Layout */}
      <div className="relative z-10 global-padding w-full py-32 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-12 ">

        {/* ── Copy ── */}
        <div className="flex flex-col flex-1 w-full">
          <div className="mb-6 md:mb-8">
            <p className="w-max sm:inline max-sm:self-center max-sm:mx-auto text-xs max-sm:text-center uppercase tracking-[0.2em] font-medium text-rose-400 bg-blue-600/10 py-2 px-4 rounded-full">
              Quality Assurance
            </p>
          </div>

          <h1 className="text-5xl max-sm:text-center sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white max-w-2xl">
            Live Well,
            <br />
            <span className="font-serif italic font-normal text-white/80">
              Stay Longer
            </span>
          </h1>

          <p className="text-base sm:text-lg max-sm:text-center lg:text-xl text-white/70 mt-6 md:mt-8 max-w-sm max-sm:mx-auto leading-relaxed">
            Where thoughtful design meets warm hospitality. Every room, a sanctuary.
          </p>

          <div className="mt-8 md:mt-10 flex items-center gap-3 md:gap-4 max-sm:justify-center max-sm:flex-col">
            <Link href="/rooms">
              <button className="btn px-5 md:px-6 py-2.5 md:py-3 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-full">
                Explore Rooms
              </button>
            </Link>
            <Link href="tel:+2348000000000">
              <button className="btn px-5 md:px-6 py-2.5 md:py-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-medium rounded-full flex items-center gap-2 backdrop-blur-sm">
                Call Now <Phone size={15} />
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 md:mt-14 flex items-center max-sm:justify-center gap-6 md:gap-8 max-sm:border-y max-sm:pb-6 border-white/10 pt-6 md:pt-8">
            {[
              { value: "6", label: "Room Types" },
              { value: "24/7", label: "Support" },
              { value: "UI", label: "University of Ibadan" },
            ].map(({ value, label }) => (
              <div key={label} className='max-sm:items-center'>
                <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-white/40 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Availability form — below copy on mobile, right column on desktop ── */}
        <div className="w-full md:w-80 md:shrink-0">
          <HeroForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;