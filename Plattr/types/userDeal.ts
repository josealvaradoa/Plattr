// types/userDeal.ts
export interface UserDeal {
    // Primary key attributes
    PK: string;                // USER#<userId>
    SK: string;                // DEAL#<dealId>
    
    // GSI attributes
    GSI1PK: string;            // USER#<userId>
    GSI1SK: string;            // STATUS#<status>#<expirationDate>
    
    // UserDeal properties
    userId: string;
    dealId: string;
    restaurantId: string;
    savedAt: string;           // ISO date string
    status: 'saved' | 'redeemed' | 'expired';
    redemptions: {
      count: number;           // Number of times redeemed
      history: {
        timestamp: string;     // ISO date string
        code: string;          // Unique redemption code
      }[];
    };
  }
  