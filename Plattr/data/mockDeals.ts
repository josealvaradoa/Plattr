import { DealCardProps, DealType } from '../types/deals';

export const mockDeals: DealCardProps[] = [
  // 1 - REDEEMABLE
  {
    id: '1',
    restaurantName: "Cochiloco | Scott's Addition",
    location: "Scott's Addition",
    rating: 4.0,
    reviewCount: 13,
    dealDescription: "20% Off Quesabirria Tacos",
    dealDetails: "Get 20% off our signature Quesabirria Tacos. Valid for dine-in only.",
    distance: "1.2",
    imageUrl: "https://images.squarespace-cdn.com/content/63bf57df5b3a643aac23cfed/894e0f1b-7ff9-45ae-b413-ce19132eceaa/IMG_0570.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    // Expires within 30 days
    expirationDate: "2025-02-12T23:59:59",
    maxRedemptions: 100,
    remainingRedemptions: 90,
    terms: ["Valid until 2025-02-12", "Cannot be combined with other offers"]
  },
  // 2 - INFORMATIONAL
  {
    id: '2',
    restaurantName: "Lucky AF | Downtown",
    location: "Downtown",
    rating: 4.5,
    reviewCount: 28,
    dealDescription: "Happy Hour: $5 Cocktails (Mon-Fri 4PM-7PM)",
    dealDetails: "Get $5 cocktails during happy hour. Valid for dine-in only.",
    distance: "0.8",
    imageUrl: "https://getluckyaf.com/wp-content/uploads/lucky-af.png",
    onPress: () => {},
    onViewDeal: () => {},
    // INFORMATIONAL deals typically omit expirationDate
    dealType: DealType.INFORMATIONAL,
    terms: ["Happy hour pricing applies only Mon-Fri 4PM-7PM", "Cannot be combined with other offers"]
  },
  // 3 - REDEEMABLE
  {
    id: '3',
    restaurantName: "Perly's Restaurant & Delicatessen",
    location: "Downtown",
    rating: 4.5,
    reviewCount: 42,
    dealDescription: "15% Off Breakfast Items (7AM-10AM)",
    dealDetails: "Get 15% off breakfast items. Valid for dine-in only.",
    distance: "1.5",
    imageUrl: "https://example.com/perlys.jpg",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-02-15T23:59:59",
    maxRedemptions: 100,
    remainingRedemptions: 90,
    terms: ["Valid until 2025-02-15", "Cannot be combined with other offers"]
  },
  // 4 - REDEEMABLE
  {
    id: '4',
    restaurantName: "ZZQ Texas Craft Barbeque",
    location: "Scott's Addition",
    rating: 5.0,
    reviewCount: 35,
    dealDescription: "Free Side with $25+ Purchase",
    dealDetails: "Get a free side with a $25+ purchase. Valid for dine-in only.",
    distance: "1.1",
    imageUrl: "https://media-api.xogrp.com/images/00ddaed3-fae6-401a-8a48-8cebc121d25d",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-02-23T23:59:59",
    maxRedemptions: 100,
    remainingRedemptions: 90,
    terms: ["Valid until 2025-02-23", "Cannot be combined with other offers"]
  },
  // 5 - REDEEMABLE
  {
    id: '5',
    restaurantName: "Sabai | The Fan",
    location: "The Fan",
    rating: 4.0,
    reviewCount: 21,
    dealDescription: "Happy Hour: $8 Cocktails (4PM-7PM)",
    dealDetails: "Get $8 cocktails during happy hour. Valid for dine-in only.",
    distance: "2.0",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/658e23c62ad26370bbaf294f/4e3513d6-6cf6-47c0-9656-0674e8dff020/logo+sabai.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-02-28T23:59:59",
    maxRedemptions: 100,
    remainingRedemptions: 90,
    terms: ["Valid until 2025-02-28", "Cannot be combined with other offers"]
  },
  // 6 - INFORMATIONAL
  {
    id: '6',
    restaurantName: "The Daily | Downtown",
    location: "Downtown",
    rating: 4.5,
    reviewCount: 28,
    dealDescription: "Happy Hour: $5 Cocktails (Mon-Fri 4PM-7PM)",
    dealDetails: "Get $5 cocktails during happy hour. Valid for dine-in only.",
    distance: "0.8",
    imageUrl: "https://getluckyaf.com/wp-content/uploads/lucky-af.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.INFORMATIONAL,
    terms: ["Happy Hour only, Mon-Fri 4PM-7PM", "Cannot be combined with other offers"]
  },
  // 7 - REDEEMABLE
  {
    id: '7',
    restaurantName: "Joe's Diner",
    location: "Carytown",
    rating: 3.5,
    reviewCount: 11,
    dealDescription: "Buy One Get One Free Pancakes (Weekdays 7AM-9AM)",
    dealDetails: "Enjoy a second stack of pancakes free with the purchase of one. Dine-in only.",
    distance: "2.5",
    imageUrl: "https://example.com/joes-diner.jpg",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-02-20T23:59:59",
    maxRedemptions: 50,
    remainingRedemptions: 40,
    terms: ["Valid until 2025-02-20", "Weekdays only", "Cannot be combined with other offers"]
  },
  // 8 - REDEEMABLE
  {
    id: '8',
    restaurantName: "Stella's | The Fan",
    location: "The Fan",
    rating: 4.7,
    reviewCount: 102,
    dealDescription: "Free Dessert with Entrée Purchase (After 5PM)",
    dealDetails: "Get a free dessert with any entrée purchase after 5PM. Dine-in only.",
    distance: "1.9",
    imageUrl: "https://example.com/stellas-restaurant.jpg",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-02-26T23:59:59",
    maxRedemptions: 80,
    remainingRedemptions: 75,
    terms: ["Valid until 2025-02-26", "One dessert per table", "Cannot be combined with other offers"]
  },
  // 9 - REDEEMABLE
  {
    id: '9',
    restaurantName: "Mama J's Kitchen",
    location: "Jackson Ward",
    rating: 4.8,
    reviewCount: 56,
    dealDescription: "Lunch Special: 10% Off (Tue-Fri 11AM-2PM)",
    dealDetails: "Get 10% off your total lunch order between 11AM-2PM. Dine-in only.",
    distance: "0.9",
    imageUrl: "https://example.com/mama-js-kitchen.jpg",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-02-10T23:59:59",
    maxRedemptions: 120,
    remainingRedemptions: 120,
    terms: ["Valid until 2025-02-10", "Tue-Fri only", "Cannot be combined with other offers"]
  },
  // 10 - INFORMATIONAL
  {
    id: '10',
    restaurantName: "Roastology Coffee",
    location: "Manchester",
    rating: 4.2,
    reviewCount: 47,
    dealDescription: "New Seasonal Menu Launch",
    dealDetails: "We're launching our new spring coffee menu! Stop by to try our new flavors.",
    distance: "2.2",
    imageUrl: "https://example.com/roastology.jpg",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.INFORMATIONAL,
    terms: ["Seasonal items subject to availability", "No other promos apply"]
  },
  // 11 - INFORMATIONAL
  {
    id: '11',
    restaurantName: "The Greek Taverna",
    location: "Shockoe Slip",
    rating: 4.6,
    reviewCount: 63,
    dealDescription: "Family-Style Dinner Platters",
    dealDetails: "Try our new family-style dinner platters for group dining. Reservation required.",
    distance: "1.0",
    imageUrl: "https://example.com/greek-taverna.jpg",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.INFORMATIONAL,
    terms: ["Platter serves up to 4", "Must reserve in advance"]
  },
  // 12 - REDEEMABLE (Changed from "Pizza Planet" to a real RVA spot)
  {
    id: '12',
    restaurantName: "Mellow Mushroom",
    location: "Carytown",
    rating: 4.2,
    reviewCount: 95,
    dealDescription: "20% Off Any Large Pizza (Fri-Sun)",
    dealDetails: "Get 20% off any large pizza on weekends. Dine-in or takeout.",
    distance: "3.0",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Mellow_Mushroom_logo.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-03-01T23:59:59",
    maxRedemptions: 200,
    remainingRedemptions: 200,
    terms: ["Valid until 2025-03-01", "Fri-Sun only", "Cannot be combined with other offers"]
  },
  // 13 - INFORMATIONAL
  {
    id: '13',
    restaurantName: "The Roosevelt",
    location: "Church Hill",
    rating: 4.7,
    reviewCount: 497,
    dealDescription: "Weeknight Wine Specials",
    dealDetails: "Enjoy half-off select wines from 5PM-7PM, Monday-Thursday. Dine-in only.",
    distance: "1.1",
    imageUrl: "https://therooseveltrva.com/wp-content/uploads/2017/04/Roosevelt-Logo.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.INFORMATIONAL,
    terms: ["Available Mon-Thu only", "Valid for select wines"]
  },
  // 14 - REDEEMABLE
  {
    id: '14',
    restaurantName: "Lillie Pearl",
    location: "Downtown",
    rating: 4.5,
    reviewCount: 220,
    dealDescription: "20% Off Brunch Entrées (Sat & Sun)",
    dealDetails: "Get 20% off any brunch entrée on Saturdays and Sundays. Dine-in only.",
    distance: "0.7",
    imageUrl: "https://lilliepearl.com/wp-content/uploads/2020/09/logo.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-02-25T23:59:59",
    maxRedemptions: 80,
    remainingRedemptions: 80,
    terms: ["Valid until 2025-02-25", "Sat & Sun only", "Cannot be combined with other offers"]
  },
  // 15 - INFORMATIONAL
  {
    id: '15',
    restaurantName: "The Veil Brewing Co.",
    location: "Scott's Addition",
    rating: 4.6,
    reviewCount: 340,
    dealDescription: "New Beer Release & Tasting Event",
    dealDetails: "Join us for a new beer release and free tasting event this Friday evening.",
    distance: "1.3",
    imageUrl: "https://theveilbrewing.com/wp-content/uploads/2020/04/VEIL_Landing.svg",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.INFORMATIONAL,
    terms: ["Must be 21+ to attend", "Limited release while supplies last"]
  },
  // 16 - REDEEMABLE
  {
    id: '16',
    restaurantName: "Hardywood Park Craft Brewery",
    location: "Ownby Lane",
    rating: 4.7,
    reviewCount: 500,
    dealDescription: "Trivia Night Specials: $1 Off Pints",
    dealDetails: "Come enjoy trivia night with $1 off pints every Wednesday after 6PM.",
    distance: "2.2",
    imageUrl: "https://hardywood.com/wp-content/uploads/2021/04/hardywood-logo.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-03-02T23:59:59",
    maxRedemptions: 100,
    remainingRedemptions: 100,
    terms: ["Valid until 2025-03-02", "Wednesdays only", "Must be 21+ to purchase alcohol"]
  },
  // 17 - REDEEMABLE
  {
    id: '17',
    restaurantName: "Proper Pie Co.",
    location: "Church Hill",
    rating: 4.8,
    reviewCount: 300,
    dealDescription: "Buy Two Savory Pies, Get One Sweet Pie Half Off",
    dealDetails: "Mix and match any savory pies; get a sweet pie half off. Dine-in or takeout.",
    distance: "3.1",
    imageUrl: "https://properpieco.com/wp-content/uploads/2018/07/proper-pie-logo.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-02-22T23:59:59",
    maxRedemptions: 150,
    remainingRedemptions: 150,
    terms: ["Valid until 2025-02-22", "Limit one sweet pie discount per order", "Cannot be combined with other offers"]
  },
  // 18 - REDEEMABLE
  {
    id: '18',
    restaurantName: "Edo's Squid",
    location: "VCU Area",
    rating: 4.4,
    reviewCount: 280,
    dealDescription: "Student Special: Free Appetizer with Entrée",
    dealDetails: "Show valid student ID to get a free appetizer when you purchase any entrée.",
    distance: "2.4",
    imageUrl: "https://static.spotapps.co/web/edosquid--com/custom/edosquid-hero.jpg",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-02-28T23:59:59",
    maxRedemptions: 200,
    remainingRedemptions: 200,
    terms: ["Valid until 2025-02-28", "Must show valid student ID", "One free appetizer per table"]
  },
  // 19 - REDEEMABLE
  {
    id: '19',
    restaurantName: "Sugar Shack Donuts",
    location: "Carver",
    rating: 4.3,
    reviewCount: 345,
    dealDescription: "Midnight Munchies Promo",
    dealDetails: "Get a free coffee with any donut order from 10PM to midnight. Dine-in or takeout.",
    distance: "1.6",
    imageUrl: "https://sugarshackdonuts.com/wp-content/uploads/2019/06/logo.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.REDEEMABLE,
    expirationDate: "2025-02-14T23:59:59",
    maxRedemptions: 300,
    remainingRedemptions: 300,
    terms: ["Valid until 2025-02-14", "Only from 10PM to midnight", "Cannot be combined with other offers"]
  },
  // 20 - INFORMATIONAL
  {
    id: '20',
    restaurantName: "The Jasper",
    location: "Carytown",
    rating: 4.7,
    reviewCount: 210,
    dealDescription: "Cocktail Class: Learn to Mix Classics",
    dealDetails: "Join our bartenders for a cocktail-making class every second Thursday of the month.",
    distance: "2.3",
    imageUrl: "https://thejasperrva.com/wp-content/uploads/2018/06/jasperrva-logo.png",
    onPress: () => {},
    onViewDeal: () => {},
    dealType: DealType.INFORMATIONAL,
    terms: ["Reservation required", "Must be 21+ to participate"]
  },
];
