// pages/explore.tsx
import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { MapPin } from 'lucide-react-native';
import RestaurantCard from '../../components/generic/RestaurantCard';
import { trendingRestaurants } from '../../data/restaurantData';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { icon: "🍔", name: "Burger" },
  { icon: "🍕", name: "Pizza" },
  { icon: "🌮", name: "Mexican" },
  { icon: "🍛", name: "Indian" },
  { icon: "🍜", name: "Thai" },
  { icon: "🥩", name: "Steak" }
];

const ExplorePage = () => (
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.content}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.trendingContainer}>
        <View style={styles.timeLeftBadge}>
          <Ionicons
            name={"flame"}
            size={24}
            color={"red"}
          />
          <Text style={styles.timeLeftText}>
            Trending Near You</Text>
        </View>

        
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.restaurantScroll}
          >

            {trendingRestaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </ScrollView>


      </View>

      <View style={styles.trendingRestaurantCard}>
      <View style={styles.timeLeftBadge}>
          <Ionicons
            name={"flash"}
            size={24}
            color={"orange"}
          />
          <Text style={styles.timeLeftText}>
            Dare to Try?</Text>
        </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.restaurantScroll}
      >
        {trendingRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </ScrollView>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    paddingTop:5,
    paddingLeft: 16,
    paddingRight: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  locationButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6'
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12
  },
  categoryScroll: {
    marginBottom: 24
  },
  trendingContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  trendingRestaurantCard: {
    flex: 1,
    flexDirection: 'column',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb'
  },
  categoryIcon: {
    marginRight: 4
  },
  categoryText: {
    fontSize: 14
  },
  restaurantScroll: {
    flex: 1,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 24
  },
  timeLeftBadge: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeLeftText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ExplorePage;