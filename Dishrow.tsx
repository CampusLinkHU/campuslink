import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import { StyleSheet } from 'react-native';

// import { RestaurantSelectedItem } from './RestaurantSelected';

const Dishrow = ({ dish, store }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [showItemPopup, setShowItemPopup] = useState(false);

  const handleCloseModal = () => {
    setShowItemPopup(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.touchableOpacityParent}
        onPress={() => {
          setShowItemPopup(true);
        }}
      >
        <View style={styles.dishRowParent}>
          <View style={styles.nameContainer}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.price}>{dish.description}</Text>
            <Text style={styles.price}>
              <Currency quantity={dish.price} currency='USD' />
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: dish.image_url,
              }}
              style={styles.dishImage}
            />
          </View>
        </View>
      </TouchableOpacity>
      {/* <RestaurantSelectedItem
        isVisible={showItemPopup}
        item={dish}
        onClose={handleCloseModal}
        setShowItemPopup={setShowItemPopup}
        store={store}
        activeOverride={activeOverride}
      /> */}
    </>
  );
};

export { Dishrow };

const styles = StyleSheet.create({
  touchableOpacityParent: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16, // 1rem ~16px
    borderRadius: 12,
    marginRight: 14,
    marginBottom: 10,
  },

  dishRowParent: {
    flexDirection: 'row',
  },

  nameContainer: {
    flex: 1,
    paddingRight: 8, // 0.5rem ~8px
  },

  dishName: {
    fontSize: 14, // px-based
    marginBottom: 4, // 0.25rem ~4px
  },

  price: {
    color: '#9ca3af',
    marginTop: 8, // 0.5rem ~8px
  },

  dishImage: {
    height: 80, // 5rem ~80px
    width: 80,
    backgroundColor: '#d1d5db',
    padding: 16, // 1rem ~16px
    borderWidth: 1,
    borderColor: '#f3f3f4',
    borderRadius: 20,
  },

  businessEditSectionName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  editableOptions: {
    padding: 10,
    flexDirection: 'row',
  },

  editableOption: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 100, // a large radius to make it circular
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default styles;
