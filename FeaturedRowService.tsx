import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

import { service } from './service';
import { FeaturedCardService } from './FeaturedCardService';

//Handles each feature tab of all the rows
const FeaturedRowService = ({ featuredName }) => {
  return (
    <View>
      <Text>{featuredName}</Text>

      {service
        .filter((filteredItem) => filteredItem.feature === featuredName)
        .map((filteredItem, index) => (
          <FeaturedCardService item={filteredItem} />
        ))}
    </View>
  );
};

export { FeaturedRowService };
