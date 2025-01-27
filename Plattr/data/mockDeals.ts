import { DealCardProps, DealType } from '../types/deals';

export const mockDeals: DealCardProps[] = [
  {
    id: '1',
    restaurantName: "Cochiloco | Scott's Addition",
    location: "Scott's Addition",
    rating: 4.0,
    reviewCount: 13,
    dealDescription: "20% Off Quesabirria Tacos",
    distance: "1.2",
    timeLeft: "2d",
    imageUrl: "https://images.squarespace-cdn.com/content/63bf57df5b3a643aac23cfed/894e0f1b-7ff9-45ae-b413-ce19132eceaa/IMG_0570.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE
  },
  {
    id: '2',
    restaurantName: "Lucky AF | Downtown",
    location: "Downtown",
    rating: 4.5,
    reviewCount: 28,
    dealDescription: "Happy Hour: $5 Cocktails (Mon-Fri 4PM-7PM)",
    distance: "0.8",
    timeLeft: "3d",
    imageUrl: "https://getluckyaf.com/wp-content/uploads/lucky-af.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.INFORMATIONAL
  },
  {
    id: '3',
    restaurantName: "Perly's Restaurant & Delicatessen",
    location: "Downtown",
    rating: 4.5,
    reviewCount: 42,
    dealDescription: "15% Off Breakfast Items (7AM-10AM)",
    distance: "1.5",
    timeLeft: "6h",
    imageUrl: "https://example.com/perlys.jpg",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE
  },
  {
    id: '4',
    restaurantName: "ZZQ Texas Craft Barbeque",
    location: "Scott's Addition",
    rating: 5.0,
    reviewCount: 35,
    dealDescription: "Free Side with $25+ Purchase",
    distance: "1.1",
    timeLeft: "1d",
    imageUrl: "https://media-api.xogrp.com/images/00ddaed3-fae6-401a-8a48-8cebc121d25d",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE
  },
  {
    id: '5',
    restaurantName: "Sabai | The Fan",
    location: "The Fan",
    rating: 4.0,
    reviewCount: 21,
    dealDescription: "Happy Hour: $8 Cocktails (4PM-7PM)",
    distance: "2.0",
    timeLeft: "4h",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/658e23c62ad26370bbaf294f/4e3513d6-6cf6-47c0-9656-0674e8dff020/logo+sabai.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE
  },
  {
    id: '6',
    restaurantName: "The Daily | Downtown",
    location: "Downtown",
    rating: 4.5,
    reviewCount: 28,
    dealDescription: "Happy Hour: $5 Cocktails (Mon-Fri 4PM-7PM)",
    distance: "0.8",
    timeLeft: "3d",
    imageUrl: "https://getluckyaf.com/wp-content/uploads/lucky-af.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.INFORMATIONAL
  }
];