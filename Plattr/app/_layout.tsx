// app/_layout.tsx
import { Slot } from 'expo-router';
import { LocationProvider } from '../hooks/LocationContext';

export default function RootLayout() {
  return (
    <LocationProvider>
      {/* Slot will render any child routes or layout */}
      <Slot />
    </LocationProvider>
  );
}
