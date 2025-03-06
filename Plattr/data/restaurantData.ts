// restaurantData.ts
// Updated to ensure consistency with deals.ts

import { Restaurant } from '../types/restaurant';
import { MenuItem } from '../types/menuItem';
import { Deal } from '../types/deals';
import { getDealsByRestaurant } from './mockDeals';

// Mock restaurants data using the new schema
export const restaurants: Restaurant[] = [
  {
    // Restaurant 1 - Can Can Brasserie
    PK: "RESTAURANT#restaurant_201",
    SK: "METADATA#restaurant_201",
    GSI1PK: "LOCATION#dr5r7",
    GSI1SK: "RESTAURANT#1",
    GSI2PK: "CUISINE#French",
    GSI2SK: "RESTAURANT#4.6#1",
    
    id: "restaurant_201",
    name: "Can Can Brasserie",
    description: "Authentic French cuisine in a casual setting with an extensive wine list and homemade pastries. Our Parisian-style brasserie features classic dishes and a lively atmosphere reminiscent of the cafés lining the boulevards of Paris.",
    address: {
      street: "3120 W Cary St",
      city: "Richmond",
      state: "VA",
      zip: "23221",
      coordinates: {
        latitude: 37.5534,
        longitude: -77.4512
      }
    },
    phoneNumber: "(804) 358-7274",
    email: "info@cancanbrasserie.com",
    website: "www.cancanbrasserie.com",
    priceLevel: 3,
    cuisines: ["French", "European", "Brunch"],
    tags: [
      { text: "French", variant: "local" },
      { text: "Brunch", variant: "sitdown" },
      { text: "Wine", variant: "local" }
    ],
    hours: {
      "monday": { open: "11:00", close: "22:00" },
      "tuesday": { open: "11:00", close: "22:00" },
      "wednesday": { open: "11:00", close: "22:00" },
      "thursday": { open: "11:00", close: "23:00" },
      "friday": { open: "11:00", close: "23:00" },
      "saturday": { open: "10:00", close: "23:00" },
      "sunday": { open: "10:00", close: "21:00" }
    },
    rating: 4.6,
    reviewCount: 1042,
    imageUrls: {
      primary: require('../assets/images/restaurants/resTwo.jpg'),
      gallery: [
        require('../assets/images/restaurants/resOne.jpg'),
        require('../assets/images/restaurants/resFive.jpg'),
        require('../assets/images/restaurants/resSix.jpg')
      ]
    },
    createdAt: "2024-09-15T14:30:00Z",
    updatedAt: "2025-01-10T09:15:00Z",
    isActive: true,
    businessAccountId: "business_101"
  },
  {
    // Restaurant 2 - Lemaire Restaurant
    PK: "RESTAURANT#restaurant_202",
    SK: "METADATA#restaurant_202",
    GSI1PK: "LOCATION#dr5r6",
    GSI1SK: "RESTAURANT#2",
    GSI2PK: "CUISINE#American",
    GSI2SK: "RESTAURANT#4.7#1",
    
    id: "restaurant_202",
    name: "Lemaire Restaurant",
    description: "Upscale dining in the historic Jefferson Hotel featuring locally-sourced ingredients in Southern-inspired dishes. Lemaire combines the elegance of fine dining with a more approachable, contemporary experience.",
    address: {
      street: "101 W Franklin St",
      city: "Richmond",
      state: "VA",
      zip: "23220",
      coordinates: {
        latitude: 37.5460,
        longitude: -77.4427
      }
    },
    phoneNumber: "(804) 649-4629",
    email: "info@lemairerestaurant.com",
    website: "www.lemairerestaurant.com",
    priceLevel: 4,
    cuisines: ["American", "Southern", "Fine Dining"],
    tags: [
      { text: "Southern", variant: "local" },
      { text: "Fine Dining", variant: "sitdown" },
      { text: "Cocktails", variant: "local" }
    ],
    hours: {
      "monday": { open: "17:00", close: "22:00" },
      "tuesday": { open: "17:00", close: "22:00" },
      "wednesday": { open: "17:00", close: "22:00" },
      "thursday": { open: "17:00", close: "22:00" },
      "friday": { open: "17:00", close: "22:30" },
      "saturday": { open: "17:00", close: "22:30" },
      "sunday": { open: "17:00", close: "21:00" }
    },
    rating: 4.7,
    reviewCount: 910,
    imageUrls: {
      primary: require('../assets/images/restaurants/resThree.jpg'),
      gallery: [
        require('../assets/images/restaurants/resOne.jpg'),
        require('../assets/images/restaurants/resTwo.jpg'),
        require('../assets/images/restaurants/resFour.jpg')
      ]
    },
    createdAt: "2024-10-01T10:15:00Z",
    updatedAt: "2025-01-05T11:20:00Z",
    isActive: true,
    businessAccountId: "business_102"
  },
  {
    // Restaurant 3 - Lulu's
    PK: "RESTAURANT#restaurant_203",
    SK: "METADATA#restaurant_203",
    GSI1PK: "LOCATION#dr5r7",
    GSI1SK: "RESTAURANT#3",
    GSI2PK: "CUISINE#Seafood",
    GSI2SK: "RESTAURANT#4.4#1",
    
    id: "restaurant_203",
    name: "Lulu's",
    description: "Seafood-focused restaurant with a southern twist, featuring local catches and seasonal ingredients. Known for creative cocktails and raw bar selections in a stylish, industrial-chic space.",
    address: {
      street: "21 N 17th St",
      city: "Richmond",
      state: "VA",
      zip: "23219",
      coordinates: {
        latitude: 37.5407,
        longitude: -77.4360
      }
    },
    phoneNumber: "(804) 555-9876",
    email: "info@lulusrichmond.com",
    website: "www.lulusrichmond.com",
    priceLevel: 3,
    cuisines: ["Seafood", "Southern", "Craft Cocktails"],
    tags: [
      { text: "Seafood", variant: "local" },
      { text: "Southern", variant: "american" },
      { text: "Craft Cocktails", variant: "sitdown" }
    ],
    hours: {
      "monday": { open: "Closed", close: "Closed" },
      "tuesday": { open: "17:00", close: "22:00" },
      "wednesday": { open: "17:00", close: "22:00" },
      "thursday": { open: "17:00", close: "22:00" },
      "friday": { open: "17:00", close: "23:00" },
      "saturday": { open: "16:00", close: "23:00" },
      "sunday": { open: "11:00", close: "15:00" }
    },
    rating: 4.4,
    reviewCount: 3800,
    imageUrls: {
      primary: require('../assets/images/restaurants/resFive.jpg'),
      gallery: [
        require('../assets/images/restaurants/resOne.jpg'),
        require('../assets/images/restaurants/resSix.jpg'),
        require('../assets/images/restaurants/resTwo.jpg')
      ]
    },
    createdAt: "2024-11-10T09:30:00Z",
    updatedAt: "2024-12-15T14:45:00Z",
    isActive: true,
    businessAccountId: "business_103"
  },
  {
    // Restaurant 4 - Perly's
    PK: "RESTAURANT#restaurant_103",
    SK: "METADATA#restaurant_103",
    GSI1PK: "LOCATION#dr5r6",
    GSI1SK: "RESTAURANT#4",
    GSI2PK: "CUISINE#Jewish",
    GSI2SK: "RESTAURANT#4.6#1",
    
    id: "restaurant_103",
    name: "Perly's Restaurant & Delicatessen",
    description: "Classic Jewish deli and restaurant serving traditional favorites like matzo ball soup, knishes, and piled-high sandwiches. Our vintage decor and friendly service make this a downtown Richmond favorite for breakfast and lunch.",
    address: {
      street: "111 E Grace St",
      city: "Richmond",
      state: "VA",
      zip: "23219",
      coordinates: {
        latitude: 37.5429,
        longitude: -77.4372
      }
    },
    phoneNumber: "(804) 555-3579",
    email: "info@perlysrichmond.com",
    website: "www.perlysrichmond.com",
    priceLevel: 2,
    cuisines: ["Jewish Deli", "Breakfast", "Sandwiches"],
    tags: [
      { text: "Jewish Deli", variant: "local" },
      { text: "Breakfast", variant: "fast" },
      { text: "Sandwiches", variant: "fast" }
    ],
    hours: {
      "monday": { open: "08:00", close: "15:00" },
      "tuesday": { open: "08:00", close: "15:00" },
      "wednesday": { open: "08:00", close: "15:00" },
      "thursday": { open: "08:00", close: "15:00" },
      "friday": { open: "08:00", close: "15:00" },
      "saturday": { open: "08:00", close: "15:00" },
      "sunday": { open: "09:00", close: "15:00" }
    },
    rating: 4.6,
    reviewCount: 4200,
    imageUrls: {
      primary: require('../assets/images/restaurants/resFour.jpg'),
      gallery: [
        require('../assets/images/restaurants/resOne.jpg'),
        require('../assets/images/restaurants/resTwo.jpg'),
        require('../assets/images/restaurants/resSix.jpg')
      ]
    },
    createdAt: "2024-08-05T11:30:00Z",
    updatedAt: "2024-12-01T09:15:00Z",
    isActive: true,
    businessAccountId: "business_104"
  },
  {
    // Restaurant 5 - ZZQ Texas Craft Barbeque
    PK: "RESTAURANT#restaurant_104",
    SK: "METADATA#restaurant_104",
    GSI1PK: "LOCATION#dr5r8",
    GSI1SK: "RESTAURANT#5",
    GSI2PK: "CUISINE#BBQ",
    GSI2SK: "RESTAURANT#4.8#1",
    
    id: "restaurant_104",
    name: "ZZQ Texas Craft Barbeque",
    description: "Authentic Central Texas-style barbecue featuring slow-smoked brisket, ribs, and house-made sausages. Our meats are smoked with oak and hickory for up to 16 hours, creating the perfect bark and smoke ring.",
    address: {
      street: "3201 W Moore St",
      city: "Richmond",
      state: "VA",
      zip: "23230",
      coordinates: {
        latitude: 37.5675,
        longitude: -77.4890
      }
    },
    phoneNumber: "(804) 555-8427",
    email: "info@zzqrva.com",
    website: "www.zzqrva.com",
    priceLevel: 2,
    cuisines: ["Barbecue", "Texas", "Southern"],
    tags: [
      { text: "BBQ", variant: "american" },
      { text: "Craft Beer", variant: "local" },
      { text: "Outdoor Seating", variant: "sitdown" }
    ],
    hours: {
      "monday": { open: "Closed", close: "Closed" },
      "tuesday": { open: "Closed", close: "Closed" },
      "wednesday": { open: "11:00", close: "20:00" },
      "thursday": { open: "11:00", close: "20:00" },
      "friday": { open: "11:00", close: "22:00" },
      "saturday": { open: "11:00", close: "22:00" },
      "sunday": { open: "11:00", close: "18:00" }
    },
    rating: 4.8,
    reviewCount: 935,
    imageUrls: {
      primary: require('../assets/images/restaurants/resTwo.jpg'),
      gallery: [
        require('../assets/images/restaurants/resOne.jpg'),
        require('../assets/images/restaurants/resFour.jpg'),
        require('../assets/images/restaurants/resSix.jpg')
      ]
    },
    createdAt: "2024-07-12T14:30:00Z",
    updatedAt: "2024-11-20T10:15:00Z",
    isActive: true,
    businessAccountId: "business_105"
  },
  {
    // Restaurant 6 - Pinky's
    PK: "RESTAURANT#restaurant_206",
    SK: "METADATA#restaurant_206",
    GSI1PK: "LOCATION#dr5r7",
    GSI1SK: "RESTAURANT#6",
    GSI2PK: "CUISINE#American",
    GSI2SK: "RESTAURANT#4.5#2",
    
    id: "restaurant_206",
    name: "Pinky's",
    description: "Upscale casual American eatery featuring gourmet burgers, craft cocktails, and seasonal dishes made with locally-sourced ingredients. Our cozy atmosphere and patio seating make Pinky's a neighborhood favorite for brunch, dinner, and everything in between.",
    address: {
      street: "3126 W Cary St",
      city: "Richmond",
      state: "VA",
      zip: "23221",
      coordinates: {
        latitude: 37.5527,
        longitude: -77.4482
      }
    },
    phoneNumber: "(804) 555-7890",
    email: "info@pinkysrva.com",
    website: "www.pinkysrva.com",
    priceLevel: 3,
    cuisines: ["American", "Burgers", "Craft Cocktails"],
    tags: [
      { text: "American", variant: "american" },
      { text: "Local", variant: "local" },
      { text: "Sit Down", variant: "sitdown" }
    ],
    hours: {
      "monday": { open: "11:30", close: "21:00" },
      "tuesday": { open: "11:30", close: "21:00" },
      "wednesday": { open: "11:30", close: "21:00" },
      "thursday": { open: "11:30", close: "22:00" },
      "friday": { open: "11:30", close: "23:00" },
      "saturday": { open: "10:00", close: "23:00" },
      "sunday": { open: "10:00", close: "20:00" }
    },
    rating: 4.5,
    reviewCount: 8000,
    imageUrls: {
      primary: require('../assets/images/restaurants/resFour.jpg'),
      gallery: [
        require('../assets/images/restaurants/resFive.jpg'),
        require('../assets/images/restaurants/resSix.jpg'),
        require('../assets/images/restaurants/resOne.jpg')
      ]
    },
    createdAt: "2024-09-01T12:30:00Z",
    updatedAt: "2024-12-10T14:15:00Z",
    isActive: true,
    businessAccountId: "business_106"
  }
];

