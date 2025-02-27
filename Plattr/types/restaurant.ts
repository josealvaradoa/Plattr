import { DealCardProps } from './deals'; // Adjust the path as needed
// types/restaurant.ts
export interface RestaurantTag {
  text: string;
  variant: 'mexican' | 'local' | 'fast' | 'american' | 'sitdown';
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUri?: string;
  category: string;
  popular?: boolean;
  dietaryInfo?: string[];
}

export interface RestaurantData {
  id: string; // Add this property
  name: string;
  tags: RestaurantTag[];
  rating: string;
  reviews: string;
  distance: string;
  imageUrl: string;
  location?: string;
  description?: string;
  cuisine?: string[];
  priceLevel?: number;
  hours?: {
    [key: string]: { open: string; close: string };
  };
  phoneNumber?: string;
  website?: string;
  deals: DealCardProps[];
  menu?: {
    categories: string[];
    items: MenuItem[];
  };
}