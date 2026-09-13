'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NeutralGridBackground = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
      <div
        className="absolute w-full h-full transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(23, 23, 23, 0.05)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(23, 23, 23, 0.05)'} 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default NeutralGridBackground