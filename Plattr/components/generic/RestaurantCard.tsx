import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Modal, Animated, Platform } from 'react-native';
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
      <TouchableOpacity 
        style={styles.container} 
        onPress={handlePress}
        activeOpacity={0.96}
      >
        <View style={styles.imageContainer}>
          {!hasError ? (
            <Image
              source={{ uri: restaurant.imageUrl }}
              style={styles.logo}
              resizeMode="cover"
              onLoadStart={() => setIsLoading(true)}
              onLoadEnd={() => setIsLoading(false)}
              onError={() => setHasError(true)}
            />
          ) : null}
          
          {isLoading && !hasError && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#8E8E93" />
            </View>
          )}
          
          {hasError && (
            <View style={styles.errorContainer}>
              <Ionicons name="image-outline" size={32} color="#8E8E93" />
              <Text style={styles.errorText}>Image unavailable</Text>
            </View>
          )}
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {restaurant.name}
          </Text>
          
          <View style={styles.tagsContainer}>
            {restaurant.tags.map((tag, index) => (
              <Tag key={index} text={tag.text} variant={tag.variant} />
            ))}
          </View>

          <View style={styles.footer}>
            <View style={styles.ratingContainer}>
              <Star size={14} color="#FFB800" />
              <Text style={styles.ratingText}>
                <Text style={styles.ratingNumber}>{restaurant.rating}</Text> ({restaurant.reviews})
              </Text>
            </View>
            <View style={styles.distanceContainer}>
              <MapPin size={14} color="#8E8E93" />
              <Text style={styles.distanceText}>{restaurant.distance}</Text>
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
    width: 280,
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 5,
    marginLeft: 1,
    marginRight: 12,
    marginBottom: 5,
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
    position: 'relative',
    height: 150,
    width: '100%',
    backgroundColor: '#F2F2F7',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
  },
  errorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
  },
  errorText: {
    color: '#8E8E93',
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.2,
  },
  contentContainer: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1C1C1E',
    letterSpacing: -0.4,
  },
  logo: {
    width: "100%",
    height: 150,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 10
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingNumber: {
    fontWeight: '500',
    color: '#1C1C1E',
  },
  ratingText: {
    marginLeft: 4,
    color: '#8E8E93',
    fontSize: 14,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  distanceText: {
    marginLeft: 4,
    color: '#8E8E93',
    fontSize: 14,
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

export default RestaurantCard;