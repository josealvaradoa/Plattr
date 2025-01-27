import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DealCardProps, DealType } from '../../types/deals';
import { Star } from 'lucide-react-native';

const ratingMap: { [key: number]: string, } = {
    "1": "Terrible",
    "1.5": "Terrible",
    "2": "Bad",
    "2.5": "Poor",
    "3": "Okay",
    "3.5": "Good",
    "4": "Very Good",
    "4.5": "Excellent",
    "5": "Outstanding"
}


export const DealCard: React.FC<DealCardProps> = ({
    restaurantName,
    location,
    rating,
    reviewCount,
    dealDescription,
    distance,
    timeLeft,
    imageUrl,
    onPress,
    onViewDeal,
    dealType,
}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);
    const getButtonColor = (dealType: DealType) => {
        switch (dealType) {
          case DealType.REDEEMABLE:
            return "#4dbf4d"; // Green for redeemable
          case DealType.INFORMATIONAL:
            return "#3a92fc"; // Gray for informational 
          default:
            return "#5e5e5e"; // Default fallback (e.g., black)
        }
      };
    return (
        <View style={styles.container} >

            <View style={styles.imageContainer}>
                <View style={styles.timeLeftBadge}>
                <Ionicons
                            name={"hourglass-outline"}
                            size={16}
                            color={"white"}
                        />
                    <Text style={styles.timeLeftText}>
                        {timeLeft} left</Text>
                </View>
                <TouchableOpacity
                    style={[styles.heartButton, isFavorite && styles.activeHeartButton]}
                    onPress={() => setIsFavorite(!isFavorite)}
                >
                    <Ionicons
                        name={isFavorite ? "heart" : "heart-outline"}
                        size={24}
                        color={isFavorite ? "#FF0000" : "white"}
                    />
                </TouchableOpacity>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.logo}
                    resizeMode="contain"
                    onLoadStart={() => setIsLoading(true)}
                    onLoadEnd={() => setIsLoading(false)}
                    onError={() => setHasError(true)}
                />
                {isLoading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#333" />
                    </View>
                )}
                {hasError && (
                    <View style={styles.errorContainer}>
                        <Ionicons name="image-outline" size={32} color="#666" />
                        <Text style={styles.errorText}>Image unavailable</Text>
                    </View>
                )}
            </View>

            <Text style={styles.restaurantName}>{restaurantName}</Text>

            <View style={styles.ratingContainer}>
            <Star size={16} color="#FFB800" />
                <Text style={styles.ratingText}>
                    {rating} {ratingMap[rating]} ({reviewCount}K)
                </Text>
            </View>

            <Text style={styles.dealDescription}>{dealDescription}</Text>

            <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={16} color="gray" />
                <Text style={styles.locationText}>{distance} Miles Away</Text>
            </View>

            <TouchableOpacity
                style={[styles.viewDealButton, { backgroundColor: getButtonColor(dealType) }]}
                onPress={onViewDeal}
            >
                <Text style={styles.viewDealText}>
                    {dealType === DealType.REDEEMABLE ? 'Redeem Deal' : 'View Details'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    imageContainer: {
        position: 'relative',
        height: 150,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        marginBottom: 12,
        overflow: 'hidden',
    },
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    errorContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    errorText: {
        color: '#666',
        marginTop: 8,
    },
    logo: {
        width: "100%" as const,
        height: 120,
        borderRadius: 8,
        marginBottom: 12,
    } as const,
    restaurantName: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    activeHeartButton: {
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
    },
    heartButton: {
        position: 'absolute',
        top: 6,
        right: 6,
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 20,
        padding: 3,
    },
    timeLeftBadge: {
        position: 'absolute',
        top: 6,
        left: 6,
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
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    ratingText: {
        marginLeft: 4,
    },
    dealDescription: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        marginLeft: 4,
        color: 'gray',
    },
    viewDealButton: {
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 12,
    },
    viewDealText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
});
