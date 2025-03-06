// types/user.ts
export interface User {
    // Primary key attributes
    PK: string;                // USER#<userId>
    SK: string;                // METADATA#<userId>
    
    // GSI attributes
    GSI1PK: string;            // EMAIL#<email>
    GSI1SK: string;            // USER#<userId>
    
    // User properties
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string | null;
    preferences: {
      cuisines: string[];      // Preferred cuisine types
      priceLevel: number[];    // Preferred price levels
      locationRadius: number;  // Preferred search radius in miles
      notifications: boolean;  // Whether user wants push notifications
    };
    lastLocation: {
      latitude: number | null;
      longitude: number | null;
      city: string | null;
      state: string | null;
    };
    createdAt: string;         // ISO date string
    updatedAt: string;         // ISO date string
  }
  