import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { DealCardProps } from '../../types/deals';

const ratingMap: {[key: number]: string} = {
  "1": "Terrible",
  "1.5": "Terrible",
  "2": "Bad",
  "2.5": "Poor",
  "3": "Okay",
  "3.5": "Good",
  "4": "Very Good",
  "4.5": "Excellent",
  "5": "Outstanding"
}

export const DealCard: React.FC<DealCardProps> = ({
  restaurantName,
  location,
  rating,
  reviewCount,
  dealDescription,
  distance,
  timeLeft,
  imageUrl,
  onPress,
  onViewDeal,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>      
      <View style={styles.imageContainer}>
      <View style={styles.timeLeftBadge}>
      <Text style={styles.timeLeftText}>{timeLeft} left</Text>
    </View>
        <Image
          source={{ uri: imageUrl }}
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
      
      <Text style={styles.restaurantName}>{restaurantName}</Text>
      
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Text style={styles.ratingText}>
          {rating} {ratingMap[rating]} ({reviewCount}K)
        </Text>
      </View>
      
      <Text style={styles.dealDescription}>{dealDescription}</Text>
      
      <View style={styles.locationContainer}>
        <Ionicons name="location" size={16} color="gray" />
        <Text style={styles.locationText}>{distance} Miles Away</Text>
      </View>

      <TouchableOpacity 
        style={styles.viewDealButton}
        onPress={onViewDeal}
      >
        <Text style={styles.viewDealText}>View Deal</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
  logo: {
    width: "100%" as const,
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
  } as const,
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  timeLeftBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 6,
    borderRadius: 4,
    zIndex: 1,
  },
  timeLeftText: {
    color: 'white',
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    marginLeft: 4,
  },
  dealDescription: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 4,
    color: 'gray',
  },
  viewDealButton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  viewDealText: {
    color: 'white',
    fontWeight: '600',
  },
});
