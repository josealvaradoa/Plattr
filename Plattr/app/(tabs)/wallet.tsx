import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
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
          activeOpacity={0.9}
        >
          <Text style={[styles.tabText, activeTab === 'active' && styles.activeTabText]}>
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'expired' && styles.activeTab]}
          onPress={() => setActiveTab('expired')}
          activeOpacity={0.9}
        >
          <Text style={[styles.tabText, activeTab === 'expired' && styles.activeTabText]}>
            Expired
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.dealsContainer}
        contentContainerStyle={styles.dealsContentContainer}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        {deals.map((deal, index) => (
          <DealCard 
            key={index} 
            {...deal} 
            onViewDeal={() => handleViewDeal(deal.id)} 
          />
        ))}
        
        {deals.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {activeTab === 'active' 
                ? "No active deals saved yet"
                : "No expired deals"
              }
            </Text>
            <Text style={styles.emptySubtext}>
              {activeTab === 'active' 
                ? "Save deals by tapping the heart icon"
                : "Expired deals will appear here"
              }
            </Text>
          </View>
        )}
      </ScrollView>
      
      {selectedDeal && (
        <DealModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          deal={selectedDeal}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: '#E5E5EA',
    padding: 4,
    height: 44,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 36,
  },
  activeTab: {
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      }
    })
  },
  tabText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#8E8E93',
    letterSpacing: -0.2,
  },
  activeTabText: {
    color: '#1C1C1E',
    fontWeight: '600',
  },
  dealsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  dealsContentContainer: {
    paddingBottom: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: '#3A3A3C',
    marginBottom: 8,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: -0.4,
  },
  emptySubtext: {
    textAlign: 'center',
    color: '#8E8E93',
    fontSize: 15,
    letterSpacing: -0.24,
  }
});