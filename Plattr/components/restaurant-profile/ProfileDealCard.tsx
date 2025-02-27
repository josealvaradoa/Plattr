import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';
import { RestaurantDealCardProps } from './types';
import { DealType } from '../../types/deals';

/**
 * ProfileDealCard Component (v2.0)
 * Displays deal information within a restaurant's profile
 */
const ProfileDealCard: React.FC<RestaurantDealCardProps> = ({ 
  deal, 
  isSaved, 
  onSave,
  onViewDeal
}) => {
  const isExpired = deal.expirationDate ? new Date(deal.expirationDate) < new Date() : false;
  const timeLeft = getTimeLeft(deal.expirationDate);
  
  function getTimeLeft(expirationDate?: string): string {
    if (!expirationDate) return '';
    
    const expiration = new Date(expirationDate);
    const diff = expiration.getTime() - Date.now();
    if (diff <= 0) return 'Expired';
    
    const hoursLeft = Math.ceil(diff / (1000 * 60 * 60));
    
    if (hoursLeft < 24) {
      return `${hoursLeft}h`;
    } else {
      const daysLeft = Math.ceil(hoursLeft / 24);
      return `${daysLeft}d`;
    }
  }

  const getButtonColor = (dealType: DealType, isExpired: boolean) => {
    if (isExpired) return "#9CA3AF";
    switch (dealType) {
      case "redeemable":
        return "#4dbf4d";
      case "informational":
        return "#3a92fc";
      default:
        return "#5e5e5e";
    }
  };

  // Format date for display
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Animated.View 
      style={[styles.container, isExpired && styles.expiredOverlay]}
      entering={FadeIn}
    >
      <View style={styles.contentWrapper}>
        {!isExpired && deal.dealType === "redeemable" && (
          <View style={styles.timeLeftBadge}>
            <Ionicons name="hourglass-outline" size={16} color="white" />
            <Text style={styles.timeLeftText}>{timeLeft}</Text>
          </View>
        )}
        
        {!isExpired && (
          <TouchableOpacity
            style={[styles.heartButton, isSaved && styles.activeHeartButton]}
            onPress={() => onSave(deal.id)}
            disabled={isExpired}
            accessibilityLabel={isSaved ? "Remove from saved deals" : "Save deal"}
            accessibilityRole="button"
          >
            <Ionicons
              name={isSaved ? "heart" : "heart-outline"}
              size={24}
              color={isSaved ? "#FF0000" : "#666"}
            />
          </TouchableOpacity>
        )}

        <Text style={styles.dealTitle}>{deal.dealDescription}</Text>
        <Text style={styles.dealDetails}>{deal.dealDetails}</Text>
        
        {deal.terms && deal.terms.length > 0 && (
          <View style={styles.termsContainer}>
            <Text style={styles.termsTitle}>Terms & Conditions:</Text>
            {deal.terms.map((term, index) => (
              <View key={index} style={styles.termItem}>
                <View style={styles.bulletPoint} />
                <Text style={styles.termText}>{term}</Text>
              </View>
            ))}
          </View>
        )}
        
        <View style={styles.redemptionInfo}>
          {deal.expirationDate && (
            <View style={styles.infoItem}>
              <Ionicons name="calendar-outline" size={16} color="#666" />
              <Text style={styles.infoText}>
                {isExpired ? 'Expired on: ' : 'Valid until: '} 
                {formatDate(deal.expirationDate)}
              </Text>
            </View>
          )}
          
          {deal.maxRedemptions && (
            <View style={styles.infoItem}>
              <Ionicons name="repeat-outline" size={16} color="#666" />
              <Text style={styles.infoText}>
                {deal.remainingRedemptions !== undefined 
                  ? `${deal.remainingRedemptions} of ${deal.maxRedemptions} redemptions left`
                  : `${deal.maxRedemptions} max redemptions`}
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={[
            styles.viewDealButton,
            { backgroundColor: getButtonColor(deal.dealType, isExpired) }
          ]}
          onPress={onViewDeal}
          disabled={isExpired}
          accessibilityLabel={isExpired ? "Deal expired" : "View deal details"}
          accessibilityRole="button"
        >
          <Text style={styles.viewDealText}>
            {isExpired ? 'Expired' : deal.dealType === "redeemable" ? 'Redeem Deal' : 'View Details'}
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2
  },
  contentWrapper: {
    padding: 16,
    position: 'relative',
  },
  expiredOverlay: {
    opacity: 0.6,
    backgroundColor: 'rgba(243, 244, 246, 0.8)',
  },
  activeHeartButton: {
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
  },
  heartButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1,
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    borderRadius: 20,
    padding: 4,
  },
  timeLeftBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    padding: 3,
    borderRadius: 4,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeLeftText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
    marginRight: 4,
  },
  dealTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 4,
    color: '#333',
  },
  dealDetails: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
    color: '#444',
  },
  termsContainer: {
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
  },
  termsTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  termItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  bulletPoint: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#666',
    marginTop: 8,
    marginRight: 8,
  },
  termText: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  redemptionInfo: {
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  viewDealButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  viewDealText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  }
});

export default ProfileDealCard;