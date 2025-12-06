// PopUpScreen.js
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
// import MapView, { Callout, Marker } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';
import {
  Entypo,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BusinessProfilePopUp = ({
  isVisible,
  onClose,
  name,
  city,
  state,
  zip,
  address,
}) => {
  const navigation = useNavigation();

  //Handles dropdown to show business hours
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const businessHours = {
    'Monday-Saturday': '11am-9pm',
    Sunday: '11am-7pm',
  };

  //handles dropdown for user to rate business
  const [rate, setRate] = useState(false);
  const toggleRating = () => {
    setRate(!rate);
  };

  const [mapLocation, setMapLocation] = useState({
    latitude: 38.92784,
    longitude: -77.02336,
    latitudeDelta: 0.00013,
    longitudeDelta: 0.00694,
  });

  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.businessPopUp}>
        <View style={styles.businessPopupLayout}>
          {/* <MapView
            style={styles.businessMap}
            region={mapLocation}
            rotateEnabled={false}
            scrollEnabled={false}
          /> */}
          <TouchableOpacity
            style={styles.businessPopUpBack}
            onPress={() => {
              onClose();
            }}
          >
            <MaterialCommunityIcons name='close' size={27} color='black' />
          </TouchableOpacity>
          <ScrollView style={styles.businessMapInfo}>
            <Text style={styles.businessMapName}>{name}</Text>
            {/* <Text style={styles.businessMapSubInfo}>{subCat}</Text> */}

            <View style={styles.businessMapBox}>
              <TouchableOpacity
                // onPress={copyAddress}
                style={styles.businessMapContent}
              >
                <Entypo name='location-pin' size={26} color='black' />
                <View style={styles.businessMapText}>
                  <Text>{address}</Text>
                  <Text>
                    {city}, {state} {zip}
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name='content-copy'
                  size={18}
                  color='black'
                  style={styles.businessMapSubBttt}
                />
              </TouchableOpacity>
              <View style={styles.businessMapDivider}></View>
            </View>

            <View style={styles.businessMapBox}>
              <TouchableOpacity
                onPress={toggleDropdown}
                style={styles.businessMapContent}
              >
                <MaterialCommunityIcons name='clock' size={22} color='black' />
                <Text style={styles.businessMapText}>Open till 10:00pm</Text>
                {isDropdownOpen ? (
                  <Entypo
                    name='minus'
                    size={20}
                    color='black'
                    style={styles.businessMapSubBttt}
                  />
                ) : (
                  <Entypo
                    name='plus'
                    size={20}
                    color='black'
                    style={styles.businessMapSubBttt}
                  />
                )}
              </TouchableOpacity>
              {isDropdownOpen && (
                <View style={styles.dropdownContent}>
                  {Object.entries(businessHours).map(([days, hours], index) => (
                    <View style={styles.dropdownHours}>
                      <Text style={styles.dropdownDays}>{days}</Text>
                      <Text style={styles.dropdownTimes}>{hours}</Text>
                    </View>
                  ))}
                </View>
              )}
              <View style={styles.businessMapDivider}></View>
            </View>

            <View style={styles.businessMapBox}>
              <TouchableOpacity
                onPress={toggleRating}
                style={styles.businessMapContent}
              >
                <Ionicons name='star-sharp' size={22} color='black' />
                <Text style={styles.businessMapText}>Rate {name}</Text>
                {rate ? (
                  <Entypo
                    name='minus'
                    size={20}
                    color='black'
                    style={styles.businessMapSubBttt}
                  />
                ) : (
                  <Entypo
                    name='plus'
                    size={20}
                    color='black'
                    style={styles.businessMapSubBttt}
                  />
                )}
              </TouchableOpacity>
              {rate && <View style={styles.dropdownContent}></View>}
              <View style={styles.businessMapDivider}></View>
            </View>

            <View style={styles.businessMapBox}>
              <TouchableOpacity style={styles.businessMapContent}>
                <MaterialIcons name='message' size={22} color='black' />
                <Text style={styles.businessMapText}>Contact {name}</Text>
              </TouchableOpacity>
              <View style={styles.businessMapDivider}></View>
            </View>

            <View
              style={[
                styles.businessMapBox,
                isDropdownOpen && styles.businessMapBoxWithDropdown,
              ]}
            >
              <TouchableOpacity
                // onPress={promptCall}
                style={styles.businessMapContent}
              >
                <MaterialIcons name='phone' size={22} color='black' />
                <Text style={styles.businessMapText}>+1 (202) 232-1700</Text>
              </TouchableOpacity>
              <View style={styles.businessMapDivider}></View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
    // style={styles.businessDetails}
  );
};

