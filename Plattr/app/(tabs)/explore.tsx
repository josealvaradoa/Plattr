import React, { useState } from 'react';
import { 
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform, ActivityIndicator 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import RestaurantCard from '../../components/generic/RestaurantCard';
import VerticalRestaurantCard from '../../components/generic/VerticalRestaurantCard';
import { Restaurant } from '../../types/restaurant';
import { 
  getTrendingRestaurants, 
  getDareToTryRestaurants,
  getRestaurantsByCuisine 
} from '../../data/restaurantData';

// Expanded Categories Data
const categories = [
  { icon: "🍔", name: "Burger" },
  { icon: "🍕", name: "Pizza" },
  { icon: "🥩", name: "American" },
  { icon: "🌮", name: "Mexican" },
  { icon: "🍣", name: "Sushi" },
  { icon: "🍛", name: "Indian" },
  { icon: "🥗", name: "Healthy" },
  { icon: "🍷", name: "Wine & Dine" },
  { icon: "🍜", name: "Asian Fusion" },
  { icon: "🍹", name: "Bars & Cocktails" },
  { icon: "🥞", name: "Brunch & Cafés" },
  { icon: "🏠", name: "Local Favorites" }
];

const ExplorePage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const trendingRestaurants = getTrendingRestaurants();
  const dareToTryRestaurants = getDareToTryRestaurants();
  
  const filteredRestaurants = selectedCategory 
    ? getRestaurantsByCuisine(selectedCategory)
    : [];

  const handleCategoryPress = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
      return;
    }
    
    setIsLoading(true);
    setSelectedCategory(categoryName);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  return (
    <ScrollView 
      style={styles.container} 
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Categories</Text>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryScrollContent}
          decelerationRate="fast"
          snapToAlignment="center"
        >
          {(showAllCategories ? categories : categories.slice(0, 5)).map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                selectedCategory === category.name && styles.categoryButtonSelected
              ]}
              activeOpacity={0.7}
              onPress={() => handleCategoryPress(category.name)}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={[
                styles.categoryText,
                selectedCategory === category.name && styles.categoryTextSelected
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.seeAllButton}
            onPress={() => setShowAllCategories(!showAllCategories)}
          >
            <Text style={styles.seeAllText}>
              {showAllCategories ? "Show Less" : "See All"}
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Filtered View */}
        {selectedCategory ? (
          <View style={styles.filteredContainer}>
            <View style={styles.filteredHeader}>
              <Text style={styles.filteredHeaderTitle}>
                {selectedCategory} Restaurants
              </Text>
              <TouchableOpacity 
                style={styles.clearButton}
                onPress={() => setSelectedCategory(null)}
              >
                <Ionicons name="close" size={16} color="#333" />
              </TouchableOpacity>
            </View>
            
            {isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
              </View>
            ) : filteredRestaurants.length > 0 ? (
              <View style={styles.filteredResults}>
                {filteredRestaurants.map((restaurantData, index) => (
                  <VerticalRestaurantCard 
                    key={index} 
                    restaurant={restaurantData.restaurant}
                  />
                ))}
              </View>
            ) : (
              <View style={styles.emptyState}>
                <Ionicons name="restaurant-outline" size={48} color="#CCCCCC" />
                <Text style={styles.emptyStateText}>
                  No {selectedCategory} restaurants found nearby.
                  {'\n'}Try another category.
                </Text>
              </View>
            )}
          </View>
        ) : (
          <>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                <Ionicons name="flame" size={22} color="#FF3B30" />
                <Text style={styles.sectionHeaderTitle}>Trending Near You</Text>
              </View>
              
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.restaurantScroll}
                contentContainerStyle={styles.restaurantScrollContent}
                decelerationRate="fast"
                snapToAlignment="center"
              >
                {trendingRestaurants.map((restaurantData, index) => (
                  <RestaurantCard 
                    key={index} 
                    restaurant={restaurantData.restaurant}
                  />
                ))}
              </ScrollView>
            </View>   

            <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                <Ionicons name="flash" size={22} color="#FF9500" />
                <Text style={styles.sectionHeaderTitle}>Dare to Try?</Text>
              </View>
              
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.restaurantScroll}
                contentContainerStyle={styles.restaurantScrollContent}
                decelerationRate="fast"
                snapToAlignment="center"
              >
                {dareToTryRestaurants.map((restaurantData, index) => (
                  <RestaurantCard 
                    key={index} 
                    restaurant={restaurantData.restaurant}
                  />
                ))}
              </ScrollView>
            </View>
          </>
        )}
      </View>
      
      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  content: {
    paddingTop: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 12,
    marginHorizontal: 16,
    letterSpacing: -0.5,
  },
  categoryScroll: {
    marginBottom: 24,
  },
  categoryScrollContent: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 24,
    marginRight: 8,
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
  categoryButtonSelected: {
    backgroundColor: '#007AFF', // iOS blue
  },
  categoryIcon: {
    marginRight: 8,
    fontSize: 16,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1C1C1E',
    letterSpacing: -0.2,
  },
  categoryTextSelected: {
    color: 'white',
  },
  sectionContainer: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginHorizontal: 16,
  },
  sectionHeaderTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
    marginLeft: 6,
    letterSpacing: -0.5,
  },
  restaurantScroll: {
    paddingLeft: 16,
  },
  restaurantScrollContent: {
    paddingRight: 8,
  },
  filteredContainer: {
    paddingBottom: 24,
  },
  filteredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  filteredHeaderTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
    letterSpacing: -0.5,
  },
  clearButton: {
    backgroundColor: '#E5E5EA',
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filteredResults: {
    paddingHorizontal: 16,
  },
  loadingContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyStateText: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 16,
    color: '#8E8E93',
    lineHeight: 24,
  },
  bottomPadding: {
    height: 40,
  },
  seeAllButton: { paddingHorizontal: 16, paddingVertical: 12, backgroundColor: 'white', borderRadius: 24, marginRight: 8 },
  seeAllText: { fontSize: 15, fontWeight: '500', color: '#007AFF' },
});

export default ExplorePage;