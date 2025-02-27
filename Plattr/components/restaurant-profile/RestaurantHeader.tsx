import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RestaurantHeaderProps } from './types';

const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({ imageUri, onClose }) => {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={styles.headerContainer}>
      <Image 
        source={{ uri: imageUri }} 
        style={styles.headerImage}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'transparent']}
        style={styles.headerGradient}
      />
      
      <TouchableOpacity 
        style={[styles.closeButton, { top: insets.top + 10 }]} 
        onPress={onClose}
        accessibilityLabel="Close restaurant profile"
        accessibilityRole="button"
      >
        <Ionicons name="close" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 200,
    width: '100%',
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 80,
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});

export default RestaurantHeader;