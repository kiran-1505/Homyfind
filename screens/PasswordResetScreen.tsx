import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { auth } from '../src/firebase/firebaseConfig';
import styles from './Myadsstyles';
import { RootStackParamList } from '../navigation/types';

type PasswordResetNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PasswordReset'>;

export default function PasswordResetScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<PasswordResetNavigationProp>();

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Password reset email sent!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 40, marginBottom: 20 }}>
              <Text style={{ fontSize: 18 }}>{'← Back to Login'}</Text>
            </TouchableOpacity>

      <Text style={styles.heading}>Enter your email to reset password.</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <TouchableOpacity style={styles.loginButton} onPress={handlePasswordReset}>
        <Text style={styles.loginButtonText}>Send Reset Email</Text>
      </TouchableOpacity>
    </View>
  );
}
