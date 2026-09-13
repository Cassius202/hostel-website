"use client";

import { assets } from "@/constants/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User, Hash, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";
import { register } from "../actions";
import useSessionStorage from "@/hooks/useSessionStoage";

const logoDark = assets.logoDark;
const logoLight = assets.logoLight;

type FormInput = {
  firstName: string;
  lastName: string;
  email: string;
  roomNumber: string;
  matricNumber: string;
};

const nullFormData = {
  firstName: "",
  lastName: "",
  email: "",
  roomNumber: "",
  matricNumber: "",
};

const RegisterUser = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const toastStyle = isDark
    ? { background: "#1c1917", color: "#f5f5f4", border: "1px solid #44403c" }
    : undefined;

  const [form, setForm] = useSessionStorage<FormInput>(
    "form-data",
    nullFormData,
  );

  const [password, setPassword] = useState("");

  const clearForm = () => {
    setForm(nullFormData);
    setPassword("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
      return;
    }
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("firstName", form.firstName);
    formData.append("lastName", form.lastName);
    formData.append("email", form.email);
    formData.append("password", password);
    formData.append("roomNumber", form.roomNumber);
    formData.append("matric", form.matricNumber);

    const result = await register(formData);

    if (result?.error) {
      toast.error(result.error, { style: toastStyle });
      setLoading(false);
      return;
    }

    clearForm();
  };

  const inputClass =
    "w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl pl-10 pr-4 py-3 text-sm text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-green-400 dark:focus:border-green-500 focus:ring-2 focus:ring-green-500/10 transition-colors";
  const labelClass =
    "text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-7 w-full"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <Image
          src={logoLight}
          alt="logo"
          height={32}
          width={32}
          className="dark:hidden"
        />
        <Image
          src={logoDark}
          alt="logo"
          height={32}
          width={32}
          className="hidden dark:block"
        />
        <span className="text-sm font-bold text-stone-800 dark:text-stone-200">
          Iyalode{" "}
          <span className="font-normal text-stone-400">Taofikat Hub</span>
        </span>
      </Link>

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-stone-900 dark:text-white tracking-tight">
          Create account
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-1.5">
          Register as a tenant to access your dashboard.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* First + Last name */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>First Name</label>
            <div className="relative">
              <User
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
              />
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Fatima"
                required
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Last Name</label>
            <div className="relative">
              <User
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Bello"
                required
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Email Address</label>
          <div className="relative">
            <Mail
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Password</label>
          <div className="relative">
            <Lock
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
            />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className={`${inputClass} pr-11`}
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

        {/* Room number + Matric */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Room Number</label>
            <div className="relative">
              <Hash
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
              />
              <input
                name="roomNumber"
                value={form.roomNumber}
                onChange={handleChange}
                placeholder="e.g B32"
                required
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>
              Matric No.{" "}
              <span className="normal-case text-stone-300 dark:text-stone-600">
                (required)
              </span>
            </label>
            <div className="relative">
              <BookOpen
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
              />
              <input
                name="matricNumber"
                value={form.matricNumber}
                onChange={handleChange}
                placeholder="e.g 123456"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full py-3 bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          {loading && (
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
          )}
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>

      {/* Sign in link */}
      <p className="text-sm text-stone-500 dark:text-stone-400 text-center">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-green-500 hover:text-green-600 font-medium transition-colors"
        >
          Sign in
        </Link>
      </p>
    </motion.div>
  );
};

export default RegisterUser;