// Sample menu items for restaurants using the new schema
export const menuItems: MenuItem[] = [
  // Menu items for Can Can Brasserie
  {
    PK: "RESTAURANT#restaurant_201",
    SK: "MENUITEM#item_001",
    id: "item_001",
    name: "Croque Monsieur",
    description: "Classic French sandwich with ham, Gruyère cheese, and béchamel sauce on house-made bread.",
    price: 14.99,
    category: "Lunch",
    imageUrl: require('../assets/images/restaurants/resOne.jpg'),
    isPopular: true,
    dietaryInfo: [],
    createdAt: "2024-11-01T10:00:00Z",
    updatedAt: "2024-11-01T10:00:00Z",
    isActive: true
  },
  {
    PK: "RESTAURANT#restaurant_201",
    SK: "MENUITEM#item_002",
    id: "item_002",
    name: "Steak Frites",
    description: "Pan-seared hanger steak with maitre d'hotel butter and hand-cut fries.",
    price: 28.99,
    category: "Dinner",
    imageUrl: require('../assets/images/restaurants/resTwo.jpg'),
    isPopular: true,
    dietaryInfo: ["Gluten-Free"],
    createdAt: "2024-11-01T10:30:00Z",
    updatedAt: "2024-11-01T10:30:00Z",
    isActive: true
  },
  {
    PK: "RESTAURANT#restaurant_201",
    SK: "MENUITEM#item_003",
    id: "item_003",
    name: "French Onion Soup",
    description: "Traditional onion soup with beef broth, caramelized onions, and melted Gruyère.",
    price: 10.99,
    category: "Appetizers",
    imageUrl: null,
    isPopular: false,
    dietaryInfo: [],
    createdAt: "2024-11-01T11:00:00Z",
    updatedAt: "2024-11-01T11:00:00Z",
    isActive: true
  },
  
  // Menu items for Lemaire Restaurant
  {
    PK: "RESTAURANT#restaurant_202",
    SK: "MENUITEM#item_101",
    id: "item_101",
    name: "Shrimp & Grits",
    description: "Virginia shrimp, Anson Mills grits, Surry sausage, roasted peppers, and shellfish butter.",
    price: 32.99,
    category: "Entrees",
    imageUrl: require('../assets/images/restaurants/resThree.jpg'),
    isPopular: true,
    dietaryInfo: ["Gluten-Free"],
    createdAt: "2024-11-05T09:00:00Z",
    updatedAt: "2024-11-05T09:00:00Z",
    isActive: true
  },
  {
    PK: "RESTAURANT#restaurant_202",
    SK: "MENUITEM#item_102",
    id: "item_102",
    name: "Bourbon Old Fashioned",
    description: "Virginia bourbon, house-made bitters, sugar, and orange peel.",
    price: 14.99,
    category: "Cocktails",
    imageUrl: null,
    isPopular: true,
    dietaryInfo: ["Vegan", "Gluten-Free"],
    createdAt: "2024-11-05T09:30:00Z",
    updatedAt: "2024-11-05T09:30:00Z",
    isActive: true
  },
  
  // Menu items for Lulu's
  {
    PK: "RESTAURANT#restaurant_203",
    SK: "MENUITEM#item_201",
    id: "item_201",
    name: "Oysters on the Half Shell",
    description: "Half dozen fresh local oysters served with mignonette and cocktail sauce.",
    price: 18.99,
    category: "Raw Bar",
    imageUrl: require('../assets/images/restaurants/resFive.jpg'),
    isPopular: true,
    dietaryInfo: ["Gluten-Free"],
    createdAt: "2024-11-10T11:30:00Z",
    updatedAt: "2024-11-10T11:30:00Z",
    isActive: true
  },
  {
    PK: "RESTAURANT#restaurant_203",
    SK: "MENUITEM#item_202",
    id: "item_202",
    name: "Crab Cakes",
    description: "Jumbo lump crab cakes with remoulade sauce, mixed greens, and lemon.",
    price: 30.99,
    category: "Entrees",
    imageUrl: require('../assets/images/restaurants/resSix.jpg'),
    isPopular: true,
    dietaryInfo: [],
    createdAt: "2024-11-10T12:00:00Z",
    updatedAt: "2024-11-10T12:00:00Z",
    isActive: true
  },
  
  // Menu items for Perly's
  {
    PK: "RESTAURANT#restaurant_103",
    SK: "MENUITEM#item_301",
    id: "item_301",
    name: "The Reuben",
    description: "House-cured corned beef piled high with sauerkraut, Swiss cheese, and Russian dressing on grilled rye bread. Served with a pickle spear and potato salad.",
    price: 15.99,
    category: "Sandwiches",
    imageUrl: require('../assets/images/restaurants/resOne.jpg'),
    isPopular: true,
    dietaryInfo: [],
    createdAt: "2024-10-15T11:30:00Z",
    updatedAt: "2024-10-15T11:30:00Z",
    isActive: true
  },
  {
    PK: "RESTAURANT#restaurant_103",
    SK: "MENUITEM#item_302",
    id: "item_302",
    name: "Matzo Ball Soup",
    description: "Classic chicken soup with vegetables, fresh herbs, and a fluffy matzo ball. Served with a slice of challah bread.",
    price: 6.99,
    category: "Soups",
    imageUrl: null,
    isPopular: true,
    dietaryInfo: ["Dairy-Free"],
    createdAt: "2024-10-15T12:00:00Z",
    updatedAt: "2024-10-15T12:00:00Z",
    isActive: true
  },
  
  // Adding menu items for ZZQ
  {
    PK: "RESTAURANT#restaurant_104",
    SK: "MENUITEM#item_401",
    id: "item_401",
    name: "Brisket Plate",
    description: "Half-pound of slow-smoked prime brisket with two sides and housemade pickles.",
    price: 22.99,
    category: "Barbecue Plates",
    imageUrl: require('../assets/images/restaurants/resTwo.jpg'),
    isPopular: true,
    dietaryInfo: ["Gluten-Free"],
    createdAt: "2024-10-20T11:00:00Z",
    updatedAt: "2024-10-20T11:00:00Z",
    isActive: true
  },
  {
    PK: "RESTAURANT#restaurant_104",
    SK: "MENUITEM#item_402",
    id: "item_402",
    name: "Jalapeño Cheddar Sausage",
    description: "House-made pork sausage studded with jalapeños and cheddar cheese.",
    price: 8.99,
    category: "À La Carte",
    imageUrl: null,
    isPopular: true,
    dietaryInfo: ["Gluten-Free"],
    createdAt: "2024-10-20T11:30:00Z",
    updatedAt: "2024-10-20T11:30:00Z",
    isActive: true
  },
  
  // Adding menu items for Pinky's
  {
    PK: "RESTAURANT#restaurant_206",
    SK: "MENUITEM#item_501",
    id: "item_501",
    name: "Signature Burger",
    description: "House-ground beef patty with aged cheddar, caramelized onions, house pickles, and special sauce on a brioche bun.",
    price: 16.99,
    category: "Burgers",
    imageUrl: require('../assets/images/restaurants/resFour.jpg'),
    isPopular: true,
    dietaryInfo: [],
    createdAt: "2024-09-20T10:00:00Z",
    updatedAt: "2024-09-20T10:00:00Z",
    isActive: true
  },
  {
    PK: "RESTAURANT#restaurant_206",
    SK: "MENUITEM#item_502",
    id: "item_502",
    name: "Avocado Toast",
    description: "Sourdough toast with smashed avocado, poached eggs, pickled red onion, and espelette pepper.",
    price: 12.99,
    category: "Brunch",
    imageUrl: require('../assets/images/restaurants/resFive.jpg'),
    isPopular: true,
    dietaryInfo: ["Vegetarian"],
    createdAt: "2024-09-20T10:30:00Z",
    updatedAt: "2024-09-20T10:30:00Z",
    isActive: true
  }
];

