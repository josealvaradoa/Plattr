import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TabProps, TabType } from './types';

const ProfileTabs: React.FC<TabProps> = ({ activeTab, onTabPress }) => {
  const tabs: Array<{ key: TabType; label: string }> = [
    { key: 'deals', label: 'Deals' },
    { key: 'menu', label: 'Menu' },
    { key: 'about', label: 'About' }
  ];
  
  return (
    <View style={styles.tabContainer}>
      {tabs.map(tab => (
        <TouchableOpacity 
          key={tab.key}
          style={[
            styles.tabButton, 
            activeTab === tab.key && styles.activeTabButton
          ]} 
          onPress={() => onTabPress(tab.key)}
          accessibilityState={{ selected: activeTab === tab.key }}
          accessibilityRole="tab"
        >
          <Text style={[
            styles.tabText, 
            activeTab === tab.key && styles.activeTabText
          ]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF5A5F',
  },
  tabText: {
    fontSize: 16,
    color: '#999',
  },
  activeTabText: {
    color: '#FF5A5F',
    fontWeight: '600',
  },
});

export default ProfileTabs;