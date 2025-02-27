import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Modal, Animated } from 'react-native';
import { Star, MapPin } from 'lucide-react-native';
import Tag from '../explore/Tag';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantProfileCard } from '../restaurant-profile';
import { RestaurantData } from '../../types/restaurant';
import DealModal from '../generic/DealModal';
import { DealCardProps } from '../../types/deals';

interface RestaurantProps {
  restaurant: RestaurantData;
  onPress?: (restaurantId: string) => void;
}

const RestaurantCard: React.FC<RestaurantProps> = ({ restaurant, onPress }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const [selectedDealId, setSelectedDealId] = useState<string | null>(null);
  
  // Manage animations for the deal modal overlay
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    setProfileVisible(true);
    if (onPress) {
      onPress(restaurant.id);
    }
  };

  const handleCloseProfile = () => {
    // Reset both profile visibility and selected deal when closing
    setProfileVisible(false);
    setSelectedDealId(null);
  };

  const handleSaveDeal = (dealId: string) => {
    console.log(`Deal ${dealId} saved for restaurant ${restaurant.id}`);
  };
  
  const handleViewDeal = (dealId: string) => {
    console.log(`Viewing deal ${dealId} for restaurant ${restaurant.id}`);
    // Set the selected deal ID and animate the overlay in
    setSelectedDealId(dealId);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleBackToDealsList = () => {
    // Animate the overlay out, then clear the selected deal
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setSelectedDealId(null);
    });
  };

  // Find the selected deal if there is one
  const selectedDeal = selectedDealId 
    ? restaurant.deals.find(deal => deal.id === selectedDealId) as DealCardProps 
    : null;

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
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

      {profileVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={profileVisible}
          onRequestClose={handleCloseProfile}
        >
          <View style={styles.modalContainer}>
            {/* The restaurant profile card is always rendered when modal is visible */}
            <RestaurantProfileCard 
              restaurant={restaurant}
              onClose={handleCloseProfile}
              onSaveDeal={handleSaveDeal}
              onViewDeal={handleViewDeal}
            />
            
            {/* Deal modal overlay - always rendered but only visible when needed */}
            <Animated.View 
              style={[
                styles.dealModalOverlay,
                { 
                  opacity: fadeAnim,
                  // When opacity is 0, make it non-interactive by setting pointer events to none
                  pointerEvents: selectedDealId ? 'auto' : 'none'
                }
              ]}
            >
              {selectedDeal && (
                <DealModal
                  visible={!!selectedDealId}
                  onClose={handleBackToDealsList}
                  deal={selectedDeal}
                  isEmbedded={true}
                />
              )}
            </Animated.View>
          </View>
        </Modal>
      )}
    </>
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
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
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
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  dealModalOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent', // Important: makes the overlay itself transparent
  }
});

export default RestaurantCard;