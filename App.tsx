import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Navigation from './navigation'; // Your navigation component

// Fetch fonts from your assets
const fetchFonts = () => {
  return useFonts({
    Audiowide: require('./assets/fonts/Audiowide-Regular.ttf'), // Replace with your font
  });
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Audiowide: require('./assets/fonts/Audiowide-Regular.ttf'),
  });
  
  const [appIsReady, setAppIsReady] = useState(false); // Flag to track app readiness

  useEffect(() => {
    // Keep splash screen visible until the app is ready
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync(); // Prevent splash screen from hiding
        // Load resources or data here if necessary
      } catch (e) {
        console.warn(e);
      }
    };

    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      // Once fonts are loaded, hide the splash screen
      SplashScreen.hideAsync();
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null; // You can show a loading screen here if necessary
  }

  return <Navigation />;
}
