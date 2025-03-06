// deals.ts
// Updated to match restaurant IDs with restaurantData.ts

import { Deal } from '../types/deals';

// Sample mock data with consistent restaurant IDs
export const mockDeals: Deal[] = [
  {
    // Deal 1 - Champagne Brunch Special at Can Can Brasserie
    PK: "RESTAURANT#restaurant_201",
    SK: "DEAL#deal_101",
    GSI1PK: "LOCATION#dr5r7",
    GSI1SK: "DEAL#2025-12-30T23:59:59Z#deal_101",
    GSI2PK: "DEAL#ACTIVE",
    GSI2SK: "2025-12-30T23:59:59Z#Can Can Brasserie",
    GSI3PK: "DEAL#POPULAR",
    GSI3SK: "75#deal_101",
    
    id: "deal_101",
    restaurantId: "restaurant_201",
    restaurantName: "Can Can Brasserie",
    title: "Champagne Brunch Special",
    description: "Half-Price Bottles",
    details: "Enjoy half-price bottles of champagne during our weekend brunch service.",
    imageUrl: require('../assets/images/restaurants/resTwo.jpg'),
    dealType: "redeemable",
    
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-12-30T23:59:59Z",
    daysValid: ["saturday", "sunday"],
    timeRestrictions: {
      start: "10:00",
      end: "14:00"
    },
    
    maxRedemptions: 100,
    totalRedemptions: 25,
    perUserLimit: 2,
    redemptionInstructions: "Show this screen to your server when ordering",
    termsAndConditions: [
      "Valid until December 30th, 2025",
      "Saturdays and Sundays only, 10AM-2PM",
      "Must be 21+ to purchase alcohol"
    ],
    
    isFeatured: true,
    createdAt: "2024-12-15T14:30:00Z",
    updatedAt: "2025-01-10T09:15:00Z",
    isActive: true,
    
    restaurantLocation: {
      latitude: 37.5534,
      longitude: -77.4512
    },
    distance: "3.1 miles"
  },
  {
    // Deal 2 - Cocktail Class at Lemaire
    PK: "RESTAURANT#restaurant_202",
    SK: "DEAL#deal_102",
    GSI1PK: "LOCATION#dr5r6",
    GSI1SK: "DEAL#2025-12-31T23:59:59Z#deal_102",
    GSI2PK: "DEAL#ACTIVE",
    GSI2SK: "2025-12-31T23:59:59Z#Lemaire Restaurant",
    GSI3PK: "DEAL#POPULAR",
    GSI3SK: "45#deal_102",
    
    id: "deal_102",
    restaurantId: "restaurant_202",
    restaurantName: "Lemaire Restaurant",
    title: "Cocktail Class",
    description: "Learn to Mix Classics",
    details: "Join our expert bartenders for a cocktail-making class held every second Thursday.",
    imageUrl: require('../assets/images/restaurants/resThree.jpg'),
    dealType: "informational",
    
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-12-31T23:59:59Z",
    daysValid: ["thursday"],
    timeRestrictions: {
      start: "18:00",
      end: "20:00"
    },
    
    maxRedemptions: null,
    totalRedemptions: 0,
    perUserLimit: null,
    redemptionInstructions: "",
    termsAndConditions: [
      "Reservation required",
      "Must be 21+ to participate"
    ],
    
    isFeatured: false,
    createdAt: "2024-12-10T11:30:00Z",
    updatedAt: "2024-12-10T11:30:00Z",
    isActive: true,
    
    restaurantLocation: {
      latitude: 37.5460,
      longitude: -77.4427
    },
    distance: "1.3 miles"
  },
  {
    // Deal 3 - Raw Bar Happy Hour at Lulu's (updated to match restaurant_203)
    PK: "RESTAURANT#restaurant_203",
    SK: "DEAL#deal_103",
    GSI1PK: "LOCATION#dr5r7",
    GSI1SK: "DEAL#2025-12-30T23:59:59Z#deal_103",
    GSI2PK: "DEAL#ACTIVE",
    GSI2SK: "2025-12-30T23:59:59Z#Lulu's",
    GSI3PK: "DEAL#POPULAR",
    GSI3SK: "88#deal_103",
    
    id: "deal_103",
    restaurantId: "restaurant_203",
    restaurantName: "Lulu's",
    title: "Raw Bar Happy Hour",
    description: "Half-price oysters and $7 house wine during happy hour.",
    details: "Enjoy half-price oysters and $7 house wine during happy hour.",
    imageUrl: require('../assets/images/restaurants/resFive.jpg'),
    dealType: "redeemable",
    
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-12-30T23:59:59Z",
    daysValid: ["tuesday", "wednesday", "thursday"],
    timeRestrictions: {
      start: "17:00",
      end: "19:00"
    },
    
    maxRedemptions: 8,
    totalRedemptions: 2,
    perUserLimit: 1,
    redemptionInstructions: "Show this screen to your server when ordering",
    termsAndConditions: [
      "Valid Tuesday-Thursday, 5PM-7PM",
      "Bar area only",
      "No reservations for happy hour"
    ],
    
    isFeatured: false,
    createdAt: "2024-11-30T09:15:00Z",
    updatedAt: "2024-11-30T09:15:00Z",
    isActive: true,
    
    restaurantLocation: {
      latitude: 37.5407,
      longitude: -77.4360
    },
    distance: "1.3 miles"
  },
  {
    // Deal 4 - Trilce Coffee Special (updated to Perly's to match restaurant_103)
    PK: "RESTAURANT#restaurant_103",
    SK: "DEAL#deal_104",
    GSI1PK: "LOCATION#dr5r6",
    GSI1SK: "DEAL#2025-06-30T23:59:59Z#deal_104",
    GSI2PK: "DEAL#ACTIVE",
    GSI2SK: "2025-06-30T23:59:59Z#Perly's Restaurant & Delicatessen",
    GSI3PK: "DEAL#POPULAR",
    GSI3SK: "120#deal_104",
    
    id: "deal_104",
    restaurantId: "restaurant_103",
    restaurantName: "Perly's Restaurant & Delicatessen",
    title: "Early Bird Special",
    description: "15% Off All Breakfast Items Before 9AM",
    details: "Start your day with our early bird special! Enjoy 15% off all breakfast items when you dine with us before 9AM on weekdays.",
    imageUrl: require('../assets/images/restaurants/resFour.jpg'),
    dealType: "redeemable",
    
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-06-30T23:59:59Z",
    daysValid: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    timeRestrictions: {
      start: "08:00",
      end: "09:00"
    },
    
    maxRedemptions: 200,
    totalRedemptions: 80,
    perUserLimit: 1,
    redemptionInstructions: "Show this screen to your server when ordering",
    termsAndConditions: [
      "Valid until June 30th, 2025",
      "Weekdays only, 8AM-9AM",
      "Cannot be combined with other offers"
    ],
    
    isFeatured: true,
    createdAt: "2024-12-20T08:30:00Z",
    updatedAt: "2024-12-20T08:30:00Z",
    isActive: true,
    
    restaurantLocation: {
      latitude: 37.5429,
      longitude: -77.4372
    },
    distance: "1.1 miles"
  },
  {
    // Deal 5 - BBQ Special at ZZQ (updated to match restaurant_104)
    PK: "RESTAURANT#restaurant_104",
    SK: "DEAL#deal_105",
    GSI1PK: "LOCATION#dr5r8",
    GSI1SK: "DEAL#2025-04-30T23:59:59Z#deal_105",
    GSI2PK: "DEAL#ACTIVE",
    GSI2SK: "2025-04-30T23:59:59Z#ZZQ Texas Craft Barbeque",
    GSI3PK: "DEAL#POPULAR",
    GSI3SK: "95#deal_105",
    
    id: "deal_105",
    restaurantId: "restaurant_104",
    restaurantName: "ZZQ Texas Craft Barbeque",
    title: "BBQ & Brew Special",
    description: "$5 Draft Beers with Any BBQ Plate",
    details: "Enjoy any craft draft beer for just $5 when you purchase any BBQ plate. Perfect pairing for our signature smoked meats.",
    imageUrl: require('../assets/images/restaurants/resTwo.jpg'),
    dealType: "informational",
    
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-04-30T23:59:59Z",
    daysValid: ["wednesday", "thursday", "friday"],
    timeRestrictions: {
      start: "16:00",
      end: "19:00"
    },
    
    maxRedemptions: null,
    totalRedemptions: 0,
    perUserLimit: null,
    redemptionInstructions: "",
    termsAndConditions: [
      "Valid Wed-Fri 4PM-7PM",
      "Cannot be combined with other offers",
      "Must be 21+ to purchase alcohol"
    ],
    
    isFeatured: false,
    createdAt: "2024-12-05T16:45:00Z",
    updatedAt: "2024-12-05T16:45:00Z",
    isActive: true,
    
    restaurantLocation: {
      latitude: 37.5675,
      longitude: -77.4890
    },
    distance: "3.8 miles"
  },
  {
    // Deal 6 - Weekend Brunch Special at Pinky's
    PK: "RESTAURANT#restaurant_206",
    SK: "DEAL#deal_106",
    GSI1PK: "LOCATION#dr5r7",
    GSI1SK: "DEAL#2025-12-31T23:59:59Z#deal_106",
    GSI2PK: "DEAL#ACTIVE",
    GSI2SK: "2025-12-31T23:59:59Z#Pinky's",
    GSI3PK: "DEAL#POPULAR",
    GSI3SK: "68#deal_106",
    
    id: "deal_106",
    restaurantId: "restaurant_206",
    restaurantName: "Pinky's",
    title: "Weekend Brunch Special",
    description: "Enjoy our signature brunch menu with $8 mimosa carafes every Saturday and Sunday morning.",
    details: "Join us for a memorable weekend brunch experience with $8 mimosa carafes. Our chef's special brunch menu features farm-fresh ingredients and creative takes on classic morning favorites.",
    imageUrl: require('../assets/images/restaurants/resFive.jpg'),
    dealType: "informational",
    
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-12-31T23:59:59Z",
    daysValid: ["saturday", "sunday"],
    timeRestrictions: {
      start: "10:00",
      end: "14:00"
    },
    
    maxRedemptions: null,
    totalRedemptions: 0,
    perUserLimit: null,
    redemptionInstructions: "",
    termsAndConditions: [
      "Valid Saturday-Sunday, 10AM-2PM",
      "One carafe per table",
      "Must purchase brunch entree"
    ],
    
    isFeatured: true,
    createdAt: "2024-12-15T11:30:00Z",
    updatedAt: "2024-12-15T11:30:00Z",
    isActive: true,
    
    restaurantLocation: {
      latitude: 37.5527,
      longitude: -77.4482
    },
    distance: "0.8 miles"
  }
];

