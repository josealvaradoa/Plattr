import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantData } from '../../types/restaurant';
import MenuCategories from './MenuCategories';
import PopularItems from './PopularItems';
import MenuItemCard from './MenuItemCard';

interface MenuViewProps {
  restaurant: RestaurantData;
}

const MenuView: React.FC<MenuViewProps> = ({ restaurant }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const handleSelectCategory = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);
  
  
  if (!restaurant.menu) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="restaurant-outline" size={48} color="#999" />
        <Text style={styles.emptyText}>Menu not available</Text>
        <Text style={styles.emptySubtext}>This restaurant hasn't uploaded their menu yet.</Text>
      </View>
    );
  }
  
  // Get popular items
  const popularItems = restaurant.menu.items.filter(item => item.popular);
  
  // Filter items by selected category
  const filteredItems = selectedCategory === 'all'
    ? restaurant.menu.items
    : restaurant.menu.items.filter(item => item.category === selectedCategory);
  
  // Group items by category for display
  const itemsByCategory = restaurant.menu.categories.reduce((acc, category) => {
    const items = filteredItems.filter(item => item.category === category);
    if (items.length > 0) {
      acc[category] = items;
    }
    return acc;
  }, {} as Record<string, typeof restaurant.menu.items>);
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <MenuCategories 
        categories={restaurant.menu.categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
 
      {selectedCategory === 'all' ? (
        // Display all categories
        Object.entries(itemsByCategory).map(([category, items]) => (
          <View key={category} style={styles.categorySection}>
            <Text style={styles.categoryTitle}>{category}</Text>
            {items.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </View>
        ))
      ) : (
        // Display only selected category
        filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))
        ) : (
          <View style={styles.noCategoryItemsContainer}>
            <Text style={styles.noCategoryItemsText}>
              No items available in this category
            </Text>
          </View>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 8,
  },
  categorySection: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  noCategoryItemsContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noCategoryItemsText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

export default MenuView;