import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RestaurantData } from '../../types/restaurant';
import { TabType } from './types';

// Import all components
import RestaurantHeader from './RestaurantHeader';
import RestaurantInfo from './RestaurantInfo';
import ProfileTabs from './ProfileTabs';
import DealsList from './DealsList';
import MenuView from './MenuView';
import AboutView from './AboutView';
import { DealCardProps } from '../../types/deals';

interface RestaurantProfileCardProps {
  restaurant: RestaurantData;
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

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Restaurant header with image and close button */}
      <RestaurantHeader imageUri={restaurant.imageUrl} onClose={onClose} />
      
      {/* Restaurant info section (name, rating, tags, etc.) */}
      <RestaurantInfo restaurant={restaurant} />
      
      {/* Tab navigation */}
      <ProfileTabs activeTab={activeTab} onTabPress={handleTabPress} />
      
      {/* Tab content */}
      {activeTab === 'deals' && (
        <DealsList 
          deals={restaurant.deals as DealCardProps[]} 
          savedDeals={savedDeals} 
          onSaveDeal={handleSaveDeal} 
          onViewDeal={handleViewDeal}
        />
      )}
      
      {activeTab === 'menu' && (
        <MenuView restaurant={restaurant} />
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