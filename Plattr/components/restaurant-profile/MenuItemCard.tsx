import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MenuItemProps } from './types';
import TagPill from './TagPill';

const MenuItemCard: React.FC<MenuItemProps> = ({ item }) => {
  const hasImage = !!item.imageUri;
  
  return (
    <View style={styles.menuItem}>
      <View style={[
        styles.menuItemContent,
        !hasImage && styles.menuItemContentFull
      ]}>
        <View style={styles.menuItemHeader}>
          <View style={styles.nameContainer}>
            <Text style={styles.menuItemName}>{item.name}</Text>
            {item.popular && (
              <View style={styles.popularContainer}>
                <Text style={styles.popularBadge}>• Popular</Text>
              </View>
            )}
          </View>
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
      
      {hasImage ? (
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: item.imageUri }} 
            style={styles.menuItemImage}
            resizeMode="cover"
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  menuItemContent: {
    flex: 1,
    marginRight: 16,
    justifyContent: 'space-between',
  },
  menuItemContentFull: {
    marginRight: 0,
  },
  menuItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  nameContainer: {
    flex: 1,
    marginRight: 12,
  },
  menuItemName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.4,
    marginBottom: 2,
  },
  popularContainer: {
    marginTop: 2,
  },
  popularBadge: {
    fontSize: 13,
    color: '#FF5A5F',
    fontWeight: '500',
  },
  menuItemPrice: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '600',
  },
  menuItemDescription: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 10,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    }),
  },
  menuItemImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  menuItemPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: '#F5F5F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dietaryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
});

export default MenuItemCard;