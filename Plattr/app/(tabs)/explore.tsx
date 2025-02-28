import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RestaurantCard from '../../components/generic/RestaurantCard';
import { dareToTryRestaurants, trendingRestaurants } from '../../data/restaurantData';

const categories = [
  { icon: "🍔", name: "Burger" },
  { icon: "🍕", name: "Pizza" },
  { icon: "🌮", name: "Mexican" },
  { icon: "🍛", name: "Indian" },
  { icon: "🍜", name: "Thai" },
  { icon: "🥩", name: "Steak" }
];

const ExplorePage = () => (
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
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            activeOpacity={0.7}
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
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
          {trendingRestaurants.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
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
          {dareToTryRestaurants.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </ScrollView>
      </View>
    </View>
    
    {/* Add padding at the bottom for better scrolling experience */}
    <View style={styles.bottomPadding} />
  </ScrollView>
);

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
  restaurantScroll: {
    paddingLeft: 16,
  },
  restaurantScrollContent: {
    paddingRight: 8,
  },
  bottomPadding: {
    height: 40,
  },
});

export default ExplorePage;