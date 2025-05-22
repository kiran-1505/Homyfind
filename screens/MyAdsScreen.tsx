import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../src/firebase/firebaseConfig';
import LoginScreen from './LoginScreen'; // Adjust path if needed
import styles from './Myadsstyles';

export default function MyAdsScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setCheckingAuth(false);
    });
    return unsubscribe;
  }, []);

  if (checkingAuth) {
    return <Text>Loading...</Text>;
  }

  if (!user) {
    // Show login screen **inside the tab**
    return <LoginScreen />;
  }

  // Authenticated: Show My Ads UI
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Ads</Text>
      {/* Form to add PG ad + list ads here */}
      {/* You can create form and list components here */}
    </View>
  );
}