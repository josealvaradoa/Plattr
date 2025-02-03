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
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const DISMISS_THRESHOLD = 150;

const DealModal: React.FC<DealModalProps> = ({
  visible,
  onClose,
  deal,
  onRedeem,
}) => {
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [redemptionError, setRedemptionError] = useState<string | null>(null);
  
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

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

          <ScrollView 
            style={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.restaurant}>{deal.restaurantName}</Text>
            <Text style={styles.title}>{deal.dealDescription}</Text>
            <View style={styles.termsContainer}>
              <Text style={styles.termsTitle}>Deal Details</Text>
              <Text style={styles.termsText}>{deal.dealDetails}</Text>
            </View>
            <View style={styles.termsContainer}>
              <Text style={styles.termsTitle}>Terms & Conditions</Text>
              <Text style={styles.termsText}>{deal.terms}</Text>
            </View>
            {deal.expirationDate && (
              <Text style={styles.expiry}>
                Valid until: {deal.expirationDate}
              </Text>
            )}

            {renderRedemptionSection()}
          </ScrollView>
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
    maxHeight: '100%',
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
    justifyContent: 'flex-end',
    paddingVertical: 8,
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
});

export default DealModal;