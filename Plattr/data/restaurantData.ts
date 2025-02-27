// mock/restaurantData.ts
import { RestaurantData, RestaurantTag } from '../types/restaurant';
import { DealCardProps, DealType } from '../types/deals';

// Extended restaurant type that includes all necessary fields for the profile card

export const trendingRestaurants: RestaurantData[] = [
  {
    id: "cochiloco-scotts",
    name: "Cochiloco | Scott's Addition",
    tags: [
      { text: "Mexican", variant: "mexican" },
      { text: "Local", variant: "local" },
      { text: "Fast", variant: "fast" }
    ] as RestaurantTag[],
    rating: '4.0',
    reviews: '13000',
    distance: "1.2 Miles Away",
    imageUrl: "https://images.unsplash.com/photo-1617499764932-8a56f915e1dd?q=80&w=1000",
    location: "3158 W Cary St, Richmond, VA 23221",
    description: "Authentic Mexican cantina in Scott's Addition serving street tacos, margaritas, and traditional Mexican fare in a vibrant, casual atmosphere with outdoor seating. Our handmade tortillas and fresh ingredients bring the flavors of Mexico to Richmond.",
    cuisine: ["Mexican", "Tacos", "Margaritas"],
    priceLevel: 2,
    hours: {
      "Monday": { open: "11:00 AM", close: "10:00 PM" },
      "Tuesday": { open: "11:00 AM", close: "10:00 PM" },
      "Wednesday": { open: "11:00 AM", close: "10:00 PM" },
      "Thursday": { open: "11:00 AM", close: "11:00 PM" },
      "Friday": { open: "11:00 AM", close: "12:00 AM" },
      "Saturday": { open: "10:00 AM", close: "12:00 AM" },
      "Sunday": { open: "10:00 AM", close: "9:00 PM" }
    },
    phoneNumber: "(804) 555-1234",
    website: "www.cochilocorichmond.com",
    deals: [
      {
        id: "cochiloco-deal1",
        restaurantName: "Cochiloco | Scott's Addition",
        location: "3158 W Cary St, Richmond, VA 23221",
        rating: 4.0,
        reviewCount: 13000,
        dealDescription: "Taco Tuesday Special",
        dealDetails: "Get 2 tacos for $6 every Tuesday. Choose from our signature carnitas, carne asada, or veggie options.",
        distance: "1.2 Miles Away",
        imageUrl: "https://images.unsplash.com/photo-1617499764932-8a56f915e1dd?q=80&w=1000",
        onPress: () => {},
        onViewDeal: () => {},
        dealType: "fixedAmount" as DealType,
        happeningNow: true,
        contactInfo: {
          phone: "(804) 555-1234",
          address: "3158 W Cary St, Richmond, VA 23221"
        },
        expirationDate: "2025-12-31",
        maxRedemptions: 5,
        remainingRedemptions: 5,
        terms: ["Valid only on Tuesdays", "Cannot be combined with other offers", "Dine-in only"],
        isRedeemed: false
      },
      {
        id: "cochiloco-deal2",
        restaurantName: "Cochiloco | Scott's Addition",
        location: "3158 W Cary St, Richmond, VA 23221",
        rating: 4.0,
        reviewCount: 13000,
        dealDescription: "Happy Hour Margaritas",
        dealDetails: "Enjoy $5 house margaritas and $3 chips & salsa during happy hour.",
        distance: "1.2 Miles Away",
        imageUrl: "https://images.unsplash.com/photo-1617499764932-8a56f915e1dd?q=80&w=1000",
        onPress: () => {},
        onViewDeal: () => {},
        dealType: "percentage" as DealType,
        happeningNow: false,
        contactInfo: {
          phone: "(804) 555-1234",
          address: "3158 W Cary St, Richmond, VA 23221"
        },
        expirationDate: "2025-12-31",
        maxRedemptions: 10,
        remainingRedemptions: 10,
        terms: ["Valid Monday-Friday, 4-7PM", "Must be 21+ for alcoholic beverages", "Limit 2 per customer"],
        isRedeemed: false
      }
    ]
  },
  {
    id: "pinkys-richmond",
    name: "Pinky's",
    tags: [
      { text: "American", variant: "american" },
      { text: "Local", variant: "local" },
      { text: "Sit Down", variant: "sitdown" }
    ] as RestaurantTag[],
    rating: "4.5",
    reviews: "8000",
    distance: "0.8 Miles Away",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    location: "3126 W Cary St, Richmond, VA 23221",
    description: "Upscale casual American eatery in Carytown featuring gourmet burgers, craft cocktails, and seasonal dishes made with locally-sourced ingredients. Our cozy atmosphere and patio seating make Pinky's a neighborhood favorite for brunch, dinner, and everything in between.",
    cuisine: ["American", "Burgers", "Craft Cocktails"],
    priceLevel: 3,
    hours: {
      "Monday": { open: "11:30 AM", close: "9:00 PM" },
      "Tuesday": { open: "11:30 AM", close: "9:00 PM" },
      "Wednesday": { open: "11:30 AM", close: "9:00 PM" },
      "Thursday": { open: "11:30 AM", close: "10:00 PM" },
      "Friday": { open: "11:30 AM", close: "11:00 PM" },
      "Saturday": { open: "10:00 AM", close: "11:00 PM" },
      "Sunday": { open: "10:00 AM", close: "8:00 PM" }
    },
    phoneNumber: "(804) 555-7890",
    website: "www.pinkysrva.com",
    deals: [
      {
        id: "pinkys-deal1",
        restaurantName: "Pinky's",
        location: "3126 W Cary St, Richmond, VA 23221",
        rating: 4.5,
        reviewCount: 8000,
        dealDescription: "Weekend Brunch Special",
        dealDetails: "Enjoy our signature brunch menu with $8 mimosa carafes every Saturday and Sunday morning.",
        distance: "0.8 Miles Away",
        imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
        onPress: () => {},
        onViewDeal: () => {},
        dealType: "fixedAmount" as DealType,
        happeningNow: false,
        contactInfo: {
          phone: "(804) 555-7890",
          address: "3126 W Cary St, Richmond, VA 23221"
        },
        expirationDate: "2025-12-31",
        maxRedemptions: 3,
        remainingRedemptions: 3,
        terms: ["Valid Saturday-Sunday, 10AM-2PM", "One carafe per table", "Must purchase brunch entree"],
        isRedeemed: false
      },
      {
        id: "pinkys-deal2",
        restaurantName: "Pinky's",
        location: "3126 W Cary St, Richmond, VA 23221",
        rating: 4.5,
        reviewCount: 8000,
        dealDescription: "Burger & Beer Wednesdays",
        dealDetails: "Get any signature burger with a local craft beer for just $15.",
        distance: "0.8 Miles Away",
        imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
        onPress: () => {},
        onViewDeal: () => {},
        dealType: "fixedAmount" as DealType,
        happeningNow: true,
        contactInfo: {
          phone: "(804) 555-7890",
          address: "3126 W Cary St, Richmond, VA 23221"
        },
        expirationDate: "2025-12-31",
        maxRedemptions: 5,
        remainingRedemptions: 4,
        terms: ["Valid Wednesdays, 4PM-9PM", "One deal per customer", "Dine-in only"],
        isRedeemed: false
      }
    ]
  },
  {
    id: "thai-lotus-fan",
    name: "Thai Lotus",
    tags: [
      { text: "Thai", variant: "local" },
      { text: "Spicy", variant: "fast" }
    ] as RestaurantTag[],
    rating: "4.2",
    reviews: "3000",
    distance: "2.1 Miles Away",
    imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000",
    location: "6940 Forest Hill Ave, Richmond, VA 23225",
    description: "Authentic Thai cuisine served in a relaxed setting with elegant touches. Our menu features traditional favorites like Pad Thai and Green Curry, along with chef's specialties. We pride ourselves on using fresh ingredients and balancing the complex flavors of sweet, sour, salty, and spicy that Thai cuisine is known for.",
    cuisine: ["Thai", "Asian", "Curry"],
    priceLevel: 2,
    hours: {
      "Monday": { open: "11:00 AM", close: "9:30 PM" },
      "Tuesday": { open: "11:00 AM", close: "9:30 PM" },
      "Wednesday": { open: "11:00 AM", close: "9:30 PM" },
      "Thursday": { open: "11:00 AM", close: "9:30 PM" },
      "Friday": { open: "11:00 AM", close: "10:30 PM" },
      "Saturday": { open: "12:00 PM", close: "10:30 PM" },
      "Sunday": { open: "12:00 PM", close: "9:00 PM" }
    },
    phoneNumber: "(804) 555-4321",
    website: "www.thailotusrva.com",
    deals: [
      {
        id: "thai-lotus-deal1",
        restaurantName: "Thai Lotus",
        location: "6940 Forest Hill Ave, Richmond, VA 23225",
        rating: 4.2,
        reviewCount: 3000,
        dealDescription: "Lunch Special",
        dealDetails: "Monday-Friday lunch specials include an entree, spring roll, and soup for just $12.99.",
        distance: "2.1 Miles Away",
        imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000",
        onPress: () => {},
        onViewDeal: () => {},
        dealType: "percentage" as DealType,
        happeningNow: true,
        contactInfo: {
          phone: "(804) 555-4321",
          address: "6940 Forest Hill Ave, Richmond, VA 23225"
        },
        expirationDate: "2025-12-31",
        maxRedemptions: 20,
        remainingRedemptions: 15,
        terms: ["Valid Monday-Friday, 11AM-3PM", "Dine-in only", "One special per person"],
        isRedeemed: false
      },
      {
        id: "thai-lotus-deal2",
        restaurantName: "Thai Lotus",
        location: "6940 Forest Hill Ave, Richmond, VA 23225",
        rating: 4.2,
        reviewCount: 3000,
        dealDescription: "Family Pack Sunday",
        dealDetails: "Feed the whole family with our special family pack: 2 appetizers, 3 entrees, and 1 dessert for $49.99.",
        distance: "2.1 Miles Away",
        imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000",
        onPress: () => {},
        onViewDeal: () => {},
        dealType: "fixedAmount" as DealType,
        happeningNow: false,
        contactInfo: {
          phone: "(804) 555-4321",
          address: "6940 Forest Hill Ave, Richmond, VA 23225"
        },
        expirationDate: "2025-12-31",
        maxRedemptions: 10,
        remainingRedemptions: 8,
        terms: ["Valid Sundays, 4PM-9PM", "Dine-in or takeout", "Family pack serves 4-5 people"],
        isRedeemed: false
      }
    ]
  }
];

