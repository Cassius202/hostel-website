import { LucideIcon } from "lucide-react";

export interface Amenity {
  title: string;
  Icon: LucideIcon;           // Properly typed Lucide icon component
  description: string;
}

export interface Rooms {
    id: string;
    description: string;
    name: string;
    capacity: number;
    gender: string;
    wing: string;
    bathroom: string;
    price: string;
    customBed: boolean;
    images: string[];
    bathroomImage: string;
}[]

export interface LinkType {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface NextOfKin {
  name: string;
  phone: string;
  location: string;
  relationship: string;
}

export interface TenantUser {
  name: string;
  preferredName: string;
  email: string;
  phone: string;
  matricNumber: string;
  level: string;
  department: string;
  undergraduate: boolean;
  gender: "male" | "female";
  stateOfOrigin: string;
  image: string;
  roomNumber: string;
  block: string;
  roomType: "6 man" | "5 man" | "4 man" | "3 man" | "2 man" | "1 man";
  checkInDate: string;
  dueDate: string;
  paymentStatus: "paid" | "owing" | "partial";
  amountOwing: number;
  nextOfKin: NextOfKin;
}