import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MenuItemProps } from './types';
import TagPill from './TagPill';

const MenuItemCard: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <View style={styles.menuItem}>
      <View style={styles.menuItemContent}>
        <View style={styles.menuItemHeader}>
          <Text style={styles.menuItemName}>
            {item.name}
            {item.popular && (
              <Text style={styles.popularBadge}> • Popular</Text>
            )}
          </Text>
          <Text style={styles.menuItemPrice}>{item.price}</Text>
        </View>
        
        {item.description && (
          <Text style={styles.menuItemDescription}>{item.description}</Text>
        )}
        
        {item.dietaryInfo && item.dietaryInfo.length > 0 && (
          <View style={styles.dietaryContainer}>
            {item.dietaryInfo.map((info, i) => (
              <TagPill key={i} text={info} variant="dietary" />
            ))}
          </View>
        )}
      </View>
      
      {item.imageUri ? (
        <Image 
          source={{ uri: item.imageUri }} 
          style={styles.menuItemImage}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.menuItemPlaceholder}>
          <Ionicons name="restaurant-outline" size={24} color="#CCC" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuItemContent: {
    flex: 1,
    marginRight: 12,
  },
  menuItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  popularBadge: {
    fontSize: 12,
    color: '#FF5A5F',
    fontWeight: '400',
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  menuItemPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 6,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dietaryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default MenuItemCard;