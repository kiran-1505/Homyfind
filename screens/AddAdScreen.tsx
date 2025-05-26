import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, storage } from '../src/firebase/firebaseConfig';
import styles from './Myadsstyles';

export default function AddAdScreen({ navigation }: any) {
  const [pgName, setPgName] = useState('');
  const [address, setAddress] = useState('');
  const [nearbyLandmark, setNearbyLandmark] = useState('');
  const [sharingOption, setSharingOption] = useState<number | null>(null);
  const [rent, setRent] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const generateUniqueFileName = () => {
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 8);
    return `${timestamp}_${randomStr}.jpg`;
  };

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      const uris = result.assets.map((asset) => asset.uri);
      setImages((prev) => [...prev, ...uris]);
    }
  };

  const uploadImages = async () => {
    const urls: string[] = [];

    for (const uri of images) {
      const response = await fetch(uri);
      const blob = await response.blob();
      const fileName = generateUniqueFileName();
      const imageRef = ref(storage, `pgImages/${fileName}`);
      await uploadBytes(imageRef, blob);
      const downloadURL = await getDownloadURL(imageRef);
      urls.push(downloadURL);
    }

    return urls;
  };

  const handleSubmit = async () => {
    if (!pgName || !address || !nearbyLandmark || !rent || sharingOption === null || images.length === 0)
    {
      Alert.alert('Please fill all required fields and upload at least one image.');
      return;
    }

    try {
      const uploadedImageUrls = await uploadImages();

      await addDoc(collection(db, 'pgAds'), {
        pgname: pgName,
        address,
        nearbyLocation: nearbyLandmark,
        sharingOption,
        rent: Number(rent),
        images: uploadedImageUrls,
        createdAt: serverTimestamp(),
        ownerId: auth.currentUser?.uid || null,
      });

      Alert.alert('Success', 'Ad submitted successfully!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to submit ad.');
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Add PG Advertisement</Text>

      <TextInput style={styles.input} placeholder="PG Name" value={pgName} onChangeText={setPgName} />
      <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
      <TextInput style={styles.input} placeholder="Nearby Landmark" value={nearbyLandmark} onChangeText={setNearbyLandmark} />
      <Text style={styles.label}>Sharing Options</Text>
      <View style={styles.sharingButtonsContainer}>
        {[1, 2, 3, 4, 5].map((num) => (
          <TouchableOpacity
            key={num}
            style={[
              styles.sharingButton,
              sharingOption === num && styles.sharingButtonSelected,
            ]}
            onPress={() => setSharingOption(num)}
          >
            <Text style={styles.sharingButtonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput style={styles.input} placeholder="Rent (in ₹)" value={rent} onChangeText={setRent} keyboardType="numeric" />

      <TouchableOpacity style={styles.imagePickerButton} onPress={pickImages}>
        <Text style={styles.imagePickerText}>Pick Images</Text>
      </TouchableOpacity>

      <ScrollView horizontal>
        {images.map((uri, index) => (
          <Image key={index} source={{ uri }} style={{ width: 100, height: 100, margin: 5, borderRadius: 8 }} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.loginButtonText}>Submit Ad</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
