// types/menuItem.ts
export interface MenuItem {
    // Primary key attributes
    PK: string;                // RESTAURANT#<restaurantId>
    SK: string;                // MENUITEM#<menuItemId>
    
    // MenuItem properties
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: any | null;      // For local image imports
    isPopular: boolean;
    dietaryInfo: string[];
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
  }