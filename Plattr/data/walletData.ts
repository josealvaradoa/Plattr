// WalletData.ts
// Updated to use only the new schema without backward compatibility

import { WalletItem } from '../types/walletItem';
import { UserDeal } from '../types/userDeal';
import { Deal } from '../types/deals';

// Mock wallet data following our new schema
export const walletMocks: WalletItem[] = [
  {
    userDeal: {
      PK: "USER#user_123",
      SK: "DEAL#deal_1",
      GSI1PK: "USER#user_123",
      GSI1SK: "STATUS#saved#2025-03-01T23:59:59Z",
      
      userId: "user_123",
      dealId: "deal_1",
      restaurantId: "restaurant_101",
      savedAt: "2025-01-10T14:23:45Z",
      status: "saved",
      redemptions: {
        count: 0,
        history: []
      }
    },
    dealDetails: {
      PK: "RESTAURANT#restaurant_101",
      SK: "DEAL#deal_1",
      GSI1PK: "LOCATION#dr5r7",
      GSI1SK: "DEAL#2025-03-01T23:59:59Z#deal_1",
      GSI2PK: "DEAL#ACTIVE",
      GSI2SK: "2025-03-01T23:59:59Z#Cochiloco",
      GSI3PK: "DEAL#POPULAR",
      GSI3SK: "90#deal_1",
      
      id: "deal_1",
      restaurantId: "restaurant_101",
      restaurantName: "Cochiloco | Scott's Addition",
      title: "20% Off Quesabirria Tacos",
      description: "20% Off Quesabirria Tacos",
      details: "Get 20% off our signature Quesabirria Tacos. Valid for dine-in only.",
      imageUrl: require('../assets/images/restaurants/resOne.jpg'),
      dealType: "redeemable",
      
      startDate: "2025-01-01T00:00:00Z",
      endDate: "2025-03-01T23:59:59Z",
      daysValid: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      timeRestrictions: null,
      
      maxRedemptions: 100,
      totalRedemptions: 10,
      perUserLimit: 1,
      redemptionInstructions: "Show this screen to your server when ordering",
      termsAndConditions: ["Valid until March 1st, 2025", "Cannot be combined with other offers", "Valid for dine-in only"],
      
      isFeatured: false,
      createdAt: "2024-12-15T10:30:00Z",
      updatedAt: "2024-12-15T10:30:00Z",
      isActive: true,
      
      restaurantLocation: {
        latitude: 37.5675,
        longitude: -77.4875
      },
      distance: "1.2 miles"
    }
  },
  {
    userDeal: {
      PK: "USER#user_123",
      SK: "DEAL#deal_2",
      GSI1PK: "USER#user_123",
      GSI1SK: "STATUS#saved#2025-04-30T23:59:59Z",
      
      userId: "user_123",
      dealId: "deal_2",
      restaurantId: "restaurant_102",
      savedAt: "2025-01-11T09:42:18Z",
      status: "saved",
      redemptions: {
        count: 0,
        history: []
      }
    },
    dealDetails: {
      PK: "RESTAURANT#restaurant_102",
      SK: "DEAL#deal_2",
      GSI1PK: "LOCATION#dr5r6",
      GSI1SK: "DEAL#2025-04-30T23:59:59Z#deal_2",
      GSI2PK: "DEAL#ACTIVE",
      GSI2SK: "2025-04-30T23:59:59Z#Lucky AF",
      GSI3PK: "DEAL#POPULAR",
      GSI3SK: "65#deal_2",
      
      id: "deal_2",
      restaurantId: "restaurant_102",
      restaurantName: "Lucky AF | Downtown",
      title: "Happy Hour: $5 Cocktails",
      description: "Happy Hour: $5 Cocktails (Mon-Fri 4PM-7PM)",
      details: "Get $5 cocktails during happy hour. Valid for dine-in only.",
      imageUrl: require('../assets/images/restaurants/resFour.jpg'),
      dealType: "informational",
      
      startDate: "2025-01-01T00:00:00Z",
      endDate: "2025-04-30T23:59:59Z",
      daysValid: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      timeRestrictions: {
        start: "16:00",
        end: "19:00"
      },
      
      maxRedemptions: null,
      totalRedemptions: 0,
      perUserLimit: null,
      redemptionInstructions: "",
      termsAndConditions: ["Valid until April 30th, 2025", "Cannot be combined with other offers", "Valid for dine-in only"],
      
      isFeatured: false,
      createdAt: "2024-12-20T14:30:00Z",
      updatedAt: "2024-12-20T14:30:00Z",
      isActive: true,
      
      restaurantLocation: {
        latitude: 37.5412,
        longitude: -77.4398
      },
      distance: "0.8 miles"
    }
  },
  {
    userDeal: {
      PK: "USER#user_123",
      SK: "DEAL#deal_3",
      GSI1PK: "USER#user_123",
      GSI1SK: "STATUS#saved#2025-03-01T23:59:59Z",
      
      userId: "user_123",
      dealId: "deal_3",
      restaurantId: "restaurant_103",
      savedAt: "2025-01-12T16:15:33Z",
      status: "saved",
      redemptions: {
        count: 0,
        history: []
      }
    },
    dealDetails: {
      PK: "RESTAURANT#restaurant_103",
      SK: "DEAL#deal_3",
      GSI1PK: "LOCATION#dr5r7",
      GSI1SK: "DEAL#2025-03-01T23:59:59Z#deal_3",
      GSI2PK: "DEAL#ACTIVE",
      GSI2SK: "2025-03-01T23:59:59Z#Perly's",
      GSI3PK: "DEAL#POPULAR",
      GSI3SK: "75#deal_3",
      
      id: "deal_3",
      restaurantId: "restaurant_103",
      restaurantName: "Perly's Restaurant & Delicatessen",
      title: "15% Off Breakfast Items",
      description: "15% Off Breakfast Items (7AM-10AM)",
      details: "Get 15% off breakfast items. Valid for dine-in only.",
      imageUrl: require('../assets/images/restaurants/resFive.jpg'),
      dealType: "redeemable",
      
      startDate: "2025-01-01T00:00:00Z",
      endDate: "2025-03-01T23:59:59Z",
      daysValid: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      timeRestrictions: {
        start: "07:00",
        end: "10:00"
      },
      
      maxRedemptions: 100,
      totalRedemptions: 10,
      perUserLimit: 1,
      redemptionInstructions: "Show this screen to your server when ordering",
      termsAndConditions: ["Valid until March 1st, 2025", "Cannot be combined with other offers", "Valid for breakfast hours only"],
      
      isFeatured: false,
      createdAt: "2024-12-10T09:45:00Z",
      updatedAt: "2024-12-10T09:45:00Z",
      isActive: true,
      
      restaurantLocation: {
        latitude: 37.5429,
        longitude: -77.4372
      },
      distance: "1.5 miles"
    }
  },
  {
    userDeal: {
      PK: "USER#user_123",
      SK: "DEAL#deal_4",
      GSI1PK: "USER#user_123",
      GSI1SK: "STATUS#redeemed#2025-03-01T23:59:59Z",
      
      userId: "user_123",
      dealId: "deal_4",
      restaurantId: "restaurant_104",
      savedAt: "2025-01-05T12:34:56Z",
      status: "redeemed",
      redemptions: {
        count: 1,
        history: [
          {
            timestamp: "2025-01-15T19:23:41Z",
            code: "ZZQ1234"
          }
        ]
      }
    },
    dealDetails: {
      PK: "RESTAURANT#restaurant_104",
      SK: "DEAL#deal_4",
      GSI1PK: "LOCATION#dr5r8",
      GSI1SK: "DEAL#2025-03-01T23:59:59Z#deal_4",
      GSI2PK: "DEAL#ACTIVE",
      GSI2SK: "2025-03-01T23:59:59Z#ZZQ",
      GSI3PK: "DEAL#POPULAR",
      GSI3SK: "120#deal_4",
      
      id: "deal_4",
      restaurantId: "restaurant_104",
      restaurantName: "ZZQ Texas Craft Barbeque",
      title: "Free Side with $25+ Purchase",
      description: "Free Side with $25+ Purchase",
      details: "Get a free side with a $25+ purchase. Valid for dine-in only.",
      imageUrl: require('../assets/images/restaurants/resTwo.jpg'),
      dealType: "redeemable",
      
      startDate: "2025-01-01T00:00:00Z",
      endDate: "2025-03-01T23:59:59Z",
      daysValid: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      timeRestrictions: null,
      
      maxRedemptions: 100,
      totalRedemptions: 10,
      perUserLimit: 1,
      redemptionInstructions: "Show this screen to your server when ordering",
      termsAndConditions: ["Valid until March 1st, 2025", "Cannot be combined with other offers", "Minimum purchase of $25 required"],
      
      isFeatured: true,
      createdAt: "2024-12-01T10:30:00Z",
      updatedAt: "2024-12-01T10:30:00Z",
      isActive: true,
      
      restaurantLocation: {
        latitude: 37.5675,
        longitude: -77.4890
      },
      distance: "2.1 miles"
    }
  },
  {
    userDeal: {
      PK: "USER#user_123",
      SK: "DEAL#deal_5",
      GSI1PK: "USER#user_123",
      GSI1SK: "STATUS#saved#2025-03-01T23:59:59Z",
      
      userId: "user_123",
      dealId: "deal_5",
      restaurantId: "restaurant_105",
      savedAt: "2025-01-14T10:24:15Z",
      status: "saved",
      redemptions: {
        count: 0,
        history: []
      }
    },
    dealDetails: {
      PK: "RESTAURANT#restaurant_105",
      SK: "DEAL#deal_5",
      GSI1PK: "LOCATION#dr5q9",
      GSI1SK: "DEAL#2025-03-01T23:59:59Z#deal_5",
      GSI2PK: "DEAL#ACTIVE",
      GSI2SK: "2025-03-01T23:59:59Z#Sabai",
      GSI3PK: "DEAL#POPULAR",
      GSI3SK: "85#deal_5",
      
      id: "deal_5",
      restaurantId: "restaurant_105",
      restaurantName: "Sabai | The Fan",
      title: "Happy Hour: $8 Cocktails",
      description: "Happy Hour: $8 Cocktails (4PM-7PM)",
      details: "Get $8 cocktails during happy hour. Valid for dine-in only.",
      imageUrl: require('../assets/images/restaurants/resFive.jpg'),
      dealType: "redeemable",
      
      startDate: "2025-01-01T00:00:00Z",
      endDate: "2025-03-01T23:59:59Z",
      daysValid: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      timeRestrictions: {
        start: "16:00",
        end: "19:00"
      },
      
      maxRedemptions: 100,
      totalRedemptions: 10,
      perUserLimit: 1,
      redemptionInstructions: "Show this screen to your server when ordering",
      termsAndConditions: ["Valid until March 1st, 2025", "Cannot be combined with other offers", "Must be 21+ to purchase alcohol"],
      
      isFeatured: false,
      createdAt: "2024-12-05T15:30:00Z",
      updatedAt: "2024-12-05T15:30:00Z",
      isActive: true,
      
      restaurantLocation: {
        latitude: 37.5533,
        longitude: -77.4600
      },
      distance: "2.0 miles"
    }
  },
  {
    userDeal: {
      PK: "USER#user_123",
      SK: "DEAL#deal_6",
      GSI1PK: "USER#user_123",
      GSI1SK: "STATUS#expired#2025-02-15T23:59:59Z",
      
      userId: "user_123",
      dealId: "deal_6",
      restaurantId: "restaurant_106",
      savedAt: "2025-01-02T08:19:27Z",
      status: "expired",
      redemptions: {
        count: 0,
        history: []
      }
    },
    dealDetails: {
      PK: "RESTAURANT#restaurant_106",
      SK: "DEAL#deal_6",
      GSI1PK: "LOCATION#dr5r6",
      GSI1SK: "DEAL#2025-02-15T23:59:59Z#deal_6",
      GSI2PK: "DEAL#EXPIRED",
      GSI2SK: "2025-02-15T23:59:59Z#The Daily",
      GSI3PK: "DEAL#POPULAR",
      GSI3SK: "55#deal_6",
      
      id: "deal_6",
      restaurantId: "restaurant_106",
      restaurantName: "The Daily | Downtown",
      title: "Happy Hour: $5 Cocktails",
      description: "Happy Hour: $5 Cocktails (Mon-Fri 4PM-7PM)",
      details: "Get $5 cocktails during happy hour. Valid for dine-in only.",
      imageUrl: require('../assets/images/restaurants/resFour.jpg'),
      dealType: "informational",
      
      startDate: "2025-01-01T00:00:00Z",
      endDate: "2025-02-15T23:59:59Z",
      daysValid: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      timeRestrictions: {
        start: "16:00",
        end: "19:00"
      },
      
      maxRedemptions: null,
      totalRedemptions: 0,
      perUserLimit: null,
      redemptionInstructions: "",
      termsAndConditions: ["Valid until February 15th, 2025", "Cannot be combined with other offers", "Valid for dine-in only"],
      
      isFeatured: false,
      createdAt: "2024-12-18T11:45:00Z",
      updatedAt: "2024-12-18T11:45:00Z",
      isActive: false,
      
      restaurantLocation: {
        latitude: 37.5415,
        longitude: -77.4390
      },
      distance: "0.8 miles"
    }
  }
];

// Helper function to get active deals
export const getActiveDeals = () => {
  return walletMocks.filter(item => item.userDeal.status === 'saved' || item.userDeal.status === 'redeemed');
};

// Helper function to get expired deals
export const getExpiredDeals = () => {
  return walletMocks.filter(item => item.userDeal.status === 'expired');
};