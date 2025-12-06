import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Convex imports:
import { useQuery } from 'convex/react'; // Convex React hook :contentReference[oaicite:1]{index=1}
import { api } from './convex/_generated/api'; // adjust path to your generated api

const { width, height } = Dimensions.get('window');

const CARD_WIDTH = 293;
const CARD_HEIGHT = 200;

export const TopPlacesCarousel = ({ stores }: { stores: any }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={stores}
      horizontal
      decelerationRate='fast'
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item._id} // Convex documents have _id
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: index === 0 ? 2 : -25,
              marginRight: index === stores.length - 1 ? -35 : 0,
            }}
            onPress={() => {
              navigation.navigate(
                item.type === 'restaurant'
                  ? 'RestaurantProfile'
                  : item.type === 'service'
                    ? 'ServiceProfile'
                    : 'StoreProfile',
                {
                  name: item.name,
                  coverImage: item.cover_image,
                  rating: item.rating,
                  ratingCount: item.rating_count,
                  profileImage: item.profile_image,
                  sections: item.section,
                  id: item._id,
                  address: item.address,
                  city: item.city,
                  state: item.state,
                  zip: item.zip_code,
                  // hasCartsActive: storeIds.includes(item._id),
                }
              );
            }}
          >
            <View style={[styles.card, styles.dark]}>
              <View style={styles.imageBox}>
                {item.cover_image ? (
                  <Image
                    source={{ uri: item.cover_image }}
                    style={styles.image}
                  />
                ) : (
                  <View style={[styles.image, { backgroundColor: '#ccc' }]} />
                )}
              </View>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.location}>
                  {item.is_online ? 'Online' : item.address}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10,
  },
  imageBox: {
    width: CARD_WIDTH - 50,
    height: CARD_HEIGHT - 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH - 50,
    height: CARD_HEIGHT - 50,
    resizeMode: 'cover',
  },
  titleBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 45,
    left: 7,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  location: {
    fontSize: 13,
    color: '#555',
  },
  dark: {
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default TopPlacesCarousel;