export { BusinessProfilePopUp };

const styles = StyleSheet.create({
  businessProfileLayout: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },

  businessProfileAdjustment: {
    // marginBottom: 105, // commented out per original
  },

  businessTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%', // you can also convert % into exact numbers if needed
  },

  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftIcon: {
    marginLeft: '3%',
    marginTop: '2%',
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  banner: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f2998d',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },

  favorite: {
    marginRight: '3%',
    marginTop: '2%',
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  featureScrollView: {
    marginRight: 10,
  },

  featureOval: {
    backgroundColor: '#e4e4e4',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 25,
    marginRight: 10,
  },

  featureName: {
    color: 'black',
    fontWeight: 'bold',
  },

  businessScroll: {
    // No-op: original commented-out rules
  },

  businessHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  businessLogo: {
    width: 118,
    height: 118,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgb(228, 228, 228)',
    borderRadius: 75,
    marginTop: -40,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  businessInfo: {
    flexDirection: 'column',
  },

  businessName: {
    color: '#191919',
    fontSize: 25,
    fontWeight: '500',
    marginTop: '3%',
    marginBottom: '1%',
  },

  businessDetails: {
    flexDirection: 'row',
  },

  businessDistance: {
    color: 'rgb(103, 103, 103)',
  },

  businessTabView: {
    marginBottom: '25%',
    paddingTop: 12,
  },

  businessTab: {
    top: '3%',
    marginLeft: '4%',
    flexDirection: 'column',
  },

  tabName: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: '3%',
  },

  businessItem: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 5,
  },

  businessPrices: {
    marginBottom: 5,
  },

  businessDesc: {
    marginBottom: 5,
  },

  businessItemDivider: {
    height: 1,
    backgroundColor: '#e4e4e4',
    marginTop: 5,
    marginBottom: 30,
  },

  businessPopUp: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },

  businessPopupLayout: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: '90%',
  },

  businessMap: {
    height: '30%',
    borderRadius: 10,
  },

  businessPopUpBack: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
  },

  businessMapInfo: {
    flexDirection: 'column',
    top: '3%',
    marginLeft: 17,
  },

  businessMapName: {
    marginBottom: '1%',
    color: '#191919',
    fontSize: 22,
    fontWeight: '500',
  },

  businessMapSubInfo: {
    fontSize: 14,
    marginBottom: '7%',
    color: '#f2998d',
  },

  businessMapBox: {
    marginBottom: '5%',
  },

  businessMapBoxWithDropdown: {
    marginBottom: '15%',
  },

  businessMapContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },

  businessMapText: {
    fontSize: 14,
    marginLeft: '4%',
  },

  businessMapSubBttt: {
    marginLeft: 'auto',
  },

  dropdownContent: {
    marginLeft: '10%',
    marginRight: '5%',
    marginTop: '8%',
  },

  dropdownHours: {
    flexDirection: 'row',
    marginBottom: '3%',
  },

  dropdownDays: {
    fontWeight: '700',
  },

  dropdownTimes: {
    marginLeft: 'auto',
  },

  businessMapDivider: {
    height: 1,
    backgroundColor: '#e4e4e4',
    marginVertical: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalCloseButton: {
    marginBottom: '3%',
  },

  modalCloseButtonText: {
    fontSize: 14,
    color: 'black',
  },

  popUpContent: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: '55%',
  },

  itemImage: {
    width: '100%',
    height: 250,
  },

  itemNameandPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginRight: 5,
  },

  itemPrice: {
    flexDirection: 'row-reverse',
  },

  itemFavorite: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  itemFavoriteWords: {
    color: '#f2998d',
    marginLeft: '1%',
  },

  itemDescription: {
    fontSize: 13,
  },

  addButton: {
    alignItems: 'center',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    backgroundColor: '#f2998d',
    borderRadius: 10,
    marginTop: '7%',
  },

  addButtonText: {
    fontSize: 18,
    color: '#fff',
    // fontFamily: 'BebasNeue_400Regular', // RN font usage depends on how you load custom fonts
  },

  cartIcon: {
    paddingTop: 100,
  },

  featuredName: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10,
    paddingTop: 20,
  },

  activeCartBttn: {
    position: 'absolute',
    bottom: 2,
    width: '90%',
    backgroundColor: '#f2998d',
    alignItems: 'center',
    padding: 10,
    marginLeft: 20,
    borderRadius: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  viewCartText: {
    fontSize: 20,
    color: 'white',
    paddingRight: 20,
  },
});
