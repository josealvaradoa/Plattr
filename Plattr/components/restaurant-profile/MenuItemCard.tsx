import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../../types/menuItem';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  // Format price from number to string with $ prefix
  const formattedPrice = item.price ? `$${item.price.toFixed(2)}` : '';
  
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          
          {item.description && (
            <Text style={styles.description} numberOfLines={2}>
              {item.description}
            </Text>
          )}
          
          <View style={styles.footer}>
            {formattedPrice && (
              <Text style={styles.price}>{formattedPrice}</Text>
            )}
            
            {item.dietaryInfo && item.dietaryInfo.length > 0 && (
              <View style={styles.dietaryContainer}>
                {item.dietaryInfo.map((info, index) => (
                  <View key={index} style={styles.dietaryBadge}>
                    <Text style={styles.dietaryText}>{info}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {item.isPopular && (
              <View style={styles.popularBadge}>
                <Text style={styles.popularText}>Popular</Text>
              </View>
            )}
          </View>
        </View>
        
        {item.imageUrl && (
          <View style={styles.imageContainer}>
            <Image
              source={item.imageUrl}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#3A3A3C',
    marginBottom: 8,
    lineHeight: 18,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3A3A3C',
    marginRight: 8,
  },
  dietaryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dietaryBadge: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 4,
  },
  dietaryText: {
    fontSize: 12,
    color: '#3A3A3C',
  },
  popularBadge: {
    backgroundColor: '#FF9500',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  popularText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default MenuItemCard;