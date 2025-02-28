// mock/restaurantData.ts
import { RestaurantTag } from '../types/restaurant';
import { DealCardProps, DealType } from '../types/deals';

// Extended restaurant type that includes all necessary fields for the profile card
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

export interface RestaurantData {
  id: string; 
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
    imageUrl: "https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=1000",
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
        dealType: DealType.REDEEMABLE,
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
        dealType: DealType.REDEEMABLE,
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
    ],
    menu: {
      categories: ["Tacos", "Entrees", "Drinks", "Desserts"],
      items: [
        {
          id: "cochiloco-item1",
          name: "Carne Asada Tacos",
          description: "Three street-style tacos with marinated grilled steak, onions, cilantro, and lime on handmade corn tortillas.",
          price: "$12.99",
          category: "Tacos",
          popular: true,
          dietaryInfo: ["Gluten-Free"]
        },
        {
          id: "cochiloco-item2",
          name: "Enchiladas Verdes",
          description: "Two corn tortillas stuffed with shredded chicken, topped with verde sauce, queso fresco, and Mexican crema. Served with rice and beans.",
          price: "$15.99",
          category: "Entrees",
          popular: false,
          dietaryInfo: ["Gluten-Free"]
        },
        {
          id: "cochiloco-item3",
          name: "House Margarita",
          description: "Our signature margarita made with silver tequila, fresh lime juice, and agave nectar. Available frozen or on the rocks.",
          price: "$9.99",
          category: "Drinks",
          popular: true
        },
        {
          id: "cochiloco-item4",
          name: "Vegetarian Burrito Bowl",
          description: "Cilantro-lime rice topped with black beans, roasted vegetables, guacamole, pico de gallo, and chipotle crema.",
          price: "$13.99",
          category: "Entrees",
          dietaryInfo: ["Vegetarian", "Gluten-Free"]
        },
        {
          id: "cochiloco-item5",
          name: "Churros con Chocolate",
          description: "Crispy cinnamon-sugar coated churros served with warm chocolate dipping sauce.",
          price: "$7.99",
          category: "Desserts",
          popular: true,
          dietaryInfo: ["Vegetarian"]
        }
      ]
    }
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
        dealType: DealType.INFORMATIONAL,
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
        dealType: DealType.INFORMATIONAL,
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
    ],
    menu: {
      categories: ["Burgers", "Sides", "Brunch", "Drinks", "Entrees"],
      items: [
        {
          id: "pinkys-item1",
          name: "The Pinky Burger",
          description: "House specialty 8oz grass-fed beef patty with aged cheddar, caramelized onions, house-made pickles, and signature sauce on a toasted brioche bun. Served with hand-cut fries.",
          price: "$16.99",
          category: "Burgers",
          popular: true
        },
        {
          id: "pinkys-item2",
          name: "Truffle Mac & Cheese",
          description: "Cavatappi pasta in a creamy four-cheese sauce with black truffle oil and toasted breadcrumbs.",
          price: "$14.99",
          category: "Sides",
          popular: true,
          dietaryInfo: ["Vegetarian"]
        },
        {
          id: "pinkys-item3",
          name: "Avocado Toast",
          description: "Artisanal sourdough toast topped with smashed avocado, heirloom tomatoes, microgreens, and a poached egg. Served with mixed greens.",
          price: "$13.99",
          category: "Brunch",
          dietaryInfo: ["Vegetarian"]
        },
        {
          id: "pinkys-item4",
          name: "Bourbon Old Fashioned",
          description: "Small-batch bourbon with house-made bitters, sugar, and orange peel. Served over a large ice cube.",
          price: "$12.99",
          category: "Drinks",
          popular: false
        },
        {
          id: "pinkys-item5",
          name: "Quinoa Power Bowl",
          description: "Tri-color quinoa with roasted seasonal vegetables, kale, chickpeas, avocado, and lemon-tahini dressing.",
          price: "$15.99",
          category: "Entrees",
          dietaryInfo: ["Vegan", "Gluten-Free"]
        }
      ]
    }
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
        dealType: DealType.REDEEMABLE,
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
        dealType: DealType.REDEEMABLE,
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
    ],
    menu: {
      categories: ["Noodles", "Curry", "Desserts", "Soups", "Drinks"],
      items: [
        {
          id: "thai-lotus-item1",
          name: "Pad Thai",
          description: "Rice noodles stir-fried with eggs, bean sprouts, green onions, and your choice of protein in our signature tamarind sauce. Topped with crushed peanuts and lime.",
          price: "$14.99",
          category: "Noodles",
          popular: true,
          dietaryInfo: ["Gluten-Free"]
        },
        {
          id: "thai-lotus-item2",
          name: "Green Curry",
          description: "Aromatic green curry with bamboo shoots, bell peppers, Thai basil, and your choice of protein. Served with jasmine rice.",
          price: "$15.99",
          category: "Curry",
          popular: true,
          dietaryInfo: ["Gluten-Free"]
        },
        {
          id: "thai-lotus-item3",
          name: "Mango Sticky Rice",
          description: "Sweet coconut sticky rice topped with fresh mango slices and toasted sesame seeds. A traditional Thai dessert.",
          price: "$7.99",
          category: "Desserts",
          dietaryInfo: ["Vegetarian", "Gluten-Free"]
        },
        {
          id: "thai-lotus-item4",
          name: "Tom Yum Soup",
          description: "Hot and sour lemongrass soup with mushrooms, tomatoes, and your choice of protein. Flavored with lime juice, galangal, and Thai chili.",
          price: "$6.99",
          category: "Soups",
          dietaryInfo: ["Gluten-Free"]
        },
        {
          id: "thai-lotus-item5",
          name: "Thai Iced Tea",
          description: "Sweetened Thai tea topped with condensed milk. A refreshing complement to spicy dishes.",
          price: "$3.99",
          category: "Drinks",
          popular: false,
          dietaryInfo: ["Vegetarian"]
        }
      ]
    }
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
        dealType: DealType.REDEEMABLE,
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
        dealType: DealType.REDEEMABLE,
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
    ],
    menu: {
      categories: ["Raw Bar", "Entrees", "Drinks", "Desserts"],
      items: [
        {
          id: "lulus-item1",
          name: "East Coast Oysters",
          description: "Half dozen fresh local oysters served on ice with mignonette, cocktail sauce, and lemon.",
          price: "$18.99",
          category: "Raw Bar",
          popular: true,
          dietaryInfo: ["Gluten-Free"]
        },
        {
          id: "lulus-item2",
          name: "Shrimp & Grits",
          description: "Creamy stone-ground grits topped with sautéed Gulf shrimp, andouille sausage, bell peppers, and a Cajun cream sauce.",
          price: "$24.99",
          category: "Entrees",
          popular: true,
          dietaryInfo: ["Gluten-Free"]
        },
        {
          id: "lulus-item3",
          name: "Seafood Boil",
          description: "Low country boil with snow crab legs, shrimp, andouille sausage, corn on the cob, and red potatoes. Served with drawn butter and Old Bay seasoning.",
          price: "$34.99",
          category: "Entrees",
          popular: false,
          dietaryInfo: ["Gluten-Free"]
        },
        {
          id: "lulus-item4",
          name: "Bourbon Peach Smash",
          description: "Small-batch Virginia bourbon with muddled fresh peaches, mint, lemon juice, and simple syrup. Served over crushed ice.",
          price: "$13.99",
          category: "Drinks",
          popular: true
        },
        {
          id: "lulus-item5",
          name: "Southern Banana Pudding",
          description: "Homemade vanilla pudding layered with fresh bananas, vanilla wafers, and topped with whipped cream and a caramel drizzle.",
          price: "$8.99",
          category: "Desserts",
          dietaryInfo: ["Vegetarian"]
        }
      ]
    }
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
        dealType: DealType.REDEEMABLE,
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
        dealType: DealType.REDEEMABLE,
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
    ],
    menu: {
      categories: ["Sandwiches", "Soups", "Breakfast", "Sides"],
      items: [
        {
          id: "perlys-item1",
          name: "The Reuben",
          description: "House-cured corned beef piled high with sauerkraut, Swiss cheese, and Russian dressing on grilled rye bread. Served with a pickle spear and potato salad.",
          price: "$15.99",
          category: "Sandwiches",
          popular: true
        },
        {
          id: "perlys-item2",
          name: "Matzo Ball Soup",
          description: "Classic chicken soup with vegetables, fresh herbs, and a fluffy matzo ball. Served with a slice of challah bread.",
          price: "$6.99",
          category: "Soups",
          popular: true,
          dietaryInfo: ["Dairy-Free"]
        },
        {
          id: "perlys-item3",
          name: "Challah French Toast",
          description: "Thick slices of house-made challah bread dipped in cinnamon-vanilla batter and grilled to perfection. Served with maple syrup and fresh berries.",
          price: "$13.99",
          category: "Breakfast",
          popular: true,
          dietaryInfo: ["Vegetarian"]
        },
        {
          id: "perlys-item4",
          name: "Potato Latkes",
          description: "Crispy potato pancakes served with apple sauce and sour cream.",
          price: "$9.99",
          category: "Sides",
          dietaryInfo: ["Vegetarian"]
        },
        {
          id: "perlys-item5",
          name: "Smoked Salmon Plate",
          description: "House-smoked Nova salmon served with cream cheese, capers, red onions, tomatoes, and your choice of bagel.",
          price: "$16.99",
          category: "Breakfast",
          popular: false
        }
      ]
    }
  }
];