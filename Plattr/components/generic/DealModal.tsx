import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  ActivityIndicator,
  PanResponder,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DealCardProps, DealType } from '../../types/deals';

interface DealModalProps {
  visible: boolean;
  onClose: () => void;
  deal: DealCardProps;
  onRedeem?: (dealId: string) => Promise<void>;
  isEmbedded?: boolean; // New prop to indicate if this is embedded in a restaurant profile
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const DISMISS_THRESHOLD = 150;

const DealModal: React.FC<DealModalProps> = ({
  visible,
  onClose,
  deal,
  onRedeem,
  isEmbedded = false, // Default to false for backward compatibility
}) => {
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [redemptionError, setRedemptionError] = useState<string | null>(null);
  
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Configure pan responder for both modes (embedded and non-embedded)
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          slideAnim.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > DISMISS_THRESHOLD) {
          Animated.parallel([
            Animated.timing(slideAnim, {
              toValue: SCREEN_HEIGHT,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }),
          ]).start(onClose);
        } else {
          Animated.spring(slideAnim, {
            toValue: 0,
            useNativeDriver: true,
            tension: 100,
            friction: 8,
          }).start();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (visible) {
      slideAnim.setValue(0);
      fadeAnim.setValue(0);
      Animated.parallel([
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
          tension: 100,
          friction: 8,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  const handleRedeem = async () => {
    if (!onRedeem) return;
    
    setIsRedeeming(true);
    setRedemptionError(null);
    
    try {
      await onRedeem(deal.id);
    } catch (error) {
      setRedemptionError('Failed to redeem deal. Please try again.');
    } finally {
      setIsRedeeming(false);
    }
  };

  const renderRedemptionSection = () => {
    if (deal.dealType !== DealType.REDEEMABLE) return null;
    const isExpired = deal.expirationDate ? new Date(deal.expirationDate) < new Date() : false;

    if (isExpired) {
      return (
        <View style={styles.redemptionContainer}>
          <Text style={styles.expiredText}>This deal has expired</Text>
        </View>
      );
    }

    if (deal.isRedeemed) {
      return (
        <View style={styles.redemptionContainer}>
          <View style={styles.codeContainer}>
            <Text style={styles.redeemedTitle}>Redemption Code:</Text>
            <Text style={styles.redemptionCode}>{deal.redemptionCode}</Text>
          </View>
          <Text style={styles.redeemedText}>Deal has been redeemed</Text>
        </View>
      );
    }

    return (
      <View style={styles.redemptionContainer}>
        <TouchableOpacity
          style={[styles.redeemButton, isRedeeming && styles.redeemButtonDisabled]}
          onPress={handleRedeem}
          disabled={isRedeeming}
        >
          {isRedeeming ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <>
              <Ionicons name="ticket-outline" size={20} color="#FFF" />
              <Text style={styles.redeemButtonText}>Redeem Now</Text>
            </>
          )}
        </TouchableOpacity>
        {redemptionError && (
          <Text style={styles.errorText}>{redemptionError}</Text>
        )}
      </View>
    );
  };

  // Common content to be rendered in both modal and embedded modes
  const renderContent = () => (
    <>
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {!isEmbedded && (
          <Text style={styles.restaurant}>{deal.restaurantName}</Text>
        )}
        <Text style={styles.title}>{deal.dealDescription}</Text>
        <View style={styles.termsContainer}>
          <Text style={styles.termsTitle}>Deal Details</Text>
          <Text style={styles.termsText}>{deal.dealDetails}</Text>
        </View>
        <View style={styles.termsContainer}>
          <Text style={styles.termsTitle}>Terms & Conditions</Text>
          {Array.isArray(deal.terms) ? (
            deal.terms.map((term, index) => (
              <View key={index} style={styles.termItem}>
                <View style={styles.bulletPoint} />
                <Text style={styles.termsText}>{term}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.termsText}>{deal.terms}</Text>
          )}
        </View>
        {deal.expirationDate && (
          <Text style={styles.expiry}>
            Valid until: {new Date(deal.expirationDate).toLocaleDateString()}
          </Text>
        )}

        {deal.maxRedemptions && (
          <View style={styles.redemptionInfo}>
            <Ionicons name="repeat-outline" size={16} color="#666" style={styles.infoIcon} />
            <Text style={styles.infoText}>
              {deal.remainingRedemptions !== undefined 
                ? `${deal.remainingRedemptions} of ${deal.maxRedemptions} redemptions left`
                : `${deal.maxRedemptions} max redemptions`}
            </Text>
          </View>
        )}

        {renderRedemptionSection()}
      </ScrollView>
    </>
  );

  // If this component is embedded, render it as a modal-like overlay within the parent view
  if (isEmbedded) {
    return (
      <View style={styles.embeddedOverlayContainer}>
        {/* Semi-transparent backdrop to click out */}
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.embeddedBackdrop} />
        </TouchableWithoutFeedback>
        
        {/* The actual embedded modal */}
        <Animated.View 
          style={[
            styles.embeddedModalContainer,
            {
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          <View {...panResponder.panHandlers}>
            <View style={styles.handleBar} />
            <View style={styles.header}>
            </View>
          </View>
          
          {renderContent()}
        </Animated.View>
      </View>
    );
  }

  // Original modal behavior for non-embedded use
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Animated.View 
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            opacity: fadeAnim,
          }
        ]}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
      </Animated.View>

      <Animated.View 
        style={[
          {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            transform: [{ translateY: slideAnim }],
          }
        ]}
      >
        <View style={styles.modalContainer}>
          <View {...panResponder.panHandlers}>
            <View style={styles.handleBar} />
            <View style={styles.header} />
          </View>

          {renderContent()}
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    maxHeight: '100%', // Limit height to 80% of screen
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  // Styles for embedded mode
  embeddedOverlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  embeddedBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  embeddedModalContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    width: '100%',
    maxHeight: '80%', // Limit height to 80% of screen
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 4,
  },
  content: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  restaurant: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  termsContainer: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  termsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  termsText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
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
  expiry: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  redemptionContainer: {
    marginTop: 8,
    alignItems: 'center',
  },
  codeContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  redeemedTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  redemptionCode: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  redeemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    gap: 8,
  },
  redeemButtonDisabled: {
    opacity: 0.5,
  },
  redeemButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  redeemedText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  expiredText: {
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '500',
  },
  errorText: {
    fontSize: 14,
    color: '#FF3B30',
    marginTop: 8,
    textAlign: 'center',
  },
  redemptionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoIcon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
});

export default DealModal;