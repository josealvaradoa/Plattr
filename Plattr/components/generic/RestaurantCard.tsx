// components/RestaurantCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Star, MapPin } from 'lucide-react-native';
import Tag from '../explore/Tag';
import { Ionicons } from '@expo/vector-icons';

interface RestaurantTag {
  text: string;
  variant: 'mexican' | 'local' | 'fast' | 'american' | 'sitdown';
}

interface RestaurantProps {
  restaurant: {
    name: string;
    tags: RestaurantTag[];
    rating: string;
    reviews: string;
    distance: string;
    imageUrl: string;
  };
}

const RestaurantCard: React.FC<RestaurantProps> = ({ restaurant }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);

  return (

  <TouchableOpacity style={styles.container}>
                <View style={styles.imageContainer}>
                <Image
                    source={{ uri: restaurant.imageUrl }}
                    style={styles.logo}
                    resizeMode="contain"
                    onLoadStart={() => setIsLoading(true)}
                    onLoadEnd={() => setIsLoading(false)}
                    onError={() => setHasError(true)}
                />
                {isLoading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#333" />
                    </View>
                )}
                {hasError && (
                    <View style={styles.errorContainer}>
                        <Ionicons name="image-outline" size={32} color="#666" />
                        <Text style={styles.errorText}>Image unavailable</Text>
                    </View>
                )}
            </View>
    <Text style={styles.name}>{restaurant.name}</Text>
    
    <View style={styles.tagsContainer}>
      {restaurant.tags.map((tag, index) => (
        <Tag key={index} text={tag.text} variant={tag.variant} />
      ))}
    </View>

    <View style={styles.footer}>
      <View style={styles.ratingContainer}>
        <Star size={16} color="#FFB800" />
        <Text style={styles.ratingText}>
          {restaurant.rating} ({restaurant.reviews})
        </Text>
      </View>
      <View style={styles.distanceContainer}>
        <MapPin size={14} color="#666" />
        <Text style={styles.distanceText}>{restaurant.distance}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginTop: 5,
    marginLeft: 1,
    marginRight: 12,
    marginBottom: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2
  },
  imageContainer: {
    position: 'relative',
    height: 150,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
},
loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
},
errorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
},
errorText: {
    color: '#666',
    marginTop: 8,
},
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8
  },
  logo: {
    width: "100%" as const,
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
} as const,
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 8
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingText: {
    marginLeft: 4,
    color: '#666'
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  distanceText: {
    marginLeft: 4,
    color: '#666'
  }
});

export default RestaurantCard;