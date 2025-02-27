// types.ts
import { DealType, DealCardProps } from '../../types/deals';
import { RestaurantData } from '../../types/restaurant';
export interface RestaurantDeal {
  id: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'fixedAmount' | 'bogo';
  discountValue: number;
  validDays: string[];
  validHours: { start: string; end: string };
  tags: string[];
  dealType: DealType;
  expirationDate?: string;
  terms?: string[];
  isRedeemed?: boolean;
  redemptionCode?: string;
  happeningNow?: boolean;
}

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
