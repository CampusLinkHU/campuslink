import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SelectedItem from './SelectedItem';

const FeaturedCardService = ({ item }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleItemSelection = () => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.serviceItemBox}>
        <View style={styles.serviceItemContent}>
          <Text style={styles.serviceItem}>{item.name}</Text>
          <Text style={styles.servicePrices}>${item.price}</Text>
          <Text style={styles.serviceDesc}>{item.description}</Text>
        </View>

        <TouchableOpacity
          onPress={handleItemSelection}
          style={styles.bookButton}
        >
          <Text style={styles.bookText}>Book</Text>
        </TouchableOpacity>
      </View>

      {/* <SelectedItem
        isVisible={isModalVisible}
        item={selectedItem}
        onClose={handleCloseModal}
      /> */}
      <View style={styles.serviceDivider}></View>
    </>
  );
};

export { FeaturedCardService };

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
