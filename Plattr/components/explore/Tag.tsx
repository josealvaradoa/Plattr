// components/Tag.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TagProps {
  text: string;
  variant: 'mexican' | 'local' | 'fast' | 'american' | 'sitdown';
}

const Tag: React.FC<TagProps> = ({ text, variant }) => {
  const getVariantStyle = () => {
    switch(variant) {
      case 'mexican':
        return styles.mexican;
      case 'local':
        return styles.local;
      case 'fast':
        return styles.fast;
      case 'american':
        return styles.american;
      case 'sitdown':
        return styles.sitdown;
      default:
        return styles.default;
    }
  };

  const getTextStyle = () => {
    switch(variant) {
      case 'mexican':
        return styles.mexicanText;
      case 'local':
        return styles.localText;
      case 'fast':
        return styles.fastText;
      case 'american':
        return styles.americanText;
      case 'sitdown':
        return styles.sitdownText;
      default:
        return styles.defaultText;
    }
  };

  return (
    <View style={[styles.container, getVariantStyle()]}>
      <Text style={[styles.text, getTextStyle()]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12
  },
  text: {
    fontSize: 12,
    fontWeight: '500'
  },
  mexican: {
    backgroundColor: '#FED7AA'
  },
  mexicanText: {
    color: '#9A3412'
  },
  local: {
    backgroundColor: '#BBF7D0'
  },
  localText: {
    color: '#166534'
  },
  fast: {
    backgroundColor: '#FECACA'
  },
  fastText: {
    color: '#991B1B'
  },
  american: {
    backgroundColor: '#FBCFE8'
  },
  americanText: {
    color: '#9D174D'
  },
  sitdown: {
    backgroundColor: '#BFDBFE'
  },
  sitdownText: {
    color: '#1E40AF'
  },
  default: {
    backgroundColor: '#E5E7EB'
  },
  defaultText: {
    color: '#374151'
  }
});

export default Tag;