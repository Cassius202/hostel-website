import Image from "next/image";

const ownerImage = "https://i.pinimg.com/1200x/f2/9e/12/f29e12626f56a6378a98fb6c2b8fb04f.jpg";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen bg-stone-50 dark:bg-stone-950 flex items-end global-padding pb-16 overflow-hidden">

      {/* Full bleed background image with overlay */}
      <div className="absolute inset-0">
        <Image
          alt="Alhaja Taofikat Ajibola"
          src={ownerImage}
          fill
          priority
          className="object-cover object-top"
        />
        {/* Dark gradient — heavier at bottom so text is readable */}
        <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/60 to-stone-950/20" />
        {/* Rose tint layer — like heykuba's orange duotone */}
        <div className="absolute inset-0 bg-rose-900/20 mix-blend-multiply" />
      </div>

      {/* Content — pinned to bottom */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-rose-400 mb-6 font-medium">
          A beautiful mind
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-[0.9] tracking-tight max-w-4xl">
          Alhaja
          <br />
          <span className="font-serif italic font-normal text-white/60">
            Taofikat
          </span>
          <br />
          Ajibola
        </h1>

        {/* Tag strip */}
        <div className="flex flex-wrap gap-3 mt-10">
          {["CEO, Palm 77 Hotels", "Iyalode Parakoyi of Egbe Land", "Philanthropist"].map((tag) => (
            <span key={tag} className="text-xs text-white/50 border border-white/10 rounded-full px-4 py-1.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}