import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MenuCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const MenuCategories: React.FC<MenuCategoriesProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <TouchableOpacity 
        style={[
          styles.categoryPill, 
          selectedCategory === 'all' && styles.categoryPillActive
        ]}
        onPress={() => onSelectCategory('all')}
        accessibilityRole="button"
        accessibilityState={{ selected: selectedCategory === 'all' }}
      >
        <Text 
          style={[
            styles.categoryPillText, 
            selectedCategory === 'all' && styles.categoryPillTextActive
          ]}
        >
          All
        </Text>
      </TouchableOpacity>
      
      {categories.map((category, index) => (
        <TouchableOpacity 
          key={index} 
          style={[
            styles.categoryPill, 
            selectedCategory === category && styles.categoryPillActive
          ]}
          onPress={() => onSelectCategory(category)}
          accessibilityRole="button"
          accessibilityState={{ selected: selectedCategory === category }}
        >
          <Text 
            style={[
              styles.categoryPillText, 
              selectedCategory === category && styles.categoryPillTextActive
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  contentContainer: {
    paddingRight: 16,
  },
  categoryPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    marginRight: 8,
  },
  categoryPillActive: {
    backgroundColor: '#FF5A5F',
  },
  categoryPillText: {
    fontSize: 14,
    color: '#666',
  },
  categoryPillTextActive: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
});

export default MenuCategories;