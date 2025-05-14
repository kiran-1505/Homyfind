import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import styles from './SearchScreen.styles';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../src/firebase/firebaseConfig';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [favoritePGs, setFavoritePGs] = useState<string[]>([]);
  const [suggestedPGs, setSuggestedPGs] = useState<any[]>([]);

  useEffect(() => {
    const fetchPGs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "pgs"));
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSuggestedPGs(data);
      } catch (err) {
        console.error("Firebase error: ", err);
      }
    };
    fetchPGs();
  }, []);

  const renderHeader = () => (
    <View>
      {/* Blue Header */}
      <View style={styles.header}>
        <Text style={styles.title}>HomyFind</Text>
      </View>

      {/* All other content wrapped with padding */}
      <View style={styles.contentWrapper}>
        <TextInput
          placeholder="Search PG's by area..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchBar}
        />

        {/* Search History */}
        <Text style={styles.sectionTitle}>Recent Searches</Text>
        <View style={styles.horizontalScroll}>
          {searchHistory.length > 0 ? (
            searchHistory.map((item, index) => (
              <View key={index} style={styles.itemBox}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))
          ) : (
            <View style={styles.itemBox}>
              <Text style={styles.placeholder}>No recent searches</Text>
            </View>
          )}
        </View>

        {/* Favorites */}
        <Text style={styles.sectionTitle}>Favorites</Text>
        <View style={styles.horizontalScroll}>
          {favoritePGs.length > 0 ? (
            favoritePGs.map((item, index) => (
              <View key={index} style={styles.itemBox}>
                <Text style={styles.itemText}>❤️ {item}</Text>
              </View>
            ))
          ) : (
            <View style={styles.itemBox}>
              <Text style={styles.placeholder}>No favorites yet</Text>
            </View>
          )}
        </View>

        {/* Suggested PGs Title */}
        <Text style={styles.sectionTitle}>Suggested PG's</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={suggestedPGs}
      keyExtractor={item => item.id}
      ListHeaderComponent={renderHeader}
      renderItem={({ item }) => (
        <View style={styles.pgCard}>
          <Text style={styles.pgName}>{item.name}</Text>
          <Text style={styles.pgLocation}>{item.address}</Text>
        </View>
      )}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}
