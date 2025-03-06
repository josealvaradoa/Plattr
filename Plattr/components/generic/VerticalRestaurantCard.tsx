import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Modal, Animated, Platform, ImageSourcePropType } from 'react-native';
import { Star, MapPin } from 'lucide-react-native';
import { Ionicons } from '@expo/vector-icons';
import Tag from '../explore/Tag';
import { RestaurantProfileCard } from '../restaurant-profile';
import { Restaurant } from '../../types/restaurant';
import DealModal from '../generic/DealModal';
import { Deal } from '../../types/deals';
import { getDealsByRestaurant } from '../../data/mockDeals';

interface VerticalRestaurantCardProps {
  restaurant: Restaurant;
  onPress?: (restaurantId: string) => void;
}

const VerticalRestaurantCard: React.FC<VerticalRestaurantCardProps> = ({ restaurant, onPress }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const [selectedDealId, setSelectedDealId] = useState<string | null>(null);
  
  // Get deals for this restaurant
  const restaurantDeals = getDealsByRestaurant(restaurant.id);
  
  // Manage animations for the deal modal overlay
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Handle different image source types (local or remote)
  const getImageSource = (): ImageSourcePropType => {
    // Use the primary image from the new restaurant structure
    if (restaurant.imageUrls && restaurant.imageUrls.primary) {
      return restaurant.imageUrls.primary;
    }
    
    // Fallback to a placeholder or default image
    return require('../../assets/images/restaurants/resOne.jpg');
  };

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
    ? restaurantDeals.find((deal: Deal) => deal.id === selectedDealId)
    : null;

  // Calculate distance (in real app this would use the user's location)
  const distance = `${(Math.random() * 3 + 0.5).toFixed(1)} Miles Away`;

  return (
    <>
      <TouchableOpacity 
        style={styles.container} 
        onPress={handlePress}
        activeOpacity={0.96}
      >
        {/* Restaurant Image */}
        <View style={styles.imageContainer}>
          {!hasError && (
            <Image
              source={getImageSource()}
              style={styles.image}
              resizeMode="cover"
              onLoadStart={() => setIsLoading(true)}
              onLoadEnd={() => setIsLoading(false)}
              onError={() => setHasError(true)}
            />
          )}
          
          {isLoading && !hasError && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#FFFFFF" />
            </View>
          )}
          
          {hasError && (
            <View style={styles.errorContainer}>
              <Ionicons name="image-outline" size={32} color="#8E8E93" />
            </View>
          )}
        </View>
        
        {/* Content Section */}
        <View style={styles.contentContainer}>
          {/* Restaurant Name */}
          <Text style={styles.restaurantName} numberOfLines={1} ellipsizeMode="tail">
            {restaurant.name}
          </Text>
          
          {/* Tags */}
          <View style={styles.tagsContainer}>
            {restaurant.tags.map((tag, index) => (
              <Tag key={index} text={tag.text as any} variant={tag.variant as any} />
            ))}
          </View>
          
          {/* Rating and Distance */}
          <View style={styles.footerContainer}>
            <View style={styles.ratingContainer}>
              <Star size={16} color="#FFB800" />
              <Text style={styles.ratingText}>{restaurant.rating}</Text>
              <Text style={styles.reviewCount}>({restaurant.reviewCount})</Text>
            </View>
            <View style={styles.distanceContainer}>
              <MapPin size={16} color="#8E8E93" />
              <Text style={styles.distanceText}>{distance}</Text>
            </View>
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
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      }
    })
  },
  imageContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#F2F2F7',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  errorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
  },
  contentContainer: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 8,
    letterSpacing: -0.4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
    gap: 6,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1C1C1E',
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 2,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceText: {
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 4,
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
    backgroundColor: 'transparent',
  }
});

export default VerticalRestaurantCard;