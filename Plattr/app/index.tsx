import React from 'react';
import { ScrollView } from 'react-native';
import { DealCard } from '../components/home/DealCard';
import { mockDeals } from '../data/mockDeals';

export default function HomeScreen() {
  const handleDealPress = (dealId: string) => {
    // Navigate to deal details
  };

  const handleViewDeal = (dealId: string) => {
    // Open deal redemption flow
  };

  return (
    <ScrollView>
      {mockDeals.map(deal => (
        <DealCard
          key={deal.id}
          {...deal}
          onPress={() => handleDealPress(deal.id)}
          onViewDeal={() => handleViewDeal(deal.id)}
        />
      ))}
    </ScrollView>
  );
}