import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Trying to log in with:', email, password);
    navigation.navigate('UserHome' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Welcome Back</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder='Email'
          placeholderTextColor='#8a8a8a'
          autoCapitalize='none'
          keyboardType='email-address'
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder='Password'
          placeholderTextColor='#8a8a8a'
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  inner: {
    marginTop: 120,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 40,
    color: '#111',
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16, // <-- text style
    marginBottom: 20,
  } as TextStyle | ViewStyle, // ✅ FIX HERE
  button: {
    height: 55,
    borderRadius: 12,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  backText: {
    color: '#444',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
