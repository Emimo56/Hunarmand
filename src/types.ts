/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum VettingTier {
  VERIFIED = "Verified (تصدیق شدہ)",
  ELITE = "Elite Pro (خاص کاریگر)",
  MASTER_GUILD = "Ustad Artisan (استاد کاریگر)"
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  completedDate: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  projectCompleted: string;
  verifiedHired: boolean;
}

export interface Contractor {
  id: string;
  name: string;
  companyName: string;
  category: string; // Dynamic string so that we can support endless future categories
  title: string;
  avatar: string;
  bio: string;
  phone: string;
  whatsapp?: string; // Direct WhatsApp contact
  email: string;
  website: string;
  location: string; // Address details
  city: string; // Prime Pakistan City (Karachi, Lahore, Islamabad, etc)
  rating: number;
  reviewCount: number;
  yearsInBusiness: number;
  vettedStatus: VettingTier;
  verifiedDate: string;
  licenseNumber: string;
  insuranceAmount: string;
  hourlyRate: string;
  portfolio: PortfolioItem[];
  reviews: Review[];
  isCustom?: boolean;
}

export interface QuoteRequest {
  id: string;
  contractorId: string;
  contractorName: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  projectDescription: string;
  urgency: "emergency" | "this_week" | "planning";
  submittedAt: string;
  status: "pending" | "responded" | "declined";
}

export interface CategoryInfo {
  id: string;
  name: string;
  iconName: string; // Lucide icon lookup string
  description: string;
  colorTheme: string; // Tailwind class coloring
}
