import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

interface ProfileOption {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  onPress: () => void;
}

const ProfileScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const profileOptions: ProfileOption[] = [
    {
      icon: 'bookmark-outline',
      title: 'Saved Deals',
      onPress: () => router.push('/wallet'),
    },
    {
      icon: 'time-outline',
      title: 'Deal History',
      onPress: () => console.log('Navigate to deal history'),
    },
    {
      icon: 'heart-outline',
      title: 'Favorite Restaurants',
      onPress: () => console.log('Navigate to favorites'),
    },
  ];

  const renderProfileOption = ({ icon, title, onPress }: ProfileOption) => (
    <TouchableOpacity
      key={title}
      style={styles.optionContainer}
      onPress={onPress}
    >
      <View style={styles.optionContent}>
        <Ionicons name={icon} size={24} color="#333" />
        <Text style={styles.optionText}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#999" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editImageButton}>
              <Ionicons name="camera" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>John Doe</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Deals Used</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
        </View>

        {/* Profile Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Activity</Text>
          {profileOptions.map(renderProfileOption)}
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <TouchableOpacity style={styles.optionContainer} onPress={() => console.log('Navigate to Preferences')}>
            <View style={styles.optionContent}>
              <Ionicons name="options-outline" size={24} color="#333" />
              <Text style={styles.optionText}>Dining Preferences</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => console.log('Navigate to Account Settings')}>
            <View style={styles.optionContent}>
              <Ionicons name="person-outline" size={24} color="#333" />
              <Text style={styles.optionText}>Account Settings</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => console.log('Navigate to Change Password')}>
            <View style={styles.optionContent}>
              <Ionicons name="lock-closed-outline" size={24} color="#333" />
              <Text style={styles.optionText}>Change Password</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => console.log('Navigate to Email Settings')}>
            <View style={styles.optionContent}>
              <Ionicons name="mail-outline" size={24} color="#333" />
              <Text style={styles.optionText}>Email Settings</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>
          <View style={styles.settingContainer}>
            <View style={styles.settingContent}>
              <Ionicons name="notifications-outline" size={24} color="#333" />
              <Text style={styles.settingText}>Push Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#767577', true: '#4CAF50' }}
            />
          </View>
          <View style={styles.settingContainer}>
            <View style={styles.settingContent}>
              <Ionicons name="location-outline" size={24} color="#333" />
              <Text style={styles.settingText}>Location Services</Text>
            </View>
            <Switch
              value={locationEnabled}
              onValueChange={setLocationEnabled}
              trackColor={{ false: '#767577', true: '#4CAF50' }}
            />
          </View>
        </View>
        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <TouchableOpacity style={styles.optionContainer} onPress={() => console.log('Navigate to Help Center')}>
            <View style={styles.optionContent}>
              <Ionicons name="help-circle-outline" size={24} color="#333" />
              <Text style={styles.optionText}>Help Center</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => console.log('Navigate to Contact Us')}>
            <View style={styles.optionContent}>
              <Ionicons name="mail-outline" size={24} color="#333" />
              <Text style={styles.optionText}>Contact Us</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => console.log('Navigate to Terms')}>
            <View style={styles.optionContent}>
              <Ionicons name="document-text-outline" size={24} color="#333" />
              <Text style={styles.optionText}>Terms & Conditions</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => console.log('Navigate to Privacy')}>
            <View style={styles.optionContent}>
              <Ionicons name="shield-outline" size={24} color="#333" />
              <Text style={styles.optionText}>Privacy Policy</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editImageButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#F1414B',
    borderRadius: 15,
    padding: 8,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  editProfileButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  editProfileText: {
    color: '#333',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F1414B',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 15,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 15,
  },
});

export default ProfileScreen;