// types/deal.ts
export interface Deal {
    // Primary key attributes
    PK: string;                // RESTAURANT#<restaurantId>
    SK: string;                // DEAL#<dealId>
    
    // GSI attributes
    GSI1PK: string;            // LOCATION#<geohash>
    GSI1SK: string;            // DEAL#<endDate>#<dealId>
    GSI2PK: string;            // DEAL#ACTIVE or DEAL#EXPIRED
    GSI2SK: string;            // <endDate>#<restaurantName>
    GSI3PK: string;            // DEAL#POPULAR
    GSI3SK: string;            // <redemptionCount>#<dealId>
    
    // Deal properties
    id: string;
    restaurantId: string;
    restaurantName: string;
    title: string;
    description: string;
    details: string;
    imageUrl: any;             // For local image imports
    dealType: 'informational' | 'redeemable';
    
    // Dates
    startDate: string;         // ISO date string
    endDate: string;           // ISO date string
    daysValid: string[];       // Array of days deal is valid ('monday', 'tuesday', etc.)
    timeRestrictions: {
      start: string;           // '16:00' (4pm)
      end: string;             // '19:00' (7pm)
    } | null;
    
    // Redemption info (for redeemable deals)
    maxRedemptions: number | null;    // Maximum number of total redemptions
    totalRedemptions: number;         // Current count of total redemptions
    perUserLimit: number | null;      // Max redemptions per user
    redemptionInstructions: string;   // Instructions for staff
    termsAndConditions: string[];     // Array of terms and conditions
    
    // Business controls
    isFeatured: boolean;       // Whether deal is featured (paid placement)
    createdAt: string;         // ISO date string
    updatedAt: string;         // ISO date string
    isActive: boolean;         // Whether deal is currently active
  
    // Location info for search and display
    restaurantLocation: {
      latitude: number;
      longitude: number;
    };
    distance?: string;         // Calculated distance to display (e.g., "1.2 miles")
  }