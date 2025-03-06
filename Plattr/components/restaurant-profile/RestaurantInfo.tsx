import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Restaurant } from '../../types/restaurant';
import TagPill from './TagPill';

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurant }) => {
  // Get current day's hours
  const getCurrentDayHours = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[new Date().getDay()];
    
    if (restaurant.hours && restaurant.hours[today]) {
      return `${restaurant.hours[today].open} - ${restaurant.hours[today].close}`;
    }
    return 'Hours not available';
  };

  // Convert price level to $ symbols
  const renderPriceLevel = (level: number) => {
    return Array(level).fill('$').join('');
  };
  
  return (
    <View style={styles.infoSection}>
      <Text style={styles.restaurantName}>{restaurant.name}</Text>
      
      <View style={styles.ratingsRow}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Text style={styles.ratingText}>
          {parseFloat(restaurant.rating.toString()).toFixed(1)} ({restaurant.reviewCount})
        </Text>
        <Text style={styles.dotSeparator}>•</Text>
        <Text style={styles.distanceText}>{restaurant.address.coordinates.latitude}, {restaurant.address.coordinates.longitude}</Text>
      </View>
      <View style={styles.tagsContainer}>
        {restaurant.cuisines && restaurant.cuisines.length > 0 ? (
          restaurant.cuisines.map((cuisine: string, index: number) => (
            <TagPill key={index} text={cuisine} variant="cuisine" />
          ))
        ) : (
          <Text>No cuisines available</Text>
        )}
        {restaurant.priceLevel !== undefined && (
          <TagPill text={renderPriceLevel(restaurant.priceLevel)} />
        )}
      </View>

      <View style={styles.quickInfoRow}>
        <View style={styles.quickInfoItem}>
          <Ionicons name="time-outline" size={16} color="#666" />
          <Text style={styles.quickInfoText}>{getCurrentDayHours()}</Text>
        </View>
        <View style={styles.quickInfoItem}>
          <Ionicons name="location-outline" size={16} color="#666" />
          <Text style={styles.quickInfoText}>{restaurant.address.street}, {restaurant.address.city}, {restaurant.address.state} {restaurant.address.zip}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoSection: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  ratingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#333',
  },
  dotSeparator: {
    marginHorizontal: 8,
    color: '#999',
  },
  distanceText: {
    fontSize: 14,
    color: '#333',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  quickInfoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quickInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 4,
  },
  quickInfoText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
});

export default RestaurantInfo;