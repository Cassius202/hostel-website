import {
  LayoutDashboard,
  CreditCard,
  Settings,
  UserRound,
  ShieldCheck,
} from "lucide-react";
import { LinkType, TenantUser } from "./interfaces";

export const dashboardLinks: LinkType[] = [
  {
    name: "Dashboard",
    href: "/tenant",
    icon: LayoutDashboard,
  },
  {
    name: "Payments",
    href: "/tenant/payments",
    icon: CreditCard,
  },
  {
    name: "Profile",
    href: "/tenant/profile",
    icon: UserRound,
  },
  {
    name: "Settings",
    href: "/tenant/settings",
    icon: Settings,
  },
  {
    name: "Exco",
    href: "/tenant/exco",
    icon: ShieldCheck,
  },
];

export const backgroundImage = "https://qgpnibdjfvcelecddhas.supabase.co/storage/v1/object/public/assets/background-image.png"

export const mockUser : TenantUser = {
  name: "Cassius Samuel",
  preferredName: "Cassius",
  email: "cassiusejekwu@hotmail.com",
  phone: "09161152071",
  matricNumber: "245966",
  level: "400",
  department: "Mechanical Engineering",
  undergraduate: true,
  gender: "male",
  stateOfOrigin: "Enugu",
  image: "https://images.unsplash.com/photo-1629740936456-4b990c27e503?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  roomNumber: "16",
  block: "A",
  roomType: "6 man",
  checkInDate: "1st September, 2025",
  dueDate: "17th December, 2026",
  paymentStatus: "paid" as "paid" | "owing" | "partial",
  amountOwing: 0,
  nextOfKin: {
    name: "John Samuel",
    phone: "09007573732",
    location: "Ikpala express way, Lagos, Nigeria",
    relationship: "Father",
  },
}