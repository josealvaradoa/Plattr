export enum DealType {
    INFORMATIONAL = 'informational',
    REDEEMABLE = 'redeemable'
}

export interface DealCardProps {
    id: string;
    restaurantName: string;
    location: string;
    rating: number;
    reviewCount: number;
    dealDescription: string;
    dealDetails: string;
    distance: string;
    imageUrl: string;
    onPress: () => void;
    onViewDeal: () => void;
    dealType: DealType;
    // For informational deals
    happeningNow?: boolean;
    contactInfo?: {
        phone?: string;
        address?: string;
    };
    // For redeemable deals
    expirationDate?: string;
    maxRedemptions?: number;
    remainingRedemptions?: number;
    terms?: string[];
    isRedeemed?: boolean;
    redemptionCode?: string;
}

// Button text based on deal type
export const getViewDealButtonText = (dealType: DealType): string => {
    return dealType === DealType.REDEEMABLE ? 'Redeem Deal' : 'View Details';
  };