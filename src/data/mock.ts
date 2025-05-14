import { Property, User, BlogPost, Booking, Verification, Transaction, SupportTicket, Notification, RoommatePreference, Chat, Message } from '../types';
import { getRandomPropertyImage } from '../lib/utils';
import { images } from "../assets";

// Mock Users
export const users: User[] = [
  {
    id: "user-1",
    name: "Ali Hassan",
    email: "ali.hassan@example.com",
    role: "tenant",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    phone: "+92 300 1234567",
    verified: true,
    loyaltyPoints: 150,
    joinedAt: "2023-01-15T10:30:00Z",
  },
  {
    id: "user-2",
    name: "Saad Khan",
    email: "saad.khan@example.com",
    role: "landlord",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    phone: "+92 321 1234567",
    verified: true,
    loyaltyPoints: 430,
    joinedAt: "2022-11-05T14:20:00Z",
  },
  {
    id: "user-3",
    name: "Muhammad Ahmed",
    email: "muhammad.ahmed@example.com",
    role: "admin",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    phone: "+92 333 1234567",
    verified: true,
    loyaltyPoints: 0,
    joinedAt: "2022-08-12T09:15:00Z",
  },
  {
    id: "user-4",
    name: "Asad Malik",
    email: "asad.malik@example.com",
    role: "tenant",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    phone: "+92 345 1234567",
    verified: false,
    loyaltyPoints: 75,
    joinedAt: "2023-03-20T11:40:00Z",
  },
  {
    id: "user-5",
    name: "Usman Ali",
    email: "usman.ali@example.com",
    role: "landlord",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    phone: "+92 312 1234567",
    verified: true,
    loyaltyPoints: 280,
    joinedAt: "2022-09-30T16:05:00Z",
  },
];
// Mock Properties
export const properties: Property[] = [
  {
    id: "property-1",
    title: "Rana Boys Hostel",
    description:
      "Modern hostel with all facilities for students. Features spacious rooms, high-speed internet, and dedicated study areas.",
    price: 25000,
    location: {
      city: "Lahore",
      area: "PIA Society",
      address: "56 PIA Society, Block B",
      coordinates: { lat: 31.5204, lng: 74.3587 },
    },
    images: [images.rana2, images.rana1, images.rana3, images.rana4],
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Study Area",
      "Security Guards",
      "Backup Power",
    ],
    type: "hostel",
    featuredUntil: new Date("2026-04-01").toISOString(),
    size: 800,
    bedrooms: 4,
    bathrooms: 2,
    verified: true,
    landlordId: "user-2",
    landlord: users.find((u) => u.id === "user-2")!,
    nearbyUniversities: ["Punjab University", "FAST NUCES"],
    availableFrom: new Date("2024-04-01").toISOString(),
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "property-2",
    title: "Luxury Apartment in DHA",
    description:
      "Elegant apartment with modern amenities, perfect for professionals or small families. Features a spacious balcony with city views.",
    price: 85000,
    location: {
      city: "Lahore",
      area: "DHA",
      address: "45-D, Phase 6, DHA",
      coordinates: { lat: 31.4798, lng: 74.4023 },
    },
    images: [
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
      "https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/1643386/pexels-photo-1643386.jpeg",
    ],
    amenities: [
      "Fully Furnished",
      "Air Conditioning",
      "Kitchen",
      "Parking",
      "Security Guards",
    ],
    type: "apartment",
    size: 1200,
    bedrooms: 3,
    bathrooms: 2,
    verified: true,
    featuredUntil: new Date("2026-12-31").toISOString(),
    landlordId: "user-5",
    landlord: users.find((u) => u.id === "user-5")!,
    nearbyUniversities: ["LUMS", "DHA University"],
    availableFrom: new Date("2024-04-15").toISOString(),
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "property-3",
    title: "Student Studio in Gulberg",
    description:
      "Cozy studio apartment ideal for students or young professionals. Located in the heart of Gulberg with easy access to universities.",
    price: 35000,
    location: {
      city: "Lahore",
      area: "Gulberg",
      address: "77-B, Gulberg III",
      coordinates: { lat: 31.5104, lng: 74.3487 },
    },
    images: [
      "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg",
      "https://images.pexels.com/photos/1669800/pexels-photo-1669800.jpeg",
      "https://images.pexels.com/photos/1669798/pexels-photo-1669798.jpeg",
      "https://images.pexels.com/photos/1669797/pexels-photo-1669797.jpeg",
    ],
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Fully Furnished",
      "Security Guards",
    ],
    type: "apartment",
    size: 500,
    bedrooms: 1,
    bathrooms: 1,
    verified: true,
    featuredUntil: new Date("2026-04-01").toISOString(),
    landlordId: "user-2",
    landlord: users.find((u) => u.id === "user-2")!,
    nearbyUniversities: ["FAST NUCES", "Punjab University"],
    availableFrom: new Date("2024-04-01").toISOString(),
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "property-4",
    title: "Shared Room in Model Town",
    description:
      "Comfortable shared room in a well-maintained house. Perfect for students looking for affordable accommodation.",
    price: 15000,
    location: {
      city: "Lahore",
      area: "Model Town",
      address: "234 Model Town, Block C",
      coordinates: { lat: 31.4804, lng: 74.3287 },
    },
    images: [
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg",
      "https://images.pexels.com/photos/1454807/pexels-photo-1454807.jpeg",
      "https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg",
      "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
    ],
    amenities: ["WiFi", "Kitchen", "Washing Machine", "Study Area"],
    type: "room",
    size: 200,
    bedrooms: 1,
    bathrooms: 1,
    verified: true,
    featuredUntil: new Date("2026-04-01").toISOString(),
    landlordId: "user-5",
    landlord: users.find((u) => u.id === "user-5")!,
    nearbyUniversities: ["Punjab University"],
    availableFrom: new Date("2024-04-01").toISOString(),
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "property-5",
    title: "Al-Hamad Boys Hostel",
    description:
      "Well-maintained hostel with dedicated staff. Offers comfortable rooms and a study-friendly environment.",
    price: 20000,
    location: {
      city: "Lahore",
      area: "Thokar Niaz Baig",
      address: "Near Orange Line Station",
      coordinates: { lat: 31.4704, lng: 74.4187 },
    },
    images: [images.alhamd1, images.alhamd2, images.alhamd3, images.alhamd4],
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Study Area",
      "Security Guards",
      "Backup Power",
    ],
    type: "hostel",
    size: 1000,
    bedrooms: 6,
    bathrooms: 3,
    featuredUntil: new Date("2026-04-01").toISOString(),
    verified: true,
    landlordId: "user-2",
    landlord: users.find((u) => u.id === "user-2")!,
    nearbyUniversities: ["FAST NUCES", "UET Lahore"],
    availableFrom: new Date("2024-04-01").toISOString(),
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "property-6",
    title: "Executive Apartment G1-Market",
    description:
      "Premium apartment in a prime location. Features high-end finishes and modern amenities.",
    price: 95000,
    location: {
      city: "Lahore",
      area: "G1-Market",
      address: "12-A G1 Market",
      coordinates: { lat: 31.5004, lng: 74.3387 },
    },
    images: [
      "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
      "https://images.pexels.com/photos/2462016/pexels-photo-2462016.jpeg",
      "https://images.pexels.com/photos/2462014/pexels-photo-2462014.jpeg",
      "https://images.pexels.com/photos/2462013/pexels-photo-2462013.jpeg",
    ],
    amenities: [
      "Fully Furnished",
      "Air Conditioning",
      "Kitchen",
      "Parking",
      "Security Guards",
      "Backup Power",
    ],
    type: "apartment",
    size: 1500,
    bedrooms: 3,
    bathrooms: 2,
    verified: true,
    featuredUntil: new Date("2026-12-31").toISOString(),
    landlordId: "user-5",
    landlord: users.find((u) => u.id === "user-5")!,
    nearbyUniversities: ["LUMS", "UET Lahore"],
    availableFrom: new Date("2024-05-01").toISOString(),
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "property-7",
    title: "Budget Friendly House",
    description:
      "Affordable family house in a peaceful neighborhood. Close to public transport and markets.",
    price: 45000,
    location: {
      city: "Lahore",
      area: "Thokar Niaz Baig",
      address: "89 Main Road, Thokar Niaz Baig",
      coordinates: { lat: 31.4604, lng: 74.3987 },
    },
    images: [
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
      "https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg",
      "https://images.pexels.com/photos/2121122/pexels-photo-2121122.jpeg",
      "https://images.pexels.com/photos/2121123/pexels-photo-2121123.jpeg",
    ],
    amenities: ["Kitchen", "Parking", "Water Filter", "Backup Power"],
    type: "house",
    size: 1800,
    bedrooms: 4,
    bathrooms: 2,
    verified: true,
    landlordId: "user-2",
    featuredUntil: new Date("2026-04-01").toISOString(),
    landlord: users.find((u) => u.id === "user-2")!,
    nearbyUniversities: ["UET Lahore"],
    availableFrom: new Date("2024-04-15").toISOString(),
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "property-8",
    title: "Modern Student Apartment",
    description:
      "Contemporary apartment designed for students. Features study areas and high-speed internet.",
    price: 55000,
    location: {
      city: "Lahore",
      area: "University Road",
      address: "45 University Road",
      coordinates: { lat: 31.5104, lng: 74.3487 },
    },
    images: [
      "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
      "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg",
      "https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg",
    ],
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Study Area",
      "Security Guards",
      "Fully Furnished",
    ],
    type: "apartment",
    size: 900,
    bedrooms: 2,
    bathrooms: 1,
    verified: true,
    featuredUntil: new Date("2026-12-31").toISOString(),
    landlordId: "user-5",
    landlord: users.find((u) => u.id === "user-5")!,
    nearbyUniversities: ["Punjab University", "FAST NUCES"],
    availableFrom: new Date("2024-05-01").toISOString(),
    createdAt: "",
    updatedAt: "",
  },
];

