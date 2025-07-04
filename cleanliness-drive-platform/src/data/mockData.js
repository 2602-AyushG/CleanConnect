// Mock data for the Cleanliness Drive Platform

export const mockDrives = [
  {
    id: 1,
    title: "Beach Cleanup Drive - Marina Beach",
    description: "Join us for a massive cleanup drive at Marina Beach to protect marine life and keep our coastline pristine.",
    category: "Beach",
    location: "Marina Beach, Chennai",
    date: "2024-07-15",
    time: "07:00",
    organizer: "Green Warriors NGO",
    status: "Upcoming",
    volunteers: ["John Doe", "Jane Smith", "Mike Johnson", "Sarah Wilson"],
    maxVolunteers: 50,
    distance: "2.5 km",
    poster: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=500",
    safetyInstructions: "Bring gloves, wear closed shoes, carry water bottle",
    contactInfo: "contact@greenwarriors.org | +91-9876543210",
    sponsors: ["EcoClean Inc.", "Ocean Savers Foundation"]
  },
  {
    id: 2,
    title: "Central Park Restoration",
    description: "Help restore Central Park by removing litter and planting new saplings.",
    category: "Park",
    location: "Central Park, Mumbai",
    date: "2024-07-20",
    time: "08:30",
    organizer: "City Green Initiative",
    status: "Upcoming",
    volunteers: ["Alex Brown", "Lisa Chen", "David Miller"],
    maxVolunteers: 30,
    distance: "1.2 km",
    poster: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
    safetyInstructions: "Wear gardening gloves, bring sun protection",
    contactInfo: "info@citygreen.org | +91-8765432109",
    sponsors: ["Green Earth Corp"]
  },
  {
    id: 3,
    title: "Highway Cleanup Campaign",
    description: "Road safety focused cleanup drive along the National Highway 1.",
    category: "Roadside",
    location: "NH-1, Delhi-Chandigarh Highway",
    date: "2024-07-25",
    time: "06:00",
    organizer: "Road Safety Alliance",
    status: "Completed",
    volunteers: ["Tom Wilson", "Emma Davis", "Chris Lee", "Anna Taylor", "Mark Johnson"],
    maxVolunteers: 40,
    distance: "5.8 km",
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    safetyInstructions: "High-visibility vests mandatory, stay away from traffic",
    contactInfo: "safety@roadalliance.org | +91-7654321098",
    sponsors: ["Highway Authority", "SafeRoads Foundation"]
  },
  {
    id: 4,
    title: "Lake Revival Initiative",
    description: "Comprehensive cleanup and restoration of the historic Ulsoor Lake to revive its natural ecosystem.",
    category: "Lake",
    location: "Ulsoor Lake, Bangalore",
    date: "2024-08-02",
    time: "07:30",
    organizer: "Water Conservation Society",
    status: "Upcoming",
    volunteers: ["Ravi Kumar", "Priya Nair", "Suresh Reddy"],
    maxVolunteers: 60,
    distance: "3.2 km",
    poster: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500",
    safetyInstructions: "Life jackets provided, no swimming allowed, bring water shoes",
    contactInfo: "info@waterconservation.org | +91-9123456789",
    sponsors: ["Bangalore Water Board", "Lake Revival Foundation"]
  },
  {
    id: 5,
    title: "Metro Station Clean-Up Drive",
    description: "Keep our metro stations clean and hygienic for daily commuters. Focus on platforms and surrounding areas.",
    category: "Metro",
    location: "Rajiv Chowk Metro Station, Delhi",
    date: "2024-08-05",
    time: "09:00",
    organizer: "Delhi Metro Youth Alliance",
    status: "Upcoming",
    volunteers: ["Akash Sharma", "Neha Agarwal", "Rohit Singh", "Kavya Jain"],
    maxVolunteers: 25,
    distance: "0.8 km",
    poster: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500",
    safetyInstructions: "Follow metro safety protocols, wear masks, sanitize frequently",
    contactInfo: "youth@delhimetro.org | +91-8987654321",
    sponsors: ["Delhi Metro Rail Corporation", "Clean Delhi Mission"]
  },
  {
    id: 6,
    title: "Riverside Plantation Drive",
    description: "Beautify the Yamuna riverbank with native plant species while removing accumulated waste and debris.",
    category: "Riverside",
    location: "Yamuna Riverbank, Agra",
    date: "2024-07-30",
    time: "06:30",
    organizer: "Yamuna Restoration Project",
    status: "Completed",
    volunteers: ["Meera Gupta", "Arnav Joshi", "Fatima Khan", "Vicky Tiwari", "Shruti Malhotra", "Karan Vyas"],
    maxVolunteers: 45,
    distance: "4.1 km",
    poster: "https://images.unsplash.com/photo-1574263867128-ab5b0b3bb6bd?w=500",
    safetyInstructions: "Wear waterproof boots, bring gardening tools, sun protection essential",
    contactInfo: "yamuna@restoration.org | +91-7456123890",
    sponsors: ["Agra Development Authority", "River Care Foundation", "Green Agra Initiative"]
  }
];

