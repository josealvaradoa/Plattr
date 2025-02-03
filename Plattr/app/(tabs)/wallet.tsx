// wallet.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { DealCard } from '../../components/home/DealCard';
import { DealCardProps } from '@/types/deals';
import { walletMocks } from '@/data/walletData';
import DealModal from '@/components/generic/DealModal';


export default function WalletPage() {
  const [activeTab, setActiveTab] = useState<'active' | 'expired'>('active');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<DealCardProps | null>(null);


  const handleViewDeal = (dealId: string) => {
    const deal = walletMocks.find(d => d.id === dealId);
    if (deal) {
      setSelectedDeal(deal);
      setIsModalVisible(true);
    }
  };
  
  const currentDate = new Date();
  const deals = walletMocks.filter((deal: any) => {
    const isExpired = new Date(deal.expirationDate) < currentDate;
    return activeTab === 'active' ? !isExpired : isExpired;
  });

  return (
    <View style={styles.container}>      
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'active' && styles.activeTab]}
          onPress={() => setActiveTab('active')}
        >
          <Text style={[styles.tabText, activeTab === 'active' && styles.activeTabText]}>
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'expired' && styles.activeTab]}
          onPress={() => setActiveTab('expired')}
        >
          <Text style={[styles.tabText, activeTab === 'expired' && styles.activeTabText]}>
            Expired
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.dealsContainer}>
        {deals.map((deal, index) => (
          <DealCard key={index} {...deal} onViewDeal={() => handleViewDeal(deal.id)} />
        ))}
        {deals.length === 0 && (
          <Text style={styles.emptyText}>
            {activeTab === 'active' 
              ? "No active deals saved yet"
              : "No expired deals"
            }
          </Text>
        )}
      </ScrollView>
      {selectedDeal && (
        <DealModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          deal={selectedDeal}
          //onRedeem={handleRedeem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    padding: 4
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6
  },
  activeTab: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2
  },
  tabText: {
    fontSize: 16,
    color: '#666'
  },
  activeTabText: {
    color: '#000',
    fontWeight: '500'
  },
  dealsContainer: {
    flex: 1
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 32,
    fontSize: 16
  }
});