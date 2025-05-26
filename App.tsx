import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import Navigation from './navigation';
import SplashScreenComponent from './screens/SplashScreen'; // custom component

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fontsLoaded] = useFonts({
    Audiowide: require('./assets/fonts/Audiowide-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  if (showSplash) {
    return <SplashScreenComponent onFinish={() => setShowSplash(false)} />;
  }

  return <Navigation />;
}