export const leaderboardData = [
  { rank: 1, name: "Priya Sharma", city: "Mumbai", points: 2850 },
  { rank: 2, name: "Rahul Singh", city: "Delhi", points: 2640 },
  { rank: 3, name: "Anjali Gupta", city: "Bangalore", points: 2420 },
  { rank: 4, name: "Vikram Patel", city: "Chennai", points: 2180 },
  { rank: 5, name: "Sneha Reddy", city: "Hyderabad", points: 1950 },
  { rank: 6, name: "Arjun Kumar", city: "Pune", points: 1820 },
  { rank: 7, name: "Kavitha Nair", city: "Kochi", points: 1690 },
  { rank: 8, name: "Manish Joshi", city: "Jaipur", points: 1540 },
  { rank: 9, name: "Deepika Roy", city: "Kolkata", points: 1420 },
  { rank: 10, name: "Rohan Mehta", city: "Ahmedabad", points: 1350 }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Environmental Activist",
    content: "CleanDrive has revolutionized how we organize community cleanup efforts. The platform makes it so easy to coordinate with volunteers and track our impact.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c7?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    role: "Marine Biologist",
    content: "Thanks to CleanDrive, we've been able to organize 15 beach cleanups this year. The platform's efficiency in volunteer management is outstanding.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Maya Patel",
    role: "NGO Director",
    content: "The leaderboard feature motivates our volunteers to participate more actively. We've seen a 300% increase in engagement since using CleanDrive.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export const partnerLogos = [
  { name: "Green Earth Foundation", logo: "🌍" },
  { name: "EcoWarriors", logo: "🌱" },
  { name: "Ocean Cleanup", logo: "🌊" },
  { name: "City Green Initiative", logo: "🏙️" },
  { name: "Clean India Mission", logo: "🇮🇳" },
  { name: "Environment Protection Society", logo: "🛡️" }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    caption: "Beach cleanup volunteers in action"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1558618666-fbd565c3cd37?w=800",
    caption: "Park restoration project"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1611436419295-7c3b2f4b21f4?w=800",
    caption: "Community coming together"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800",
    caption: "Roadside cleanup initiative"
  }
];

export const userProfile = {
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  city: "Mumbai",
  profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  level: "Eco Champion",
  points: 1850,
  drivesJoined: 12,
  drivesOrganized: 3,
  achievements: [
    { name: "First Cleanup", icon: "🏆", description: "Completed your first cleanup drive" },
    { name: "Team Player", icon: "👥", description: "Joined 10 community drives" },
    { name: "Organizer", icon: "📋", description: "Successfully organized a drive" },
    { name: "Beach Protector", icon: "🏖️", description: "Participated in 5 beach cleanups" }
  ],
  coupons: [
    { name: "Eco Store 20% Off", code: "ECO20", expiry: "2024-08-15" },
    { name: "Plant Nursery 15% Off", code: "PLANT15", expiry: "2024-09-01" }
  ]
}; 
