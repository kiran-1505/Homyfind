import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types'; // adjust path if needed
import { auth } from '../src/firebase/firebaseConfig';
import LoginScreen from './LoginScreen';
import styles from './Myadsstyles';

export default function MyAdsScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [ads, setAds] = useState<any[]>([]); // Replace 'any' with ad type later
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MyAds'>>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setCheckingAuth(false);

      // If logged in, fetch ads from Firestore (or use dummy for now)
      if (firebaseUser) {
        // Replace with Firestore fetching
        setAds([
          { id: '1', title: 'PG in HSR Layout' },
          { id: '2', title: '1BHK in Koramangala' },
        ]);
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Alert.alert('Logged out');
    } catch (error: any) {
      Alert.alert('Logout error', error.message);
    }
  };

  const handleAddAd = () => {
    navigation.navigate('AddAd');
 };
 

  if (checkingAuth) return <Text>Loading...</Text>;

  if (!user) return <LoginScreen />;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={handleAddAd}>
        <Text style={styles.addButtonText}>+ Add Advertisement</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>My Ads</Text>

      <FlatList
        data={ads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.adItem}>
            <Text>{item.title}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No ads posted yet.</Text>}
      />

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
