export interface DealCardProps {
    id: string;
    restaurantName: string;
    location: string;
    rating: number;
    reviewCount: number;
    dealDescription: string;
    distance: string;
    timeLeft: string;
    imageUrl: string;
    onPress: () => void;
    onViewDeal: () => void;
}