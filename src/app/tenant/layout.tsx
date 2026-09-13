'use client'

import Loader from "@/components/loader/TenantLoader";
import SideBar from "./(components)/SideBar";
import { useEffect } from "react";

const TenantLayout = ({ children }: { children: React.ReactNode }) => {
   useEffect(() => {
    const saved = localStorage.getItem('tenant-theme') ?? 'light'
    const root = document.getElementById('tenant-root')
    if (!root) return
    root.classList.remove('slate', 'dark')
    if (saved === 'slate') root.classList.add('slate')
    if (saved === 'dark') root.classList.add('dark')
  }, [])
  return (
    <div id='tenant-root'className="">
      <Loader>
        <div className="flex h-screen bg-[--background] text-[--foreground]">
          <SideBar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </Loader>
    </div>
  );
};

export default TenantLayout