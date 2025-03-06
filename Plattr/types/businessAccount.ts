// types/businessAccount.ts
export interface BusinessAccount {
    // Primary key attributes
    PK: string;                // BUSINESS#<businessId>
    SK: string;                // METADATA#<businessId>
    
    // GSI attributes
    GSI1PK: string;            // EMAIL#<email>
    GSI1SK: string;            // BUSINESS#<businessId>
    
    // BusinessAccount properties
    id: string;
    email: string;
    companyName: string;
    contactPerson: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      position: string;
    };
    restaurantIds: string[];   // References to restaurants managed by this account
    subscription: {
      tier: 'free' | 'premium' | 'enterprise';
      startDate: string;       // ISO date string
      endDate: string | null;  // ISO date string
      paymentMethod: {
        type: string;
        lastFour: string | null;
      };
    };
    createdAt: string;         // ISO date string
    updatedAt: string;         // ISO date string
    isActive: boolean;
  }