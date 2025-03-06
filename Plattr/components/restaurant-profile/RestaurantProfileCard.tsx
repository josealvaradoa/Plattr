import React, { useState } from 'react';
import { View, StyleSheet, ImageSourcePropType } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Restaurant } from '../../types/restaurant';
import { TabType } from './types';

// Import all components
import RestaurantHeader from './RestaurantHeader';
import RestaurantInfo from './RestaurantInfo';
import ProfileTabs from './ProfileTabs';
import DealsList from './DealsList';
import MenuView from './MenuView';
import AboutView from './AboutView';
import { Deal } from '../../types/deals';
import { getDealsByRestaurant } from '@/data/mockDeals';
import { getRestaurantWithDetails } from '@/data/restaurantData';
interface RestaurantProfileCardProps {
  restaurant: Restaurant;
  onClose: () => void;
  onSaveDeal: (dealId: string) => void;
  onViewDeal?: (dealId: string) => void;
}

const RestaurantProfileCard: React.FC<RestaurantProfileCardProps> = ({ 
  restaurant, 
  onClose,
  onSaveDeal,
  onViewDeal 
}) => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<TabType>('deals');
  const [savedDeals, setSavedDeals] = useState<string[]>([]);
  
  // Handle saving deals
  const handleSaveDeal = (dealId: string) => {
    if (savedDeals.includes(dealId)) {
      setSavedDeals(savedDeals.filter(id => id !== dealId));
    } else {
      setSavedDeals([...savedDeals, dealId]);
    }
    onSaveDeal(dealId);
  };
  
  // Handle viewing deal details
  const handleViewDeal = (dealId: string) => {
    // Simply pass the dealId up to the parent component
    if (onViewDeal) {
      onViewDeal(dealId);
    }
  };

  // Handle tab changes
  const handleTabPress = (tab: TabType) => {
    setActiveTab(tab);
  };

    // Handle different image source types (local or remote)
    const getImageSource = (): ImageSourcePropType => {
      // Use the primary image from the new restaurant structure
      if (restaurant.imageUrls && restaurant.imageUrls.primary) {
        return restaurant.imageUrls.primary;
      }
      
      // Fallback to a placeholder or default image
      return require('../../assets/images/restaurants/resOne.jpg');
    };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Restaurant header with image and close button */}
      <RestaurantHeader source={getImageSource()} onClose={onClose} />
      
      {/* Restaurant info section (name, rating, tags, etc.) */}
      <RestaurantInfo restaurant={restaurant} />
      
      {/* Tab navigation */}
      <ProfileTabs activeTab={activeTab} onTabPress={handleTabPress} />
      
      {/* Tab content */}
      {activeTab === 'deals' && (
        <DealsList 
          deals={getDealsByRestaurant(restaurant.id)} 
          savedDeals={savedDeals} 
          onSaveDeal={handleSaveDeal} 
          onViewDeal={handleViewDeal}
        />
      )}
      
      {activeTab === 'menu' && (
        <MenuView 
          restaurant={restaurant}
          menuItems={getRestaurantWithDetails(restaurant.id)?.menuItems || []} 
        />
      )}
      
      {activeTab === 'about' && (
        <AboutView restaurant={restaurant} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
});

export default RestaurantProfileCard;