import { assets, navLinks } from "@/constants/assets";
import ThemeToggleSmall from "@/minor-components/ThemeToggleSmall";
import Image from "next/image";
import Link from "next/link";
import NotificationBar from "./NotificationBar";
import SideBarButton from "./SideBarButton";

const Header = () => {
  return (
    <div className="fixed z-50  left-0 right-0 flex flex-col top-0">
      <NotificationBar />
      <header className={`justify-between flex global-padding h-14 items-center bg-stone-50/80 dark:bg-stone-950/70 backdrop-blur-md border-b border-stone-200 dark:border-stone-800/50 `}>
        {/* Left — hamburger on mobile, logo on desktop */}
        <div className="flex items-center">
          <SideBarButton />

          {/* Logo — desktop only (left) */}
          <Link href="/" className="hidden md:flex gap-2 items-center">
            <Image
              alt="logo"
              width={28}
              height={28}
              src={assets.logoLight}
              className="dark:hidden"
            />
            <Image
              alt="logo"
              width={28}
              height={28}
              src={assets.logoDark}
              className="hidden dark:block"
            />
            <p className="font-serif font-bold text-lg text-stone-900 dark:text-stone-50">
              Iyalode{" "}
              <span className="hidden lg:inline text-stone-400 dark:text-stone-500 font-normal text-base">
                Taofikat Hub
              </span>
            </p>
          </Link>
        </div>

        {/* Center — logo on mobile only */}
        <Link
          href="/"
          className="md:hidden absolute left-1/2 -translate-x-1/2 flex gap-2 items-center"
        >
          <Image
            alt="logo"
            width={28}
            height={28}
            src={assets.logoLight}
            className="dark:hidden"
          />
          <Image
            alt="logo"
            width={28}
            height={28}
            src={assets.logoDark}
            className="hidden dark:block"
          />
          <p className="font-serif font-bold text-lg text-stone-900 dark:text-stone-50">
            Iyalode
          </p>
        </Link>

        {/* Center — nav on desktop */}
        <nav className="hidden md:block">
          <Navigation />
        </nav>

        {/* Right — Sign In */}
        <div className="flex gap-3 flex-row-reverse">
          <Link href='/auth/login' className="btn bg-rose-600 hover:bg-rose-700 text-white text-sm rounded-full px-4 py-1.5 transition-colors">
            Sign In
          </Link>
          <div className="max-md:hidden">
            <ThemeToggleSmall />
          </div>
        </div>
      </header>
    </div>
  );
};

const Navigation = () => {
  return (
    <menu className="flex items-center gap-1">
      {navLinks.map(({ name, href }) => (
        <li key={name} className="list-none">
          <Link
            href={href}
            className="px-3 py-1.5 text-sm text-stone-700 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800/60 rounded-lg transition-all"
          >
            {name}
          </Link>
        </li>
      ))}
    </menu>
  );
};

export default Header;
