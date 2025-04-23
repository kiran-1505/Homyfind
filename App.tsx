import { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'; // helps delay rendering until fonts load
import SplashScreen from './screens/SplashScreen';
import Navigation from './navigation';

const fetchFonts = () => {
  return Font.loadAsync({
    Audiowide: require('./assets/fonts/Audiowide-Regular.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <Navigation />
  );
}