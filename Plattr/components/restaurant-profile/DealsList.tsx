import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProfileDealCard from './ProfileDealCard';
import { DealCardProps } from '../../types/deals';
interface DealsListProps {
  deals: DealCardProps[];
  savedDeals: string[];
  onSaveDeal: (dealId: string) => void;
  onViewDeal: (dealId: string) => void;
}

const DealsList: React.FC<DealsListProps> = ({ deals, savedDeals, onSaveDeal, onViewDeal }) => {
  if (!deals || deals.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No deals available</Text>
        <Text style={styles.emptySubtext}>This restaurant hasn't added any deals yet.</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      style={styles.container} 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {deals.map((deal, index) => (
        <ProfileDealCard
          key={deal.id}
          deal={deal}
          isSaved={savedDeals.includes(deal.id)}
          onSave={onSaveDeal}
          onViewDeal={() => onViewDeal(deal.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

export default DealsList;