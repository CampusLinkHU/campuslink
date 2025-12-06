import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  PanResponder,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Entypo, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const HomescreenHeader = ({
  currentZip,
  parent,
}: {
  currentZip: string;
  parent: 'home' | 'map';
}) => {
  const navigation = useNavigation();

  const [pickedAddress, setPickedAddress] = useState('Howard University'); // Current address displayed
  const handleAddressClick = (address: string) => {
    setPickedAddress(address);
    setLocation(false);
  };

  const pastLocations = {
    'Howard University': '2400 Sixth St NW, Washington DC 20001',
    'Vie Towers': '1615 Belcrest Rd, Hyattsvill MD 20782',
    '256 Highway St': 'New York, NY 11245',
    '154 Harvard Avenue': 'Boston, MA 02134',
  };

  const [location, setLocation] = useState(false); // For the pop screen to show up or not

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          setLocation(false); // Close the modal if user swipes down
        }
      },
    })
  ).current;

  function renderModal() {
    // List of Locations

    return (
      // Pop up screen for User to select location
      <Modal visible={location} animationType='slide' transparent={true}>
        <View style={[styles.locationPopUp, { marginTop: 50 }]}>
          <View {...panResponder.panHandlers}>
            <View style={styles.locationBox}>
              <View style={styles.locationContent}>
                <Text style={styles.locationHeader}>Enter Location</Text>

                {/* Search box in pop up screen */}
                <View style={styles.searchContainer}>
                  <Ionicons
                    name='search-outline'
                    size={17}
                    color='black'
                    style={styles.searchIcon}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder='Search Campus Connect'
                  />
                </View>

                <Text style={styles.pastLocations}>Past Locations</Text>

                {/* List of locations in pop up screen */}
                {Object.entries(pastLocations).map(
                  ([address, description], index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleAddressClick(address)}
                    >
                      <View style={[styles.pastLocationContainer]}>
                        <View style={styles.sectionLocation}>
                          <Entypo
                            name='location-pin'
                            size={27}
                            color='black'
                            style={[
                              styles.pin,
                              pickedAddress === address && styles.pickedAddress,
                            ]}
                          />
                          <View style={styles.wholeLocation}>
                            <Text
                              style={[
                                styles.pastLocation,
                                pickedAddress === address &&
                                  styles.pickedAddress,
                              ]}
                            >
                              {address}
                            </Text>
                            <Text
                              style={[
                                styles.address,
                                pickedAddress === address &&
                                  styles.pickedAddress,
                              ]}
                            >
                              {description}
                            </Text>
                          </View>
                        </View>

                        <View style={styles.locationDivider} />
                      </View>
                    </TouchableOpacity>
                  )
                )}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.TopBarBorder}>
      <View style={styles.TopBar}>
        <View style={styles.homeHeader}>
          {/* Location button w/ icons */}
          <TouchableOpacity
            style={styles.location}
            onPress={() => setLocation(true)}
          >
            <Entypo name='location-pin' size={21} color='#f2998d' />
            <Text style={styles.showedAddress}>{pickedAddress}</Text>
            {/* <MaterialIcons
              name='keyboard-arrow-down'
              size={22}
              color='#f2998d'
            /> */}
          </TouchableOpacity>

          {/* Pop Up screen from location */}
          {/* {renderModal()} */}

          {/* Notification icon */}
          <View style={styles.iconBttns}>
            <TouchableOpacity style={styles.notification}>
              <Ionicons name='notifications-outline' size={20} color='black' />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.notification}
              //   onPress={() => {
              //     navigation.navigate('Carts');
              //   }}
            >
              <Ionicons name='cart-outline' size={20} color='black' />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Box */}
        <View style={styles.searchContainer}>
          <Ionicons
            name='search-outline'
            size={17}
            color='black'
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Search Campus Connect'
          />
          <View style={styles.divider} />
          <TouchableOpacity
            onPress={() => {
              if (parent != 'map') {
                navigation.navigate('UserMap', {
                  zipCode: currentZip,
                });
              } else {
                navigation.goBack();
              }
            }}
          >
            {parent == 'home' && (
              <Feather
                name='map'
                size={17}
                color='black'
                style={styles.mapIcon}
              />
            )}

            {parent == 'map' && (
              <Feather
                name='list'
                size={17}
                color='black'
                style={styles.mapIcon}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export { HomescreenHeader };

const styles = StyleSheet.create({
  homeScreenLayout: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },

  homeAdjustment: {
    marginTop: 20,
  },

  scroll: {
    marginBottom: 105,
  },

  TopBarBorder: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e4e4e4',
  },

  TopBar: {
    // React Native does not support sticky; use position: 'absolute' if needed
    backgroundColor: 'transparent',
    zIndex: 100,
    marginLeft: '3%',
    marginRight: '3%',
  },

  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationPopUp: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },

  locationBox: {
    width: '100%',
    paddingBottom: '7%',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  locationContent: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
    paddingBottom: 25,
    alignContent: 'center',
  },

  locationHeader: {
    fontSize: 25,
    marginLeft: 6,
    fontWeight: '600',
  },

  searchInput: {
    width: '100%',
    height: 48.177,
    backgroundColor: '#f5f5f5',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 0,
    paddingLeft: 10,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pastLocations: {
    fontSize: 18,
    marginLeft: 6,
    fontWeight: '600',
  },

  pastLocationContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    top: 20,
    marginLeft: 6,
  },

  sectionLocation: {
    flexDirection: 'row',
    alignContent: 'center',
  },

  pin: {
    marginTop: 5,
    marginRight: 7,
  },

  wholeLocation: {
    flexDirection: 'column',
    marginBottom: 10,
  },

  pastLocation: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: '500',
  },

  address: {
    fontSize: 13,
    fontWeight: '400',
  },

  pickedAddress: {
    color: '#f2998d',
  },

  showedAddress: {
    fontSize: 13,
    fontWeight: '600',
    color: '#f2998d',
  },

  locationDivider: {
    marginBottom: 15,
    height: 1,
    width: '100%',
    backgroundColor: '#00000020',
  },

  notification: {
    marginRight: 10,
  },

  searchContainer: {
    width: '100%',
    height: 48.177,
    backgroundColor: '#f5f5f5',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 18,
    paddingLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchIcon: {
    marginRight: 10,
  },

  textInput: {
    flex: 1,
    height: '100%',
  },

  mapIcon: {
    marginRight: 10,
  },

  divider: {
    width: 1,
    marginRight: 10,
    height: '65%',
    backgroundColor: '#00000040',
  },

  slider: {
    marginLeft: '2%',
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'column',
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '2%',
    marginLeft: '1%',
  },

  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  slide: {
    flexDirection: 'row',
  },

  card: {
    width: 250,
    height: 130,
    marginTop: 10,
    borderRadius: 10,
  },

  cardMargin: {
    marginRight: 10,
  },

  divide: {
    height: 1,
    width: '95%',
    backgroundColor: '#00000020',
    marginLeft: 12,
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 38,
  },

  button: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  buttonword: {
    fontSize: 12,
    paddingBottom: 25,
  },

  selectedButton: {
    color: '#f2998d',
  },

  iconBttns: {
    flexDirection: 'row',
  },

  cartLengthBttn: {
    height: 15,
    width: 15,
    backgroundColor: '#f2998d',
    alignItems: 'center',
    borderRadius: 999,
    paddingTop: 0.5,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },

  cartLengthText: {
    color: '#fff',
    fontSize: 12,
  },
});
