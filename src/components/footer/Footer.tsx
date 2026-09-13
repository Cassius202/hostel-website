import Link from "next/link";
import { navLinks, information } from "@/constants/assets";
import ThemeToggleSmall from "@/minor-components/ThemeToggleSmall";
import { PaymentIcon } from "react-svg-credit-card-payment-icons";
import Image from "next/image";

const YEAR = new Date().getFullYear();

const paymentMethods = ["Visa", "Mastercard"] as const;

const Footer = () => {
  return (
    <footer className="w-full bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">

      {/* Main content */}
      <div className="global-padding py-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Left — tagline + contact */}
          <div className="max-w-xs">
            <p className="text-2xl font-light text-stone-700 dark:text-stone-300 leading-snug mb-6">
              {`"Student living, leveled up. Don't just settle, belong."`}
            </p>
            <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 flex-wrap">
              <span>info@iyalodehub.com</span>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <span>+234 800 000 0000</span>
            </div>
            <p className="text-sm text-stone-400 dark:text-stone-500 mt-1">
              {information.address}
            </p>

            {/* Payment methods */}
            <div className="mt-8">
              <p className="text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-3">
                We accept
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {paymentMethods.map((method) => (
                  <PaymentIcon
                    key={method}
                    type={method}
                    format="flatRounded"
                    width={44}
                    height={28}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                ))}

                {/* Paystack */}
                <Image
                  src="https://website-v3-assets.s3.amazonaws.com/assets/img/hero/Paystack-mark-white-twitter.png"
                  alt="Paystack"
                  width={28}
                  height={28}
                  className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity dark:invert-0 invert"
                />

                {/* OPay */}
                <Image
                  src="https://i.pinimg.com/736x/c2/0e/f7/c20ef73761ad72eb1d969c2c3a5edb8d.jpg"
                  alt="OPay"
                  width={44}
                  height={28}
                  className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Right — nav links */}
          <nav className="flex flex-col gap-3">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-lg font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors duration-200"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Big wordmark */}
      <div className="w-full overflow-hidden px-4 md:px-8 opacity-[0.06] dark:opacity-[0.04] select-none pointer-events-none">
        <p className="text-[18vw] font-black tracking-tighter leading-none text-stone-900 dark:text-white whitespace-nowrap">
          IYALODE
        </p>
      </div>

      {/* Bottom bar */}
      <div className="global-padding py-5 border-t border-stone-200 dark:border-stone-800 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-stone-400 dark:text-stone-500">
          © {YEAR} {information.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xs text-stone-400 dark:text-stone-600">
          <Link href="/privacy" className="hover:text-stone-700 dark:hover:text-stone-300 transition-colors">
            Privacy Policy
          </Link>
          <span className="text-stone-300 dark:text-stone-700">·</span>
          <Link href="/terms" className="hover:text-stone-700 dark:hover:text-stone-300 transition-colors">
            Terms & Conditions
          </Link>
          <span className="text-stone-300 dark:text-stone-700">·</span>
          <div className="flex items-center gap-1.5">
            <ThemeToggleSmall />
            <span>Toggle Theme</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;