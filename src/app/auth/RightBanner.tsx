import { videoHero } from "@/constants/assets";
// import { backgroundImage } from "@/constants/tenantAssets";
// import Image from "next/image";

const RightBanner = () => {
  return (
    <div className="hidden lg:flex flex-1 relative overflow-hidden">

      {/* Light mode — video */}
      <video
        src={videoHero}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover block"
      />

      {/* Dark mode — image
      <Image
        src={backgroundImage}
        alt="Iyalode Taofikat Hub"
        fill
        className="object-cover object-center hidden dark:block"
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-zinc-950/60" />

      {/* Rose glow */}
      {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-green-6005 blur-3xl pointer-events-none" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between p-14 w-full">
        <div className="mt-auto pt-32">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 dark:text-green-400 mb-4">
            Iyalode Taofikat Hub
          </p>
          <h2 className="text-5xl font-bold text-white leading-[1.05] tracking-tight">
            Welcome
            <br />
            <span className="font-serif italic font-normal text-white/60 dark:text-white/40">
              back home.
            </span>
          </h2>
          <p className="text-zinc-300 text-sm mt-4 max-w-xs leading-relaxed">
            Your room, your sessions, your payments — all in one place.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-3">
          {[
            { value: "202", label: "Bed spaces" },
            { value: "6", label: "Room types" },
            { value: "24/7", label: "Support" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-5"
            >
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBanner;