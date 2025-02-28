// types.ts
import { DealType, DealCardProps } from '../../types/deals';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUri?: string;
  category: string;
  popular?: boolean;
  dietaryInfo?: string[];  // e.g., "Vegetarian", "Gluten-Free", "Vegan"
}


export interface TabProps {
  activeTab: TabType;
  onTabPress: (tab: TabType) => void;
}

export type TabType = 'deals' | 'menu' | 'about';

export interface RestaurantDealCardProps {
  deal: DealCardProps;
  isSaved: boolean;
  onSave: (dealId: string) => void;
  onViewDeal: () => void;
}

export interface MenuItemProps {
  item: MenuItem;
}

export interface TagPillProps {
  text: string;
  variant?: 'default' | 'dietary' | 'deal' | 'cuisine';
}

export interface RestaurantHeaderProps {
  imageUri: string;
  onClose: () => void;
}
