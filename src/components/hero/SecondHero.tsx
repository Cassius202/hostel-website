import { videoHero } from "@/constants/assets"; //refers to the supabase url
import Words from "./Words";

const SecondHero = () => {
  // full bleed continous video just like what shopify uses
  return (
    <div className="relative w-screen p-0 h-[95vh]  overflow-hidden">
      <video
        src={videoHero}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl font-sans font-bold italic">
          <Words />
        </h1>
      </div>
    </div>
  );
};

export default SecondHero;
