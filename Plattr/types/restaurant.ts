// types/restaurant.ts
export interface Restaurant {
  // Primary key attributes
  PK: string;                // RESTAURANT#<restaurantId>
  SK: string;                // METADATA#<restaurantId>
  
  // GSI attributes
  GSI1PK: string;            // LOCATION#<geohash>
  GSI1SK: string;            // RESTAURANT#<n>
  GSI2PK: string;            // CUISINE#<cuisineType>
  GSI2SK: string;            // RESTAURANT#<rating>#<n>
  
  // Restaurant properties
  id: string;
  name: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    coordinates: {
      latitude: number;
      longitude: number;
    }
  };
  phoneNumber: string;
  email: string;
  website: string;
  priceLevel: number;        // 1-4 representing $, $$, $$$, $$$$
  cuisines: string[];        // Array of cuisine types
  tags: {
    text: string;
    variant: string;
  }[];
  hours: {
    [key: string]: {         // 'monday', 'tuesday', etc.
      open: string;          // '09:00'
      close: string;         // '22:00'
    }
  };
  rating: number;            // Average rating
  reviewCount: number;       // Total number of reviews
  imageUrls: {
    primary: any;            // For local image imports
    gallery: any[];          // For local image imports
  };
  createdAt: string;         // ISO date string
  updatedAt: string;         // ISO date string
  isActive: boolean;         // Whether restaurant is active in the platform
  businessAccountId: string; // Reference to the business account
}