import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const Homescreen = () => {
  const navigation = useNavigation();
  const fontsLoaded = true;

  const handleCustomerChange = () => {
    navigation.navigate('Login');
  };

  const handleBusinessChange = () => {
    navigation.navigate('BusinessLogin');
  };

  return (
    <>
      {/* <View style={styles.container}>
        <Image source={require('./assets/bg.png')} style={styles.image} />
      </View> */}

      <View style={styles.overlay}>
        <View />
        {/* <Image
          source={require('./assets/nexa.png')}
          style={styles.logoContainer}
        /> */}

        <View style={styles.bttns}>
          <View>
            <TouchableOpacity
              style={styles.landingBtnsContainer}
              onPress={handleCustomerChange}
            >
              {fontsLoaded ? (
                <Text style={styles.bttnText}>Customer</Text>
              ) : (
                <ActivityIndicator />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.landingBtnsContainer}
              onPress={handleBusinessChange}
            >
              {fontsLoaded ? (
                <Text style={styles.bttnText}>Business Owner</Text>
              ) : (
                <ActivityIndicator />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.adminLoginTextContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
              <Text style={styles.adminLoginText}>Admin Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export { Homescreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    position: 'relative',
    bottom: 60,
    width: 365.708,
    height: 145.905,
    resizeMode: 'contain',
  },

  landingBtnsContainer: {
    marginVertical: 10,
    width: 197,
    height: 48,
    backgroundColor: '#E6D67A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  bttnText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 22,
  },

  adminLoginText: {
    color: '#FBC0D6',
  },

  bttns: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  adminLoginTextContainer: {
    marginTop: '20%',
  },
});
