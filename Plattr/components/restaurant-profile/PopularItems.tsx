import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MenuItem } from './types';

interface PopularItemsProps {
  items: MenuItem[];
}

const PopularItems: React.FC<PopularItemsProps> = ({ items}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Popular Items</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
      >
        {items.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.itemCard}
            activeOpacity={0.8}
          >
            {item.imageUri ? (
              <Image 
                source={{ uri: item.imageUri }} 
                style={styles.itemImage}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.itemPlaceholder}>
                <Ionicons name="restaurant-outline" size={32} color="#999" />
              </View>
            )}
            <Text style={styles.itemName} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  scrollContainer: {
    marginBottom: 8,
  },
  contentContainer: {
    paddingRight: 16,
  },
  itemCard: {
    width: 150,
    marginRight: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  itemImage: {
    width: '100%',
    height: 100,
  },
  itemPlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    padding: 8,
    paddingBottom: 2,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default PopularItems;