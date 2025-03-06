// AboutView.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Restaurant } from '../../types/restaurant';

interface AboutViewProps {
  restaurant: Restaurant;
}

const AboutView: React.FC<AboutViewProps> = ({ restaurant }) => {
  const handlePhonePress = () => {
    if (!restaurant.phoneNumber) return;
    
    const phoneNumber = restaurant.phoneNumber.replace(/[^\d]/g, '');
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleWebsitePress = () => {
    if (!restaurant.website) return;
    
    let url = restaurant.website;
    if (!url.startsWith('http')) {
      url = `https://${url}`;
    }
    Linking.openURL(url);
  };

  const handleAddressPress = () => {
    if (!restaurant.address) return;
    
    Linking.openURL(`https://maps.google.com/?q=${encodeURIComponent(restaurant.address.street)}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          {restaurant.description || 'No description available.'}
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        {restaurant.phoneNumber && (
          <TouchableOpacity 
            style={styles.contactItem} 
            onPress={handlePhonePress}
            accessibilityRole="button"
            accessibilityLabel="Call restaurant"
          >
            <Feather name="phone" size={18} color="#666" />
            <Text style={styles.contactText}>{restaurant.phoneNumber}</Text>
          </TouchableOpacity>
        )}
        
        {restaurant.website && (
          <TouchableOpacity 
            style={styles.contactItem} 
            onPress={handleWebsitePress}
            accessibilityRole="button"
            accessibilityLabel="Visit restaurant website"
          >
            <Feather name="globe" size={18} color="#666" />
            <Text style={styles.contactText}>{restaurant.website}</Text>
          </TouchableOpacity>
        )}
        
        {restaurant.address && (
          <TouchableOpacity 
            style={styles.contactItem} 
            onPress={handleAddressPress}
            accessibilityRole="button"
            accessibilityLabel="View restaurant location"
          >
            <Feather name="map-pin" size={18} color="#666" />
            <Text style={styles.contactText}>{restaurant.address.street}, {restaurant.address.city}, {restaurant.address.state} {restaurant.address.zip}</Text>
          </TouchableOpacity>
        )}
        
        {!restaurant.phoneNumber && !restaurant.website && !restaurant.address && (
          <Text style={styles.noContactText}>No contact information available.</Text>
        )}
      </View>
      
      {restaurant.hours && Object.keys(restaurant.hours).length > 0 ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Business Hours</Text>
          {Object.entries(restaurant.hours).map(([day, hours]) => (
            <View key={day} style={styles.hoursItem}>
              <Text style={styles.dayText}>{day}</Text>
              <Text style={styles.hoursText}>
                {hours.open === 'Closed' ? 'Closed' : `${hours.open || 'N/A'} - ${hours.close || 'N/A'}`}
              </Text>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Business Hours</Text>
          <Text style={styles.noHoursText}>Hours information not available.</Text>
        </View>
      )}
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 4,
  },
  contactText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#333',
  },
  hoursItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dayText: {
    fontSize: 14,
    color: '#333',
  },
  hoursText: {
    fontSize: 14,
    color: '#333',
  },
  noContactText: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 8,
  },
  noHoursText: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 8,
  },
});

export default AboutView;