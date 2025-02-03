// HomeScreen.tsx
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { DealCard } from '../../components/home/DealCard';
import { mockDeals } from '../../data/mockDeals';
import DealModal from '../../components/generic/DealModal';
import { DealCardProps } from '@/types/deals';
import { getProcessedDeals } from '../../algorithms/dealsAlgorithm';

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<DealCardProps | null>(null);

  // Get the processed deals, already filtered & sorted
  const processedDeals = getProcessedDeals(mockDeals);

  const handleViewDeal = (dealId: string) => {
    const deal = processedDeals.find(d => d.id === dealId);
    if (deal) {
      setSelectedDeal(deal);
      setIsModalVisible(true);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      {processedDeals.map(deal => (
        <DealCard
          key={deal.id}
          {...deal}
          onViewDeal={() => handleViewDeal(deal.id)}
        />
      ))}
      {selectedDeal && (
        <DealModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          deal={selectedDeal}
        />
      )}
    </ScrollView>
  );
}
