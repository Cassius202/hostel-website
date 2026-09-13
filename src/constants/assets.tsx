import { Home, BedDouble, Info, Sparkles, BookOpen } from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Rooms", href: "/rooms", icon: BedDouble },
  { name: "About", href: "/about", icon: Info },
  { name: "Amenities", href: "/amenities", icon: Sparkles },
  { name: "Blog", href: "/blog", icon: BookOpen },
];

//image assets

import logoDark from '../../public/logo-darker.svg'
import logoLight from '../../public/logo-light@4x-8.png'
import logoFull from '../../public/logo-light@4x-8.png'
import heroImage from '../../public/images/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg'
import botImage from '../../public/images/conceirge.png'
import hostelImage from '../../public/images/hostel-image.jpg'

const backgroundImage = 'https://images.unsplash.com/photo-1482784160316-6eb046863ece?w=400&auto=format&fit=crop' 

export const assets = {
  logoDark, logoLight, logoFull, heroImage, hostelImage, botImage, backgroundImage
}

export const information = {
  name: "Iyalode Taofikat Hub",
  address: "University of Ibadan"
}

export const videoHero = "https://qgpnibdjfvcelecddhas.supabase.co/storage/v1/object/public/assets/hero-video.mp4"

export const balconyImage = 'https://images.unsplash.com/photo-1619082791183-1888233d6569?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D';
export const bathroomImage = "https://images.unsplash.com/photo-1627565685654-f746be384c48?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob3dlcnxlbnwwfHwwfHx8MA%3D%3D"


const info = `The Iyalode Taofikat Hub is a new multi-million naira private hostel commissioned in July 2024 at the University of Ibadan (UI). Owned by Alhaja Taofikat Ajibola, CEO of Palms 77 Hotel, this facility features a 202-bed capacity to boost student accommodation options.

Key Details About Iyalode Taofikat Hub





Location: University of Ibadan (UI), Oyo State, Nigeria.



Capacity: 202 beds.



owner: Alhaja Taofikat Afolabi Ajibola (CEO, Palms 77 Hotel).



Status: Commissioned and opened as of July 2024.



Type: Private student accommodation.

`

export const servicesData = [
  {
    id: "01",
    title: "Prime Location",
    description:
      "4 minutes from Faculty of Technology, 8 minutes from Faculty of Science. No transport costs, no stress — just walk out and you're there.",
    image: hostelImage.src,
    isOffset: false,
  },
  {
    id: "02",
    title: "Inbuilt Bakery & Restaurant",
    description:
      "Wake up to fresh bread every morning. Our on-site bakery and restaurant serve hot meals daily — no need to leave the compound for a good meal.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    isOffset: true,
  },
  {
    id: "03",
    title: "Supermart On-Site",
    description:
      "Forget trekking to the market. Our inbuilt mart stocks everything from groceries to toiletries — available right within the hostel premises.",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&auto=format&fit=crop",
    isOffset: false,
  },
  {
    id: "04",
    title: "Hair Salon & Grooming",
    description:
      "Look your best without stepping out. Our professional hair salon caters to all styles — available to all residents at affordable rates.",
    image:
      "https://i.pinimg.com/1200x/d5/8f/1e/d58f1ee082e214b86e39d7008440d5bf.jpg",
    isOffset: true,
  },
  {
    id: "05",
    title: "Secure & Private",
    description:
      "24/7 security, gender-separated wings, and gated access ensure every resident feels safe, respected, and at home.",
    image:
      "https://i.pinimg.com/736x/47/e8/f8/47e8f834924645f32d8b11fdbe2a46cc.jpg",
    isOffset: false,
  },
  {
    id: "06",
    title: "Premium Room Comfort",
    description:
      "Custom beds, ensuite bathrooms, and well-ventilated rooms across all six room types. Designed for students who refuse to settle for less.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
    isOffset: true,
  },
];

export const reviews = [
  {
    name: "Prosper Emoruwa",
    image: "https://i.pinimg.com/1200x/bb/6a/ef/bb6aef8c1bd48cd8b3b41725eaba18e3.jpg", 
    review: "It's a new private hostel with conducive environment. It's beautifully furnished in and out. There are Reading rooms on every floor. … More"
  },
  {
    name: "Precious Udie",
    image: "https://i.pinimg.com/1200x/b8/02/2a/b8022a094cb86ecba2a9fc8ea9cbf4a2.jpg", 
    review: "This is one of the most recent private hostel in University of Ibadan, it has good views from the rooms and close the road unlike other private hostels in the university. It has furnished bedrooms for single man, 2 man, 3 man, 4 man, 5 man and 6 man rooms. There is a kitchen, reading room and cafeteria, the ambiance is giving...👍🏾 …"
  },
  {
    name: "Josiah Idowu",
    image: "https://i.pinimg.com/736x/0c/1c/05/0c1c0567e6e4f11105757657919f079f.jpg", 
    review: "I was delighted. It is my first time seeing rooms with such large balconies throughout my stay in UI"
  }
];

