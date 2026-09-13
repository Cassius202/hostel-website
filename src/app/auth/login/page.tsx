"use client";

import { assets } from "@/constants/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";

const logoDark = assets.logoDark;
const logoLight = assets.logoLight;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: supabase.auth.signInWithPassword({ email, password })
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 w-full"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <Image src={logoLight} alt="logo" height={32} width={32} className="dark:hidden" />
        <Image src={logoDark} alt="logo" height={32} width={32} className="hidden dark:block" />
        <span className="text-sm font-bold text-stone-800 dark:text-stone-200">
          Iyalode <span className="font-normal text-stone-400">Taofikat Hub</span>
        </span>
      </Link>

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-stone-900 dark:text-white tracking-tight">
          Sign in
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-1.5">
          Welcome back — access your tenant dashboard.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Email Address
          </label>
          <div className="relative">
            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl pl-10 pr-4 py-3 text-sm text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-green-400 dark:focus:border-green-500 focus:ring-2 focus:ring-green-500/10 transition-colors"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Password
            </label>
            <Link href="/forgot-password" className="text-xs text-green-500 hover:text-green-600 transition-colors">
              Forgot Password?
            </Link>
          </div>
          <div className="relative">
            <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl pl-10 pr-11 py-3 text-sm text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-green-400 dark:focus:border-green-500 focus:ring-2 focus:ring-green-500/10 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
            >
              {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full py-3 bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          {loading && (
            <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          )}
          {loading ? "Signing in..." : "Sign in"}
        </button>

      </form>

      {/* Register link */}
      <p className="text-sm text-stone-500 dark:text-stone-400 text-center">
        Hostel member without an account?{" "}
        <Link href="/auth/register" className="text-green-500 hover:text-green-600 font-medium transition-colors">
          Register
        </Link>
      </p>

    </motion.div>
  );
};

export default Login;