// Restaurant data with associated deals and menu items
export interface RestaurantWithDetails {
  restaurant: Restaurant;
  deals: Deal[];
  menuItems: MenuItem[];
}

// Helper functions to get data for trending and dare to try sections

// Get restaurant with all associated data
export const getRestaurantWithDetails = (restaurantId: string): RestaurantWithDetails | null => {
  const restaurant = restaurants.find(r => r.id === restaurantId);
  if (!restaurant) return null;
  
  const deals = getDealsByRestaurant(restaurantId);
  const restaurantMenuItems = menuItems.filter(item => item.PK === `RESTAURANT#${restaurantId}`);
  
  return {
    restaurant,
    deals,
    menuItems: restaurantMenuItems
  };
};

// Generate trending restaurants data
export const getTrendingRestaurants = (limit: number = 2): RestaurantWithDetails[] => {
  // Sort by rating (highest first)
  const topRatedRestaurants = [...restaurants]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
  
  return topRatedRestaurants.map(restaurant => ({
    restaurant,
    deals: getDealsByRestaurant(restaurant.id),
    menuItems: menuItems.filter(item => item.PK === `RESTAURANT#${restaurant.id}`)
  }));
};

// Generate "dare to try" restaurants data - restaurants with unusual or unique concepts
export const getDareToTryRestaurants = (limit: number = 2): RestaurantWithDetails[] => {
  // In a real implementation, this would use some criteria to find unique restaurants
  // For mock data, we'll just pick a specific set
  const dareToTryIds = ["restaurant_203", "restaurant_103"];
  
  return dareToTryIds
    .map(id => {
      const restaurant = restaurants.find(r => r.id === id);
      if (!restaurant) return null;
      
      return {
        restaurant,
        deals: getDealsByRestaurant(id),
        menuItems: menuItems.filter(item => item.PK === `RESTAURANT#${id}`)
      };
    })
    .filter((item): item is RestaurantWithDetails => item !== null)
    .slice(0, limit);
};

