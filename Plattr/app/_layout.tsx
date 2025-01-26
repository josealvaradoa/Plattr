import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity, Text, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LocationHeader} from '../components/home/LocationHeader';
import {SearchBar} from '../components/home/SearchBar';

export default function TabsLayout() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [location] = useState('Richmond');

  const handleProfilePress = () => {
    router.push('/profile');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <View style={{  borderBottomColor: '#f0f0f0' }}>
          <LocationHeader 
            location={location} 
            onProfilePress={handleProfilePress} 
          />
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search deals"
          />
        </View>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#FF0000',
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#ffffff',
              height: 60,
              paddingBottom: 8,
            },
          }}
        >
          {/* Tab screens remain the same */}
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'home-sharp' : 'home-outline'}
                  color={color}
                  size={24}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: 'Explore',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'search-sharp' : 'search-outline'}
                  color={color}
                  size={24}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="wallet"
            options={{
              title: 'Wallet',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name="wallet-outline"
                  color={color}
                  size={24}
                />
              )
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'person-circle-sharp' : 'person-circle-outline'}
                  color={color}
                  size={24}
                />
              ),
            }}
          />
        </Tabs>
      </View>
    </SafeAreaView>
  );
}