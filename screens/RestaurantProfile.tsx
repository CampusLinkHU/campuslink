import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  PanResponder,
  findNodeHandle,
  StyleSheet,
} from 'react-native';
// import BusinessProfilePopUp from './BusinessProfilePopUp';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Dishrow } from '../Dishrow';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BusinessProfilePopUp } from '../BusinessProfilePopUp';

const RestaurantProfile = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  const sectionRefs = useRef([]);
  const scrollRef = useRef(null);

  const [isPopUpVisible, setIsPopUpVisible] = useState(false); // State to manage the visibility of the pop-up screen

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  const {
    name,
    coverImage,
    rating,
    ratingCount,
    distance,
    profileImage,
    sections,
    id,
    address,
    city,
    state,
    zip,
  } = route.params;

  const store = {
    name,
    coverImage,
    rating,
    ratingCount,
    distance,
    profileImage,
    sections,
    city,
    state,
    zip,
    id,
  };

  const sectionsObj = sections.sections;

  console.log('Sections Object:', sectionsObj);

  const scrollToFeature = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].measureLayout(
        findNodeHandle(scrollRef.current),
        (x, y) => {
          scrollRef.current.scrollTo({ y: y, animated: true });
        }
      );
    }
  };

  return (
    <SafeAreaView style={styles.businessProfileLayout}>
      <View>
        <View style={styles.businessTopView}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Feather name='chevron-left' size={33} color='black' />
          </TouchableOpacity>

          <ScrollView
            ref={scrollRef}
            horizontal={true} // Set horizontal scroll
            showsHorizontalScrollIndicator={false}
            style={styles.featureScrollView}
          >
            {/* {sectionsObj.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => scrollToFeature(index)}
              >
                <View style={styles.featureOval}>
                  <Text style={styles.featureName}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))} */}
          </ScrollView>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
          <Image
            source={{ url: coverImage }}
            style={{ width: '100%', height: 165 }}
          />
          <View style={styles.businessHeader}>
            <View style={styles.businessLogo}>
              <Image
                source={{
                  uri: profileImage,
                }}
                style={styles.image}
              />
            </View>
            <Text style={styles.businessName}>{name}</Text>

            <TouchableOpacity style={styles.businessInfo} onPress={togglePopUp}>
              <View style={styles.businessDetails}>
                <Ionicons name='star-sharp' size={15} color='black' />
                <Text>
                  {rating}({ratingCount})
                </Text>
                {distance && (
                  <>
                    <Text> • </Text>
                    <Text style={styles.businessDistance}>{distance} mi</Text>
                  </>
                )}

                <Feather name='chevron-right' size={16} color='grey' />
              </View>
            </TouchableOpacity>
            <BusinessProfilePopUp
              isVisible={isPopUpVisible}
              onClose={togglePopUp}
              name={name}
              address={address}
              city={city}
              state={state}
              zip={zip}
            />
          </View>

          <View style={styles.businessTabView}>
            {sectionsObj.map((item, sectionIndex) => (
              <View
                style={styles.businessTab}
                key={sectionIndex}
                ref={(ref) => (sectionRefs.current[sectionIndex] = ref)}
              >
                <Text style={styles.featuredName}>{item.name}</Text>
                {item.dishes.map((dish, dishIndex) => (
                  <Dishrow key={dishIndex} dish={dish} store={store} />
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export { RestaurantProfile };

const styles = StyleSheet.create({
  businessProfileLayout: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },

  businessTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%', // or a number based on your layout
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

  Favorite: {
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
    paddingTop: 12,
    marginBottom: '25%',
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
    // fontFamily not usually supported the same way, depends on your setup
  },

  cartIcon: {
    // changed class-name `cart-icon` to camelCase
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  viewCartText: {
    fontSize: 20,
    color: 'white',
    paddingRight: 20,
  },
});

export default styles;