// Get restaurants by cuisine type
export const getRestaurantsByCuisine = (cuisineType: string): RestaurantWithDetails[] => {
  const matchingRestaurants = restaurants.filter(r => 
    r.cuisines.some(c => c.toLowerCase() === cuisineType.toLowerCase())
  );
  
  return matchingRestaurants.map(restaurant => ({
    restaurant,
    deals: getDealsByRestaurant(restaurant.id),
    menuItems: menuItems.filter(item => item.PK === `RESTAURANT#${restaurant.id}`)
  }));
};

// Helper function to calculate distance between two coordinates (in miles)
export const calculateDistance = (
  lat1: number, lon1: number, 
  lat2: number, lon2: number
): number => {
  const R = 3958.8; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  
  return parseFloat(distance.toFixed(1)); // Round to 1 decimal place
};

// Get restaurants near a location
export const getNearbyRestaurants = (
  latitude: number, 
  longitude: number, 
  radiusMiles: number = 5
): RestaurantWithDetails[] => {
  const nearbyRestaurants = restaurants.filter(restaurant => {
    const distance = calculateDistance(
      latitude, longitude,
      restaurant.address.coordinates.latitude,
      restaurant.address.coordinates.longitude
    );
    return distance <= radiusMiles;
  });
  
  return nearbyRestaurants.map(restaurant => ({
    restaurant,
    deals: getDealsByRestaurant(restaurant.id),
    menuItems: menuItems.filter(item => item.PK === `RESTAURANT#${restaurant.id}`)
  }));
};