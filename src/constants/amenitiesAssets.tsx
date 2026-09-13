import { 
  Tv, 
  BookOpen, 
  Bed, 
  ShieldCheck, 
  Lock, 
  Lightbulb, 
  MapPin, 
  Zap, 
  Users, 
  UserCheck 
} from 'lucide-react';

import { Amenity } from './interfaces';

export const amenities: Amenity[] = [
  {
    title: "TV Room",
    Icon: Tv,
    description: "You can now watch premier league football on the weekends at the common room"
  },
  {
    title: "Study Room",
    Icon: BookOpen,
    description: "Dedicated quiet reading rooms on every floor with comfortable desks"
  },
  {
    title: "Bathrooms Ensuite",
    Icon: Bed,
    description: "Each room, even the 6 man room is provided with a private bathroom and toilet"
  },
  {
    title: "Safe And Secure",
    Icon: ShieldCheck,
    description: "24/7 CCTV surveillance and gated access for complete peace of mind"
  },
  {
    title: "Lockable Cupboards",
    Icon: Lock,
    description: "Personal lockable cupboards in every room to keep your valuables safe"
  },
  {
    title: "LED Lighting",
    Icon: Lightbulb,
    description: "Bright, energy-efficient LED lights in all rooms and common areas"
  },
  {
    title: "Prime Location",
    Icon: MapPin,
    description: "Just steps from the road and University of Ibadan gate – no long walks needed"
  },
  {
    title: "Backup Power",
    Icon: Zap,
    description: "Generator backup every night"
  },
  {
    title: "Roommate Matching",
    Icon: Users,
    description: "Smart matching system to pair you with compatible fellow students"
  },
  {
    title: "Professional On-Site Management",
    Icon: UserCheck,
    description: "Friendly 24/7 on-site team ready to assist with anything you need"
  },
];