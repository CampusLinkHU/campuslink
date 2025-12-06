import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { FeaturedCardStore } from './FeaturedCardStore';

//Handles each feature tab of all the rows
const FeaturedRowStore = ({
  featuredName,
  featuredAmount,
  items,
  store,
  //   activeOverride,
  activeItems,
}) => {
  return (
    <View>
      <View style={styles.featureSection}>
        <Text style={styles.featureName}>{featuredName}</Text>
        <TouchableOpacity style={styles.featureAmount}>
          {items.length < 1 && <Text>See all {items.length}</Text>}
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storeScroll}
      >
        {items.map((item, index) => (
          <FeaturedCardStore
            item={item}
            store={store}
            // itemCount={getCountById(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export { FeaturedRowStore };

export const styles = StyleSheet.create({
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
