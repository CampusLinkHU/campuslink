import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  PanResponder,
  StyleSheet,
} from 'react-native';
import { Entypo, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useStores } from '../useStores';
import TopPlacesCarousel from '../TopPlacesCarousel';
import { HomescreenHeader } from '../HomescreenHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavBar } from '../Navbar';

const UserHomeScreen = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  //   const carts = useCartsState();
  const [initalRender, setInitalRender] = useState(false);

  //   const params = route.params;

  //   const activeCarts = carts.length;

  //   useEffect(() => {
  //     if (params) {
  //       addCartStateGlobal({ carts: carts });
  //     }
  //   }, [activeCarts, params]);

  //   //  Kalyen
  //   useEffect(() => {
  //     if (!loggedUser) {
  //       navigation.navigate('Home');
  //     }
  //   }, [loggedUser]);

  const [location, setLocation] = useState(false); // For the pop screen to show up or not
  const [pickedAddress, setPickedAddress] = useState('Howard University'); // Current address displayed
  const [currentZip, setCurrentZip] = useState('');

  const pastLocations = {
    'Howard University': '2400 Sixth St NW, Washington DC 20001',
    'Vie Towers': '1615 Belcrest Rd, Hyattsvill MD 20782',
    '256 Highway St': 'New York, NY 11245',
    '154 Harvard Avenue': 'Boston, MA 02134',
  };

  useEffect(() => {
    if (pickedAddress && pastLocations[pickedAddress]) {
      const address = pastLocations[pickedAddress];
      const zipRegex = /\b\d{5}(?:-\d{4})?\b/;
      const match = address.match(zipRegex);
      if (match) {
        setCurrentZip(match[0]);
      } else {
        console.error('Could not find zip code for the picked address.');
      }
    }
  }, [pickedAddress]);

  const { featured, shops, restaurants, services } = useStores(currentZip);

  console.log(shops);

  return (
    <SafeAreaView style={styles.homeScreenLayout}>
      <View style={styles.homeAdjustment}>
        <HomescreenHeader currentZip={currentZip} parent={'home'} />
        {/* All Scroll Sliders */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scroll}>
            {/* Featured Scroll Sliders */}
            <View style={styles.slider}>
              <TouchableOpacity style={styles.title}>
                <Text style={styles.titleHeader}>Featured</Text>
                <Ionicons name='arrow-forward-sharp' size={19} color='black' />
              </TouchableOpacity>
              <TopPlacesCarousel stores={featured} />
              <View style={styles.divide} />
            </View>

            {/* Services Near You Scroll Sliders */}
            <View style={styles.slider}>
              <TouchableOpacity style={styles.title}>
                <Text style={styles.titleHeader}>Services Near You</Text>
                <Ionicons name='arrow-forward-sharp' size={19} color='black' />
              </TouchableOpacity>
              <TopPlacesCarousel stores={services} />
              <View style={styles.divide} />
            </View>

            {/* Restaurants Near You Scroll Sliders */}
            <View style={styles.slider}>
              <TouchableOpacity style={styles.title}>
                <Text style={styles.titleHeader}>Restaurants Near You</Text>
                <Ionicons name='arrow-forward-sharp' size={19} color='black' />
              </TouchableOpacity>
              <TopPlacesCarousel stores={restaurants} />
              <View style={styles.divide} />
            </View>

            {/* Shops Near You Scroll Sliders */}
            <View style={styles.slider}>
              <TouchableOpacity style={styles.title}>
                <Text style={styles.titleHeader}>Shops Near You</Text>
                <Ionicons name='arrow-forward-sharp' size={19} color='black' />
              </TouchableOpacity>
              <TopPlacesCarousel stores={shops} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export { UserHomeScreen };

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