export const dareToTryRestaurants: RestaurantData[] = [
  {
    id: "lulus-richmond",
    name: "Lulu's",
    tags: [
      { text: "Seafood", variant: "local" },
      { text: "Southern", variant: "american" }
    ] as RestaurantTag[],
    rating: "4.4",
    reviews: "3800",
    distance: "1.3 Miles Away",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
    location: "21 N 17th St, Richmond, VA 23219",
    description: "Seafood-focused restaurant with a southern twist, featuring local catches and seasonal ingredients. Known for creative cocktails and raw bar selections in a stylish, industrial-chic space.",
    cuisine: ["Seafood", "Southern", "Craft Cocktails"],
    priceLevel: 3,
    hours: {
      "Monday": { open: "Closed", close: "Closed" },
      "Tuesday": { open: "5:00 PM", close: "10:00 PM" },
      "Wednesday": { open: "5:00 PM", close: "10:00 PM" },
      "Thursday": { open: "5:00 PM", close: "10:00 PM" },
      "Friday": { open: "5:00 PM", close: "11:00 PM" },
      "Saturday": { open: "4:00 PM", close: "11:00 PM" },
      "Sunday": { open: "11:00 AM", close: "3:00 PM" }
    },
    phoneNumber: "(804) 555-9876",
    website: "www.lulusrichmond.com",
    deals: [
      {
        id: "lulus-deal1",
        restaurantName: "Lulu's",
        location: "21 N 17th St, Richmond, VA 23219",
        rating: 4.4,
        reviewCount: 3800,
        dealDescription: "Raw Bar Happy Hour",
        dealDetails: "Half-price oysters and $7 house wine during happy hour.",
        distance: "1.3 Miles Away",
        imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
        onPress: () => {},
        onViewDeal: () => {},
        dealType: "percentage" as DealType,
        happeningNow: true,
        contactInfo: {
          phone: "(804) 555-9876",
          address: "21 N 17th St, Richmond, VA 23219"
        },
        expirationDate: "2025-12-31",
        maxRedemptions: 8,
        remainingRedemptions: 6,
        terms: ["Valid Tuesday-Thursday, 5PM-7PM", "Bar area only", "No reservations for happy hour"],
        isRedeemed: false
      },
      {
        id: "lulus-deal2",
        restaurantName: "Lulu's",
        location: "21 N 17th St, Richmond, VA 23219",
        rating: 4.4,
        reviewCount: 3800,
        dealDescription: "Sunday Brunch",
        dealDetails: "Enjoy our Southern brunch with $5 bloody marys and mimosas.",
        distance: "1.3 Miles Away",
        imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
        onPress: () => {},
        onViewDeal: () => {},
        dealType: "fixedAmount" as DealType,
        happeningNow: false,
        contactInfo: {
          phone: "(804) 555-9876",
          address: "21 N 17th St, Richmond, VA 23219"
        },
        expirationDate: "2025-12-31",
        maxRedemptions: 4,
        remainingRedemptions: 4,
        terms: ["Valid Sundays, 11AM-3PM", "Limit 2 drinks per person", "Must purchase brunch entree"],
        isRedeemed: false
      }
    ]
  },
  {
    id: "perlys-richmond",
    name: "Perly's",
    tags: [
      { text: "Jewish Deli", variant: "local" },
      { text: "Breakfast", variant: "fast" }
    ] as RestaurantTag[],
    rating: "4.6",
    reviews: "4200",
    distance: "0.7 Miles Away",
    imageUrl: "https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=1000",
    location: "111 E Grace St, Richmond, VA 23219",
    description: "Classic Jewish deli and restaurant serving traditional favorites like matzo ball soup, knishes, and piled-high sandwiches. Our vintage decor and friendly service make this a downtown Richmond favorite for breakfast and lunch.",
    cuisine: ["Jewish Deli", "Breakfast", "Sandwiches"],
    priceLevel: 2,
    hours: {
      "Monday": { open: "8:00 AM", close: "3:00 PM" },
      "Tuesday": { open: "8:00 AM", close: "3:00 PM" },
      "Wednesday": { open: "8:00 AM", close: "3:00 PM" },
      "Thursday": { open: "8:00 AM", close: "3:00 PM" },
      "Friday": { open: "8:00 AM", close: "3:00 PM" },
      "Saturday": { open: "8:00 AM", close: "3:00 PM" },
      "Sunday": { open: "9:00 AM", close: "3:00 PM" }
    },
    phoneNumber: "(804) 555-3579",
    website: "www.perlysrichmond.com",
    deals: [
      {
        id: "perlys-deal1",
        restaurantName: "Perly's",
        location: "111 E Grace St, Richmond, VA 23219",
        rating: 4.6,
        reviewCount: 4200,
        dealDescription: "Weekday Early Bird",
        dealDetails: "Get 15% off your bill when you dine between 8-9AM, Monday-Friday.",
        distance: "0.7 Miles Away",
        imageUrl: "https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=1000",
        onPress: () => {},
        onViewDeal: () => {},
        dealType: "percentage" as DealType,
        happeningNow: true,
        contactInfo: {
          phone: "(804) 555-3579",
          address: "111 E Grace St, Richmond, VA 23219"
        },
        expirationDate: "2025-12-31",
        maxRedemptions: 30,
        remainingRedemptions: 22,
        terms: ["Valid Monday-Friday, 8AM-9AM", "Entire bill discount", "Cannot be combined with other offers"],
        isRedeemed: false
      },
      {
        id: "perlys-deal2",
        restaurantName: "Perly's",
        location: "111 E Grace St, Richmond, VA 23219",
        rating: 4.6,
        reviewCount: 4200,
        dealDescription: "Sandwich & Soup Combo",
        dealDetails: "Get a half sandwich and cup of soup for $10 (save $4).",
        distance: "0.7 Miles Away",
        imageUrl: "https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=1000",
        onPress: () => {},
        onViewDeal: () => {},
        dealType: "fixedAmount" as DealType,
        happeningNow: false,
        contactInfo: {
          phone: "(804) 555-3579",
          address: "111 E Grace St, Richmond, VA 23219"
        },
        expirationDate: "2025-12-31",
        maxRedemptions: 50,
        remainingRedemptions: 38,
        terms: ["Valid Monday-Friday, 11AM-2PM", "Select sandwiches only", "Additional charge for premium soups"],
        isRedeemed: false,
        redemptionCode: "LUNCH10"
      }
    ]
  }
];