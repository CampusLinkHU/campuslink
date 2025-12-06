import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
} from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const SelectedItem = ({ isVisible, item, onClose }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        {item && (
          <View style={styles.popUpContent}>
            <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
            {/* Change image for no images based on service, business, and stores */}
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemNameandPrice}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.itemFavorite}
              onPress={toggleFavorite}
            >
              <MaterialIcons
                name={isFavorite ? 'favorite' : 'favorite-outline'}
                size={15}
                color='#f2998d'
              />
              <Text style={styles.itemFavoriteWords}>Favorite(22)</Text>
            </TouchableOpacity>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default SelectedItem;

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
