// app/tabs/_layout.tsx (or TabsLayout.tsx)
import { Tabs, usePathname, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { useState } from 'react';
import { LocationHeader } from '../../components/home/LocationHeader';
import { SearchBar } from '../../components/home/SearchBar';
import { useLocationContext } from '../../hooks/LocationContext';

export default function TabsLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const { location, errorMsg, isFetching } = useLocationContext();

  const handleProfilePress = () => {
    router.push('/profile');
  };

  const shouldShowSearch = !['wallet', 'profile', ''].includes(pathname.replace('/', ''));

  // Decide what to display as location
  let displayLocation = 'Loading...';
  if (!isFetching) {
    displayLocation = errorMsg ? errorMsg : location || 'Unknown';
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        {/* Your custom header */}
        <View style={{ borderBottomColor: '#f0f0f0' }}>
          <LocationHeader
            location={displayLocation}
            onProfilePress={handleProfilePress}
          />
          {shouldShowSearch && (
            <SearchBar
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search deals"
            />
          )}
        </View>

        {/* Tabs Navigation */}
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
              ),
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