// Helper function to check if a deal is happening now
export const isDealHappeningNow = (deal: Deal): boolean => {
  // Get current date and time
  const now = new Date();
  
  // Check if today is in the deal's valid days
  const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const isValidDay = deal.daysValid.some(day => day === dayOfWeek);
  
  if (!isValidDay) return false;
  
  // If there are no time restrictions, it's happening during the whole day
  if (!deal.timeRestrictions) return true;
  
  // Check if current time is within the deal's time restrictions
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  
  const startHour = parseInt(deal.timeRestrictions.start.split(':')[0]);
  const startMinute = parseInt(deal.timeRestrictions.start.split(':')[1]);
  
  const endHour = parseInt(deal.timeRestrictions.end.split(':')[0]);
  const endMinute = parseInt(deal.timeRestrictions.end.split(':')[1]);
  
  // Convert to minutes for easier comparison
  const currentTimeInMinutes = currentHour * 60 + currentMinute;
  const startTimeInMinutes = startHour * 60 + startMinute;
  const endTimeInMinutes = endHour * 60 + endMinute;
  
  return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes;
};

// Helper function to get trending/popular deals
export const getTrendingDeals = (limit: number = 5): Deal[] => {
  // Sort by popularity (redemption count in GSI3SK)
  return [...mockDeals]
    .sort((a, b) => {
      const aCount = parseInt(a.GSI3SK.split('#')[0]);
      const bCount = parseInt(b.GSI3SK.split('#')[0]);
      return bCount - aCount;
    })
    .slice(0, limit);
};

// Helper function to get featured deals
export const getFeaturedDeals = (): Deal[] => {
  return mockDeals.filter(deal => deal.isFeatured);
};

// Helper function to get deals by restaurant
export const getDealsByRestaurant = (restaurantId: string): Deal[] => {
  return mockDeals.filter(deal => deal.restaurantId === restaurantId);
};

// Helper function to get deals by cuisine type
export const getDealsByCuisine = (cuisineType: string): Deal[] => {
  // In a real implementation, you'd need to fetch restaurant data to get cuisine types
  // For now, we'll assume we know which restaurants serve which cuisines
  const restaurantsByCuisine: Record<string, string[]> = {
    "French": ["restaurant_201"],
    "American": ["restaurant_202", "restaurant_206"],
    "Seafood": ["restaurant_203"],
    "Jewish Deli": ["restaurant_103"],
    "BBQ": ["restaurant_104"]
  };
  
  const restaurantIds = restaurantsByCuisine[cuisineType] || [];
  return mockDeals.filter(deal => restaurantIds.includes(deal.restaurantId));
};