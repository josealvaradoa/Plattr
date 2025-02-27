import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TagPillProps } from './types';

const TagPill: React.FC<TagPillProps> = ({ text, variant = 'default' }) => {
  return (
    <View style={[styles.pill, getVariantStyle(variant)]}>
      <Text style={[styles.text, getTextStyle(variant)]}>{text}</Text>
    </View>
  );
};

const getVariantStyle = (variant: string) => {
  switch (variant) {
    case 'dietary':
      return styles.dietaryPill;
    case 'deal':
      return styles.dealPill;
    case 'cuisine':
      return styles.cuisinePill;
    default:
      return styles.defaultPill;
  }
};

const getTextStyle = (variant: string) => {
  switch (variant) {
    case 'dietary':
      return styles.dietaryText;
    case 'deal':
      return styles.dealText;
    case 'cuisine':
      return styles.cuisineText;
    default:
      return styles.defaultText;
  }
};

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
  },
  defaultPill: {
    backgroundColor: '#F2F2F2',
  },
  defaultText: {
    color: '#666',
  },
  dietaryPill: {
    backgroundColor: '#E8F5E9',
  },
  dietaryText: {
    color: '#2E7D32',
  },
  dealPill: {
    backgroundColor: '#F0F7FF',
  },
  dealText: {
    color: '#4280D7',
  },
  cuisinePill: {
    backgroundColor: '#FFF8E1',
  },
  cuisineText: {
    color: '#FF8F00',
  },
});

export default TagPill;