// Mock Bookings
export const bookings: Booking[] = Array.from({ length: 8 }, (_, i) => ({
  id: `booking-${i + 1}`,
  propertyId: properties[i % properties.length].id,
  property: properties[i % properties.length],
  tenantId: ["user-1", "user-4"][i % 2],
  tenant: users.find((u) => u.id === (i % 2 === 0 ? "user-1" : "user-4"))!,
  startDate: new Date(Date.now() + i * 30 * 24 * 60 * 60 * 1000).toISOString(),
  endDate: new Date(
    Date.now() + (i + 6) * 30 * 24 * 60 * 60 * 1000
  ).toISOString(),
  status: ["pending", "confirmed", "cancelled", "completed"][
    Math.floor(Math.random() * 4)
  ] as any,
  paymentStatus: ["pending", "paid", "failed", "refunded"][
    Math.floor(Math.random() * 4)
  ] as any,
  totalAmount: Math.floor(Math.random() * 300000) + 50000,
  createdAt: new Date(
    Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000
  ).toISOString(),
}));

// Mock Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "How to Find the Perfect Student Accommodation",
    excerpt:
      "Discover the key factors to consider when looking for student housing near universities.",
    content:
      "Finding the right accommodation is crucial for a successful academic year. This comprehensive guide will walk you through everything you need to know...",
    image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg",
    category: "Student Living",
    author: "Saad Khan",
    publishedAt: "2023-05-15T09:30:00Z",
    readTime: 8,
  },
  {
    id: "blog-2",
    title: "Understanding Rental Agreements in Pakistan",
    excerpt:
      "Learn about the legal aspects of rental agreements and protect yourself from potential issues.",
    content:
      "Rental agreements can be complex, but understanding the key components is essential. In this article, we break down the legal jargon...",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    category: "Legal",
    author: "Muhammad Ahmed",
    publishedAt: "2023-06-20T11:45:00Z",
    readTime: 12,
  },
  {
    id: "blog-3",
    title: "The Benefits of NADRA Verification for Landlords",
    excerpt:
      "Discover why verifying tenants through NADRA can save you from future troubles.",
    content:
      "Security concerns are paramount for property owners. NADRA verification provides an extra layer of security by confirming the identity...",
    image: "https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg",
    category: "Security",
    author: "Ali Hassan",
    publishedAt: "2023-07-05T14:20:00Z",
    readTime: 6,
  },
  {
    id: "blog-4",
    title: "10 Ways to Save on Rent in Major Pakistani Cities",
    excerpt:
      "Smart strategies to reduce your rental expenses without compromising on quality.",
    content:
      "Living in major cities like Karachi or Lahore can be expensive, but there are many ways to reduce your rental costs. From negotiating with landlords to...",
    image: "https://images.pexels.com/photos/6507967/pexels-photo-6507967.jpeg",
    category: "Finance",
    author: "Asad Malik",
    publishedAt: "2023-08-10T10:15:00Z",
    readTime: 10,
  },
  {
    id: "blog-5",
    title: "How to Be a Good Roommate: Essential Tips",
    excerpt:
      "Practical advice for harmonious living with roommates in shared accommodations.",
    content:
      "Living with roommates can be a wonderful experience, but it also comes with challenges. Communication is key to resolving most issues before they become problems...",
    image: "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg",
    category: "Lifestyle",
    author: "Usman Ali",
    publishedAt: "2023-09-25T08:40:00Z",
    readTime: 7,
  },
];

