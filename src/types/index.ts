export type UserRole = 'tenant' | 'landlord' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  verified: boolean;
  loyaltyPoints: number;
  joinedAt: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    city: string;
    area: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  images: string[];
  amenities: string[];
  type: 'apartment' | 'house' | 'room' | 'hostel';
  size: number; // in square feet
  bedrooms: number;
  bathrooms: number;
  verified: boolean;
  featuredUntil?: string;
  createdAt: string;
  updatedAt: string;
  landlordId: string;
  landlord: User;
  nearbyUniversities?: string[];
  availableFrom: string;
}

export interface Booking {
  id: string;
  propertyId: string;
  property: Property;
  tenantId: string;
  tenant: User;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  totalAmount: number;
  createdAt: string;
}

export interface RoommatePreference {
  id: string;
  userId: string;
  smoking: boolean;
  pets: boolean;
  drinking: boolean;
  foodPreference: 'vegetarian' | 'non-vegetarian' | 'vegan' | 'no-preference';
  studyHabits: 'morning' | 'night' | 'both' | 'no-preference';
  cleanliness: 'very-clean' | 'clean' | 'moderate' | 'relaxed';
  socialHabits: 'very-social' | 'social' | 'moderate' | 'private';
  sleepHabits: 'early-riser' | 'night-owl' | 'no-preference';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
}

export interface Verification {
  id: string;
  userId: string;
  type: 'NADRA' | 'Police';
  documentNumber: string;
  status: 'pending' | 'verified' | 'rejected';
  submittedAt: string;
  verifiedAt?: string;
}

export interface Chat {
  id: string;
  participants: string[];
  lastMessage: {
    senderId: string;
    content: string;
    timestamp: string;
  };
  unreadCount: number;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'payment' | 'refund' | 'deposit' | 'withdrawal';
  method: 'credit-card' | 'jazzcash' | 'easypaisa' | 'bank-transfer';
  status: 'pending' | 'completed' | 'failed';
  bookingId?: string;
  description: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  read: boolean;
  type: 'booking' | 'message' | 'verification' | 'payment' | 'system';
  link?: string;
  createdAt: string;
}