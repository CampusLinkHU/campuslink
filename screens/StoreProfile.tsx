import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import {
  Feather,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons';
// import { FeaturedRowStore } from './FeaturedRowStore';
import { useNavigation } from '@react-navigation/native';
// import BusinessProfilePopUp from './BusinessProfilePopUp';

import { SafeAreaView } from 'react-native-safe-area-context';
import { BusinessProfilePopUp } from '../BusinessProfilePopUp';
import { FeaturedRowStore } from '../FeaturedRowStore';

const StoreProfile = ({ route }: { route: any }) => {
  const {
    name,
    coverImage,
    address,
    rating,
    ratingCount,
    distance,
    profileImage,
    sections,
    id,
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

  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const [showBanner, setShowBanner] = useState(false);

  const toggleFavorite = ({ route }: { route: any }) => {
    setIsFavorite(!isFavorite);
  };

  const [isPopUpVisible, setIsPopUpVisible] = useState(false); // State to manage the visibility of the pop-up screen
  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  //   useEffect(() => {
  //     setBusiness(basketDisptach, store);
  //   }, []);

  const [ungroupedItems, setUngroupeItems] = useState([]);

  return (
    <SafeAreaView style={styles.storeProfileLayout}>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          //   style={styles.serviceScroll}
        >
          <ImageBackground
            source={{
              uri: coverImage,
            }}
            style={{ width: '100%', height: 185, ...styles.topView }}
          >
            <TouchableOpacity
              style={styles.leftIcon}
              onPress={() => {
                navigation.navigate('UserHome');
              }}
            >
              <Feather name='chevron-left' size={25} color='black' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.Favorite} onPress={toggleFavorite}>
              <MaterialIcons
                name={isFavorite ? 'favorite' : 'favorite-outline'}
                size={20}
                color={isFavorite ? '#f2998d' : 'black'}
              />
            </TouchableOpacity>
            {showBanner && (
              <View style={styles.banner}>
                <Text style={{ color: 'white', marginLeft: 5 }}>
                  Added to favorites
                </Text>
                <MaterialIcons
                  name='favorite-outline'
                  size={20}
                  color='white'
                />
              </View>
            )}
          </ImageBackground>

          <View style={styles.storeTopView}>
            <Text style={styles.storeName}>{store.name}</Text>
            <Text style={styles.businessType}>Shop</Text>
            <TouchableOpacity style={styles.storeInfo} onPress={togglePopUp}>
              <Ionicons name='star-sharp' size={15} color='black' />
              <Text>
                {store.rating} ({store.ratingCount})
              </Text>
              {distance && (
                <>
                  <Text> • </Text>
                  <Text>{distance} mi</Text>
                </>
              )}

              <Feather name='chevron-right' size={16} color='grey' />
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

          <View style={styles.searchSection}>
            <View style={styles.searchContainer}>
              <Ionicons
                name='search-outline'
                size={17}
                color='black'
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.textInput}
                placeholder='Search this store'
              />
            </View>
          </View>

          <View style={styles.businessTabViewSection}>
            {sectionsObj.map((item, sectionIndex) => (
              <View style={styles.businessTabSection} key={sectionIndex}>
                <FeaturedRowStore
                  featuredName={item.name}
                  featuredAmount={item.amount}
                  items={item.items}
                  store={store}
                  // activeOverride={setHasActiveCart}
                  activeItems={ungroupedItems}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export { StoreProfile };

const styles = StyleSheet.create({
  storeProfileLayout: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },

  serverProfileAdjustment: {},

  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    marginRight: '3%',
    marginLeft: '3%',
  },

  searchContainer: {
    width: '90%',
    height: 48.177,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 25,
    paddingLeft: 10,
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

  storeInfo: {
    flexDirection: 'row',
  },

  rating: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
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

  storeTopView: {
    marginTop: '5%',
    flexDirection: 'column',
    alignItems: 'center',
  },

  storeName: {
    color: '#191919',
    fontSize: 25,
    fontWeight: '600',
    marginBottom: '1%',
  },

  businessType: {
    color: '#f2998d',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 2,
  },

  reviewContent: {
    marginTop: '8%',
  },

  scrollViewContainer: {
    flexDirection: 'row',
  },

  itemContainer: {
    width: 150,
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  addButton: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    width: 26,
    height: 26,
    backgroundColor: '#f2998d',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2998d',
    borderRadius: 20,
    height: 26,
    width: 70,
    position: 'absolute',
    bottom: 0,
    right: -10,
  },

  numberAdded: {
    marginHorizontal: 5,
    color: '#fcfcfc',
    fontWeight: '700',
  },

  imageAdjust: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
    width: '60%',
  },

  itemImage: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },

  belowImage: {
    width: '80%',
    height: '50%',
    padding: 10,
  },

  itemTopContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  itemPrices: {
    fontWeight: '700',
    marginRight: 2,
  },

  itemName: {
    textAlign: 'center',
    marginTop: 5,
    color: '#383838',
  },

  allReviews: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  allReviewsText: {
    fontSize: 12,
    color: '#f2998d',
  },

  featureSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '3%',
    justifyContent: 'space-between',
  },

  featureName: {
    fontSize: 22,
    fontWeight: '700',
  },

  featureAmount: {
    fontSize: 13,
    fontWeight: '500',
    color: '#383838',
  },

  reviewBox: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'rgb(198,198,198)',
    width: 300,
    height: 120,
    overflow: 'hidden',
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
  },

  reviewUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dateContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },

  reviewDate: {
    color: 'rgb(140,140,140)',
    marginLeft: 'auto',
    fontSize: 12,
  },

  reviewName: {
    marginLeft: '2%',
    fontSize: 13,
  },

  starContainer: {
    flexDirection: 'row',
    marginTop: '2%',
  },

  reviewComment: {
    marginTop: '4%',
    fontWeight: '600',
  },

  businessTabView: {
    marginBottom: '10%',
  },

  businessTab: {
    top: '2%',
    marginLeft: '4%',
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginLeft: '3%',
    marginRight: '3%',
  },

  topButton: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },

  selectedButtonText: {
    color: '#f2998d',
  },

  topButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 6,
  },

  underline: {
    width: '100%',
    height: 2.5,
  },

  selectedUnderline: {
    backgroundColor: '#f2998d',
  },

  storeScroll: {
    marginLeft: -18,
    marginTop: '4%',
    marginBottom: '7%',
  },

  businessTabViewSection: {
    marginBottom: '25%',
    paddingTop: 12,
  },

  businessTabSection: {
    top: '3%',
    marginLeft: '4%',
    flexDirection: 'column',
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
