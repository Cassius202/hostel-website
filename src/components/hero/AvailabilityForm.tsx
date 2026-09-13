// components/HeroForm.tsx
"use client";

import { useState } from "react";
import { Search, CheckCircle, XCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

const rooms = [
  "1 Man Room", "2 Man Room", "3 Man Room",
  "4 Man Room", "5 Man Room", "6 Man Room",
];

const selectClass = "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500/60 transition-colors appearance-none cursor-pointer";

const HeroForm = () => {
  const [isUIStudent, setIsUIStudent] = useState("");
  const [gender, setGender] = useState("");
  const [roomType, setRoomType] = useState("");
  const [loading, setLoading] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);

  const handleCheck = () => {
    if (!isUIStudent || !gender || !roomType) {
      toast.error("Please fill all fields");
      return;
    }
    setLoading(true);
    setAvailable(null);
    setTimeout(() => {
      const result = Math.random() > 0.4;
      setAvailable(result);
      setLoading(false);
      if (result) {
        return toast.success(`${roomType} (${gender}) is available!`)
      } else {
        return toast.error(`No ${roomType} available right now.`);
      }
    }, 2000);
  };

  const reset = () => {
    setAvailable(null);
    setIsUIStudent("");
    setGender("");
    setRoomType("");
  };

  return (
    <div className="rounded-2xl bg-zinc-950/50 border border-white/10 backdrop-blur-md p-4 md:p-6 flex flex-col gap-4 md:gap-5">
      <div>
        <h2 className="text-white font-semibold text-base">Check Availability</h2>
        <p className="text-white/40 text-xs mt-1">Find your perfect room instantly</p>
      </div>

      {/* Two-col grid on mobile, single col on lg */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 lg:gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-white/50 uppercase tracking-wider">UI student? *</label>
          <select value={isUIStudent} onChange={(e) => setIsUIStudent(e.target.value)} className={selectClass}>
            <option value="" disabled className="bg-zinc-900">Select...</option>
            <option value="yes" className="bg-zinc-900">Yes</option>
            <option value="no" className="bg-zinc-900">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-white/50 uppercase tracking-wider">Room Type</label>
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className={selectClass}>
            <option value="" disabled className="bg-zinc-900">Select room...</option>
            {rooms.map((r) => (
              <option key={r} value={r} className="bg-zinc-900">{r}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-white/50 uppercase tracking-wider">Gender</label>
        <div className="grid grid-cols-2 gap-2">
          {["Male", "Female"].map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`py-2.5 rounded-lg text-sm font-medium border transition-all ${
                gender === g
                  ? "bg-rose-600 border-rose-600 text-white"
                  : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {available !== null && (
        <div className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm ${
          available
            ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
            : "bg-red-500/10 border border-red-500/20 text-red-400"
        }`}>
          {available
            ? <><CheckCircle size={15} /> Room is available!</>
            : <><XCircle size={15} /> No rooms available</>}
        </div>
      )}

      {available ? (
        <div className="flex flex-col gap-2">
          <Link href="/rooms">
            <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors">
              Book Now
            </button>
          </Link>
          <button onClick={reset} className="w-full py-2 text-white/40 hover:text-white/60 text-xs transition-colors">
            Start over
          </button>
        </div>
      ) : (
        <button
          onClick={handleCheck}
          disabled={loading}
          className="w-full py-3 bg-rose-600 hover:bg-rose-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          {loading
            ? <><Loader2 size={15} className="animate-spin" /> Checking...</>
            : <><Search size={15} /> Check Availability</>}
        </button>
      )}
    </div>
  );
};

export default HeroForm;