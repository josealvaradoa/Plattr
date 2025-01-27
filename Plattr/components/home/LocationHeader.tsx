import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type LocationHeaderProps = {
  location: string;
  onProfilePress: () => void;
};

export const LocationHeader: React.FC<LocationHeaderProps> = ({ 
  location, 
  onProfilePress 
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Local Deals in {location}</Text>
    <TouchableOpacity onPress={onProfilePress}>
      <Ionicons name="person-circle-outline" size={30} color="black" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: '600' as const,
  },
});
