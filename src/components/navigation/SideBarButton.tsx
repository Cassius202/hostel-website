'use client';

import { useSidebarStore } from "@/store/useSidebarStore";
import { Menu } from "lucide-react";
const SideBarButton = () => {
  const {open} = useSidebarStore();
  return (
    <button className="btn md:hidden p-1.5 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors group relative"
    onClick={open}
    >
      <Menu size={24} />
      <span className="tooltip">
        Open Menu
      </span>
    </button>
  );
};

export default SideBarButton;
