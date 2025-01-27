// mock/restaurantData.ts
import { RestaurantTag } from '../types/restaurant';

export const trendingRestaurants = [
    {
      name: "Cochiloco | Scott's Addition",
      image: "/api/placeholder/280/160",
      tags: [
        { text: "Mexican", variant: "mexican" },
        { text: "Local", variant: "local" },
        { text: "Fast", variant: "fast" }
      ] as RestaurantTag[],
      rating: "4.0",
      reviews: "13K",
      distance: "1.2 Miles Away",
      imageUrl: "/api/placeholder/280/160"
    },
    {
      name: "Pinky's",
      image: "/api/placeholder/280/160",
      tags: [
        { text: "American", variant: "american" },
        { text: "Local", variant: "local" },
        { text: "Sit Down", variant: "sitdown" }
      ] as RestaurantTag[],
      rating: "4.5",
      reviews: "8K",
      distance: "0.8 Miles Away",
      imageUrl: "/api/placeholder/280/160"
    },
    {
      name: "Thai Lotus",
      image: "/api/placeholder/280/160",
      tags: [
        { text: "Thai", variant: "local" },
        { text: "Spicy", variant: "fast" }
      ] as RestaurantTag[],
      rating: "4.2",
      reviews: "3K",
      distance: "2.1 Miles Away",
      imageUrl: "/api/placeholder/280/160"
    },
    {
      name: "Burger Bros",
      image: "/api/placeholder/280/160",
      tags: [
        { text: "American", variant: "american" },
        { text: "Fast", variant: "fast" }
      ] as RestaurantTag[],
      rating: "4.3",
      reviews: "5K",
      distance: "1.5 Miles Away",
      imageUrl: "/api/placeholder/280/160"
    }
  ];