export const rooms = [
  // --- 1 MAN ROOMS ---
  { 
    id: "1M-male",
    name: "1 Man Room - Male",
    capacity: 1,
    gender: "male",
    wing: "back",
    bathroom: "ensuite",
    price: "600000",
    customBed: true,
    images: [
      "https://images.unsplash.com/photo-1600210491305-7396500b5b31?q=80&w=774&auto=format&fit=crop",
      "https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?w=500&auto=format&fit=crop&q=60",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?w=500&auto=format&fit=crop&q=60",
    description: "Spacious private room featuring a large balcony, premium ensuite bathroom, and excellent ventilation with two windows. Includes room fan, personal lockers, waste bins, and access to a shared kitchen."
  },
  {
    id: "1M-female",
    name: "1 Man Room - Female",
    capacity: 1,
    gender: "female",
    wing: "front",
    bathroom: "ensuite",
    price: "600000",
    customBed: true,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop&q=60",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&auto=format&fit=crop&q=60",
    description: "Premium single-occupancy room located in the front wing. Offers a private balcony, high-pressure water in the ensuite bathroom, and ample storage with personal lockers."
  },

  // --- 2 MAN ROOMS ---
  {
    id: "2M-male",
    name: "2 Man Room - Male",
    capacity: 2,
    gender: "male",
    wing: "middle",
    bathroom: "ensuite - combined",
    price: "450000",
    customBed: true,
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1609949279531-cf48d64abd89?w=500&auto=format&fit=crop&q=60",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60",
    description: "Comfortable shared room for two with custom bedding. Features a combined ensuite bathroom, room fans, and dedicated locker space for each occupant."
  },
  {
    id: "2M-female",
    name: "2 Man Room - Female",
    capacity: 2,
    gender: "female",
    wing: "middle",
    bathroom: "ensuite - combined",
    price: "450000",
    customBed: true,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&auto=format&fit=crop&q=60",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&auto=format&fit=crop&q=60",
    description: "Well-ventilated middle-wing room designed for two. Includes custom beds, ensuite facilities, and easy access to the central kitchen area."
  },

  // --- 3 MAN ROOMS ---
  {
    id: "3M-male",
    name: "3 Man Room - Male",
    capacity: 3,
    gender: "male",
    wing: "middle",
    bathroom: "ensuite",
    price: "350000",
    customBed: true,
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format&fit=crop&q=60",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&auto=format&fit=crop&q=60",
    description: "Spacious triple-occupancy room with custom-built beds. Features high-quality ventilation, personal storage, and an ensuite bathroom with consistent water pressure."
  },
  {
    id: "3M-female",
    name: "3 Man Room - Female",
    capacity: 3,
    gender: "female",
    wing: "front",
    bathroom: "ensuite",
    price: "350000",
    customBed: true,
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=500&auto=format&fit=crop&q=60",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&auto=format&fit=crop&q=60",
    description: "Bright front-wing room for three. Equipped with custom beds, individual lockers, and a large ensuite bathroom."
  },

  // --- 4 MAN ROOMS ---
  {
    id: "4M-male",
    name: "4 Man Room - Male",
    capacity: 4,
    gender: "male",
    wing: "back",
    bathroom: "ensuite",
    price: "250000",
    customBed: false,
    images: [
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500&auto=format&fit=crop&q=60",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&auto=format&fit=crop&q=60",
    description: "Economical 4-man sharing option in the back wing. Includes ensuite bathroom, large windows for airflow, and shared kitchen access."
  },
  {
    id: "4M-female",
    name: "4 Man Room - Female",
    capacity: 4,
    gender: "female",
    wing: "front",
    bathroom: "ensuite",
    price: "250000",
    customBed: false,
    images: [
      "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&auto=format&fit=crop&q=60",
    description: "Shared living in the front wing for four. Features personal lockers, waste bins, and a dedicated ensuite bathroom."
  },

  // --- 5 MAN ROOMS ---
  {
    id: "5M-male",
    name: "5 Man Room - Male",
    capacity: 5,
    gender: "male",
    wing: "back",
    bathroom: "ensuite",
    price: "220000",
    customBed: false,
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=500&auto=format&fit=crop&q=60",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&auto=format&fit=crop&q=60",
    description: "Budget-friendly 5-man room in the back wing. Provides essential amenities including ensuite bathroom and individual storage units."
  },
  {
    id: "5M-female",
    name: "5 Man Room - Female",
    capacity: 5,
    gender: "female",
    wing: "front",
    bathroom: "ensuite",
    price: "220000",
    customBed: false,
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=500&auto=format&fit=crop&q=60",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&auto=format&fit=crop&q=60",
    description: "Front-wing shared room for five. Includes large bathrooms, room fans, and dual windows for optimal cross-ventilation."
  },

  // --- 6 MAN ROOMS ---
  {
    id: "6M-male",
    name: "6 Man Room - Male",
    capacity: 6,
    gender: "male",
    wing: "back",
    bathroom: "ensuite - split",
    price: "200000",
    customBed: false,
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww"
      ,
      "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zdGVsfGVufDB8fDB8fHww",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Maximum value 6-man room. Features a split ensuite bathroom for efficiency during peak hours, personal lockers, and shared kitchen access."
  },
  {
    id: "6M-female",
    name: "6 Man Room - Female",
    capacity: 6,
    gender: "female",
    wing: "front",
    bathroom: "ensuite - split",
    price: "200000",
    customBed: false,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60",
    ],
    bathroomImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&auto=format&fit=crop&q=60",
    description: "Shared 6-man dormitory in the front wing. Equipped with split ensuite facilities, waste management, and good natural lighting."
  },
];

export const roomsShortened = rooms.filter((room) => room.gender === "male");