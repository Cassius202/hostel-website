"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Image from "next/image";
import { useTheme } from "next-themes";

type FormData = {
  name: string;
  number: string;
  email: string;
  department: string;
  gender: string;
};

const departments = [
  "Agriculture",
  "Arts",
  "Basic Medical Sciences",
  "Clinical Sciences",
  "Education",
  "Law",
  "Pharmacy",
  "Science",
  "Social Sciences",
  "Technology",
  "Veterinary Medicine",
  "Computer Science",
  "Others",
];

const inputClass =
  "w-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-rose-400 dark:focus:border-rose-500 transition-colors";

const roomImage =
  "https://i.pinimg.com/1200x/15/81/49/158149aca0cf2e2eaa75c5cf3b623c55.jpg";

const WaitingForm = () => {
  const { theme } = useTheme();
  const [form, setForm] = useState<FormData>({
    name: "",
    number: "",
    email: "",
    department: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isDark = theme === "dark";

  const toastStyle = isDark
    ? { background: "#1c1917", color: "#f5f5f4", border: "1px solid #44403c" }
    : undefined;

  const handleSubmit = async () => 
    {
    const { name, number, email, department, gender } = form;
    if (!number.match(/^[0-9]{11}$/)) {
      return toast.error("Phone number must be 11 digits", {
      style: toastStyle,
    });
    }
    if (!name || !number || !email || !department || !gender) {
      toast.error("Please fill all fields", { style: toastStyle });
      return;
    }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1800));
    setLoading(false);
    toast.success("You're on the waitlist! We'll be in touch.", {
      style: toastStyle,
    });
    setForm({ name: "", number: "", email: "", department: "", gender: "" });
  };
  return (
    <section className="w-full bg-stone-50 dark:bg-stone-950 global-padding py-20">
      <div className="lg:max-w-7xl mx-auto md:max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* ── Left: Form ── */}
          <div className="w-full lg:flex-1">
            {/* Header */}
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-rose-500 mb-3 block">
                Waiting List
              </span>
              <h2 className="text-3xl font-bold text-stone-900 dark:text-white tracking-tight">
                Secure your spot
              </h2>
              <p className="mt-2 text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                {`Rooms fill up fast. Drop your details and we'll notify you as soon as a space opens up.`}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Fatima Bello"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    name="number"
                    type="tel"
                    value={form.number}
                    onChange={handleChange}
                    placeholder="0800 090 0000"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  Faculty
                </label>
                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled className="bg-stone-900">
                    Select faculty...
                  </option>
                  {departments.map((d) => (
                    <option key={d} value={d} className="bg-stone-900">
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Male", "Female"].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({ ...prev, gender: g }))
                      }
                      className={`py-3 rounded-xl text-sm font-medium border transition-all duration-200 ${
                        form.gender === g
                          ? "bg-rose-600 border-rose-600 text-white"
                          : "bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-stone-300 dark:hover:border-stone-600"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={handleSubmit}
                disabled={loading}
                whileTap={{ scale: 0.98 }}
                className="mt-2 w-full py-3.5 bg-rose-600 hover:bg-rose-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Joining waitlist...
                  </span>
                ) : (
                  "Join the Waitlist →"
                )}
              </motion.button>

              <p className="text-center text-xs text-stone-400 dark:text-stone-600">
                No spam. Just a heads-up when your room is available.
              </p>
            </motion.div>
          </div>

          {/* ── Right: Image — large screens only ── */}
          <div className="hidden lg:block lg:w-[42%] shrink-0">
            <div className="sticky top-24">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={roomImage}
                  alt="Iyalode Taofikat Hub room"
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-stone-950/60 to-transparent" />

                {/* Caption card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4">
                  <p className="text-white text-sm font-medium">
                    Premium student living
                  </p>
                  <p className="text-white/60 text-xs mt-0.5">
                    University of Ibadan · 202 bed spaces
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingForm;