// Mock Verifications
export const verifications: Verification[] = [
  {
    id: 'verification-1',
    userId: 'user-1',
    type: 'NADRA',
    documentNumber: '61101-1234567-8',
    status: 'verified',
    submittedAt: '2023-02-10T13:45:00Z',
    verifiedAt: '2023-02-15T09:20:00Z',
  },
  {
    id: 'verification-2',
    userId: 'user-2',
    type: 'Police',
    documentNumber: 'PV-2023-7654321',
    status: 'verified',
    submittedAt: '2023-01-20T11:30:00Z',
    verifiedAt: '2023-01-28T14:50:00Z',
  },
  {
    id: 'verification-3',
    userId: 'user-4',
    type: 'NADRA',
    documentNumber: '42201-7654321-0',
    status: 'pending',
    submittedAt: '2023-03-25T10:15:00Z',
  },
  {
    id: 'verification-4',
    userId: 'user-5',
    type: 'Police',
    documentNumber: 'PV-2023-1234567',
    status: 'verified',
    submittedAt: '2022-12-05T09:10:00Z',
    verifiedAt: '2022-12-12T16:40:00Z',
  }
];

// Mock Transactions
export const transactions: Transaction[] = Array.from({ length: 10 }, (_, i) => ({
  id: `transaction-${i + 1}`,
  userId: ['user-1', 'user-2', 'user-4', 'user-5'][Math.floor(Math.random() * 4)],
  amount: Math.floor(Math.random() * 50000) + 10000,
  type: ['payment', 'refund', 'deposit', 'withdrawal'][Math.floor(Math.random() * 4)] as any,
  method: ['credit-card', 'jazzcash', 'easypaisa', 'bank-transfer'][Math.floor(Math.random() * 4)] as any,
  status: ['pending', 'completed', 'failed'][Math.floor(Math.random() * 3)] as any,
  bookingId: Math.random() > 0.3 ? `booking-${Math.floor(Math.random() * 8) + 1}` : undefined,
  description: [
    'Monthly rent payment',
    'Security deposit',
    'Booking fee',
    'Refund for cancelled booking',
    'Deposit for verification',
    'Withdrawal to bank account',
  ][Math.floor(Math.random() * 6)],
  createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
}));

