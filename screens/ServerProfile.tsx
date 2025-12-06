import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  findNodeHandle,
  ImageBackground,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import {
  Feather,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons';
import { features } from '../service';
import { useNavigation } from '@react-navigation/native';
import { Reviews } from '../serverReviews';
import { FeaturedRowService } from '../FeaturedRowService';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const ServerProfile = () => {
  const serverInfo = [
    {
      id: '1',
      name: 'Federico',
      address: '2612 Georgia Ave NW',
      image:
        'https://d2zdpiztbgorvt.cloudfront.net/us/images/152418/inspiration_154837168471.jpeg?size=1170x1170',
      rating: '5.0(191)',
      about:
        'DC born and a barber for the past 15 years! The Howard community has always been home',
      moreInfo: 'No walk-ins of Fridays and Saturdays',
      number: '(272) 345-7854',
      Monday: 'Closed',
      Tuesday: '11:00 AM - 5:30 PM',
      Wednesday: '11:00 AM - 5:30 PM',
      Thursday: '11:00 AM - 5:30 PM',
      Friday: '11:00 AM - 3:00 PM',
      Saturday: '11:00 AM - 3:00 PM',
      Sunday: 'Closed',
    },
  ];

  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const sectionRefs = useRef([]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const scrollRef = useRef(null);

  const [selectedOption, setSelectedOption] = useState('Service');

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <FontAwesome key={i} name='star' size={14} color='#f2998d' />
        );
      } else {
        stars.push(
          <FontAwesome key={i} name='star-o' size={14} color='black' />
        );
      }
    }
    return stars;
  };

  return (
    <SafeAreaView style={styles.serverProfileLayout}>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          //   style={styles.serviceScroll}
        >
          <ImageBackground
            source={{
              uri: 'https://d2zdpiztbgorvt.cloudfront.net/us/images/152418/inspiration_154837168471.jpeg?size=1170x1170',
            }}
            style={{ width: '100%', height: 185, ...styles.topView }}
          >
            <TouchableOpacity
              style={styles.leftIcon}
              onPress={() => {
                navigation.navigate('ServiceProfile');
              }}
            >
              <Feather name='chevron-left' size={25} color='black' />
            </TouchableOpacity>

            {serverInfo.map((server) => (
              <Text style={styles.rating}>★{server.rating}</Text>
            ))}
          </ImageBackground>

          {serverInfo.map((server) => (
            <View style={styles.serverTopView}>
              <Text style={styles.serverName}>
                Best Cuts BarberShop- {server.name}
              </Text>
              <Text style={styles.serverAddress}>{server.address}</Text>
            </View>
          ))}
          <View style={styles.reviewContent}>
            <ScrollView
              ref={scrollRef}
              horizontal={true} // Set horizontal scroll
              showsHorizontalScrollIndicator={false}
              style={styles.serverScrollView}
            >
              {Reviews.slice(0, 3).map((review, index) => (
                <View
                  key={index}
                  style={[styles.reviewBox, index === 0 && { marginLeft: 10 }]}
                >
                  <View style={styles.reviewUser}>
                    <FontAwesome name='user-circle-o' size={18} color='black' />
                    <Text style={styles.reviewName}>{review.name}</Text>
                    <View style={styles.dateContainer}>
                      <Text style={styles.reviewDate}>{review.date}</Text>
                    </View>
                  </View>
                  <View style={styles.starContainer}>
                    {renderStars(review.rating)}
                  </View>
                  <Text style={styles.reviewComment}>
                    {review.comment.length > 100
                      ? `${review.comment.slice(0, 100)}...`
                      : review.comment}
                  </Text>
                </View>
              ))}
              <TouchableOpacity
                style={styles.allReviews}
                onPress={() => {
                  navigation.navigate('Review');
                }}
              >
                <Text style={styles.allReviewsText}>All Reviews</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={styles.topContainer}>
            <TouchableOpacity
              style={styles.topButton}
              onPress={() => handleToggle('Service')}
            >
              <Text
                style={[
                  styles.topButtonText,
                  selectedOption === 'Service' && styles.selectedButtonText,
                ]}
              >
                Services
              </Text>
              {selectedOption === 'Service' && (
                <View style={[styles.underline, styles.selectedUnderline]} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.topButton}
              onPress={() => handleToggle('Details')}
            >
              <Text
                style={[
                  styles.topButtonText,
                  selectedOption === 'Details' && styles.selectedButtonText,
                ]}
              >
                Details
              </Text>
              {selectedOption === 'Details' && (
                <View style={[styles.underline, styles.selectedUnderline]} />
              )}
            </TouchableOpacity>
          </View>

          {selectedOption === 'Service' && (
            <View style={styles.businessTabView}>
              {features.map((item, index) => (
                <View
                  style={styles.businessTab}
                  key={index}
                  ref={(ref) => (sectionRefs.current[index] = ref)}
                >
                  <FeaturedRowService featuredName={item} />
                </View>
              ))}
            </View>
          )}
          {selectedOption === 'Details' && (
            <View>
              {serverInfo.map((server) => (
                <View style={styles.detailView}>
                  <Text style={styles.detailHeader}>About:</Text>
                  <Text>{server.about}</Text>
                  <View style={styles.detailDivider}></View>

                  <Text style={styles.detailHeader}>More Info:</Text>
                  <Text>{server.moreInfo}</Text>
                  <View style={styles.detailDivider}></View>

                  <Text style={styles.detailHeader}>Number:</Text>
                  <Text>{server.number}</Text>
                  <View style={styles.detailDivider}></View>

                  <View style={styles.detailHourBox}>
                    <Text style={styles.detailDays}>Monday:</Text>
                    <Text style={styles.detailHours}>{server.Monday}</Text>
                  </View>

                  <View style={styles.detailHourBox}>
                    <Text style={styles.detailDays}>Tuesday:</Text>
                    <Text style={styles.detailHours}>{server.Tuesday}</Text>
                  </View>

                  <View style={styles.detailHourBox}>
                    <Text style={styles.detailDays}>Wednesday:</Text>
                    <Text style={styles.detailHours}>{server.Wednesday}</Text>
                  </View>

                  <View style={styles.detailHourBox}>
                    <Text style={styles.detailDays}>Thursday:</Text>
                    <Text style={styles.detailHours}>{server.Thursday}</Text>
                  </View>

                  <View style={styles.detailHourBox}>
                    <Text style={styles.detailDays}>Friday:</Text>
                    <Text style={styles.detailHours}>{server.Friday}</Text>
                  </View>

                  <View style={styles.detailHourBox}>
                    <Text style={styles.detailDays}>Saturday:</Text>
                    <Text style={styles.detailHours}>{server.Saturday}</Text>
                  </View>

                  <View style={styles.detailHourBox}>
                    <Text style={styles.detailDays}>Sunday:</Text>
                    <Text style={styles.detailHours}>{server.Sunday}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export { ServerProfile };

{
  /* <TouchableOpacity style={styles.Favorite} onPress={toggleFavorite}>
              <MaterialIcons
                name={isFavorite ? "favorite" : "favorite-outline"}
                size={20}
                color={isFavorite ? "#f2998d" : "black"}
              />
            </TouchableOpacity>
            {showBanner && (
              <View style={styles.banner}>
                <Text style={{ color: "white", marginLeft: 5 }}>
                  Added to favorites
                </Text>
                <MaterialIcons
                  name="favorite-outline"
                  size={20}
                  color="white"
                />
              </View>
            )} */
}

export const styles = StyleSheet.create({
  serverProfileLayout: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },

  serverProfileAdjustment: {},

  serviceTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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

  rating: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
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

  serverTopView: {
    marginTop: '5%',
    marginLeft: '3%',
  },

  serverName: {
    color: '#191919',
    fontSize: 21,
    fontWeight: '500',
  },

  serverAddress: {
    color: '#959595',
    fontSize: 14,
    fontWeight: '400',
  },

  reviewContent: {
    marginTop: '8%',
  },

  serverScrollView: {
    flexDirection: 'row',
  },

  allReviews: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  allReviewsText: {
    fontSize: 12,
    color: '#f2998d',
  },

  reviewBox: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'rgb(198,198,198)',
    width: 300,
    height: 120,
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
    top: '3%',
    marginLeft: '4%',
    flexDirection: 'column',
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

  detailView: {
    marginTop: '5%',
    marginLeft: '3%',
    marginBottom: '10%',
  },

  detailTab: {
    marginLeft: '4%',
    flexDirection: 'column',
  },

  detailHeader: {
    fontWeight: '700',
    marginBottom: '4%',
    marginTop: '2%',
    fontSize: 14,
  },

  detailHourBox: {
    flexDirection: 'row',
    marginTop: '6%',
  },

  detailDays: {
    fontWeight: '500',
  },

  detailHours: {
    marginLeft: 'auto',
    marginRight: '5%',
  },

  detailDivider: {
    height: 1,
    backgroundColor: '#e4e4e4',
    marginVertical: 10,
  },

  tabName: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: '3%',
  },

  serviceItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  serviceItemContent: {
    flexDirection: 'column',
    flex: 1,
  },

  serviceItem: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 5,
  },

  servicePrices: {
    marginBottom: 5,
  },

  serviceDesc: {
    marginBottom: 5,
  },

  serviceDivider: {
    height: 1,
    backgroundColor: '#e4e4e4',
    marginTop: 5,
    marginBottom: 30,
  },

  bookButton: {
    backgroundColor: '#f2998d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5%',
  },

  bookText: {
    color: 'white',
    fontWeight: '500',
  },
});
