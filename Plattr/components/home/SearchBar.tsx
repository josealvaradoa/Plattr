import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search'
}) => (
  <View style={styles.container}>
    <View style={{
      flexDirection: 'row',
      alignItems: 'center' as const,
      backgroundColor: '#F5F5F5',
      padding: 8,
      borderRadius: 8,
    }}>
      <Ionicons
        name="search"
        size={20}
        color="gray"
        style={styles.icon} 
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="gray"
      />
    </View>
  </View>
);

const styles = {
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
};
 