// Mock Support Tickets
export const supportTickets: SupportTicket[] = [
  {
    id: 'ticket-1',
    userId: 'user-1',
    subject: 'Property not as described',
    description: 'The apartment I booked doesn\'t have the amenities that were listed in the description. I was expecting Wi-Fi and a washing machine, but neither is available.',
    status: 'in-progress',
    priority: 'high',
    createdAt: '2023-04-10T14:30:00Z',
    updatedAt: '2023-04-12T11:20:00Z',
  },
  {
    id: 'ticket-2',
    userId: 'user-2',
    subject: 'Payment not received',
    description: 'I haven\'t received the payment for booking #booking-3 which was marked as completed three days ago.',
    status: 'open',
    priority: 'high',
    createdAt: '2023-05-05T09:15:00Z',
    updatedAt: '2023-05-05T09:15:00Z',
  },
  {
    id: 'ticket-3',
    userId: 'user-4',
    subject: 'Issues with verification process',
    description: 'I submitted my NADRA documents two weeks ago but my verification status is still showing as pending. Can you please check?',
    status: 'resolved',
    priority: 'medium',
    createdAt: '2023-03-28T16:40:00Z',
    updatedAt: '2023-04-02T13:50:00Z',
  },
  {
    id: 'ticket-4',
    userId: 'user-5',
    subject: 'How to promote my property?',
    description: 'I want to make my property featured on the homepage. What are the options and pricing for this service?',
    status: 'closed',
    priority: 'low',
    createdAt: '2023-02-15T10:30:00Z',
    updatedAt: '2023-02-16T15:20:00Z',
  },
];

