import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';
import { RestaurantDealCardProps } from './types';
import { DealType } from '../../types/deals';

/**
 * ProfileDealCard Component (v3.0)
 * Displays deal information within a restaurant's profile with enhanced Apple-like design
 */
const ProfileDealCard: React.FC<RestaurantDealCardProps> = ({ 
  deal, 
  isSaved, 
  onSave,
  onViewDeal
}) => {
  const [termsExpanded, setTermsExpanded] = useState(false);
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
      case DealType.REDEEMABLE:
        return "#4dbf4d";
      case DealType.INFORMATIONAL:
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

  // Calculate redemption percentage for progress bar
  const getRedemptionPercentage = () => {
    if (!deal.maxRedemptions || deal.remainingRedemptions === undefined) return 0;
    return (deal.remainingRedemptions / deal.maxRedemptions) * 100;
  };

  return (
    <Animated.View 
      style={[styles.container, isExpired && styles.expiredOverlay]}
      entering={FadeIn}
    >
      <View style={styles.contentWrapper}>        
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
              color={isSaved ? "#FF3B30" : "#8E8E93"}
            />
          </TouchableOpacity>
        )}

        <Text style={styles.dealTitle}>{deal.dealDescription}</Text>
        <Text style={styles.dealDetails}>{deal.dealDetails}</Text>
        
        {deal.terms && deal.terms.length > 0 && (
          <View style={styles.termsContainer}>
            <TouchableOpacity 
              style={styles.termsHeader}
              onPress={() => setTermsExpanded(!termsExpanded)}
              accessibilityRole="button"
              accessibilityLabel={termsExpanded ? "Collapse terms and conditions" : "Expand terms and conditions"}
            >
              <Text style={styles.termsTitle}>Terms & Conditions</Text>
              <Ionicons 
                name={termsExpanded ? "chevron-up" : "chevron-down"} 
                size={18} 
                color="#8E8E93" 
              />
            </TouchableOpacity>
            
            {termsExpanded && (
              <View style={styles.termsContent}>
                {deal.terms.map((term, index) => (
                  <View key={index} style={styles.termItem}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.termText}>{term}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
        
        <View style={styles.redemptionInfo}>
          {deal.expirationDate && (
            <View style={styles.infoItem}>
              <Ionicons name="calendar-outline" size={16} color="#8E8E93" />
              <Text style={styles.infoText}>
                {isExpired ? 'Expired on: ' : 'Valid until: '} 
                {formatDate(deal.expirationDate)}
              </Text>
            </View>
          )}
          
          {deal.maxRedemptions && deal.remainingRedemptions !== undefined && (
            <View>
              <View style={styles.infoItem}>
                <Ionicons name="repeat-outline" size={16} color="#8E8E93" />
                <Text style={styles.infoText}>
                  {`${deal.remainingRedemptions} of ${deal.maxRedemptions} redemptions left`}
                </Text>
              </View>
              
              <View style={styles.progressBarContainer}>
                <View 
                  style={[
                    styles.progressBarFill, 
                    { width: `${getRedemptionPercentage()}%` }
                  ]} 
                />
              </View>
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
          <Ionicons 
            name={
              isExpired ? "time-outline" : 
              deal.dealType === DealType.REDEEMABLE ? "ticket-outline" : "information-circle-outline"
            } 
            size={20} 
            color="white" 
            style={styles.buttonIcon}
          />
          <Text style={styles.viewDealText}>
            {isExpired ? 'Expired' : deal.dealType === DealType.REDEEMABLE ? 'Redeem Deal' : 'View Details'}
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
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      }
    })
  },
  contentWrapper: {
    padding: 20,
    position: 'relative',
  },
  expiredOverlay: {
    opacity: 0.7,
    backgroundColor: 'rgba(250, 250, 250, 0.8)',
  },
  activeHeartButton: {
    backgroundColor: 'rgba(255, 59, 48, 0.12)',
  },
  heartButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    borderRadius: 28,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      }
    })
  },
  dealTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 4,
    color: '#1C1C1E',
    letterSpacing: -0.4,
  },
  dealDetails: {
    fontSize: 17,
    lineHeight: 22,
    marginBottom: 20,
    color: '#3A3A3C',
    letterSpacing: -0.4,
  },
  termsContainer: {
    marginBottom: 20,
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    overflow: 'hidden',
  },
  termsHeader: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  termsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    letterSpacing: -0.4,
  },
  termsContent: {
    padding: 14,
    paddingTop: 0,
  },
  termItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#8E8E93',
    marginRight: 8,
    marginTop: -2,
  },
  termText: {
    fontSize: 15,
    color: '#3A3A3C',
    flex: 1,
    letterSpacing: -0.24,
    lineHeight: 20,
  },
  redemptionInfo: {
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#636366',
    letterSpacing: -0.24,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: '#E5E5EA',
    borderRadius: 2,
    marginTop: 8,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4dbf4d',
    borderRadius: 2,
  },
  viewDealButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      }
    })
  },
  buttonIcon: {
    marginRight: 8,
  },
  viewDealText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: -0.4,
  }
});

export default ProfileDealCard;