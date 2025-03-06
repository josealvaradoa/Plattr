import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet, Platform, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Deal } from '../../types/deals';
import { Star } from 'lucide-react-native';

const ratingMap: { [key: number]: string } = {
    "1": "Terrible",
    "1.5": "Terrible",
    "2": "Bad",
    "2.5": "Poor",
    "3": "Okay",
    "3.5": "Good",
    "4": "Very Good",
    "4.5": "Excellent",
    "5": "Outstanding"
};

interface DealCardProps {
    deal: Deal;
    onPress: () => void;
    onViewDeal: () => void;
}

export const DealCard: React.FC<DealCardProps> = ({ deal, onPress, onViewDeal }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);
    
    // Check if the deal object is valid
    if (!deal) {
        return (
            <View style={styles.container}>
                <View style={styles.errorContainer}>
                    <Ionicons name="alert-circle-outline" size={32} color="#8E8E93" />
                    <Text style={styles.errorText}>Deal information unavailable</Text>
                </View>
            </View>
        );
    }
    
    // Use optional chaining to safely access properties
    const endDate = deal?.endDate;
    const dealType = deal?.dealType || "informational";
    const isExpired = endDate ? new Date(endDate) < new Date() : false;
    const timeLeft = getTimeLeft(endDate);

    function getTimeLeft(expirationDate?: string): string {
        if (!expirationDate) return '';
      
        // Convert to a Date object if it's a string
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

    const getButtonColor = (type: string, expired: boolean) => {
        if (expired) return "#9CA3AF";
        switch (type) {
            case "redeemable":
                return "#4DBF4D";
            case "informational":
                return "#3A92FC";
            default:
                return "#5E5E5E";
        }
    };

    // Handle image source
    const imageSource = deal?.imageUrl;

    // Get restaurant rating and review count
    // In a real app, you would fetch this from the restaurant data
    const rating = 4.5; // Placeholder - would come from restaurant data
    const reviewCount = 1000; // Placeholder - would come from restaurant data

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.contentWrapper, isExpired && styles.expiredOverlay]}
                onPress={onPress}
                activeOpacity={0.9}
            >
                <View style={styles.imageContainer}>
                    {!isExpired && dealType === "redeemable" && (
                        <View style={styles.timeLeftBadge}>
                            <Ionicons name="time-outline" size={14} color="white" />
                            <Text style={styles.timeLeftText}>{timeLeft}</Text>
                        </View>
                    )}
                    
                    {!isExpired && (
                        <TouchableOpacity
                            style={[styles.heartButton, isFavorite && styles.activeHeartButton]}
                            onPress={(e) => {
                                e.stopPropagation();
                                setIsFavorite(!isFavorite);
                            }}
                            disabled={isExpired}
                            accessibilityLabel={isFavorite ? "Remove from favorites" : "Add to favorites"}
                            accessibilityRole="button"
                        >
                            <Ionicons
                                name={isFavorite ? "heart" : "heart-outline"}
                                size={22}
                                color={isFavorite ? "#FF3B30" : "white"}
                            />
                        </TouchableOpacity>
                    )}
                    
                    {!hasError ? (
                        <Image
                            source={imageSource}
                            style={styles.logo}
                            resizeMode="cover"
                            onLoadStart={() => setIsLoading(true)}
                            onLoadEnd={() => setIsLoading(false)}
                            onError={() => setHasError(true)}
                        />
                    ) : null}
                    
                    {isLoading && !hasError && (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="small" color="#8E8E93" />
                        </View>
                    )}
                    
                    {hasError && (
                        <View style={styles.errorContainer}>
                            <Ionicons name="image-outline" size={32} color="#8E8E93" />
                            <Text style={styles.errorText}>Image unavailable</Text>
                        </View>
                    )}
                </View>

                <View style={styles.cardContent}>
                    <Text style={styles.restaurantName} numberOfLines={1} ellipsizeMode="tail">
                        {deal.restaurantName}
                    </Text>

                    <View style={styles.ratingContainer}>
                        <Star size={14} color="#FFB800" />
                        <Text style={styles.ratingText}>
                            {rating} <Text style={styles.ratingDescription}>{ratingMap[rating]}</Text> <Text style={styles.reviewCount}>({reviewCount})</Text>
                        </Text>
                    </View>

                    <Text style={styles.dealDescription} numberOfLines={2} ellipsizeMode="tail">
                        {deal.description}
                    </Text>

                    <View style={styles.locationContainer}>
                        <Ionicons name="location-outline" size={14} color="#8E8E93" />
                        <Text style={styles.locationText}>
                            {deal.distance ? deal.distance : `${(Math.random() * 3 + 0.5).toFixed(1)} Miles Away`}
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.viewDealButton,
                            { backgroundColor: getButtonColor(dealType, isExpired) }
                        ]}
                        onPress={(e) => {
                            e.stopPropagation();
                            onViewDeal();
                        }}
                        disabled={isExpired}
                        accessibilityLabel={isExpired ? "Deal expired" : dealType === "redeemable" ? "Redeem deal" : "View details"}
                        accessibilityRole="button"
                    >
                        <Ionicons 
                            name={
                                isExpired ? "time-outline" : 
                                dealType === "redeemable" ? "ticket-outline" : "information-circle-outline"
                            } 
                            size={18} 
                            color="white" 
                            style={styles.buttonIcon}
                        />
                        <Text style={styles.viewDealText}>
                            {isExpired ? 'Expired' : dealType === "redeemable" ? 'Redeem Deal' : 'View Details'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 16,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
            },
            android: {
                elevation: 3,
            }
        })
    },
    contentWrapper: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    expiredOverlay: {
        opacity: 0.7,
        backgroundColor: 'rgba(250, 250, 250, 0.8)',
    },
    imageContainer: {
        position: 'relative',
        height: 160,
        width: '100%',
        backgroundColor: '#F2F2F7',
    },
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F7',
    },
    errorContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F7',
    },
    errorText: {
        color: '#8E8E93',
        marginTop: 8,
        fontSize: 14,
    },
    logo: {
        width: "100%",
        height: 160,
    },
    cardContent: {
        padding: 16,
    },
    restaurantName: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 4,
        color: '#1C1C1E',
        letterSpacing: -0.4,
    },
    activeHeartButton: {
        backgroundColor: 'rgba(255, 59, 48, 0.15)',
    },
    heartButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 28,
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            }
        })
    },
    timeLeftBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: 'rgba(255, 59, 48, 0.9)',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            }
        })
    },
    timeLeftText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    ratingText: {
        marginLeft: 4,
        fontSize: 14,
        color: '#1C1C1E',
        fontWeight: '500',
    },
    ratingDescription: {
        fontWeight: '400',
        color: '#3A3A3C',
    },
    reviewCount: {
        color: '#8E8E93',
        fontWeight: '400',
    },
    dealDescription: {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 8,
        color: '#3A3A3C',
        letterSpacing: -0.4,
        lineHeight: 22,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    locationText: {
        marginLeft: 4,
        color: '#8E8E93',
        fontSize: 14,
    },
    buttonIcon: {
        marginRight: 6,
    },
    viewDealButton: {
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
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
    viewDealText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: -0.4,
    },
});

export default DealCard;