// Mock Notifications
export const notifications: Notification[] = [
  {
    id: 'notification-1',
    userId: 'user-1',
    title: 'New Booking Confirmed',
    message: 'Your booking for "Modern Apartment near University" has been confirmed. You can check the details in your dashboard.',
    read: false,
    type: 'booking',
    link: '/tenant-dashboard/bookings',
    createdAt: '2023-05-12T14:30:00Z',
  },
  {
    id: 'notification-2',
    userId: 'user-2',
    title: 'New Message Received',
    message: 'You have a new message from Ali Hassan regarding "Spacious House with Garden".',
    read: true,
    type: 'message',
    link: '/landlord-dashboard/messages',
    createdAt: '2023-05-10T09:45:00Z',
  },
  {
    id: 'notification-3',
    userId: 'user-4',
    title: 'Verification Status Update',
    message: 'Your NADRA verification is still pending. We\'ll notify you once it\'s completed.',
    read: false,
    type: 'verification',
    link: '/tenant-dashboard/verification',
    createdAt: '2023-04-28T16:20:00Z',
  },
  {
    id: 'notification-4',
    userId: 'user-5',
    title: 'Payment Received',
    message: 'You have received a payment of PKR 45,000 for booking #booking-5.',
    read: false,
    type: 'payment',
    link: '/landlord-dashboard/payments',
    createdAt: '2023-05-05T11:10:00Z',
  },
  {
    id: 'notification-5',
    userId: 'user-1',
    title: 'Special Offer',
    message: 'Limited time offer: Get 10% off on your next booking using code HOMIEEZ10.',
    read: true,
    type: 'system',
    createdAt: '2023-05-01T10:00:00Z',
  },
];

// Mock Roommate Preferences
export const roommatePreferences: RoommatePreference[] = [
  {
    id: 'pref-1',
    userId: 'user-1',
    smoking: false,
    pets: true,
    drinking: false,
    foodPreference: 'non-vegetarian',
    studyHabits: 'night',
    cleanliness: 'very-clean',
    socialHabits: 'moderate',
    sleepHabits: 'night-owl',
  },
  {
    id: 'pref-2',
    userId: 'user-4',
    smoking: false,
    pets: false,
    drinking: false,
    foodPreference: 'vegetarian',
    studyHabits: 'morning',
    cleanliness: 'clean',
    socialHabits: 'social',
    sleepHabits: 'early-riser',
  }
];

// Mock Chats
export const chats: Chat[] = [
  {
    id: 'chat-1',
    participants: ['user-1', 'user-2'],
    lastMessage: {
      senderId: 'user-1',
      content: 'Is the property still available for the dates I requested?',
      timestamp: '2023-05-11T15:30:00Z',
    },
    unreadCount: 0,
  },
  {
    id: 'chat-2',
    participants: ['user-1', 'user-5'],
    lastMessage: {
      senderId: 'user-5',
      content: 'Yes, you can bring one pet as long as it\'s well-behaved.',
      timestamp: '2023-05-12T10:45:00Z',
    },
    unreadCount: 1,
  },
  {
    id: 'chat-3',
    participants: ['user-4', 'user-2'],
    lastMessage: {
      senderId: 'user-4',
      content: 'Thank you for providing all the details. I\'d like to proceed with the booking.',
      timestamp: '2023-05-10T14:20:00Z',
    },
    unreadCount: 0,
  },
];

// Mock Messages
export const messages: Message[] = [
  {
    id: 'message-1',
    chatId: 'chat-1',
    senderId: 'user-1',
    content: 'Hello, I\'m interested in your property "Modern Apartment near University". Is it still available?',
    timestamp: '2023-05-11T14:30:00Z',
    read: true,
  },
  {
    id: 'message-2',
    chatId: 'chat-1',
    senderId: 'user-2',
    content: 'Yes, it\'s still available. When would you like to move in?',
    timestamp: '2023-05-11T14:45:00Z',
    read: true,
  },
  {
    id: 'message-3',
    chatId: 'chat-1',
    senderId: 'user-1',
    content: 'I\'m looking to move in next month, around the 15th. Is that possible?',
    timestamp: '2023-05-11T15:00:00Z',
    read: true,
  },
  {
    id: 'message-4',
    chatId: 'chat-1',
    senderId: 'user-2',
    content: 'That should work. Would you like to schedule a viewing before making a decision?',
    timestamp: '2023-05-11T15:15:00Z',
    read: true,
  },
  {
    id: 'message-5',
    chatId: 'chat-1',
    senderId: 'user-1',
    content: 'Is the property still available for the dates I requested?',
    timestamp: '2023-05-11T15:30:00Z',
    read: true,
  },
  {
    id: 'message-6',
    chatId: 'chat-2',
    senderId: 'user-1',
    content: 'Hi, I was wondering if pets are allowed in your property?',
    timestamp: '2023-05-12T10:30:00Z',
    read: true,
  },
  {
    id: 'message-7',
    chatId: 'chat-2',
    senderId: 'user-5',
    content: 'Yes, you can bring one pet as long as it\'s well-behaved.',
    timestamp: '2023-05-12T10:45:00Z',
    read: false,
  },
];

// Filter and export featured properties
export const featuredProperties = properties.filter(p => p.featuredUntil && new Date(p.featuredUntil) > new Date());

// Get property by ID helper function
export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(p => p.id === id);
};

// Get user by ID helper function
export const getUserById = (id: string): User | undefined => {
  return users.find(u => u.id === id);
};

// Filter properties by criteria helper function
export interface PropertyFilterCriteria {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  propertyType?: string;
  verified?: boolean;
  amenities?: string[];
  nearbyUniversity?: string;
}

export const filterProperties = (criteria: PropertyFilterCriteria): Property[] => {
  return properties.filter(property => {
    if (criteria.city && property.location.city !== criteria.city) return false;
    if (criteria.minPrice && property.price < criteria.minPrice) return false;
    if (criteria.maxPrice && property.price > criteria.maxPrice) return false;
    if (criteria.bedrooms && property.bedrooms !== criteria.bedrooms) return false;
    if (criteria.propertyType && property.type !== criteria.propertyType) return false;
    if (criteria.verified !== undefined && property.verified !== criteria.verified) return false;
    if (criteria.amenities && criteria.amenities.length > 0) {
      if (!criteria.amenities.every(amenity => property.amenities.includes(amenity))) return false;
    }
    if (criteria.nearbyUniversity && property.nearbyUniversities && 
        !property.nearbyUniversities.includes(criteria.nearbyUniversity)) return false;
    
    return true;
  });
};

// Get matched roommates helper function
export const getMatchedRoommates = (userId: string): User[] => {
  const userPrefs = roommatePreferences.find(pref => pref.userId === userId);
  if (!userPrefs) return [];

  const otherPrefs = roommatePreferences.filter(pref => pref.userId !== userId);
  
  // Calculate compatibility score (very simplified)
  const matches = otherPrefs.map(pref => {
    let score = 0;
    
    // Same smoking preference
    if (pref.smoking === userPrefs.smoking) score += 2;
    
    // Same pets preference
    if (pref.pets === userPrefs.pets) score += 1;
    
    // Same drinking preference
    if (pref.drinking === userPrefs.drinking) score += 1;
    
    // Compatible cleanliness
    if (
      (userPrefs.cleanliness === 'very-clean' && ['very-clean', 'clean'].includes(pref.cleanliness as any)) ||
      (userPrefs.cleanliness === 'clean' && ['very-clean', 'clean', 'moderate'].includes(pref.cleanliness as any)) ||
      (userPrefs.cleanliness === 'moderate' && ['clean', 'moderate', 'relaxed'].includes(pref.cleanliness as any)) ||
      (userPrefs.cleanliness === 'relaxed' && ['moderate', 'relaxed'].includes(pref.cleanliness as any))
    ) {
      score += 3;
    }
    
    // Compatible social habits
    if (
      (userPrefs.socialHabits === 'very-social' && ['very-social', 'social'].includes(pref.socialHabits as any)) ||
      (userPrefs.socialHabits === 'social' && ['very-social', 'social', 'moderate'].includes(pref.socialHabits as any)) ||
      (userPrefs.socialHabits === 'moderate' && ['social', 'moderate', 'private'].includes(pref.socialHabits as any)) ||
      (userPrefs.socialHabits === 'private' && ['moderate', 'private'].includes(pref.socialHabits as any))
    ) {
      score += 2;
    }
    
    return {
      userId: pref.userId,
      score,
    };
  });
  
  // Sort by score and get top 5
  const topMatches = matches
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(match => getUserById(match.userId))
    .filter(user => user !== undefined) as User[];
  
  return topMatches;
};